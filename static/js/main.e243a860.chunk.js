(this.webpackJsonpvnote=this.webpackJsonpvnote||[]).push([[0],{25:function(e,t,n){},34:function(e,t,n){},60:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(25),n(0)),s=n.n(c),r=n(13),o=n.n(r),i=n(11),l=n(3),u=n(2),d=n(8),j=n.n(d),b=n(35),h=n(36),f=n(43),O=n(41),p=(n(60),n(61),n(62),n(63),n(4)),m=n.n(p),v=n(16),g=n.n(v);n(30),n(68),n(70),n(71),n(32),n(31),n(72),n(33);var x=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).codeInput=s.a.createRef(),c.editor=void 0,c.focus=function(){c.editor&&c.editor.focus()},c.insert=function(e){if(c.editor){var t=c.editor.getDoc(),n=t.getCursor();t.replaceRange(e,n)}c.focus()},c.flush=function(e){c.editor&&(c.editor.getDoc().setValue(e),c.setState({currentSig:g()(e),lastSig:g()(e)}),c.setState({writeStatus:"All Systems Go!"}),console.log("flushed data"));c.focus()},c.insert_image=function(e,t,n){if(c.editor){var a=c.editor.getDoc(),s=document.createElement("img");return s.src=t,console.log(n),n&&(s.width=n),a.addLineWidget(e,s,{above:!1,noHScroll:!0})}},c.reload_images=function(){var e=/!\[(.*?)\](\[width=(\d{1,})\])?\((.*)\)/,t=c.state.content.split("\n"),n=[];c.state.widgets.map((function(e){return e.widget.clear()}));for(var a=0;a<t.length;a++){var s=e.exec(t[a]);if(s){var r={title:s[1],width:null===s[3]?null:parseInt(s[3]),url:s[4],line:a+1,widget:c.insert_image(a+1,s[4],null===s[3]?null:parseInt(s[3]))};console.log(r),n.push(r)}}c.setState({widgets:n})},c.vimrc=function(){m.a.Vim.map("J","5j","normal"),m.a.Vim.map("K","5k","normal"),m.a.Vim.mapCommand("jk","action","exitInsertMode",{},{context:"insert"}),m.a.Vim.mapCommand("U","action","redo",{},{context:"normal"}),m.a.Vim.image_reload=function(){c.reload_images()},m.a.Vim.image_disable=function(){c.state.widgets.map((function(e){return e.widget.clear()}))},m.a.Vim.quit=function(){c.props.quit(!1)},m.a.Vim.wquit=function(){c.props.save(c.state.content,(function(){return c.props.quit(!0)}))},m.a.commands.save=function(){c.props.save(c.state.content,(function(){c.props.changesCallback(!1),c.setState({writeStatus:c.props.writeStatus,lastSig:g()(c.state.content),highlight:!0}),setTimeout((function(){c.setState({highlight:!1})}),1e3)}))}},c.statusBars=function(){var e=c.state.highlight?"green_highlight":"";return Object(a.jsxs)("div",{className:"statusBar_wrapper ".concat(e),children:[Object(a.jsx)("div",{className:"statusBar_write",children:c.state.writeStatus}),Object(a.jsxs)("div",{className:"statusBar_buffer",children:["Key buffer: ",c.state.commandDisplay]}),Object(a.jsxs)("div",{className:"statusBar_mode",children:["Vim mode: ",c.state.vimMode]})]})},c.render=function(){var e=c.statusBars();return Object(a.jsxs)("div",{className:"vim",children:[Object(a.jsx)("textarea",{id:"code",name:"code",className:"code",ref:c.codeInput}),e]})},c.state={content:c.props.content,currentSig:"",lastSig:"",writeStatus:c.props.defaultMsg,commandDisplay:"",vimMode:"normal",widgets:[],highlight:!1},c.editor=null,c.vimrc(),c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(this.codeInput.current){this.editor=m.a.fromTextArea(this.codeInput.current,{mode:"gfm",keyMap:"vim",theme:"the-matrix",lineNumbers:!0,showCursorWhenSelecting:!0,lineWrapping:!0});var t="";this.editor.getDoc().setValue(this.props.content),this.editor.on("change",(function(t){var n=t.getValue(),a=g()(n);e.setState({content:n,currentSig:a}),e.state.lastSig!==a?(e.setState({writeStatus:"Unsaved changes..."}),e.props.changesCallback(!0)):(e.setState({writeStatus:"No changes made"}),e.props.changesCallback(!1))})),m.a.on(this.editor,"vim-keypress",(function(n){t+=n,e.setState({commandDisplay:t})})),m.a.on(this.editor,"vim-command-done",(function(n){t="",e.setState({commandDisplay:t})})),m.a.on(this.editor,"vim-mode-change",(function(t){e.setState({vimMode:t.mode})})),this.focus()}}}]),n}(s.a.Component);x.defaultProps={content:"",defaultMsg:"93",writeStatus:"File written to database!",save:function(e){},changesCallback:function(e){}};var y=x,S=n(37),N="/api/";console.log("MODE: /api/");var w=function(e,t){var n=Object(c.useState)(""),a=Object(u.a)(n,2),s=a[0],r=a[1],o=Object(S.a)("refreshKey")(""),i=Object(u.a)(o,2),d=i[0],j=i[1],b=Object(c.useState)(null),h=Object(u.a)(b,2),f=h[0],O=h[1],p=Object(c.useState)(null),m=Object(u.a)(p,2),v=m[0],g=m[1],x=[200,201,202,203,204],y=Object(c.useCallback)((function(e){var n,a=t.body,c=t.method,s=t.path;if(console.log("executing GO:"+e),"logout"===c)return n=t.callback,j(""),r(""),O(null),g(null),void n(null);var o=Object(l.a)({method:c,headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}},null!==a&&{body:JSON.stringify(a)});fetch(N+s,o).then((function(e){x.includes(e.status)?(g(!0),e.json().then((function(e){t.callback(e)}))):g(!1)}))}),[t]);Object(c.useEffect)((function(){if(!1===v){console.log("access key is false");var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:d})};fetch("/api/token/refresh/",e).then((function(e){x.includes(e.status)?e.json().then((function(e){O(!0),r(e.access)})):O(!1)}))}}),[v]),Object(c.useEffect)((function(){console.log("responding to change in access key:"+s),y(s)}),[s,t]),Object(c.useEffect)((function(){if(!1===f){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.username,password:e.password})};fetch("/api/token/",t).then((function(t){console.log(t.status),x.includes(t.status)?(console.log("login works"),t.json().then((function(e){r(e.access),j(e.refresh)}))):(g(null),O(null),e.fail(),console.log("total fail"))}))}}),[f])};n(34);j.a.setAppElement("#root");var k=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),s=n[0],r=n[1],o=Object(c.useState)(!1),i=Object(u.a)(o,2),l=i[0],d=i[1],b=Object(c.useState)(""),h=Object(u.a)(b,2),f=h[0],O=h[1],p=Object(c.useState)(""),m=Object(u.a)(p,2),v=m[0],g=m[1];function x(t){r(t),e.setAuth(t)}var y={username:f,password:v,fail:function(){d(!0),x(!1)}},S={path:"notes/validateAuth/",method:"GET",body:null,callback:function(e){x(!0),d(!1),O(e.auth)}};return""===e.payload.path&&e.setPayload(S),w(y,e.payload),Object(a.jsx)(j.a,{isOpen:l,onRequestClose:function(){s&&(d(!1),e.closeAction())},className:"SearchModal",overlayClassName:"SearchOverlay",children:Object(a.jsxs)("div",{className:"IoLinks_wrapper",children:[Object(a.jsx)("div",{className:"IoLinks_incoming",children:Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.setPayload(S)},children:[Object(a.jsx)("input",{name:"username",className:"greenput_narrow",onChange:function(e){O(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"password",name:"password",className:"greenput_narrow",onChange:function(e){g(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"greenput_narrow",type:"submit",children:"Login"})]})}),Object(a.jsxs)("div",{className:"IoLinks_outgoing",children:[Object(a.jsx)("h1",{children:"NullDisk"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Military Grade Encryption"}),Object(a.jsx)("li",{children:"Zettelkasten Schema"}),Object(a.jsx)("li",{children:"VIM Keybindings"})]})]})]})})},_=n(18);n(73);var C=function(e){var t=Object(c.useState)(null),n=Object(u.a)(t,2),s=n[0],r=n[1],o=Object(c.useState)([]),d=Object(u.a)(o,2),j=d[0],b=d[1],h=Object(c.useState)([]),f=Object(u.a)(h,2),O=f[0],p=f[1],m=Object(c.useState)([]),v=Object(u.a)(m,2),g=v[0],x=v[1],y=Object(c.useState)([]),S=Object(u.a)(y,2),N=S[0],w=S[1],k=Object(c.useState)(new Date),C=Object(u.a)(k,2),D=C[0],E=(C[1],Object(c.useState)(0)),I=Object(u.a)(E,2),T=I[0],M=I[1],P=Object(c.useState)(null),A=Object(u.a)(P,2),L=A[0],q=A[1],B=Object(c.useState)(0),R=Object(u.a)(B,2),V=R[0],F=R[1],G=Object(c.useState)(0),J=Object(u.a)(G,2),U=J[0],W=J[1],K=Object(c.useState)(""),z=Object(u.a)(K,2),H=z[0],Y=z[1];function Z(e,t){if(null!==s){var n=s.map((function(n,a){if(a===e){var c=n.blanks.map((function(e,n){return n===t?Object(l.a)(Object(l.a)({},e),{},{hidden:!e.hidden}):e}));return Object(l.a)(Object(l.a)({},n),{},{blanks:c})}return n}));r(n)}}function $(){return g.length>0?Object(a.jsx)(a.Fragment,{children:g[V].note.title}):Object(a.jsx)(a.Fragment,{})}return Object(c.useEffect)((function(){var e=[];if(null!==s){var t,n=Object(_.a)(s.entries());try{var c=function(){var n=Object(u.a)(t.value,2),c=n[0],s=n[1],b=s.content,h=s.blanks;r=[b+" "];var f,O=Object(_.a)(h.entries());try{var p=function(){var e=Object(u.a)(f.value,2),t=e[0],n=e[1],s=n.word,b=n.hidden;for(o=[],l=0;l<r.length;l+=2){var h=r[l].split(s),O=b?"hidden":"visible";if(r[l].match(s)){for(d=[],j=0;j<h.length;j++)d.push(h[j]),h[j+1]&&d.push(Object(a.jsx)("span",{className:O,onClick:function(){return Z(c,t)},children:s}));o.push({key:l,items:d})}}var p,m=Object(_.a)(o.entries());try{for(m.s();!(p=m.n()).done;){var v,g=Object(u.a)(p.value,2),x=(g[0],g[1]),y=x.key,S=x.items;(v=r).splice.apply(v,[y,1].concat(Object(i.a)(S)))}}catch(N){m.e(N)}finally{m.f()}};for(O.s();!(f=O.n()).done;)p()}catch(m){O.e(m)}finally{O.f()}e.push(r)};for(n.s();!(t=n.n()).done;){var r,o,l,d,j;c()}}catch(h){n.e(h)}finally{n.f()}}b(e)}),[s]),Object(c.useEffect)((function(){if(g.length>0){console.log("Loading card ".concat(V)),e.updatePostId(g[V].note.id);var t=(n=g[V].note.content,n.split(/\n{2,}/).filter((function(e){return/:{2,}|__/.test(e)}))).map((function(e){return{content:e,blanks:function(e){for(var t,n=/[^:]::([^:]*?)(?:\n|$)/g,a=/(__\S.*?\S__)/g,c=/[^:]:::((?:\s(?!___).*)*)/gm,s=[];t=c.exec(e);)s.push({content:t[1].trim(),index:t.index});for(;t=n.exec(e);)s.push({content:t[1].trim(),index:t.index});for(;t=a.exec(e);)s.push({content:t[1].trim(),index:t.index});return s.sort((function(e,t){return e.index-t.index})),s.map((function(e){return e.content}))}(e).map((function(e){return{word:e,hidden:!0}}))}}));r(t),W(0)}else r(null);var n}),[V,g]),Object(c.useEffect)((function(){var e=O.filter((function(e){return 0===e.repetitions})),t=new Date(D);t.setDate(t.getDate()+T);var n=O.filter((function(e){return e.repetitions>0&&e.due_date<=t}));F(0),W(0),x([].concat(Object(i.a)(e),Object(i.a)(n)).filter((function(e){return!N.includes(e.note.id)}))),console.log(D)}),[O,D,T,N]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.setPayload({path:"review/search/?query="+H,method:"GET",body:null,callback:function(e){!function(e){var t=e.map((function(e){var t=Object(l.a)(Object(l.a)({},e.note),{},{date_created:new Date(e.note.date_created),date_updated:new Date(e.note.date_updated)});return Object(l.a)(Object(l.a)({},e),{},{note:t,easiness:parseFloat(e.easiness),due_date:new Date(e.due_date),last_reviewed:new Date(e.last_reviewed)})}));p(t),console.log(t)}(e)}})},children:Object(a.jsx)("input",{className:"greenput",type:"text",placeholder:"Search for Deck",onChange:function(e){return Y(e.target.value)}})}),Object(a.jsxs)("div",{className:"review_bar",children:[Object(a.jsxs)("div",{children:["            ",Object(a.jsx)("input",{className:"greenput_tight",placeholder:"Advance Days",type:"text",onChange:function(e){return t=e.target.value,void(isNaN(t)||M(parseInt(t)));var t}})]}),Object(a.jsxs)("div",{children:["Deck: ",O.length]}),Object(a.jsxs)("div",{children:[" Due: ",g.length]}),Object(a.jsxs)("div",{children:["Done: ",N.length]}),Object(a.jsxs)("div",{children:["Cards: ",null!=s?Object(a.jsxs)(a.Fragment,{children:[U+1,"/",s.length]}):Object(a.jsx)(a.Fragment,{children:"None"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"main_buttons_wrapper",children:[Object(a.jsx)("div",{className:"button",onClick:function(){U>0&&W(U-1)},children:"Prev Card"}),Object(a.jsx)("div",{className:"button",onClick:function(){null!==s&&U+2<=s.length&&W(U+1)},children:"Next Card"}),Object(a.jsx)("div",{className:"button",onClick:function(){V-1>=0&&F(V-1)},children:"Prev Deck"}),Object(a.jsx)("div",{className:"button",onClick:function(){V+2<=g.length&&F(V+1)},children:"Next Deck"}),Object(a.jsx)("div",{className:"button",onClick:function(){return e.closeModal()},children:"Main"})]}),Object(a.jsx)("h1",{children:Object(a.jsx)($,{})}),Object(a.jsx)("pre",{children:j[U]}),null!=s&&U+1===s.length&&Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),null!=L&&e.setPayload({path:"review/memorize/",method:"POST",body:Object(l.a)(Object(l.a)({},g[V]),{},{quality:L}),callback:function(e){console.log(e),w((function(t){return[].concat(Object(i.a)(t),[parseInt(e.note.id)])}))}})},children:[Object(a.jsxs)("select",{className:"greenput_narrow",id:"quality",onChange:function(e){return function(e){q(""===e?null:parseInt(e))}(e.target.value)},children:[Object(a.jsx)("option",{value:"",children:"---"}),Object(a.jsx)("option",{value:"5",children:"Easy"}),Object(a.jsx)("option",{value:"4",children:"Correct with hessitation"}),Object(a.jsx)("option",{value:"3",children:"Correct but difficult"}),Object(a.jsx)("option",{value:"2",children:"Incorrect, but almost"}),Object(a.jsx)("option",{value:"0",children:"Incorrect, blackout"})]}),"\xa0",Object(a.jsx)("input",{className:"greenput_narrow",type:"submit",value:"Submit"})]})]})},D=(n(74),n(75));j.a.setAppElement("#root");var E=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),o=Object(u.a)(r,2),d=o[0],b=o[1],h=Object(c.useState)(!1),f=Object(u.a)(h,2),O=f[0],p=f[1],m=Object(c.useState)(!1),v=Object(u.a)(m,2),g=(v[0],v[1]),x=Object(c.useState)(!1),S=Object(u.a)(x,2),N=S[0],w=S[1],_=Object(c.useState)(!1),E=Object(u.a)(_,2),I=E[0],T=E[1],M=Object(c.useState)(""),P=Object(u.a)(M,2),A=P[0],L=P[1],q=Object(c.useState)(null),B=Object(u.a)(q,2),R=B[0],V=B[1],F=Object(c.useState)(null),G=Object(u.a)(F,2),J=G[0],U=G[1],W=Object(c.useState)(!1),K=Object(u.a)(W,2),z=K[0],H=K[1],Y=Object(c.useState)(""),Z=Object(u.a)(Y,2),$=Z[0],Q=Z[1],X=Object(c.useState)(null),ee=Object(u.a)(X,2),te=ee[0],ne=ee[1],ae=Object(c.useState)(!1),ce=Object(u.a)(ae,2),se=ce[0],re=ce[1],oe=Object(c.useState)(!1),ie=Object(u.a)(oe,2),le=ie[0],ue=ie[1],de=Object(c.useState)([]),je=Object(u.a)(de,2),be=je[0],he=je[1],fe=Object(c.useState)([]),Oe=Object(u.a)(fe,2),pe=Oe[0],me=Oe[1],ve={primary:"date_created",when:"after",date:null,order_by:"date_created",sort:"DESC"},ge=Object(c.useState)(ve),xe=Object(u.a)(ge,2),ye=xe[0],Se=xe[1],Ne=Object(c.useRef)(null),we=Object(c.useState)({path:"",method:"GET",body:null,callback:function(){return null}}),ke=Object(u.a)(we,2),_e=ke[0],Ce=ke[1];function De(e){!1===z?e():(Q("Warning! You have unsaved changes."),ne((function(){return function(){return e()}})))}function Ee(){J&&(w(!1),ue(!1),De((function(){s(J),U(null)})))}function Ie(){console.log("getting outlinks"),Ce({path:"notes/"+n+"/getOutlinks/",method:"GET",body:null,callback:function(e){console.log(e),me(e)}})}function Te(){var e={path:"notes/search/?query="+A,method:"GET",body:null,callback:function(e){console.log(e),function(e){var t=e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{date_created:new Date(e.date_created),date_updated:new Date(e.date_updated)})}));V(t)}(e)}};Se(ve),Ce(e),U(null)}function Me(e){return Object(a.jsx)("div",{children:null!==e&&e.map((function(e){var t=e.id==J?"selectedRow":"";return Object(a.jsx)("div",{className:"searchResult "+t,onClick:function(){J==e.id?U(null):U(e.id)},children:Object(a.jsxs)("div",{className:"searchResults_wrapper",children:[Object(a.jsx)("div",{className:"searchResultTitle",children:e.title}),Object(a.jsx)("div",{className:"searchResultDate",children:D(e[ye.order_by],"dd/mmm/yyyy")})]})})}))})}return Object(c.useEffect)((function(){if(console.log(n),console.log(O),O&&n){console.log("selected new post:"+n);var e={path:"notes/"+n+"/",method:"GET",body:null,callback:function(e){console.log("got a new result!"),b(e.content),Ce({path:"notes/"+n+"/getBacklinks/",method:"GET",body:null,callback:function(e){he(e)}}),Ie(),H(!1)}};Ce(e)}}),[n]),Object(c.useEffect)((function(){Ne.current&&Ne.current.flush(d)}),[d]),Object(c.useEffect)((function(){console.log(ye)}),[ye]),Object(c.useEffect)((function(){console.log("Safe Change Callback Set"),null!==te&&re(!0)}),[te]),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(k,{payload:_e,setPayload:Ce,setAuth:p,closeAction:function(){Ne.current&&Ne.current.focus()}}),Object(a.jsx)(y,{content:d,save:function(e,t){if(console.log("write function called"),null===n)var a={path:"notes/",method:"POST",body:{content:e}};else a={path:"notes/"+n+"/",method:"PUT",body:{content:e}};var c=Object(l.a)(Object(l.a)({},a),{},{callback:function(e){s(e.id),Ie(),H(!1),"number"===typeof e.id&&t(),console.log(e)}});Ce(c)},quit:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={path:"",method:"logout",body:"",callback:function(e){s(null),Ne.current&&Ne.current.flush(""),p(!1),g(!0)}};e?Ce(t):De((function(){Ce(t)}))},ref:Ne,changesCallback:H}),Object(a.jsx)(j.a,{isOpen:I,onRequestClose:function(){},className:"DarkModal",overlayClassName:"OpaqueOverlay",children:Object(a.jsx)(C,{setPayload:Ce,closeModal:function(){T(!1),Ne.current&&Ne.current.focus()},updatePostId:s,backLinks:[].concat(Object(i.a)(pe),Object(i.a)(be))})}),Object(a.jsx)(j.a,{isOpen:N,onRequestClose:function(){w(!1),Ne.current&&Ne.current.focus()},className:"SearchModal",overlayClassName:"SearchOverlay",children:Object(a.jsxs)("div",{className:"searchBox",children:[Object(a.jsxs)("form",{action:"#",autoComplete:"off",onSubmit:function(e){e.preventDefault(),Te()},children:[Object(a.jsx)("input",{className:"greenput",name:"query",autoFocus:!0,onChange:function(e){return L(e.target.value)}}),Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return Se(Object(l.a)(Object(l.a)({},ye),{},{primary:e.target.value}))},children:[Object(a.jsx)("option",{value:"date_created",children:"Created"}),Object(a.jsx)("option",{value:"date_updated",children:"Updated"})]}),Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return Se(Object(l.a)(Object(l.a)({},ye),{},{when:e.target.value}))},children:[Object(a.jsx)("option",{value:"after",children:"After"}),Object(a.jsx)("option",{value:"before",children:"Before"})]}),Object(a.jsx)("input",{className:"greenput_narrow",type:"date",onChange:function(e){return Se(Object(l.a)(Object(l.a)({},ye),{},{date:""===e.target.value?null:new Date(e.target.value)}))}}),"\xa0 :: \xa0",Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return Se(Object(l.a)(Object(l.a)({},ye),{},{order_by:e.target.value}))},children:[Object(a.jsx)("option",{value:"date_created",children:"Created"}),Object(a.jsx)("option",{value:"date_updated",children:"Updated"})]}),Object(a.jsxs)("select",{className:"greenput_narrow",onChange:function(e){return Se(Object(l.a)(Object(l.a)({},ye),{},{sort:e.target.value}))},children:[Object(a.jsx)("option",{value:"DESC",children:"DESC"}),Object(a.jsx)("option",{value:"ASC",children:"ASC"})]})]}),null!==J&&Object(a.jsxs)("div",{className:"searchButtonsWrapper",children:[Object(a.jsx)("div",{className:"button_open button",onClick:Ee,children:"Open"}),Object(a.jsx)("div",{className:"button_insert button",onClick:function(){if(R){var e=R.filter((function(e){return e.id==J}))[0],t="["+e.title+"](VID="+e.id+")";Ne.current&&(Ne.current.insert(t),w(!1))}},children:"Insert"}),Object(a.jsx)("div",{className:"button_delete button",onClick:function(){var e={path:"notes/"+J+"/delete/",method:"GET",body:null,callback:function(e){!1!==e.delete&&null!==R&&(V(R.filter((function(t){return t.id!=e.delete}))),U(null))}};Q("Are you sure you want to delete this forever?"),ne((function(){return function(){Ce(e)}}))},children:"Delete"})]}),Object(a.jsx)("div",{className:"searchResults",children:null!==R&&R.some((function(e){return e}))&&Me(function(e){var t=e.filter((function(e){return null===ye.date||("before"===ye.when?e[ye.order_by]<=ye.date:"after"===ye.when?e[ye.order_by]>=ye.date:void 0)}));return t.sort((function(e,t){return"ASC"===ye.sort?e[ye.order_by].getTime()-t[ye.order_by].getTime():t[ye.order_by].getTime()-e[ye.order_by].getTime()})),t}(R))}),Object(a.jsx)("div",{className:"spacer"}),Object(a.jsx)("div",{className:"searchPreview",children:Object(a.jsxs)("pre",{children:[null!==J&&null!==R&&R.filter((function(e){return e.id==J})).map((function(e){return e.content})),null===J&&Object(a.jsx)("span",{children:"search for a document to preview it here"})]})})]})}),Object(a.jsx)(j.a,{isOpen:se,className:"SearchModal",overlayClassName:"SearchOverlay",children:Object(a.jsxs)("div",{className:"alertBox",children:[Object(a.jsx)("span",{className:"alertText",children:$}),Object(a.jsx)("div",{className:"button",onClick:function(){null!==te&&te(),re(!1)},children:"Override"}),Object(a.jsx)("div",{className:"button",onClick:function(){return re(!1)},children:"Abort"})]})}),Object(a.jsx)(j.a,{isOpen:le,className:"SearchModal",overlayClassName:"SearchOverlay",onRequestClose:function(){ue(!1),Ne.current&&Ne.current.focus()},children:Object(a.jsxs)("div",{className:"IoLinks_wrapper",children:[Object(a.jsx)("div",{className:"IoLinks_navigation",children:J&&null!==be&&null!==pe&&(be.filter((function(e){return e.id==J})).length>0||pe.filter((function(e){return e.id==J})).length>0)&&Object(a.jsx)("div",{className:"button",onClick:Ee,children:"Open"})}),Object(a.jsxs)("div",{className:"IoLinks_incoming",children:[Object(a.jsx)("span",{className:"title",children:"Incoming Links"}),null!==be&&Me(be)]}),Object(a.jsxs)("div",{className:"IoLinks_outgoing",children:[Object(a.jsx)("span",{className:"title",children:"Outgoing Links"}),null!==pe&&Me(pe)]}),Object(a.jsx)("div",{className:"IoLinks_preview",children:Object(a.jsxs)("pre",{children:[J&&be&&be.filter((function(e){return e.id==J})).map((function(e){return e.content})),J&&pe&&pe.filter((function(e){return e.id==J})).map((function(e){return e.content}))]})})]})}),Object(a.jsxs)("div",{className:"main_buttons_wrapper",children:[Object(a.jsx)("div",{className:"button",onClick:function(){return w(!0)},children:"Explorer"}),Object(a.jsx)("div",{className:"button",onClick:function(){return T(!0)},children:"Review"}),Object(a.jsx)("div",{className:"button",onClick:function(){De((function(){s(null),he([]),me([]),Ne.current&&Ne.current.flush(""),H(!1)}))},children:"New File"}),Object(a.jsx)("div",{className:"button",onClick:function(){return ue(!0)},children:Object(a.jsxs)("span",{style:be.length>0||pe.length>0?{color:"red",fontWeight:"bold"}:{},children:["Connections ",be.length,"/",pe.length]})})]})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},T=n(10),M=Object(T.b)("auth/setUsername"),P=Object(T.b)("auth/setPassword"),A=Object(T.b)("auth/setModalOpan"),L=Object(T.c)({username:"",password:"",modalOpen:!1},(function(e){return e.addCase(M,(function(e,t){return Object(l.a)(Object(l.a)({},e),{},{username:t.payload})})).addCase(P,(function(e,t){return Object(l.a)(Object(l.a)({},e),{},{password:t.payload})})).addCase(A,(function(e,t){return Object(l.a)(Object(l.a)({},e),{},{modalOpen:t.payload})}))})),q=Object(T.a)({reducer:{payload:L}}),B=n(40),R=n(42),V=n(5);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(B.a,{store:q,children:Object(a.jsx)(R.a,{children:Object(a.jsx)(V.c,{children:Object(a.jsx)(V.a,{path:"/",children:Object(a.jsx)(E,{})})})})})}),document.getElementById("root")),I()}},[[78,1,2]]]);
//# sourceMappingURL=main.e243a860.chunk.js.map