(this["webpackJsonpcode-with-gg"]=this["webpackJsonpcode-with-gg"]||[]).push([[0],{357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(84),n(22)),l=n(61),d=n.n(l),u=n(62),m=n(63),s=n.n(m),p=n(389),h=n(387),f=function(e){var t=e.file,n=Object(a.useState)(""),o=Object(i.a)(n,2),c=o[0],l=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){l(e)}))}),[t]),""===c?r.a.createElement(h.a,{in:!0,style:{transitionDelay:""!==c?"800ms":"0ms"},unmountOnExit:!0},r.a.createElement("div",null,r.a.createElement(p.a,{color:"inherit",size:20,thickness:6})," ","Loading...")):r.a.createElement(s.a,{innerHTML:!0},Object(u.renderToString)(r.a.createElement(d.a,{source:c,className:"code-markdown",sourcePos:!0,includeNodeIndex:!0,linkTarget:"_blank"})))},E=n(392),g=n(4),b=n(390),O=n(404),v=n(391),k=n(393),y=n(396),w=n(69),j=n.n(w),x=n(70),C=n.n(x),N=n(394),S=n(395),L=n(68),B=Object(g.a)({root:{minWidth:"32px"}})(b.a),T=Object(g.a)({root:{margin:0,paddingTop:0,paddingBottom:0}})(O.a),W=Object(g.a)({root:{margin:0,paddingTop:0,paddingBottom:0}})(v.a),J=Object(E.a)((function(e){return{sidebar:{padding:"16px",paddingLeft:0,minWidth:"320px"}}})),G=function(e){var t=e.children,n=e.folderName,o=e.depth,c=Object(a.useState)(!1),l=Object(i.a)(c,2),d=l[0],u=l[1];return r.a.createElement(W,{component:"nav","aria-labelledby":"nested-list-subheader"},r.a.createElement(T,{button:!0,onClick:function(){return u(!d)},style:{paddingLeft:"".concat(16*o,"px")}},r.a.createElement(B,null,r.a.createElement(j.a,null)),r.a.createElement(k.a,{primary:n}),d?r.a.createElement(N.a,null):r.a.createElement(S.a,null)),r.a.createElement(y.a,{in:d,timeout:"auto",unmountOnExit:!0},t))},I=function(e){var t=e.filepath,n=e.filename,a=e.setCurrentOpen,o=e.depth;return r.a.createElement(W,{component:"div",disablePadding:!0},r.a.createElement(T,{button:!0,onClick:function(){return a(t)},style:{paddingLeft:"".concat(16*o,"px")}},r.a.createElement(B,null,r.a.createElement(C.a,null)),r.a.createElement(k.a,{primary:n})))},P=function(e){var t=e.setCurrentOpen,n=J();return r.a.createElement("div",{className:n.sidebar},function e(t,n,a){return t.map((function(t){return"folder"===t.type?r.a.createElement(G,{folderName:t.name,key:t.path,depth:a+1},e(t.children,n,a+1)):r.a.createElement(I,{filename:t.name,filepath:t.path,setCurrentOpen:n,key:t.path,depth:a+1})}))}(L.children,t,0))},z=n(401),D=n(402),H=n(403),M=n(71),R=n.n(M),U=n(400),$=n(398),_=n(399),q=n(40),A=n(397),F=n(15),K=Object(E.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},code:{scroll:"overflow",paddingTop:"16px"},menuButton:{marginRight:e.spacing(2)}}}));var Q=function(){var e=K(),t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1],l=r.a.useState(!1),d=Object(i.a)(l,2),u=d[0],m=d[1],s=Object(F.a)(),p=Object(A.a)(s.breakpoints.down("md"));return r.a.createElement("div",{className:e.root},r.a.createElement($.a,{position:"sticky",color:"inherit"},r.a.createElement(_.a,{variant:"dense"},r.a.createElement(U.a,{edge:"start",onClick:function(){return m(!0)},className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(R.a,null)),r.a.createElement(q.a,{variant:"h6",color:"inherit"},"Code With GG"))),r.a.createElement(H.a,{anchor:p?"top":"left",open:u,onClose:function(){return m(!1)},onOpen:function(){return m(!0)}},r.a.createElement(P,{setCurrentOpen:function(e){m(!1),c(e)}})),r.a.createElement(z.a,{className:e.code},r.a.createElement(D.a,{style:{padding:"16px"}},""!==o?r.a.createElement(f,{file:"https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/geetesh-gupta/code-with-gg/master/"+o}):"Use the sidebar to open a code")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e){e.exports=JSON.parse('{"children":[{"children":[{"name":"LCS.md","path":"codes/dp/LCS.md","type":"file"}],"name":"dp","path":"codes/dp","type":"folder"}],"name":"codes","path":"codes","type":"folder"}')},79:function(e,t,n){e.exports=n(357)},84:function(e,t,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.4ac1e6ed.chunk.js.map