webpackJsonp([10],{575:function(e,t,a){"use strict";function AdPlacement(e){var t=e.dispatch,n=e.adPlacement,r={breadcrumbs:[{name:"首页"},{name:"广告位管理"}]},o={buttonResetLoading:n.buttonResetLoading,buttonSearchLoading:n.buttonSearchLoading,onSearch:function(e){a.i(h.a)(function(){return t(a.i(w.a)(e))})},onReset:function(e){a.i(h.a)(function(){return t(a.i(w.b)(e))})}},l={loading:n.buttonAddLoading,onClick:function(){t(a.i(w.c)())}},u={dataSource:n.tableData,loading:n.tableLoading,onConfirmDelete:function(e){a.i(h.a)(function(){return t(a.i(w.d)(e))})},toggleStatus:function(e,n){a.i(h.a)(function(){return t(a.i(w.e)(e,n))})},onEdit:function(e){t(a.i(w.f)(e))}},m={className:"y-card-pagination",showQuickJumper:!0,showTotal:function(e,t){return"共搜索到 "+n.tableTotals+" 条数据"},defaultCurrent:1,current:n.tableCurrent,defaultPageSize:10,total:n.tableTotals,onChange:function(e){t(a.i(w.g)({tableCurrent:e}))}},p={title:"新增广告位",visible:n.modalAddVisible,confirmLoading:n.modalAddConfirmLoading,positionType:n.positionType,status:n.status,uploadToken:n.uploadToken,isUpload:n.isUpload,onOk:function(e,n){var r=this;return d()(c.a.mark(function _callee(){return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.i(h.a)(function(){return t(a.i(w.h)(e))});case 2:n();case 3:case"end":return r.stop()}},_callee,r)}))()},onCancel:function(){t(a.i(w.i)())},uploadImg:function(e){t(a.i(w.j)(e))}},g={title:"编辑广告位",visible:n.modalEditVisible,modalLoading:n.modalLoading,confirmLoading:n.modalEditConfirmLoading,ad_size:n.ad_size,img_url:n.img_url,name:n.name,type:n.type,status:n.status,positionType:n.positionType,uploadToken:n.uploadToken,isUpload:n.isUpload,id:n.id,onOk:function(e,n){var r=this;return d()(c.a.mark(function _callee2(){return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.i(h.a)(function(){return t(a.i(w.k)(e))});case 2:n();case 3:case"end":return r.stop()}},_callee2,r)}))()},onCancel:function(){t(a.i(w.i)())},uploadImg:function(e){t(a.i(w.j)(e))}};return f.a.createElement("div",null,f.a.createElement(b.a,r),f.a.createElement(v.a,o),f.a.createElement(i.a,{className:"y-m-b-40"},f.a.createElement(k.a,l),f.a.createElement(y.a,u),f.a.createElement(s.a,m)),f.a.createElement(E.a,p),f.a.createElement(E.a,g))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(600),r=(a.n(n),a(599)),i=a.n(r),o=a(624),l=(a.n(o),a(623)),s=a.n(l),u=a(8),c=a.n(u),m=a(7),d=a.n(m),p=a(0),f=a.n(p),g=a(135),h=a(242),b=(a(12),a(595)),y=a(733),E=a(731),v=a(732),k=a(734),w=a(143);t.default=a.i(g.a)(function(e){return{adPlacement:e.adPlacement}})(AdPlacement)},595:function(e,t,a){"use strict";function newBreadcrumb(e){var t=e.breadcrumbs;return l.a.createElement(i.a,{separator:">",style:{marginBottom:"20px"}},t.map(function(e,t){return l.a.createElement(i.a.Item,{key:t},u.a.isStringNotEmpty(e.href)?l.a.createElement(s.Link,{to:e.href},e.name):e.name)}))}var n=a(606),r=(a.n(n),a(605)),i=a.n(r),o=a(0),l=a.n(o),s=a(73),u=a(12);t.a=newBreadcrumb},603:function(e,t,a){"use strict";var n=a(12);a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return l});var r=function(e,t){return n.a.isStringEmpty(e)?"--":e},i=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.status)?"显示":"隐藏"},o=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.type)?"频道":"链接"},l=function(e,t){return n.a.isStringEmpty(e)?"--":1===Number(t.type)?"视频":"图文"}},731:function(e,t,a){"use strict";var n=a(244),r=(a.n(n),a(243)),i=a.n(r),o=a(613),l=(a.n(o),a(612)),s=a.n(l),u=a(608),c=(a.n(u),a(607)),m=a.n(c),d=a(611),p=(a.n(d),a(610)),f=a.n(p),g=a(602),h=(a.n(g),a(601)),b=a.n(h),y=a(597),E=(a.n(y),a(596)),v=a.n(E),k=a(1),w=a.n(k),C=a(594),_=(a.n(C),a(598)),x=a.n(_),S=a(134),I=(a.n(S),a(43)),N=a.n(I),T=a(17),L=(a.n(T),a(16)),F=a.n(L),D=a(240),U=a.n(D),P=a(29),z=a.n(P),O=a(241),M=a.n(O),V=a(31),j=a.n(V),q=a(30),A=a.n(q),B=a(0),R=a.n(B),H=(a(143),function(e){function newModal(e){z()(this,newModal);var t=j()(this,(newModal.__proto__||U()(newModal)).call(this,e));return t.state={name:"",file:"",previewImage:"",previewVisible:"",isUpload:!0},t.props.img_url&&(t.state.isUpload=!1),console.log(t.props.img_url,111),t}return A()(newModal,e),M()(newModal,[{key:"componentDidMount",value:function(){console.log("isUpload",this.state.isUpload)}},{key:"handleSubmit",value:function(){var e=this;this.props.form.validateFields(function(t,a){if(!t){var n="";n=void 0!=a.img_url[0].response?a.img_url[0].response.data.imgPath+a.img_url[0].response.data.message:a.img_url[0].url;var r=e.props.id;[][0]=a.communitys,e.props.onOk({id:r,ad_size:a.ad_size,type:a.type,img_url:n,name:a.name,status:a.status},e.props.form.resetFields)}})}},{key:"handleCancel",value:function(){this.props.onCancel(),this.props.form.resetFields(),this.setState({isUpload:!0})}},{key:"handlePreview",value:function(e){this.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}},{key:"beforeUpload",value:function(e){var t="image/jpeg"===e.type,a="image/png"===e.type;if("image/jpg"!==e.type&&!t&&!a)return F.a.error("只能上传.jpeg,.jpg,.png图片"),!1;if(!(e.size/1024/1024<2))return F.a.error("请上传小于 2MB 的图片!"),!1;var n=(new Date).getTime(),r=e.type.split("/");this.setState({name:"jiazhuanghoutai/"+n+"."+r[1],files:e})}},{key:"normFile",value:function(e){return Array.isArray(e)?e:e&&e.fileList}},{key:"handImgChange",value:function(e){e.fileList.length?this.props.uploadImg(!1):this.props.uploadImg(!0),"error"==e.file.status&&F.a.error("很遗憾...这次上传失败了。")}},{key:"render",value:function(){var e={labelCol:{span:6},wrapperCol:{span:18}},t=R.a.createElement("div",null,R.a.createElement(N.a,{type:"plus"}),R.a.createElement("div",{className:"ant-upload-text"},"选择图片"));return R.a.createElement(i.a,{title:this.props.title,visible:this.props.visible,confirmLoading:this.props.confirmLoading,okText:"确定",cancelText:"取消",onOk:this.handleSubmit.bind(this),onCancel:this.handleCancel.bind(this)},R.a.createElement(s.a,{tip:"获取数据中...",spinning:!!this.props.modalLoading&&this.props.modalLoading},R.a.createElement(v.a,null,R.a.createElement(v.a.Item,w()({label:"广告位名称"},e),this.props.form.getFieldDecorator("name",{initialValue:this.props.name,rules:[{required:!0,message:"请输入广告位名称!"}]})(R.a.createElement(x.a,{placeholder:"请输入广告位名称"}))),R.a.createElement(v.a.Item,w()({label:"广告类型"},e),this.props.form.getFieldDecorator("type",{initialValue:this.props.type,rules:[{required:!0,message:"广告类型!"}]})(R.a.createElement(b.a,{placeholder:"请选择广告类型"},this.props.positionType.map(function(e,t){return R.a.createElement(b.a.Option,{key:t,value:e.key.toString()},e.value)})))),R.a.createElement(v.a.Item,w()({label:"广告位示例"},e),this.props.form.getFieldDecorator("img_url",{initialValue:this.props.img_url,rules:[{required:!0,message:"请上传广告位示例图片!"}],valuePropName:"fileList",normalize:this.normFile,onChange:this.handImgChange.bind(this)})(R.a.createElement(f.a,{action:"http://up.qiniu.com/",data:{token:this.props.uploadToken,key:this.state.name,file:this.state.files},onPreview:this.handlePreview.bind(this),listType:"picture-card",beforeUpload:this.beforeUpload.bind(this)},this.props.isUpload?t:null))),R.a.createElement(v.a.Item,w()({label:"广告位大小"},e),this.props.form.getFieldDecorator("ad_size",{initialValue:this.props.ad_size,rules:[{required:!0,message:"请输入广告位大小!"}]})(R.a.createElement(x.a,{placeholder:"请输入广告位大小"}))),R.a.createElement(v.a.Item,w()({},e,{label:"广告状态",required:!0}),this.props.form.getFieldDecorator("status",{rules:[{required:!0,message:"请选择状态"}],initialValue:this.props.status})(R.a.createElement(m.a.Group,null,R.a.createElement(m.a,{value:"1"},"显示"),R.a.createElement(m.a,{value:"2"},"隐藏")))))))}}]),newModal}(R.a.Component));H=v.a.create({})(H),t.a=H},732:function(e,t,a){"use strict";function Search(e){var t=e.form,a=e.onSearch,n=e.onReset,r=(e.adBlowOptions,e.buttonSearchLoading),o=e.buttonResetLoading,l=(e.reset,{labelCol:{span:9},wrapperCol:{span:15}}),u=function(e){return t.validateFields(function(t,n){e.preventDefault(),t||(console.log("Received values of form: ",n),a(n))})},c=function(){t.resetFields(),n({adNum:"",adName:"",adStatus:"",tableCurrent:1,tablePageSize:10})};return k.a.createElement(i.a,{className:"y-m-b-20"},k.a.createElement(m.a,{layout:"inline",className:C.a.form},k.a.createElement(m.a.Item,p()({label:"广告位编号"},l),t.getFieldDecorator("adNum")(k.a.createElement(h.a,{type:"text",placeholder:"请输入广告编号"}))),k.a.createElement(m.a.Item,p()({label:"广告位名称"},l),t.getFieldDecorator("adName")(k.a.createElement(h.a,{type:"text",placeholder:"请输入广告名称"}))),k.a.createElement(m.a.Item,p()({label:"广告位类型"},l,{style:{width:"240px"}}),t.getFieldDecorator("adStatus")(k.a.createElement(E.a,{placeholder:"请选择"},k.a.createElement(E.a.Option,{value:""},"全部"),k.a.createElement(E.a.Option,{value:"1"},"显示"),k.a.createElement(E.a.Option,{value:"2"},"隐藏")))),k.a.createElement(m.a.Item,{wrapperCol:{span:15,offset:9}},k.a.createElement(s.a,{type:"primary",onClick:u,loading:r},"搜索"),k.a.createElement(s.a,{className:"y-m-l-10",onClick:c,loading:o},"重置"))))}var n=a(600),r=(a.n(n),a(599)),i=a.n(r),o=a(133),l=(a.n(o),a(90)),s=a.n(l),u=a(597),c=(a.n(u),a(596)),m=a.n(c),d=a(1),p=a.n(d),f=a(594),g=(a.n(f),a(598)),h=a.n(g),b=a(602),y=(a.n(b),a(601)),E=a.n(y),v=a(0),k=a.n(v),w=(a(12),a(812)),C=a.n(w);E.a.Option;Search=m.a.create({})(Search),t.a=Search},733:function(e,t,a){"use strict";function NewTable(e){var t=e.loading,a=e.dataSource,n=e.onConfirmDelete,r=e.toggleStatus,o=e.onEdit,l=[{key:"1",title:"广告位编号",dataIndex:"serial_no",render:m.a},{key:"2",title:"广告位名称",dataIndex:"name",render:m.a},{key:"3",title:"广告位类型",dataIndex:"type_name",render:m.a},{key:"4",title:"广告位大小",dataIndex:"ad_size",render:m.a},{key:"5",title:"图示",dataIndex:"img_url",render:function(e,t){return c.a.createElement("img",{style:{width:"30px",height:"30px"},src:e})}},{key:"6",title:"广告位状态",dataIndex:"status",render:function(e,t){return c.a.createElement("span",null,"1"==e?"显示":"隐藏")}},{key:"7",title:"操作",dataIndex:"option",render:function(e,t){return c.a.createElement("span",null,c.a.createElement(s.a,{title:"确定要"+(1===Number(t.status)?"隐藏":"显示")+"吗?",onConfirm:function(){return r(t.id,1===Number(t.status)?2:1)},onCancel:!1,okText:"确定",cancelText:"取消"},c.a.createElement("a",{className:"table-operating"},1===Number(t.status)?"隐藏":"显示")),c.a.createElement("a",{onClick:function(){return o(t.id)},className:"table-operating"},"编辑"),c.a.createElement(s.a,{title:"确定要删除吗?",onConfirm:function(){return n(t.id)},onCancel:!1,okText:"确定",cancelText:"取消"}))}}];return c.a.createElement(i.a,{className:"y-table",rowKey:function(e){return e.id},columns:l,bordered:!0,loading:t,dataSource:a,pagination:!1})}var n=a(618),r=(a.n(n),a(617)),i=a.n(r),o=a(620),l=(a.n(o),a(619)),s=a.n(l),u=a(0),c=a.n(u),m=a(603);t.a=NewTable},734:function(e,t,a){"use strict";function TableHeader(e){var t=e.loading,a=e.onClick;return l.a.createElement(i.a,{type:"primary",loading:t,onClick:a,style:{marginBottom:"20px"}},"新增广告位")}var n=a(133),r=(a.n(n),a(90)),i=a.n(r),o=a(0),l=a.n(o);t.a=TableHeader},796:function(e,t,a){t=e.exports=a(41)(!1),t.push([e.i,".form-1o5N_2 .ant-form-item{width:240px;margin-bottom:20px}",""]),t.locals={form:"form-1o5N_2"}},812:function(e,t,a){var n=a(796);"string"==typeof n&&(n=[[e.i,n,""]]);a(42)(n,{});n.locals&&(e.exports=n.locals)}});