(this.webpackJsonpvnote=this.webpackJsonpvnote||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(9),i=n.n(o),r=n(4),l=n(2),u=n(20),d="/api/";console.log("MODE: /api/");var j=function(e,t){var n=Object(c.useState)(""),a=Object(l.a)(n,2),s=a[0],o=a[1],i=Object(u.a)("refreshKey")(""),j=Object(l.a)(i,2),b=j[0],h=j[1],f=Object(c.useState)(null),m=Object(l.a)(f,2),O=m[0],p=m[1],g=Object(c.useState)(null),v=Object(l.a)(g,2),x=v[0],S=v[1],y=[200,201,202,203,204],N=Object(c.useCallback)((function(e){var n,a=t.body,c=t.method,s=t.path;if(console.log("executing GO:"+e),"logout"===c)return n=t.callback,h(""),o(""),p(null),S(null),void n(null);var i=Object(r.a)({method:c,headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}},null!==a&&{body:JSON.stringify(a)});fetch(d+s,i).then((function(e){y.includes(e.status)?(S(!0),e.json().then((function(e){t.callback(e)}))):S(!1)}))}),[t]);Object(c.useEffect)((function(){if(!1===x){console.log("access key is false");var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:b})};fetch("/api/token/refresh/",e).then((function(e){y.includes(e.status)?e.json().then((function(e){p(!0),o(e.access)})):p(!1)}))}}),[x]),Object(c.useEffect)((function(){console.log("responding to change in access key:"+s),N(s)}),[s,t]),Object(c.useEffect)((function(){if(!1===O){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.username,password:e.password})};fetch("/api/token/",t).then((function(t){console.log(t.status),y.includes(t.status)?(console.log("login works"),t.json().then((function(e){o(e.access),h(e.refresh)}))):(S(null),p(null),e.fail(),console.log("total fail"))}))}}),[O])},b=n(5),h=n.n(b),f=n(22),m=n(23),O=n(25),p=n(24),g=(n(42),n(43),n(44),n(45),n(46),n(3)),v=n.n(g),x=n(6),S=n.n(x);n(16),n(51),n(53),n(54),n(18),n(17),n(55),n(19);var y=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(f.a)(this,n),(c=t.call(this,e)).codeInput=s.a.createRef(),c.editor=void 0,c.insert=function(e){if(c.editor){var t=c.editor.getDoc(),n=t.getCursor();t.replaceRange(e,n)}},c.flush=function(e){c.editor&&(c.editor.getDoc().setValue(e),c.setState({currentSig:S()(e),lastSig:S()(e)}),c.setState({writeStatus:"All Systems Go!"}),console.log("flushed data"))},c.insert_image=function(e,t,n){if(c.editor){var a=c.editor.getDoc(),s=document.createElement("img");return s.src=t,console.log(n),n&&(s.width=n),a.addLineWidget(e,s,{above:!1,noHScroll:!0})}},c.reload_images=function(){var e=/!\[(.*?)\](\[width=(\d{1,})\])?\((.*)\)/,t=c.state.content.split("\n"),n=[];c.state.widgets.map((function(e){return e.widget.clear()}));for(var a=0;a<t.length;a++){var s=e.exec(t[a]);if(s){var o={title:s[1],width:null===s[3]?null:parseInt(s[3]),url:s[4],line:a+1,widget:c.insert_image(a+1,s[4],null===s[3]?null:parseInt(s[3]))};console.log(o),n.push(o)}}c.setState({widgets:n})},c.vimrc=function(){v.a.Vim.map("J","5j","normal"),v.a.Vim.map("K","5k","normal"),v.a.Vim.mapCommand("jk","action","exitInsertMode",{},{context:"insert"}),v.a.Vim.mapCommand("U","action","redo",{},{context:"normal"}),v.a.Vim.image_reload=function(){c.reload_images()},v.a.Vim.image_disable=function(){c.state.widgets.map((function(e){return e.widget.clear()}))},v.a.Vim.quit=function(){c.props.quit(!1)},v.a.Vim.wquit=function(){c.props.save(c.state.content,(function(){return c.props.quit(!0)}))},v.a.commands.save=function(){c.props.save(c.state.content,(function(){c.props.changesCallback(!1),c.setState({writeStatus:c.props.writeStatus,lastSig:S()(c.state.content),highlight:!0}),setTimeout((function(){c.setState({highlight:!1})}),1e3)}))}},c.statusBars=function(){var e=c.state.highlight?"green_highlight":"";return Object(a.jsxs)("div",{className:"statusBar_wrapper ".concat(e),children:[Object(a.jsx)("div",{className:"statusBar_write",children:c.state.writeStatus}),Object(a.jsxs)("div",{className:"statusBar_buffer",children:["Key buffer: ",c.state.commandDisplay]}),Object(a.jsxs)("div",{className:"statusBar_mode",children:["Vim mode: ",c.state.vimMode]})]})},c.render=function(){var e=c.statusBars();return Object(a.jsxs)("div",{className:"vim",children:[Object(a.jsx)("textarea",{id:"code",name:"code",className:"code",ref:c.codeInput}),e]})},c.state={content:c.props.content,currentSig:"",lastSig:"",writeStatus:c.props.defaultMsg,commandDisplay:"",vimMode:"normal",widgets:[],highlight:!1},c.editor=null,c.vimrc(),c}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(this.codeInput.current){this.editor=v.a.fromTextArea(this.codeInput.current,{mode:"gfm",keyMap:"vim",theme:"the-matrix",lineNumbers:!0,showCursorWhenSelecting:!0,lineWrapping:!0});var t="";this.editor.getDoc().setValue(this.props.content),this.editor.on("change",(function(t){var n=t.getValue(),a=S()(n);e.setState({content:n,currentSig:a}),e.state.lastSig!==a?(e.setState({writeStatus:"Unsaved changes..."}),e.props.changesCallback(!0)):(e.setState({writeStatus:"No changes made"}),e.props.changesCallback(!1))})),v.a.on(this.editor,"vim-keypress",(function(n){t+=n,e.setState({commandDisplay:t})})),v.a.on(this.editor,"vim-command-done",(function(n){t="",e.setState({commandDisplay:t})})),v.a.on(this.editor,"vim-mode-change",(function(t){e.setState({vimMode:t.mode})}))}}}]),n}(s.a.Component);y.defaultProps={content:"",defaultMsg:"93",writeStatus:"File written to database!",save:function(e){},changesCallback:function(e){}};var N=y,w=(n(56),n(57),n(58));h.a.setAppElement("#root");var k=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),u=i[0],d=i[1],b=Object(c.useState)(!1),f=Object(l.a)(b,2),m=f[0],O=f[1],p=Object(c.useState)(!1),g=Object(l.a)(p,2),v=g[0],x=g[1],S=Object(c.useState)(""),y=Object(l.a)(S,2),k=y[0],C=y[1],_=Object(c.useState)(""),T=Object(l.a)(_,2),D=T[0],E=T[1],I=Object(c.useState)(1),M=Object(l.a)(I,2),B=(M[0],M[1],Object(c.useState)(!1)),L=Object(l.a)(B,2),V=L[0],A=L[1],R=Object(c.useState)(""),q=Object(l.a)(R,2),G=q[0],P=q[1],F=Object(c.useState)(null),J=Object(l.a)(F,2),W=J[0],U=J[1],K=Object(c.useState)(null),z=Object(l.a)(K,2),H=z[0],Y=z[1],Z=Object(c.useState)(!1),Q=Object(l.a)(Z,2),X=Q[0],$=Q[1],ee=Object(c.useState)(""),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ce=Object(c.useState)(null),se=Object(l.a)(ce,2),oe=se[0],ie=se[1],re=Object(c.useState)(!1),le=Object(l.a)(re,2),ue=le[0],de=le[1],je=Object(c.useState)(!1),be=Object(l.a)(je,2),he=be[0],fe=be[1],me=Object(c.useState)([]),Oe=Object(l.a)(me,2),pe=Oe[0],ge=Oe[1],ve=Object(c.useState)([]),xe=Object(l.a)(ve,2),Se=xe[0],ye=xe[1],Ne=Object(c.useState)({primary:"date_created",when:"after",date:null,order_by:"date_created",sort:"DESC"}),we=Object(l.a)(Ne,2),ke=we[0],Ce=we[1],_e=Object(c.useRef)(null),Te={username:k,password:D,fail:function(){x(!0),O(!1)}},De={path:"notes/validateAuth/",method:"GET",body:null,callback:Le},Ee=Object(c.useState)(De),Ie=Object(l.a)(Ee,2),Me=Ie[0],Be=Ie[1];function Le(e){O(!0),x(!1),C(e.auth)}function Ve(e){!1===X?e():(ae("Warning! You have unsaved changes."),ie((function(){return function(){return e()}})))}function Ae(){H&&(A(!1),fe(!1),Ve((function(){s(H),Y(null)})))}function Re(){console.log("getting outlinks"),Be({path:"notes/"+n+"/getOutlinks/",method:"GET",body:null,callback:function(e){console.log(e),ye(e)}})}function qe(){Be({path:"notes/search/?query="+G,method:"GET",body:null,callback:function(e){console.log(e),function(e){var t=e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{date_created:new Date(e.date_created),date_updated:new Date(e.date_updated)})}));U(t)}(e)}}),Y(null)}function Ge(e){return Object(a.jsx)("div",{children:null!==e&&e.map((function(e){var t=e.id==H?"selectedRow":"";return Object(a.jsx)("div",{className:"searchResult "+t,onClick:function(){H==e.id?Y(null):Y(e.id)},children:Object(a.jsxs)("div",{className:"searchResults_wrapper",children:[Object(a.jsx)("div",{className:"searchResultTitle",children:e.title}),Object(a.jsx)("div",{className:"searchResultDate",children:w(e[ke.order_by],"dd/mmm/yyyy")})]})})}))})}return j(Te,Me),Object(c.useEffect)((function(){if(m&&n){console.log("selected new post:"+n);var e={path:"notes/"+n+"/",method:"GET",body:null,callback:function(e){console.log("got a new result!"),d(e.content),Be({path:"notes/"+n+"/getBacklinks/",method:"GET",body:null,callback:function(e){ge(e)}}),Re(),$(!1)}};Be(e)}}),[n]),Object(c.useEffect)((function(){_e.current&&_e.current.flush(u)}),[u]),Object(c.useEffect)((function(){console.log(ke)}),[ke]),Object(c.useEffect)((function(){console.log("Safe Change Callback Set"),null!==oe&&de(!0)}),[oe]),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(N,{content:u,save:function(e,t){if(console.log("write function called"),null===n)var a={path:"notes/",method:"POST",body:{content:e}};else a={path:"notes/"+n+"/",method:"PUT",body:{content:e}};var c=Object(r.a)(Object(r.a)({},a),{},{callback:function(e){s(e.id),Re(),$(!1),"number"===typeof e.id&&t(),console.log(e)}});Be(c)},quit:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={path:"",method:"logout",body:"",callback:function(e){s(null),_e.current&&_e.current.flush(""),O(!1),x(!0)}};e?Be(t):Ve((function(){Be(t)}))},ref:_e,changesCallback:$}),Object(a.jsx)(h.a,{isOpen:v,onRequestClose:function(){m&&x(!1)},className:"SearchModal",overlayClassName:"SearchOverlay",children:Object(a.jsxs)("div",{className:"IoLinks_wrapper",children:[Object(a.jsx)("div",{className:"IoLinks_incoming",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Be({path:"notes/validateAuth/",method:"GET",body:null,callback:Le})},children:[Object(a.jsx)("input",{name:"username",className:"greenput_narrow",onChange:function(e){C(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"password",name:"password",className:"greenput_narrow",onChange:function(e){E(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"greenput_narrow",type:"submit",children:"Login"})]})}),Object(a.jsxs)("div",{className:"IoLinks_outgoing",children:[Object(a.jsx)("h1",{children:"NullDisk"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Military Grade Encryption"}),Object(a.jsx)("li",{children:"Zettelkasten Schema"}),Object(a.jsx)("li",{children:"VIM Keybindings"})]})]})]})}),Object(a.jsx)(h.a,{isOpen:V,onRequestClose:function(){return A(!1)},className:"SearchModal",overlayClassName:"SearchOverlay",children:Object(a.jsxs)("div",{className:"searchBox",children:[Object(a.jsxs)("form",{action:"#",autoComplete:"off",onSubmit:function(e){e.preventDefault(),qe()},children:[Object(a.jsx)("input",{className:"greenput",name:"query",autoFocus:!0,onChange:function(e){return P(e.target.value)}}),Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return Ce(Object(r.a)(Object(r.a)({},ke),{},{primary:e.target.value}))},children:[Object(a.jsx)("option",{value:"date_created",children:"Created"}),Object(a.jsx)("option",{value:"date_updated",children:"Updated"})]}),Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return Ce(Object(r.a)(Object(r.a)({},ke),{},{when:e.target.value}))},children:[Object(a.jsx)("option",{value:"after",children:"After"}),Object(a.jsx)("option",{value:"before",children:"Before"})]}),Object(a.jsx)("input",{className:"greenput_narrow",type:"date",onChange:function(e){return Ce(Object(r.a)(Object(r.a)({},ke),{},{date:""===e.target.value?null:new Date(e.target.value)}))}}),"\xa0 :: \xa0",Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return Ce(Object(r.a)(Object(r.a)({},ke),{},{order_by:e.target.value}))},children:[Object(a.jsx)("option",{value:"date_created",children:"Created"}),Object(a.jsx)("option",{value:"date_updated",children:"Updated"})]}),Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return Ce(Object(r.a)(Object(r.a)({},ke),{},{sort:e.target.value}))},children:[Object(a.jsx)("option",{value:"DESC",children:"DESC"}),Object(a.jsx)("option",{value:"ASC",children:"ASC"})]})]}),null!==H&&Object(a.jsxs)("div",{className:"searchButtonsWrapper",children:[Object(a.jsx)("div",{className:"button_open button",onClick:Ae,children:"Open"}),Object(a.jsx)("div",{className:"button_insert button",onClick:function(){if(W){var e=W.filter((function(e){return e.id==H}))[0],t="["+e.title+"](VID="+e.id+")";_e.current&&(_e.current.insert(t),A(!1))}},children:"Insert"}),Object(a.jsx)("div",{className:"button_delete button",onClick:function(){var e={path:"notes/"+H+"/delete/",method:"GET",body:null,callback:function(e){!1!==e.delete&&null!==W&&(U(W.filter((function(t){return t.id!=e.delete}))),Y(null))}};ae("Are you sure you want to delete this forever?"),ie((function(){return function(){Be(e)}}))},children:"Delete"})]}),Object(a.jsx)("div",{className:"searchResults",children:null!==W&&W.some((function(e){return e}))&&Ge(function(e){var t=e.filter((function(e){return null===ke.date||("before"===ke.when?e[ke.order_by]<=ke.date:"after"===ke.when?e[ke.order_by]>=ke.date:void 0)}));return t.sort((function(e,t){return"ASC"===ke.sort?e[ke.order_by].getTime()-t[ke.order_by].getTime():t[ke.order_by].getTime()-e[ke.order_by].getTime()})),t}(W))}),Object(a.jsx)("div",{className:"spacer"}),Object(a.jsx)("div",{className:"searchPreview",children:Object(a.jsxs)("pre",{children:[null!==H&&null!==W&&W.filter((function(e){return e.id==H})).map((function(e){return e.content})),null===H&&Object(a.jsx)("span",{children:"search for a document to preview it here"})]})})]})}),Object(a.jsx)(h.a,{isOpen:ue,className:"SearchModal",overlayClassName:"SearchOverlay",children:Object(a.jsxs)("div",{className:"alertBox",children:[Object(a.jsx)("span",{className:"alertText",children:ne}),Object(a.jsx)("div",{className:"button",onClick:function(){null!==oe&&oe(),de(!1)},children:"Override"}),Object(a.jsx)("div",{className:"button",onClick:function(){return de(!1)},children:"Abort"})]})}),Object(a.jsx)(h.a,{isOpen:he,className:"SearchModal",overlayClassName:"SearchOverlay",onRequestClose:function(){return fe(!1)},children:Object(a.jsxs)("div",{className:"IoLinks_wrapper",children:[Object(a.jsx)("div",{className:"IoLinks_navigation",children:H&&null!==pe&&null!==Se&&(pe.filter((function(e){return e.id==H})).length>0||Se.filter((function(e){return e.id==H})).length>0)&&Object(a.jsx)("div",{className:"button",onClick:Ae,children:"Open"})}),Object(a.jsxs)("div",{className:"IoLinks_incoming",children:[Object(a.jsx)("span",{className:"title",children:"Incoming Links"}),null!==pe&&Ge(pe)]}),Object(a.jsxs)("div",{className:"IoLinks_outgoing",children:[Object(a.jsx)("span",{className:"title",children:"Outgoing Links"}),null!==Se&&Ge(Se)]}),Object(a.jsx)("div",{className:"IoLinks_preview",children:Object(a.jsxs)("pre",{children:[H&&pe&&pe.filter((function(e){return e.id==H})).map((function(e){return e.content})),H&&Se&&Se.filter((function(e){return e.id==H})).map((function(e){return e.content}))]})})]})}),Object(a.jsxs)("div",{className:"main_buttons_wrapper",children:[Object(a.jsx)("div",{className:"button",onClick:function(){return A(!0)},children:"Explorer"}),Object(a.jsx)("div",{className:"button",onClick:function(){Ve((function(){s(null),ge([]),ye([]),_e.current&&_e.current.flush(""),$(!1)}))},children:"New File"}),Object(a.jsx)("div",{className:"button",onClick:function(){return fe(!0)},children:Object(a.jsxs)("span",{style:pe.length>0||Se.length>0?{color:"red",fontWeight:"bold"}:{},children:["Connections ",pe.length,"/",Se.length]})})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),C()}},[[59,1,2]]]);
//# sourceMappingURL=main.c44bc189.chunk.js.map