webpackJsonp([2],{591:function(e,n,t){"use strict";function Question(e){var n=e.dispatch,a=e.question,r=e.app,o={breadcrumbs:[{name:"首页"},{name:"问答管理"}]},l={selectChannels:r.selectChannels,selectColumns:r.selectColumns,searchchannelid:a.searchchannelid,searchcolumnid:a.searchcolumnid,searchChannel:a.searchChannel,buttonResetLoading:a.buttonResetLoading,buttonSearchLoading:a.buttonSearchLoading,onSearch:function(e){t.i(E.a)(function(){return n(t.i(w.f)(e))})},onReset:function(e){t.i(E.a)(function(){return n(t.i(w.g)(e))})},changeSelectChannels:function(e){n(t.i(C.d)(e)),n(t.i(w.h)(e))}},u={loading:a.buttonAddLoading,onClick:function(){x.b.push("/question/add")}},d={dataSource:a.tableData,loading:a.tableLoading,onConfirmDelete:function(e){t.i(E.a)(function(){return n(t.i(w.i)(e))})},toggleStatus:function(e,a){t.i(E.a)(function(){return n(t.i(w.j)(e,a))})},onReply:function(e){n(t.i(w.k)(e))},onEdit:function(e){x.b.push("/question/edit"),n(t.i(w.l)(e))}},p={className:"y-card-pagination",showQuickJumper:!0,showTotal:function(e,n){return"共搜索到 "+a.tableTotals+" 条数据"},defaultCurrent:1,current:a.tableCurrent,defaultPageSize:10,total:a.tableTotals,onChange:function(e){n(t.i(w.m)({tableCurrent:e}))}},h={title:"回复",visible:a.modalAddVisible,confirmLoading:a.modalAddConfirmLoading,id:a.id,onOk:function(e,a){var r=this;return m()(s.a.mark(function _callee(){return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.i(E.a)(function(){return n(t.i(w.n)(e))});case 2:a();case 3:case"end":return r.stop()}},_callee,r)}))()},onCancel:function(){n(t.i(w.o)())}};return f.a.createElement("div",null,f.a.createElement(g.a,o),f.a.createElement(y.a,l),f.a.createElement(i.a,{className:"y-m-b-40"},f.a.createElement(k.a,u),f.a.createElement(b.a,d),f.a.createElement(c.a,p)),f.a.createElement(v.a,h))}Object.defineProperty(n,"__esModule",{value:!0});var a=t(599),r=(t.n(a),t(598)),i=t.n(r),o=t(623),l=(t.n(o),t(622)),c=t.n(l),u=t(8),s=t.n(u),d=t(7),m=t.n(d),p=t(0),f=t.n(p),h=t(135),E=t(242),g=(t(12),t(594)),b=t(767),v=t(765),y=t(766),C=t(49),k=t(768),x=t(32),w=t(138);n.default=t.i(h.a)(function(e){return{question:e.question,app:e.app}})(Question)},594:function(e,n,t){"use strict";function newBreadcrumb(e){var n=e.breadcrumbs;return l.a.createElement(i.a,{separator:">",style:{marginBottom:"20px"}},n.map(function(e,n){return l.a.createElement(i.a.Item,{key:n},u.a.isStringNotEmpty(e.href)?l.a.createElement(c.Link,{to:e.href},e.name):e.name)}))}var a=t(605),r=(t.n(a),t(604)),i=t.n(r),o=t(0),l=t.n(o),c=t(73),u=t(12);n.a=newBreadcrumb},602:function(e,n,t){"use strict";var a=t(12);t.d(n,"a",function(){return r}),t.d(n,"c",function(){return i}),t.d(n,"d",function(){return o}),t.d(n,"b",function(){return l});var r=function(e,n){return a.a.isStringEmpty(e)?"--":e},i=function(e,n){return a.a.isStringEmpty(e)?"--":1===Number(n.status)?"显示":"隐藏"},o=function(e,n){return a.a.isStringEmpty(e)?"--":1===Number(n.type)?"频道":"链接"},l=function(e,n){return a.a.isStringEmpty(e)?"--":1===Number(n.type)?"视频":"图文"}},613:function(e,n,t){"use strict";var a=t(240),r=t.n(a),i=t(29),o=t.n(i),l=t(241),c=t.n(l),u=t(31),s=t.n(u),d=t(30),m=t.n(d),p=t(0),f=t.n(p),h=t(139),E=t(615),g=(t.n(E),t(4)),b=t(626),v=(t.n(b),void 0),y=function(e){function Editor(e){o()(this,Editor);var n=s()(this,(Editor.__proto__||r()(Editor)).call(this,e));return n.state={},n}return m()(Editor,e),c()(Editor,[{key:"componentDidMount",value:function(){var e=this,n=this.props.id;v=new wangEditor(n),v.config.menus=wangEditor.config.menus.map(function(e,n){return"video"===e?null:"location"===e?null:"insertcode"===e?null:e}),v.config.uploadImgUrl=t.i(g.b)()+"/property/image/upload",v.config.withCredentials=!1,v.create();var a=v;v.$txt.html(this.props.html),v.onchange=function(){var t=a.$txt.html();e.props.handleEditor(n,t)}}},{key:"componentWillReceiveProps",value:function(e){var n=this,t=this.props.id,a=v;v.$txt.html(e.html),v.onchange=function(){var e=a.$txt.html();n.props.handleEditor(t,e)}}},{key:"render",value:function(){var e={width:"100%",height:"200px"};return f.a.createElement("div",null,f.a.createElement("div",{id:this.props.id,style:e,contentEditable:"true"}))}}]),Editor}(f.a.Component);n.a=t.i(h.connect)(function(e){return{editor:e.editor}})(y)},614:function(e,n,t){n=e.exports=t(41)(!1),n.push([e.i,"",""])},615:function(e,n,t){var a=t(614);"string"==typeof a&&(a=[[e.i,a,""]]);t(42)(a,{});a.locals&&(e.exports=a.locals)},765:function(e,n,t){"use strict";var a=t(244),r=(t.n(a),t(243)),i=t.n(r),o=t(612),l=(t.n(o),t(611)),c=t.n(l),u=t(596),s=(t.n(u),t(595)),d=t.n(s),m=t(1),p=t.n(m),f=t(14),h=(t.n(f),t(13)),E=t.n(h),g=t(240),b=t.n(g),v=t(29),y=t.n(v),C=t(241),k=t.n(C),x=t(31),w=t.n(x),_=t(30),S=t.n(_),N=t(0),I=t.n(N),L=(t(138),t(613)),T="",F=function(e){function newModal(e){return y()(this,newModal),w()(this,(newModal.__proto__||b()(newModal)).call(this,e))}return S()(newModal,e),k()(newModal,[{key:"handleSubmit",value:function(){var e=this;this.props.form.validateFields(function(n,t){if(!n){var a=e.props.id,r="";if(T=T.replace(new RegExp("<p><br></p>"),""),r=T,""==T)return E.a.error("公告内容不能为空"),!1;e.props.onOk({id:a,answer:r},e.props.form.resetFields)}})}},{key:"handleCancel",value:function(){this.props.onCancel(),this.props.form.resetFields()}},{key:"handleEditor",value:function(e,n){T=n}},{key:"render",value:function(){var e={labelCol:{span:6},wrapperCol:{span:18}};return I.a.createElement(i.a,{title:this.props.title,visible:this.props.visible,confirmLoading:this.props.confirmLoading,okText:"确定",cancelText:"取消",onOk:this.handleSubmit.bind(this),onCancel:this.handleCancel.bind(this)},I.a.createElement(c.a,{tip:"获取数据中...",spinning:!!this.props.modalLoading&&this.props.modalLoading},I.a.createElement(d.a,null,I.a.createElement(d.a.Item,p()({},e,{label:"问答回复",hasFeedback:!0,required:!0}),this.props.form.getFieldDecorator("editor1")(I.a.createElement(L.a,{html:this.props.answer,handleEditor:this.handleEditor}))))))}}]),newModal}(I.a.Component);F=d.a.create({})(F),n.a=F},766:function(e,n,t){"use strict";function Search(e){var n=e.form,t=e.onSearch,a=e.onReset,r=(e.adBlowOptions,e.buttonSearchLoading),o=e.buttonResetLoading,l=(e.reset,e.selectChannels),u=e.changeSelectChannels,s=e.selectColumns,m=e.searchChannel,f={labelCol:{span:9},wrapperCol:{span:15}},h=function(e){return n.validateFields(function(n,a){e.preventDefault(),n||(console.log("Received values of form: ",a),t(a))})},g=function(){n.resetFields(),a({serial_no:"",is_reply:"",channel_id:"",column_id:""})},b=function(e){n.resetFields(["selectedColumn"]),u(e)};return C.a.createElement(i.a,{className:"y-m-b-20"},C.a.createElement(d.a,{layout:"inline",className:x.a.form},C.a.createElement(d.a.Item,p()({label:"问答编号"},f),n.getFieldDecorator("serial_no")(C.a.createElement(E.a,{type:"text",placeholder:"请输入日志编号"}))),C.a.createElement(d.a.Item,p()({label:"所属频道"},f),n.getFieldDecorator("channel_id",{initialValue:m})(C.a.createElement(v.a,{placeholder:"请选择",onChange:b},l.map(function(e,n){return C.a.createElement(v.a.Option,{key:n,value:String(e.channel_id)},e.channel_name)})))),C.a.createElement(d.a.Item,p()({label:"所属栏目"},f),n.getFieldDecorator("column_id")(C.a.createElement(v.a,{placeholder:"请先选择栏目"},s.map(function(e,n){return C.a.createElement(v.a.Option,{key:n,value:String(e.column_id)},e.column_name)})))),C.a.createElement(d.a.Item,p()({label:"问答状态"},f,{style:{width:"240px"}}),n.getFieldDecorator("is_reply")(C.a.createElement(v.a,{placeholder:"请选择"},C.a.createElement(v.a.Option,{value:""},"全部"),C.a.createElement(v.a.Option,{value:"1"},"已回复"),C.a.createElement(v.a.Option,{value:"2"},"未回复")))),C.a.createElement(d.a.Item,{wrapperCol:{span:15,offset:9}},C.a.createElement(c.a,{type:"primary",onClick:h,loading:r},"搜索"),C.a.createElement(c.a,{className:"y-m-l-10",onClick:g,loading:o},"重置"))))}var a=t(599),r=(t.n(a),t(598)),i=t.n(r),o=t(133),l=(t.n(o),t(90)),c=t.n(l),u=t(596),s=(t.n(u),t(595)),d=t.n(s),m=t(1),p=t.n(m),f=t(593),h=(t.n(f),t(597)),E=t.n(h),g=t(601),b=(t.n(g),t(600)),v=t.n(b),y=t(0),C=t.n(y),k=(t(12),t(821)),x=t.n(k);v.a.Option;Search=d.a.create({})(Search),n.a=Search},767:function(e,n,t){"use strict";function NewTable(e){var n=e.loading,t=e.dataSource,a=e.onConfirmDelete,r=e.toggleStatus,o=e.onEdit,l=e.onReply,u=[{key:"1",title:"问答编号",dataIndex:"serial_no",render:d.a},{key:"8",title:"发布者",dataIndex:"question_author",render:d.a},{key:"3",title:"所属频道",dataIndex:"channels",render:function(e,n){return s.a.createElement("span",null,null!=e?e.name:"")}},{key:"4",title:"所属栏目",dataIndex:"columns",render:function(e,n){return s.a.createElement("span",null,null!=e?e.name:"")}},{key:"9",title:"问答内容",dataIndex:"intro",render:function(e,n){return s.a.createElement("div",{style:{maxWidth:"300px"}},e)}},{key:"5",title:"排序",dataIndex:"sort_order",render:d.a},{key:"6",title:"状态",dataIndex:"is_reply",render:function(e,n){return s.a.createElement("span",null,"1"==e?"已回复":"未回复")}},{key:"7",title:"操作",dataIndex:"option",render:function(e,n){return s.a.createElement("span",null,s.a.createElement(c.a,{title:"确定要"+(1===Number(n.status)?"屏蔽":"显示")+"吗?",onConfirm:function(){return r(n.id,1===Number(n.status)?2:1)},onCancel:!1,okText:"确定",cancelText:"取消"},s.a.createElement("a",{className:"table-operating"},1===Number(n.status)?"屏蔽":"显示")),s.a.createElement("a",{onClick:function(){return o(n.id)},className:"table-operating"},"编辑"),s.a.createElement(c.a,{title:"确定要删除吗?",onConfirm:function(){return a(n.id)},onCancel:!1,okText:"确定",cancelText:"取消"},s.a.createElement("a",{className:"table-operating"},"删除")),"2"==n.is_reply?s.a.createElement("a",{onClick:function(){return l(n.id)},className:"table-operating"},"回复"):"")}}];return s.a.createElement(i.a,{className:"y-table",rowKey:function(e){return e.id},columns:u,bordered:!0,loading:n,dataSource:t,pagination:!1})}var a=t(617),r=(t.n(a),t(616)),i=t.n(r),o=t(619),l=(t.n(o),t(618)),c=t.n(l),u=t(0),s=t.n(u),d=t(602);n.a=NewTable},768:function(e,n,t){"use strict";function TableHeader(e){var n=e.loading,t=e.onClick;return l.a.createElement(i.a,{type:"primary",loading:n,onClick:t,style:{marginBottom:"20px"}},"新增问答")}var a=t(133),r=(t.n(a),t(90)),i=t.n(r),o=t(0),l=t.n(o);n.a=TableHeader},806:function(e,n,t){n=e.exports=t(41)(!1),n.push([e.i,".form-9zwcZc .ant-form-item{width:240px;margin-bottom:20px}",""]),n.locals={form:"form-9zwcZc"}},821:function(e,n,t){var a=t(806);"string"==typeof a&&(a=[[e.i,a,""]]);t(42)(a,{});a.locals&&(e.exports=a.locals)}});