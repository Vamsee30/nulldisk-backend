(this.webpackJsonpvnote=this.webpackJsonpvnote||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(8),r=n.n(o),i=n(4),l=n(2),u=n(19),d="/api/";console.log("MODE: /api/");var j=function(e,t){var n=Object(c.useState)(""),a=Object(l.a)(n,2),s=a[0],o=a[1],r=Object(u.a)("refreshKey")(""),j=Object(l.a)(r,2),b=j[0],h=j[1],f=Object(c.useState)(null),m=Object(l.a)(f,2),O=m[0],p=m[1],g=Object(c.useState)(null),v=Object(l.a)(g,2),x=v[0],S=v[1],y=Object(c.useCallback)((function(e){var n,a=t.body,c=t.method,s=t.path;if(console.log("executing GO:"+e),"logout"===c)return n=t.callback,h(""),o(""),p(null),S(null),void n(null);var r=Object(i.a)({method:c,headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}},null!==a&&{body:JSON.stringify(a)});fetch(d+s,r).then((function(e){200!==e.status?S(!1):(S(!0),e.json().then((function(e){t.callback(e)})))}))}),[t]);Object(c.useEffect)((function(){if(!1===x){console.log("access key is false");var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:b})};fetch("/api/token/refresh/",e).then((function(e){200!==e.status?p(!1):e.json().then((function(e){p(!0),o(e.access)}))}))}}),[x]),Object(c.useEffect)((function(){console.log("responding to change in access key:"+s),y(s)}),[s,t]),Object(c.useEffect)((function(){if(!1===O){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.username,password:e.password})};fetch("/api/token/",t).then((function(t){console.log(t.status),200!==t.status?(S(null),p(null),e.fail(),console.log("total fail")):(console.log("login works"),t.json().then((function(e){o(e.access),h(e.refresh)})))}))}}),[O])},b=n(5),h=n.n(b),f=n(21),m=n(22),O=n(24),p=n(23),g=(n(41),n(42),n(43),n(44),n(45),n(3)),v=n.n(g),x=n(9),S=n.n(x);n(48),n(51),n(52),n(17),n(16),n(53),n(18);var y=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(f.a)(this,n),(c=t.call(this,e)).codeInput=s.a.createRef(),c.editor=void 0,c.insert=function(e){if(c.editor){var t=c.editor.getDoc(),n=t.getCursor();t.replaceRange(e,n)}},c.flush=function(e){c.editor&&c.editor.getDoc().setValue(e)},c.insert_image=function(e,t,n){if(c.editor){var a=c.editor.getDoc(),s=document.createElement("img");return s.src=t,console.log(n),n&&(s.width=n),a.addLineWidget(e,s,{above:!1,noHScroll:!0})}},c.reload_images=function(){var e=/!\[(.*?)\](\[width=(\d{1,})\])?\((.*)\)/,t=c.state.content.split("\n"),n=[];c.state.widgets.map((function(e){return e.widget.clear()}));for(var a=0;a<t.length;a++){var s=e.exec(t[a]);if(s){var o={title:s[1],width:null===s[3]?null:parseInt(s[3]),url:s[4],line:a+1,widget:c.insert_image(a+1,s[4],null===s[3]?null:parseInt(s[3]))};console.log(o),n.push(o)}}c.setState({widgets:n})},c.vimrc=function(){v.a.Vim.map("J","5j","normal"),v.a.Vim.map("K","5k","normal"),v.a.Vim.mapCommand("jk","action","exitInsertMode",{},{context:"insert"}),v.a.Vim.mapCommand("U","action","redo",{},{context:"normal"}),v.a.Vim.image_reload=function(){c.reload_images()},v.a.Vim.image_disable=function(){c.state.widgets.map((function(e){return e.widget.clear()}))},v.a.Vim.quit=function(){c.props.quit(!1)},v.a.Vim.wquit=function(){c.props.save(c.state.content,(function(){return c.props.quit(!0)}))},v.a.commands.save=function(){c.props.save(c.state.content,(function(){})),c.props.changesCallback(!1),c.setState({writeStatus:c.props.writeStatus,lastSig:S()(c.state.content)})}},c.statusBars=function(){return Object(a.jsxs)("div",{className:"statusBar_wrapper",children:[Object(a.jsx)("div",{className:"statusBar_write",children:c.state.writeStatus}),Object(a.jsxs)("div",{className:"statusBar_buffer",children:["Key buffer: ",c.state.commandDisplay]}),Object(a.jsxs)("div",{className:"statusBar_mode",children:["Vim mode: ",c.state.vimMode]})]})},c.render=function(){var e=c.statusBars();return Object(a.jsxs)("div",{className:"vim",children:[Object(a.jsx)("textarea",{id:"code",name:"code",className:"code",ref:c.codeInput}),e]})},c.state={content:c.props.content,currentSig:"",lastSig:"",writeStatus:c.props.defaultMsg,commandDisplay:"",vimMode:"normal",widgets:[]},c.editor=null,c.vimrc(),c}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(this.codeInput.current){this.editor=v.a.fromTextArea(this.codeInput.current,{mode:"markdown",keyMap:"vim",theme:"the-matrix",lineNumbers:!0,showCursorWhenSelecting:!0,lineWrapping:!0});var t="";this.editor.getDoc().setValue(this.props.content),this.editor.on("change",(function(t){var n=t.getValue(),a=S()(n);e.setState({content:n,currentSig:a}),e.state.lastSig!==a&&(e.setState({writeStatus:"Unsaved changes..."}),e.props.changesCallback(!0))})),v.a.on(this.editor,"vim-keypress",(function(n){t+=n,e.setState({commandDisplay:t})})),v.a.on(this.editor,"vim-command-done",(function(n){t="",e.setState({commandDisplay:t})})),v.a.on(this.editor,"vim-mode-change",(function(t){e.setState({vimMode:t.mode})}))}}}]),n}(s.a.Component);y.defaultProps={content:"",defaultMsg:"93",writeStatus:"File written to database!",save:function(e){},changesCallback:function(e){}};var N=y,w=(n(54),n(55),n(56));h.a.setAppElement("#root");var k=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),r=Object(l.a)(o,2),u=r[0],d=r[1],b=Object(c.useState)(!1),f=Object(l.a)(b,2),m=f[0],O=f[1],p=Object(c.useState)(!1),g=Object(l.a)(p,2),v=g[0],x=g[1],S=Object(c.useState)(""),y=Object(l.a)(S,2),k=y[0],C=y[1],_=Object(c.useState)(""),D=Object(l.a)(_,2),E=D[0],T=D[1],I=Object(c.useState)(1),M=Object(l.a)(I,2),B=(M[0],M[1],Object(c.useState)(!1)),L=Object(l.a)(B,2),V=L[0],R=L[1],q=Object(c.useState)(""),A=Object(l.a)(q,2),G=A[0],P=A[1],F=Object(c.useState)(null),J=Object(l.a)(F,2),W=J[0],U=J[1],K=Object(c.useState)(null),z=Object(l.a)(K,2),H=z[0],Y=z[1],Z=Object(c.useState)(!1),Q=Object(l.a)(Z,2),X=Q[0],$=Q[1],ee=Object(c.useState)(null),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ce=Object(c.useState)(!1),se=Object(l.a)(ce,2),oe=se[0],re=se[1],ie=Object(c.useState)(!1),le=Object(l.a)(ie,2),ue=le[0],de=le[1],je=Object(c.useState)([]),be=Object(l.a)(je,2),he=be[0],fe=be[1],me=Object(c.useState)([]),Oe=Object(l.a)(me,2),pe=Oe[0],ge=Oe[1],ve=Object(c.useState)({primary:"date_created",when:"after",date:null,order_by:"date_created",sort:"DESC"}),xe=Object(l.a)(ve,2),Se=xe[0],ye=xe[1],Ne=Object(c.useRef)(null),we={username:k,password:E,fail:function(){x(!0),O(!1)}},ke={path:"notes/validateAuth/",method:"GET",body:null,callback:Te},Ce=Object(c.useState)(ke),_e=Object(l.a)(Ce,2),De=_e[0],Ee=_e[1];function Te(e){O(!0),x(!1),C(e.auth)}function Ie(e){!1===X?e():ae((function(){return function(){return e()}}))}function Me(){H&&(R(!1),de(!1),Ie((function(){s(H),Y(null)})))}function Be(){console.log("getting outlinks"),Ee({path:"notes/"+n+"/getOutlinks/",method:"GET",body:null,callback:function(e){console.log(e),ge(e)}})}function Le(){Ee({path:"notes/search/?query="+G,method:"GET",body:null,callback:function(e){console.log(e),function(e){var t=e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{date_created:new Date(e.date_created),date_updated:new Date(e.date_updated)})}));U(t)}(e)}}),Y(null)}function Ve(e){return Object(a.jsx)("div",{children:null!==e&&e.map((function(e){var t=e.id==H?"selectedRow":"";return Object(a.jsx)("div",{className:"searchResult "+t,onClick:function(){H==e.id?Y(null):Y(e.id)},children:Object(a.jsxs)("div",{className:"searchResults_wrapper",children:[Object(a.jsx)("div",{className:"searchResultTitle",children:e.title}),Object(a.jsx)("div",{className:"searchResultDate",children:w(e[Se.order_by],"dd/mmm/yyyy")})]})})}))})}return j(we,De),Object(c.useEffect)((function(){if(m&&n){console.log("selected new post:"+n);var e={path:"notes/"+n+"/",method:"GET",body:null,callback:function(e){console.log("got a new result!"),d(e.content),Ee({path:"notes/"+n+"/getBacklinks/",method:"GET",body:null,callback:function(e){fe(e)}}),Be(),$(!1)}};Ee(e)}}),[n]),Object(c.useEffect)((function(){Ne.current&&Ne.current.flush(u)}),[u]),Object(c.useEffect)((function(){console.log(Se)}),[Se]),Object(c.useEffect)((function(){console.log("Safe Change Callback Set"),null!==ne&&re(!0)}),[ne]),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(N,{content:u,save:function(e,t){if(null===n)var a={path:"notes/",method:"POST",body:{content:e}};else a={path:"notes/"+n+"/",method:"PUT",body:{content:e}};var c=Object(i.a)(Object(i.a)({},a),{},{callback:function(e){s(e.id),Be(),$(!1),t(),console.log(e)}});Ee(c)},quit:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={path:"",method:"logout",body:"",callback:function(e){s(null),Ne.current&&Ne.current.flush(""),O(!1),x(!0)}};e?Ee(t):Ie((function(){Ee(t)}))},ref:Ne,changesCallback:$}),Object(a.jsx)(h.a,{isOpen:v,onRequestClose:function(){m&&x(!1)},className:"SearchModal",overlayClassName:"SearchOverlay",children:Object(a.jsxs)("div",{className:"IoLinks_wrapper",children:[Object(a.jsx)("div",{className:"IoLinks_incoming",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Ee({path:"notes/validateAuth/",method:"GET",body:null,callback:Te})},children:[Object(a.jsx)("input",{name:"username",className:"greenput_narrow",onChange:function(e){C(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"password",name:"password",className:"greenput_narrow",onChange:function(e){T(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"greenput_narrow",type:"submit",children:"Login"})]})}),Object(a.jsxs)("div",{className:"IoLinks_outgoing",children:[Object(a.jsx)("h1",{children:"NullDisk"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Military Grade Encryption"}),Object(a.jsx)("li",{children:"Zettelkasten Schema"}),Object(a.jsx)("li",{children:"VIM Keybindings"})]})]})]})}),Object(a.jsx)(h.a,{isOpen:V,onRequestClose:function(){return R(!1)},className:"SearchModal",overlayClassName:"SearchOverlay",children:Object(a.jsxs)("div",{className:"searchBox",children:[Object(a.jsxs)("form",{action:"#",autoComplete:"off",onSubmit:function(e){e.preventDefault(),Le()},children:[Object(a.jsx)("input",{className:"greenput",name:"query",autoFocus:!0,onChange:function(e){return P(e.target.value)}}),Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return ye(Object(i.a)(Object(i.a)({},Se),{},{primary:e.target.value}))},children:[Object(a.jsx)("option",{value:"date_created",children:"Created"}),Object(a.jsx)("option",{value:"date_updated",children:"Updated"})]}),Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return ye(Object(i.a)(Object(i.a)({},Se),{},{when:e.target.value}))},children:[Object(a.jsx)("option",{value:"after",children:"After"}),Object(a.jsx)("option",{value:"before",children:"Before"})]}),Object(a.jsx)("input",{className:"greenput_narrow",type:"date",onChange:function(e){return ye(Object(i.a)(Object(i.a)({},Se),{},{date:""===e.target.value?null:new Date(e.target.value)}))}}),"\xa0 :: \xa0",Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return ye(Object(i.a)(Object(i.a)({},Se),{},{order_by:e.target.value}))},children:[Object(a.jsx)("option",{value:"date_created",children:"Created"}),Object(a.jsx)("option",{value:"date_updated",children:"Updated"})]}),Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return ye(Object(i.a)(Object(i.a)({},Se),{},{sort:e.target.value}))},children:[Object(a.jsx)("option",{value:"DESC",children:"DESC"}),Object(a.jsx)("option",{value:"ASC",children:"ASC"})]})]}),null!==H&&Object(a.jsxs)("div",{className:"searchButtonsWrapper",children:[Object(a.jsx)("div",{className:"button_open button",onClick:Me,children:"Open"}),Object(a.jsx)("div",{className:"button_insert button",onClick:function(){if(W){var e=W.filter((function(e){return e.id==H}))[0],t="["+e.title+"](VID="+e.id+")";Ne.current&&(Ne.current.insert(t),R(!1))}},children:"Insert"}),Object(a.jsx)("div",{className:"button_delete button",onClick:function(){},children:"Delete"})]}),Object(a.jsx)("div",{className:"searchResults",children:null!==W&&W.some((function(e){return e}))&&Ve(function(e){var t=e.filter((function(e){return null===Se.date||("before"===Se.when?e[Se.order_by]<=Se.date:"after"===Se.when?e[Se.order_by]>=Se.date:void 0)}));return t.sort((function(e,t){return"ASC"===Se.sort?e[Se.order_by].getTime()-t[Se.order_by].getTime():t[Se.order_by].getTime()-e[Se.order_by].getTime()})),t}(W))}),Object(a.jsx)("div",{className:"spacer"}),Object(a.jsx)("div",{className:"searchPreview",children:Object(a.jsxs)("pre",{children:[null!==H&&null!==W&&W.filter((function(e){return e.id==H})).map((function(e){return e.content})),null===H&&Object(a.jsx)("span",{children:"search for a document to preview it here"})]})})]})}),Object(a.jsx)(h.a,{isOpen:oe,className:"SearchModal",overlayClassName:"SearchOverlay",children:Object(a.jsxs)("div",{className:"alertBox",children:[Object(a.jsx)("span",{className:"alertText",children:"Warning! You have unsaved changes."}),Object(a.jsx)("div",{className:"button",onClick:function(){null!==ne&&ne(),re(!1)},children:"Override"}),Object(a.jsx)("div",{className:"button",onClick:function(){return re(!1)},children:"Close"})]})}),Object(a.jsx)(h.a,{isOpen:ue,className:"SearchModal",overlayClassName:"SearchOverlay",onRequestClose:function(){return de(!1)},children:Object(a.jsxs)("div",{className:"IoLinks_wrapper",children:[Object(a.jsx)("div",{className:"IoLinks_navigation",children:H&&null!==he&&null!==pe&&(he.filter((function(e){return e.id==H})).length>0||pe.filter((function(e){return e.id==H})).length>0)&&Object(a.jsx)("div",{className:"button",onClick:Me,children:"Open"})}),Object(a.jsxs)("div",{className:"IoLinks_incoming",children:[Object(a.jsx)("span",{className:"title",children:"Incoming Links"}),null!==he&&Ve(he)]}),Object(a.jsxs)("div",{className:"IoLinks_outgoing",children:[Object(a.jsx)("span",{className:"title",children:"Outgoing Links"}),null!==pe&&Ve(pe)]}),Object(a.jsx)("div",{className:"IoLinks_preview",children:Object(a.jsxs)("pre",{children:[H&&he&&he.filter((function(e){return e.id==H})).map((function(e){return e.content})),H&&pe&&pe.filter((function(e){return e.id==H})).map((function(e){return e.content}))]})})]})}),Object(a.jsxs)("div",{className:"main_buttons_wrapper",children:[Object(a.jsx)("div",{className:"button",onClick:function(){return R(!0)},children:"Explorer"}),Object(a.jsx)("div",{className:"button",onClick:function(){Ie((function(){s(null),fe([]),ge([]),Ne.current&&Ne.current.flush(""),$(!1)}))},children:"New File"}),Object(a.jsx)("div",{className:"button",onClick:function(){return de(!0)},children:Object(a.jsxs)("span",{style:he.length>0||pe.length>0?{color:"red",fontWeight:"bold"}:{},children:["Connections ",he.length,"/",pe.length]})})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),C()}},[[57,1,2]]]);
//# sourceMappingURL=main.b5b619d0.chunk.js.map