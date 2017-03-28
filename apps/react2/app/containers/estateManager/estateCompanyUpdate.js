'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/estateManager/estateCompanyUpdate';
import {
    Breadcrumb,
    Form,
    Input,
    Button,
    Select,
    message,
    Popconfirm,
    Radio,
} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class estateCompanyUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitLoading: false,
      disabled: true,
      newID:'',
    }
    var ID = this.props.location.query.id;
    this.props.dispatch(actions.companyInfo({
      property_id: ID
    }));
    this.props.dispatch(actions.companyParent({
      status: 1
    }));
  }

  handleSubmit(e) {
    this.props.form.validateFields((err, values) => {
      if (!!err) {
				return;
			}
      const {info} = this.props.estateCompanyUpdate;
      this.props.dispatch(actions.companyUpdate({
        alipay_account: values.alipay_account,
        link_man: values.link_man,
        link_phone: values.link_phone,
        login_name: values.login_name,
        login_phone: values.login_phone,
        parent_id: values.parent_id,
        property_name: values.property_name,
        status: values.status,
        email: values.email,
        property_id: info.id,
        user_id: info.user_id,
      },()=>{
        message.success('保存成功！');
        setTimeout(() => {
          location.href = "#/estateCompanyManager";
        },1000)
      }));
    });
  }

  handleBack(e) {
    history.go(-1);
  }

  render() {
    const { getFieldDecorator,initialValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 6 },
    };
    const {info,parentList} = this.props.estateCompanyUpdate;
    return (
      <div className="page-content">
        <Breadcrumb separator="/">
          <Breadcrumb.Item><a href="#/serveManager">物业管理</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="#/estateCompanyManager">物业公司管理</a></Breadcrumb.Item>
          <Breadcrumb.Item>编辑物业公司</Breadcrumb.Item>
        </Breadcrumb>
        <section className="section">
        <Form>
          <FormItem label="物业公司名称" {...formItemLayout}>
            {getFieldDecorator('property_name',{rules:[{type: "string",pattern: /^[\u2E80-\u9FFF]+$/,required:true,message:'请输入20以内文字'}],initialValue:info.property_name})(<Input maxLength={20} placeholder="请输入物业公司名称" />)}
          </FormItem>
          <FormItem label="父级公司" {...formItemLayout}>
            {getFieldDecorator('parent_id',{rules:[{required:true,message:'请选择父级公司'}],initialValue:info.parent_id})(
              <Select placeholder="请选择父级公司"  notFoundContent="没有数据">
                <Option key={-1} value="0">无</Option>
                {parentList.map((value,index)=>{return <Option key={index} value={value.id}>{value. property_name}</Option>})}
              </Select>
            )}
          </FormItem>
          <FormItem label="联系人" {...formItemLayout}>
            {getFieldDecorator('link_man',{rules:[{type: "string",pattern: /^[\u2E80-\u9FFF]+$/,required:true,message:'请输入20以内文字'}],initialValue:info.link_man})(<Input maxLength={20} placeholder="请输入联系人"/>)}
          </FormItem>
          <FormItem label="联系电话" {...formItemLayout}>
            {getFieldDecorator('link_phone',{rules:[{type: "string",pattern: /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/,required:true,message:'请输入固定电话号或者手机号'}],initialValue:info.link_phone})(<Input placeholder="请输入联系电话"/>)}
          </FormItem>
          <FormItem label="邮箱地址" {...formItemLayout}>
            {getFieldDecorator('email',{rules:[{type:"email",message:'请输入50位以内，必须存在@.com格式，不能输入文字、特殊符号'}],initialValue:info.email})(<Input maxLength={50} placeholder="请输入邮箱地址"/>)}
          </FormItem>
          <FormItem label="支付宝账号" {...formItemLayout}>
            {getFieldDecorator('alipay_account',{rules:[{type: "string",pattern: /^((\w)+(\.\w+)*@(\w)+((\.\w+)+)|(1\d{10}))$/,required:true,message:'请输入正确支付宝账号'}],initialValue:info.alipay_account})(<Input placeholder="请输入支付宝账号"/>)}
          </FormItem>
          <FormItem label="登录账号" {...formItemLayout}>
            {getFieldDecorator('login_name',{rules:[{type: "string",pattern: /^[0-9a-zA-Z.@]{4,30}$/,required:true,message:'请输入4-30位字符'}],initialValue:info.login_name})(<Input maxLength={30} placeholder="请输入登录账号"/>)}
          </FormItem>
          <FormItem label="关联手机号码" {...formItemLayout}>
            {getFieldDecorator('login_phone',{rules:[{required:true,message:'请输入关联手机号码'}, {min: 11,max: 11,message: '请输入正确手机号'}],initialValue:info.login_phone})(<Input placeholder="请输入关联手机号码"/>)}
          </FormItem>
          <FormItem label="状态" {...formItemLayout}>
            {getFieldDecorator('status',{rules:[{required:true,message:'请选择状态'}],initialValue:info.status})(
              <RadioGroup>
                <Radio value="1">启用</Radio>
                <Radio value="2">禁用</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem wrapperCol={{ span: 12, offset: 2 }}>
              <Button type="ghost" onClick={this.handleBack.bind(this)} className="mr1">返回</Button>
              <Popconfirm title="确定要修改吗？" onConfirm={this.handleSubmit.bind(this)}>
                <Button type="primary" className="ant-btn-lg">提交</Button>
              </Popconfirm>
          </FormItem>
        </Form>
        </section>
       </div>
    )
  }
}

estateCompanyUpdate = Form.create()(estateCompanyUpdate);
export default connect(state => {
  return {
    estateCompanyUpdate: state.estateCompanyUpdate
  }
})(estateCompanyUpdate);