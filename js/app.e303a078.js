(function(e){function t(t){for(var a,c,o=t[0],u=t[1],i=t[2],b=0,m=[];b<o.length;b++)c=o[b],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&m.push(s[c][0]),s[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={app:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"200e":function(e,t,n){"use strict";n("6abb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function s(e,t,n,s,r,c){var o=Object(a["t"])("router-view");return Object(a["o"])(),Object(a["d"])(o,{userName:s.userName,onAddUserName:s.newUser},null,8,["userName","onAddUserName"])}var r={name:"App",setup:function(){var e=Object(a["r"])(""),t=function(t){e.value=t};return{newUser:t,userName:e}}};n("c398");r.render=s;var c=r,o=n("6c02"),u=(n("b0c0"),{class:"home"}),i=Object(a["f"])("header",null,[Object(a["f"])("h1",{class:"logo"},"vue chats")],-1),l={class:"message-container"},b={key:0,class:"connection"},m={key:1,class:"broad-message"},d={class:"message-text"},f={class:"message-info"},p={key:2,class:"your-message"},O={class:"message-text"},j={class:"message-info"},g={class:"message-control"},v={class:"form-control"},y=Object(a["f"])("button",{class:"send-message"},[Object(a["f"])("i",{class:"fa fa-paper-plane","aria-hidden":"true"})],-1);function h(e,t,n,s,r,c){return Object(a["o"])(),Object(a["d"])("div",u,[i,Object(a["f"])("section",l,[Object(a["f"])("ul",null,[(Object(a["o"])(!0),Object(a["d"])(a["a"],null,Object(a["s"])(s.messageDate,(function(e,t){return Object(a["o"])(),Object(a["d"])("li",{key:t},[e.connection?(Object(a["o"])(),Object(a["d"])("div",b,[Object(a["f"])("span",null,Object(a["v"])(e.connection.message)+" at "+Object(a["v"])(e.connection.time),1)])):Object(a["e"])("",!0),e.broadMessage?(Object(a["o"])(),Object(a["d"])("div",m,[Object(a["f"])("span",d,Object(a["v"])(e.broadMessage.message),1),Object(a["f"])("span",f,Object(a["v"])(e.broadMessage.name)+" at "+Object(a["v"])(e.broadMessage.time),1)])):Object(a["e"])("",!0),e.yourMessage?(Object(a["o"])(),Object(a["d"])("div",p,[Object(a["f"])("span",O,Object(a["v"])(e.yourMessage.message),1),Object(a["f"])("span",j,Object(a["v"])(e.yourMessage.name)+" at "+Object(a["v"])(e.yourMessage.time),1)])):Object(a["e"])("",!0)])})),128))])]),Object(a["f"])("section",g,[Object(a["f"])("form",{id:"form",onSubmit:t[2]||(t[2]=Object(a["A"])((function(){return s.sendMessage&&s.sendMessage.apply(s,arguments)}),["prevent"]))},[Object(a["f"])("div",v,[Object(a["z"])(Object(a["f"])("input",{type:"text",placeholder:"Send","onUpdate:modelValue":t[1]||(t[1]=function(e){return s.message=e})},null,512),[[a["x"],s.message]]),y])],32)])])}var w=n("1da1"),M=(n("96cf"),n("99af"),n("af0d")),x={name:"Home",props:["userName"],setup:function(e){var t,n=new M["a"]("db"),s=Object(o["c"])(),r=Object(a["r"])(""),c=Object(a["r"])(e.userName),u=new Date,i=Object(a["r"])([]),l=function(e){t=new WebSocket("ws://localhost:3000"),t.addEventListener("open",(function(){t.send(JSON.stringify({event:"Creating_connection",payload:{userName:e,time:"".concat(u.getHours(),".").concat(u.getMinutes())}}))})),t.addEventListener("message",(function(t){try{var n=JSON.parse(t.data);"User_connected"==n.event?i.value.push({connection:{message:n.payload.message,time:n.payload.time}}):"broad_message"==n.event?i.value.push({broadMessage:{name:e,message:n.payload.message,time:n.payload.time}}):"your_message"==n.event&&i.value.push({yourMessage:{name:e,message:n.payload.message,time:n.payload.time}})}catch(a){console.log(a)}}))};""==c.value?Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.collection("users").get();case 2:t=e.sent,0!=t.length?(c.value=t[0].name,l(c.value)):s.push({name:"Signup"});case 4:case"end":return e.stop()}}),e)})))():l(c.value);var b=function(){t.send(JSON.stringify({event:"User_messsage",payload:{userName:c.value,message:r.value,time:"".concat(u.getHours(),".").concat(u.getMinutes())}}))};return Object(a["y"])(i.value,(function(){n.collection("messages").add({data:i._rawValue})})),Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.collection("messages").get();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))(),{message:r,messageDate:i,sendMessage:b}}};n("ab96");x.render=h;var N=x,S={class:"signup"},_=Object(a["f"])("div",{class:"form-control"},[Object(a["f"])("h1",null,"signup")],-1),k={class:"form-control"},U=Object(a["f"])("label",null,"name",-1),P=Object(a["f"])("div",{class:"form-control"},[Object(a["f"])("button",{class:"submit-btn"},"submit")],-1);function A(e,t,n,s,r,c){return Object(a["o"])(),Object(a["d"])("div",S,[Object(a["f"])("form",{id:"form",onSubmit:t[2]||(t[2]=Object(a["A"])((function(){return s.submitForm&&s.submitForm.apply(s,arguments)}),["prevent"]))},[_,Object(a["f"])("div",k,[U,Object(a["z"])(Object(a["f"])("input",{type:"text",placeholder:"Enter your name","onUpdate:modelValue":t[1]||(t[1]=function(e){return s.nameModel=e})},null,512),[[a["x"],s.nameModel]])]),P],32)])}var H={name:"signup",emits:["addUserName"],props:["userName"],setup:function(e,t){var n=t.emit,s=new M["a"]("db"),r=Object(a["r"])(""),c=Object(o["c"])(),u=function(){s.collection("users").get().then((function(e){0===e.length&&(s.collection("users").add({id:1,name:r.value}),n("addUserName",r.value))}))};return Object(a["y"])(e,(function(){c.push({name:"Home",params:r})})),{nameModel:r,submitForm:u}}};n("200e");H.render=A;var J=H,R=[{path:"/",name:"Home",component:N},{path:"/signup",name:"Signup",component:J}],D=Object(o["a"])({base:"/vuechats/",history:Object(o["b"])("/"),routes:R}),E=D,F=n("5502"),V=Object(F["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(c).use(V).use(E).mount("#app")},"6abb":function(e,t,n){},7539:function(e,t,n){},ab96:function(e,t,n){"use strict";n("b9e0")},b9e0:function(e,t,n){},c398:function(e,t,n){"use strict";n("7539")}});
//# sourceMappingURL=app.e303a078.js.map