webpackJsonp([4],{583:function(e,t,a){"use strict";function LiveEdit(e){var t=e.dispatch,n=e.live,r=e.app;console.log("LiveProps: ",n);var l={breadcrumbs:[{name:"首页"},{name:"页面管理"},{name:"直播管理"},{name:"编辑"}]},m={uploadToken:r.uploadToken,selectChannels:r.selectChannels,selectColumns:r.selectColumns,selectLabels:r.selectLabels,formId:n.formId,formChannel:n.formChannel,formColumn:n.formColumn,formLabel:n.formLabel,formAreas:n.formAreas,formHomes:n.formHomes,formTypes:n.formTypes,formSteps:n.formSteps,formTitle:n.formEditTitle,formMainImage:n.formEditMainImage,formCommunityName:n.formEditCommunityName,formAnnouncer:n.formEditAnnouncer,formDesignImage:n.formEditDesignImage,formImages:n.formEditImages,formSort:n.formEditSort,formStep:n.formEditStep,formArea:n.formEditArea,formHome:n.formEditHome,formType:n.formEditType,formIsDone:n.formEditIsDone,formIsHomepage:n.formEditIsHomepage,formVideoView:n.formEditVideoView,formVideoIntroduction:n.formEditVideoIntroduction,formVideoUrl:n.formEditVideoUrl,buttonOkLoading:n.formEditButtonSubmitLoading,buttonCancelLoading:n.buttonResetLoading,onOk:function(e){a.i(s.a)(function(){return t(a.i(p.a)(e))})},onCancel:function(e){a.i(s.a)(function(){return t(a.i(p.b)(e))})},changeSelectChannels:function(e){t(a.i(d.a)(e,!0))},changeSelectColumns:function(e){t(a.i(d.b)(e))},changeFormType:function(e){t(a.i(d.b)(e))},changeFormStep:function(e){t(a.i(p.c)(e))}};return i.a.createElement("div",null,i.a.createElement(c.a,l),i.a.createElement(o.a,{className:"y-m-b-40"},i.a.createElement(u.a,m)))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(599),r=(a.n(n),a(598)),o=a.n(r),l=a(0),i=a.n(l),m=a(135),s=a(242),c=(a(12),a(594)),u=a(639),p=a(140),d=a(49);t.default=a.i(m.a)(function(e){return{app:e.app,live:e.live}})(LiveEdit)},594:function(e,t,a){"use strict";function newBreadcrumb(e){var t=e.breadcrumbs;return i.a.createElement(o.a,{separator:">",style:{marginBottom:"20px"}},t.map(function(e,t){return i.a.createElement(o.a.Item,{key:t},s.a.isStringNotEmpty(e.href)?i.a.createElement(m.Link,{to:e.href},e.name):e.name)}))}var n=a(605),r=(a.n(n),a(604)),o=a.n(r),l=a(0),i=a.n(l),m=a(73),s=a(12);t.a=newBreadcrumb},620:function(e,t,a){"use strict";var n=a(244),r=(a.n(n),a(243)),o=a.n(r),l=a(610),i=(a.n(l),a(609)),m=a.n(i),s=a(134),c=(a.n(s),a(43)),u=a.n(c),p=a(14),d=(a.n(p),a(13)),f=a.n(d),g=a(240),h=a.n(g),E=a(29),v=a.n(E),y=a(241),I=a.n(y),b=a(31),F=a.n(b),V=a(30),C=a.n(V),k=a(0),S=a.n(k),D=a(35),L=(a(140),a(12)),w=function(e){function PicturesWall(e){v()(this,PicturesWall);var t=F()(this,(PicturesWall.__proto__||h()(PicturesWall)).call(this,e));return t.state={previewVisible:!1,previewImage:"",fileList:[]},t.handleCancel=function(){return t.setState({previewVisible:!1})},t.handlePreview=function(e){t.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},t.handleChange=function(e){var a=e.fileList,n=[];t.setState({fileList:a});for(var r=0;r<e.fileList.length;r++)if("done"===e.fileList[r].status&&L.a.isStringNotEmpty(e.fileList[r].url))n.push(e.fileList[r].url);else if("done"===e.fileList[r].status&&e.fileList[r].response){var o=e.fileList[r].response.data;n.push(o.imgPath+o.message)}console.log("urls",e,n),t.props.onChange(n)},t.beforeUpload=t.beforeUpload.bind(t),t.handleCancel=t.handleCancel.bind(t),t.handleChange=t.handleChange.bind(t),t.handlePreview=t.handlePreview.bind(t),t}return C()(PicturesWall,e),I()(PicturesWall,[{key:"setFileList",value:function(e){this.setState({fileList:Array.isArray(e)?e.map(function(e,t){return{uid:-t-1,status:"done",url:e}}):[]})}},{key:"componentDidMount",value:function(){console.log("PicturesWallComponentDidMount",this.props),this.setFileList(this.props.value)}},{key:"componentWillReceiveProps",value:function(e){console.log("PicturesWallComponentWillReceiveProps",this.props,e)}},{key:"componentWillUnmount",value:function(){}},{key:"beforeUpload",value:function(e,t){console.log("beforeUpload",e,t);var a="image/jpeg"===e.type,n="image/png"===e.type,r="image/jpg"===e.type,o=(new Date).getTime(),l=e.type.split("/");return r||a||n?e.size/1024/1024<2?void this.setState({name:"jiazhuanghoutai/"+(this.props.id?this.props.id:"")+"-"+o+"."+l[1],files:e}):(f.a.error("请上传小于 2MB 的图片!"),!1):(f.a.error("只能上传.jpeg,.jpg,.png图片"),!1)}},{key:"render",value:function(){var e=this.state,t=e.previewVisible,a=e.previewImage,n=e.fileList,r=this.props.max?this.props.max:1,l=!!n&&n.length>=r,i=S.a.createElement("div",null,S.a.createElement(u.a,{type:"upload"}),S.a.createElement("div",{className:"ant-upload-text"},"点击上传"));return S.a.createElement("div",{className:"clearfix",style:{minHeight:"104px"}},S.a.createElement(m.a,{action:"http://up.qiniu.com/",data:{token:D.a.getState().app.uploadToken,key:this.state.name,file:this.state.files},listType:"picture-card",fileList:n,beforeUpload:this.beforeUpload,onPreview:this.handlePreview,onChange:this.handleChange,onRemove:this.handleRemove,valuePropName:"fileList",accept:"image/jpeg,image/png,image/jpg,image/gif"},l?null:i),S.a.createElement(o.a,{visible:t,footer:null,onCancel:this.handleCancel},S.a.createElement("img",{alt:"example",style:{width:"100%"},src:a})))}}]),PicturesWall}(S.a.Component);t.a=w},621:function(e,t,a){var n=a(644);"string"==typeof n&&(n=[[e.i,n,""]]);a(42)(n,{});n.locals&&(e.exports=n.locals)},625:function(e,t,a){"use strict";var n=a(133),r=(a.n(n),a(90)),o=a.n(r),l=a(632),i=(a.n(l),a(627)),m=a.n(i),s=a(134),c=(a.n(s),a(43)),u=a.n(c),p=a(593),d=(a.n(p),a(597)),f=a.n(d),g=a(596),h=(a.n(g),a(595)),E=a.n(h),v=a(1),y=a.n(v),I=a(240),b=a.n(I),F=a(29),V=a.n(F),C=a(241),k=a.n(C),S=a(31),D=a.n(S),L=a(30),w=a.n(L),x=a(0),P=a.n(x),W=(a(12),a(620)),_=a(621),T=a.n(_),U=1,A={labelCol:{span:6},wrapperCol:{span:16},style:{maxWidth:"800px"}},q=function(e){function FormStep(e){V()(this,FormStep);var t=D()(this,(FormStep.__proto__||b()(FormStep)).call(this,e));return t.handleAddImage=function(){U++;var e=t.props.form.getFieldValue(t.props.step+"Keys"),a=e.concat(U);console.log(t.props.step,e,a),t.props.setFieldsValue(a)},t.handleRemoveImage=function(e){var a=t.props.form.getFieldValue(t.props.step+"Keys");t.props.setFieldsValue(a.filter(function(t){return t!==e}))},t.handleChangeImage=function(e){return e},t.handleAddImage=t.handleAddImage.bind(t),t.handleRemoveImage=t.handleRemoveImage.bind(t),t.handleChangeImage=t.handleChangeImage.bind(t),t.state={},e.form.getFieldDecorator(t.props.step+"Keys",{initialValue:[]}),console.log("FormStep",e.images),t}return w()(FormStep,e),k()(FormStep,[{key:"setImages",value:function(e){e.images&&e.images.ext.forEach(function(t,a){U++;var n=e.form.getFieldValue(e.step+"Keys"),r=n.concat(U);e.setFieldsValue(r),e.form.getFieldDecorator(e.step+"ImageIntroduction"+U,{initialValue:t.intro}),e.form.getFieldDecorator(e.step+"ImageUpload"+U,{initialValue:t.image?[t.image]:[]}),console.warn("keys\n",n,"\nvalue:",t,t.intro,"\nother:",U,r)})}},{key:"componentDidMount",value:function(){console.log("FormStepComponentDidMount",this.props),this.setImages(this.props)}},{key:"componentWillUnmount",value:function(){console.log("PicturesWallComponentWillUnmount"),this.props.setFieldsValue([])}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldValue(this.props.step+"Keys"),a=t.map(function(t,a){return P.a.createElement("div",{key:a},P.a.createElement(E.a.Item,y()({label:"直播图片"},A,{key:t,required:!1}),e.props.form.getFieldDecorator(e.props.step+"ImageUpload"+t,{getValueFromEvent:e.handleChangeImage})(P.a.createElement(W.a,{onChange:e.handleChangeImage}))),P.a.createElement(E.a.Item,{label:"图片说明",labelCol:{span:6},wrapperCol:{span:16}},e.props.form.getFieldDecorator(e.props.step+"ImageIntroduction"+t,{})(P.a.createElement(f.a,{type:"text",placeholder:"请输入文字说明",style:{width:"80%",marginRight:8}})),P.a.createElement(u.a,{className:T.a.delete,type:"minus-circle-o",onClick:function(){return e.handleRemoveImage(t)}})))});return P.a.createElement("div",{style:this.props.style},P.a.createElement(E.a.Item,y()({label:this.props.title},A),this.props.form.getFieldDecorator(this.props.step,{initialValue:!0,rules:[{required:!0,message:"请选择类型!"}]})(P.a.createElement(m.a,{defaultChecked:!0,disabled:!0}))),P.a.createElement(E.a.Item,y()({label:"文字说明"},A),this.props.form.getFieldDecorator(this.props.step+"Introduction",{initialValue:this.props.images?this.props.images.intro:void 0})(P.a.createElement(f.a,{type:"textarea",placeholder:"请输入文字说明"}))),a,P.a.createElement(E.a.Item,{wrapperCol:{span:16,offset:6}},P.a.createElement(o.a,{type:"dashed",onClick:this.handleAddImage,style:{width:"60%"}},P.a.createElement(u.a,{type:"plus"})," 新增图片")),P.a.createElement("hr",{className:T.a.hr}))}}]),FormStep}(P.a.Component);t.a=q},639:function(e,t,a){"use strict";function newForm(e){var t=e.form,a=(e.children,e.buttonOkLoading),n=e.buttonCancelLoading,r=(e.uploadToken,e.selectChannels),l=(e.selectColumns,e.selectLabels),i=(e.selectedChannel,e.selectedColumn,e.selectedLabels,e.onCancel),s=e.onOk,c=(e.changeSelectChannels,e.changeSelectColumns,e.changeFormType),p=e.changeFormStep,d=e.formChannel,g=e.formColumn,h=e.formLabel,v=e.formId,y=e.formTitle,b=e.formMainImage,F=e.formCommunityName,C=e.formAnnouncer,S=e.formDesignImage,w=e.formSort,_=e.formArea,T=e.formAreas,U=e.formHome,A=e.formHomes,q=e.formStep,K=(e.formSteps,e.formType),N=e.formTypes,H=e.formImages,M=e.formIsHomepage,O=e.formIsDone,R=e.formVideoView,j=e.formVideoIntroduction,B=e.formVideoUrl;t.getFieldDecorator("formColumns",{initialValue:[]}),t.getFieldDecorator("formLabels",{initialValue:[]});var z={labelCol:{span:6},wrapperCol:{span:16},style:{maxWidth:"800px"}},X={formItemLayout:z,form:t,formIsDone:O,formVideoUrl:B,formVideoView:R,formVideoIntroduction:j},G={form:t,formImages:H,formStep:q,changeFormStep:p},J=function(e){for(var t=[],a=1;a<6;a++)e["step"+a]&&t.push({type_id:a,live_img_id:function(e){return H[e]?H[e].live_img_id:""}(a-1),intro:e["step"+a+"Introduction"],ext:function(e,t){return e[t+"Keys"].map(function(a,n){return{intro:e[t+"ImageIntroduction"+a],image:function(){var n=e[t+"ImageUpload"+a];return n&&/\//g.test(n)?n[0]:""}()}})}(e,"step"+a)});return t},Z=function(e){return t.validateFields(function(a,n){e.preventDefault(),console.warn("handleOk: ",k()({},n,{formImages:J(n),formMainImage:t.getFieldValue("formMainImage")[0]})),a||s(k()({},n,{formImages:J(n),formMainImage:t.getFieldValue("formMainImage")[0]}))})},Q=function(){t.resetFields(),i(k()({},t.getFieldsValue(),{formType:void 0}))},Y=function(e){var a=r.findIndex(function(t,a){return t.channel_id===e});t.resetFields(["formColumn","formLabel","formColumns","formLabels"]),t.setFieldsValue({formColumns:r[a].columns})},$=function(e){},ee=function(e){e.preventDefault(),c(e.target.value)},te=function(e){return e};return D.a.createElement(I.a,{layout:"horizontal",className:x.a.form},D.a.createElement(m.a,null,D.a.createElement(u.a,{span:10},D.a.createElement(I.a.Item,k()({},z,{label:"直播类型"}),t.getFieldDecorator("formType",{initialValue:K,rules:[{required:!0,message:"请选择直播类型!"}]})(D.a.createElement(V.a.Group,{onChange:ee},N.map(function(e,t){return D.a.createElement(V.a,{key:t,value:String(e.id),disabled:!!v},e.name)})))),D.a.createElement(I.a.Item,k()({label:"所属频道"},z),t.getFieldDecorator("formChannel",{initialValue:d,rules:[{required:!0,message:"请选择所属频道!"}]})(D.a.createElement(E.a,{placeholder:"请选择一个频道",onChange:Y},r.map(function(e,t){return D.a.createElement(E.a.Option,{key:t,value:String(e.channel_id)},e.channel_name)})))),D.a.createElement(I.a.Item,k()({label:"所属栏目"},z),t.getFieldDecorator("formColumn",{initialValue:g})(D.a.createElement(E.a,{placeholder:"请选择所属栏目",onChange:$},t.getFieldValue("formColumns").map(function(e,t){return D.a.createElement(E.a.Option,{key:t,value:String(e.column_id)},e.column_name)})))),D.a.createElement(I.a.Item,k()({label:"关联标签"},z),t.getFieldDecorator("formLabel",{initialValue:h})(D.a.createElement(E.a,{mode:"multiple",placeholder:"请选择关联标签"},l.map(function(e,t){return D.a.createElement(E.a.Option,{key:t,value:String(e.id)},e.name)})))),D.a.createElement(I.a.Item,k()({label:"户型大小"},z),t.getFieldDecorator("formArea",{initialValue:_,rules:[{required:!0,message:"请选择户型大小!"}]})(D.a.createElement(E.a,{placeholder:"请选择户型大小"},T.map(function(e,t){return D.a.createElement(E.a.Option,{key:t,value:String(e.id)},e.name)})))),D.a.createElement(I.a.Item,k()({label:"房屋户型"},z),t.getFieldDecorator("formHome",{initialValue:U,rules:[{required:!0,message:"请选择房屋户型!"}]})(D.a.createElement(E.a,{placeholder:"请先选择房屋户型"},A.map(function(e,t){return D.a.createElement(E.a.Option,{key:t,value:String(e.id)},e.name)})))),D.a.createElement(I.a.Item,k()({},z,{label:"推荐到首页"}),t.getFieldDecorator("formIsHomepage",{initialValue:M,rules:[{required:!0,message:"请选择是否推荐到首页!"}]})(D.a.createElement(V.a.Group,null,D.a.createElement(V.a,{value:"1"},"是"),D.a.createElement(V.a,{value:"2"},"否")))),D.a.createElement(I.a.Item,k()({label:"设计图"},z),t.getFieldDecorator("formDesignImage",{initialValue:S,getValueFromEvent:te,rules:[{required:!0,message:"请上传设计图!"}]})(D.a.createElement(L.a,{onChange:te,max:20}))),D.a.createElement(I.a.Item,k()({label:"直播主图"},z),t.getFieldDecorator("formMainImage",{initialValue:b,getValueFromEvent:te})(D.a.createElement(L.a,{onChange:te}))),D.a.createElement(I.a.Item,k()({label:"直播标题"},z),t.getFieldDecorator("formTitle",{initialValue:y,rules:[{required:!0,message:"请选择直播标题!"}]})(D.a.createElement(f.a,{type:"text",placeholder:"请输入直播标题"}))),D.a.createElement(I.a.Item,k()({label:"小区名称"},z),t.getFieldDecorator("formCommunityName",{initialValue:F})(D.a.createElement(f.a,{type:"text",placeholder:"请输入小区名称"}))),D.a.createElement(I.a.Item,k()({label:"发布者"},z),t.getFieldDecorator("formAnnouncer",{initialValue:C,rules:[{required:!0,message:"请输入发布者!"}]})(D.a.createElement(f.a,{type:"text",placeholder:"请输入发布者"}))),D.a.createElement(I.a.Item,k()({label:"排序"},z),t.getFieldDecorator("formSort",{initialValue:w,rules:[{required:!0,message:"请输入排序!"}]})(D.a.createElement(f.a,{type:"text",placeholder:"请输入排序"})))),"1"===K?D.a.createElement(P.a,X):null,"2"===K?D.a.createElement(W.a,G):null),D.a.createElement(I.a.Item,{wrapperCol:{span:21,offset:3}},D.a.createElement(o.a,{type:"primary",onClick:Z,loading:a},"提交"),D.a.createElement(o.a,{className:"y-m-l-10",onClick:Q,loading:n},"取消")))}var n=a(133),r=(a.n(n),a(90)),o=a.n(r),l=a(654),i=(a.n(l),a(635)),m=a.n(i),s=a(628),c=(a.n(s),a(624)),u=a.n(c),p=a(593),d=(a.n(p),a(597)),f=a.n(d),g=a(601),h=(a.n(g),a(600)),E=a.n(h),v=a(596),y=(a.n(v),a(595)),I=a.n(y),b=a(607),F=(a.n(b),a(606)),V=a.n(F),C=a(1),k=a.n(C),S=a(0),D=a.n(S),L=(a(12),a(620)),w=a(621),x=a.n(w),P=(a(625),a(641)),W=a(640);newForm=I.a.create({})(newForm),t.a=newForm},640:function(e,t,a){"use strict";function FormImage(e){var t=e.form,a=e.formStep,n=e.formImages,r=e.changeFormStep;console.log("FormImage",n);var l={form:t,step:"step1",title:"水电改造",images:n[0],style:{display:a>=1?"block":"none"},setFieldsValue:function(e){t.setFieldsValue({step1Keys:e})}},i={form:t,step:"step2",title:"厨卫墙砖",images:n[1],style:{display:a>=2?"block":"none"},setFieldsValue:function(e){t.setFieldsValue({step2Keys:e})}},s={form:t,step:"step3",title:"木工/油漆工",images:n[2],style:{display:a>=3?"block":"none"},setFieldsValue:function(e){t.setFieldsValue({step3Keys:e})}},u={form:t,step:"step4",title:"安装环节",images:n[3],style:{display:a>=4?"block":"none"},setFieldsValue:function(e){t.setFieldsValue({step4Keys:e})}},f={form:t,step:"step5",title:"验房环节",images:n[4],style:{display:5===a?"block":"none"},setFieldsValue:function(e){t.setFieldsValue({step5Keys:e})}},g=function(e){r(e?e/20:0)};return c.a.createElement(o.a,{span:14},c.a.createElement(m.a,{step:20,defaultValue:20*a,className:p.a.slider,onChange:g,marks:{0:"未开工",20:"水电改造",40:"厨卫墙砖",60:"木工/油漆工",80:"安装环节",100:"验房环节"}}),c.a.createElement(d.a,l),c.a.createElement(d.a,i),c.a.createElement(d.a,s),c.a.createElement(d.a,u),c.a.createElement(d.a,f))}var n=a(628),r=(a.n(n),a(624)),o=a.n(r),l=a(656),i=(a.n(l),a(655)),m=a.n(i),s=a(0),c=a.n(s),u=(a(12),a(620),a(621)),p=a.n(u),d=a(625);t.a=FormImage},641:function(e,t,a){"use strict";function FormVideo(e){var t=e.form,a=e.formItemLayout,n=e.formIsDone,r=e.formVideoUrl,l=e.formVideoView,i=e.formVideoIntroduction;return v.a.createElement(o.a,{span:14},v.a.createElement(u.a.Item,d()({label:"是否完工"},a),t.getFieldDecorator("formIsDone",{initialValue:n,rules:[{required:!0,message:"请选择是否完工!"}]})(v.a.createElement(h.a.Group,null,v.a.createElement(h.a,{value:"1"},"是"),v.a.createElement(h.a,{value:"2"},"否")))),v.a.createElement(u.a.Item,d()({label:"直播地址"},a),t.getFieldDecorator("formVideoUrl",{initialValue:r,rules:[{required:!0,message:"请选择直播地址!"}]})(v.a.createElement(m.a,{type:"text",placeholder:"请输入直播地址"}))),v.a.createElement(u.a.Item,d()({label:"浏览量"},a),t.getFieldDecorator("formVideoView",{initialValue:l,rules:[{required:!0,message:"请输入浏览量!"}]})(v.a.createElement(m.a,{type:"text",placeholder:"请输入浏览量"}))),v.a.createElement(u.a.Item,d()({label:"直播说明"},a),t.getFieldDecorator("formVideoIntroduction",{initialValue:i})(v.a.createElement(m.a,{type:"textarea",placeholder:"请输入直播说明"}))))}var n=a(628),r=(a.n(n),a(624)),o=a.n(r),l=a(593),i=(a.n(l),a(597)),m=a.n(i),s=a(596),c=(a.n(s),a(595)),u=a.n(c),p=a(1),d=a.n(p),f=a(607),g=(a.n(f),a(606)),h=a.n(g),E=a(0),v=a.n(E),y=(a(12),a(620),a(621));a.n(y),a(625);t.a=FormVideo},644:function(e,t,a){t=e.exports=a(41)(!1),t.push([e.i,".slider-sHb_Ba{margin-bottom:40px!important;margin-right:10%!important;margin-left:15%!important}.hr-16jbu4{margin-left:16%;margin-right:8%;margin-bottom:20px;border:1px solid #ccc}.delete-Kk8WXv{cursor:pointer;position:relative;top:4px;font-size:24px;color:#999;-webkit-transition:all .3s;transition:all .3s}.delete-Kk8WXv:hover{color:#777}.delete-Kk8WXv[disabled]{cursor:not-allowed;opacity:.5}",""]),t.locals={form:"form-1a9Z-v",slider:"slider-sHb_Ba",hr:"hr-16jbu4",delete:"delete-Kk8WXv"}}});