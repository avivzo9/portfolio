(function(e){function t(t){for(var n,s,r=t[0],c=t[1],l=t[2],m=0,p=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3ed1":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s={name:"app"},r=s,c=a("2877"),l=Object(c["a"])(r,i,o,!1,null,null,null),u=l.exports,m=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"container"},[a("div",{staticClass:"Hero-container container"}),a("div",{staticClass:"sub-container"},[a("specialities"),a("portfolio"),a("about"),a("portFooter")],1),a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticClass:"contact flex",style:{"max-width":e.menuWidth}},[a("h1",[e._v("Contact Me")]),a("div",{staticClass:"flex"},[a("p",{directives:[{name:"clipboard",rawName:"v-clipboard",value:"avivzo9@gmail.com",expression:"'avivzo9@gmail.com'"}],on:{click:function(t){return t.stopPropagation(),e.textCopy("E-mail")}}},[e._v(" E-mail: "),a("span",[e._v("avivzo9@gmail.com")])]),a("p",{directives:[{name:"clipboard",rawName:"v-clipboard",value:"0525776533",expression:"'0525776533'"}],on:{click:function(t){return t.stopPropagation(),e.textCopy("Phone")}}},[e._v(" Phone: "),a("span",[e._v("0525776533")])])]),a("form",{on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[a("h4",[e._v("Send E-mail:")]),a("h4",[e._v("E-mail")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email.from,expression:"email.from"}],staticClass:"email-form",attrs:{type:"email",placeholder:"name@example.com",required:""},domProps:{value:e.email.from},on:{input:function(t){t.target.composing||e.$set(e.email,"from",t.target.value)}}}),a("h4",[e._v("Subject")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email.subject,expression:"email.subject"}],staticClass:"email-form",attrs:{type:"text",placeholder:"Subject",required:""},domProps:{value:e.email.subject},on:{input:function(t){t.target.composing||e.$set(e.email,"subject",t.target.value)}}}),a("h4",[e._v("Message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.email.msg,expression:"email.msg"}],staticClass:"email-form p-2",attrs:{placeholder:"Message",rows:"5",required:""},domProps:{value:e.email.msg},on:{input:function(t){t.target.composing||e.$set(e.email,"msg",t.target.value)}}}),e._v(" "),e._m(0)])]),a("div",{class:e.menuButtomClass,attrs:{id:"at",name:"at"}},[a("font-awesome-icon",{staticClass:"fa fa-at",attrs:{icon:"at",id:"at",name:"at"},on:{click:function(t){e.isOpen=!e.isOpen}}})],1)])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex"},[a("button",{staticClass:"btn btn-primary m-2 btn-send"},[e._v("Send")])])}],d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"about-container sub-container"},[n("h1",{staticClass:"font-header",attrs:{id:"about"}},[e._v("About me")]),n("div",{staticClass:"about-content flex"},[n("img",{attrs:{src:a("c933"),alt:""}}),n("div",{staticClass:"flex"},[n("p",[e._v("Full-Stack\\Frontend Developer")]),n("h4",[e._v("Summery")]),n("p",[e._v(" Hello!"),n("br"),e._v(" I'm Aviv Zohar, Full-Stack/Frontend Web Developer specializing in advanced frameworks and technologies."),n("br"),e._v(" Seeking to take part in interesting and challenging projects."),n("br"),e._v(" Open to work. ")])])])])}],h={},g=h,b=Object(c["a"])(g,d,v,!1,null,null,null),_=b.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"footer-container sub-container"},[a("div",{staticClass:"flex"},[a("a",{attrs:{href:"https://www.facebook.com/aviv19735",target:"_blank"}},[a("font-awesome-icon",{staticClass:"link",attrs:{icon:["fab","facebook-f"]}})],1),a("a",{attrs:{href:"https://www.linkedin.com/in/aviv-zohar-25011120b/",target:"_blank"}},[a("font-awesome-icon",{staticClass:"link",attrs:{icon:["fab","linkedin"]}})],1),a("a",{attrs:{href:"https://github.com/avivzo9",target:"_blank"}},[a("font-awesome-icon",{staticClass:"link",attrs:{icon:["fab","github"]}})],1),a("a",{attrs:{href:"https://www.instagram.com/avivzo9/",target:"_blank"}},[a("font-awesome-icon",{staticClass:"link",attrs:{icon:["fab","instagram"]}})],1),a("a",{attrs:{href:"https://twitter.com/AvivZohar4",target:"_blank"}},[a("font-awesome-icon",{staticClass:"link",attrs:{icon:["fab","twitter"]}})],1),a("a",{attrs:{href:"https://stackexchange.com/users/21417527/aviv-zohar",target:"_blank"}},[a("font-awesome-icon",{staticClass:"link",attrs:{icon:["fab","stack-exchange"]}})],1)]),a("small",[e._v("All rights reserved, Aviv Zohar 2021 ©")])])},k=[],C={},y=C,x=Object(c["a"])(y,w,k,!1,null,null,null),j=x.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"portfolio-container sub-container"},[a("h1",{staticClass:"font-header",attrs:{id:"projects"}},[e._v("projects")]),a("p",{staticClass:"small-header"},[e._v("My projects")]),a("ul",e._l(e.links,(function(t){return a("li",{key:t._id},[a("a",{staticClass:"link",attrs:{target:"_blank",href:t.url}},[a("h3",[e._v(e._s(t.name))]),a("div",{staticClass:"flex"},[a("img",{attrs:{src:t.img,alt:""}})]),a("p",[e._v(e._s(t.desc))])])])})),0)])},S=[],E=(a("99af"),{sendEmail:z,getLinks:$}),M=[{_id:P(),name:"Jukify",url:"https://jukify-music-app.herokuapp.com",img:"https://jukify-music-app.herokuapp.com/img/jukify-logo.34abe248.png",desc:"Create your own station and share it live worldwide!"},{_id:P(),name:"Meme-gen",url:"https://avivzo9.github.io/Meme-gen/",img:"https://avivzo9.github.io/Meme-gen/img/LOGO.png",desc:"Create your own MEME!"},{_id:P(),name:"Minesweeper",url:"https://avivzo9.github.io/MineSweeper/",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Minesweeper_flag.svg/1024px-Minesweeper_flag.svg.png",desc:"My version of Minsweeper (JS vanilla)."}];function P(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}function $(){return M}function z(e){window.open("https://mail.google.com/mail/?view=cm&fs=1&to=".concat(e.from,"&su=").concat(e.subject,"&body=").concat(e.msg))}var A={name:"portfolio",computed:{links:function(){return E.getLinks()}}},F=A,J=Object(c["a"])(F,O,S,!1,null,null,null),N=J.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"spec-container sub-container"},[a("h1",{staticClass:"font-header",attrs:{id:"spec"}},[e._v("Specialities")]),a("p",{staticClass:"small-header"},[e._v("Full-Stack\\Frontend Developer")]),a("ul",[a("li",[a("font-awesome-icon",{staticClass:"fa fa-star",attrs:{icon:"star"}}),a("h3",[e._v("Hobbies")]),a("p",[e._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit.")])],1),a("li",[a("font-awesome-icon",{staticClass:"fa fa-code",attrs:{icon:"code"}}),a("h3",[e._v("Programing experience")]),e._m(0)],1),a("li",[a("font-awesome-icon",{staticClass:"fa fa-university",attrs:{icon:"university"}}),a("h3",[e._v("Education")]),a("p",[e._v(" Graduate of Coding-Academy - An intensive coding bootcamp, from Jan'20 - Apr'20. Built several projects. ")])],1)])])},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" React, Redux, VueJS, VueX, angularJS,"),a("br"),e._v(" mongoDB, mySQL, NodeJS, Sass. ")])}],B={name:"specialities"},q=B,H=Object(c["a"])(q,D,L,!1,null,null,null),T=H.exports,W=a("c28b"),Z=a.n(W),G={name:"home",data:function(){return{isOpen:!1,email:{from:"",subject:"",msg:""}}},methods:{onClickOutside:function(e){"at"!==e.target.id&&"at"!==e.target.parentElement.id&&(this.isOpen=!1)},sendEmail:function(){E.sendEmail(this.email)},textCopy:function(e){console.log("copied!"),this.$notify({title:"Success!",message:"".concat(e," copied to clipboard!"),duration:2e3})}},computed:{menuWidth:function(){return this.isOpen?"100vw":"0"},menuButtomClass:function(){return this.isOpen?"at-container-open flex":"at-container-closed flex"}},components:{specialities:T,portfolio:N,about:_,portFooter:j,portService:E},directives:{clickOutside:Z.a.directive}},R=G,V=Object(c["a"])(R,p,f,!1,null,null,null),I=V.exports;n["default"].use(m["a"]);var Q=[{path:"/",name:"home",component:I}],X=new m["a"]({routes:Q}),K=X,U=a("2f62");n["default"].use(U["a"]);var Y=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ee=(a("3ed1"),a("ecee")),te=a("ad3d"),ae=a("c074"),ne=a("f2d1"),ie=a("4ae6"),oe=a.n(ie),se=a("5c96"),re=a.n(se);a("0fae");ee["c"].add(ae["d"],ne["e"],ne["f"],ae["b"],ae["e"],ne["a"],ne["c"],ne["d"],ne["b"],ae["c"],ae["a"]),n["default"].component("font-awesome-icon",te["a"]),n["default"].config.productionTip=!1,n["default"].use(Z.a),n["default"].use(oe.a),n["default"].use(re.a),new n["default"]({router:K,store:Y,render:function(e){return e(u)}}).$mount("#app")},c933:function(e,t,a){e.exports=a.p+"img/my-photo.df9c9bf6.jpg"}});
//# sourceMappingURL=app.8bbb9790.js.map