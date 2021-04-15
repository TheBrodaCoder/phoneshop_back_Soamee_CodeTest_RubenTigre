(this.webpackJsonpphoneshop_front=this.webpackJsonpphoneshop_front||[]).push([[0],{26:function(A,e,c){var t=c(37),n="/phones";A.exports={getAll:function(){return t.get(n)},addPhone:function(A){return t.post(n,A)},popPhone:function(A){return t.delete("".concat(n,"/").concat(A))},updatePhone:function(A,e){return t.put("".concat(n,"/").concat(A),e)}}},32:function(A,e,c){},33:function(A,e,c){},34:function(A,e,c){},36:function(A,e,c){},56:function(A,e,c){},57:function(A,e,c){},58:function(A,e,c){},59:function(A,e,c){},60:function(A,e,c){},66:function(A,e,c){"use strict";c.r(e);var t=c(1),n=c.n(t),s=c(25),H=c.n(s),a=(c(32),c(33),c(11)),i=c(2),o=c.p+"static/media/logo.35ff5841.png",r=(c(34),c.p+"static/media/headimg.a76b56ee.jpg"),l=c(0),d=function(A){return Object(l.jsxs)("div",{className:"phoneshop_head",style:{backgroundImage:{logo:r}},children:[Object(l.jsx)("img",{alt:"headImg",src:r}),Object(l.jsx)("h1",{children:"Tiger Shop!"})]})},j=c.p+"static/media/myself.bf3dc290.jpeg",b=(c(36),function(){return Object(l.jsxs)("div",{className:"about_div",children:[Object(l.jsx)("div",{className:"about_text",children:Object(l.jsxs)("p",{children:["This webpage uses React to create every single thing that you see in it. It makes it more flexible in case we need to scale this to a large shop. In fact, in this code test for Soamee, i got no required to make a functional shopping cart, but it will be easily added in need.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"The backend serves the react app to GET request on '/'. The react app uses some services we create to request the backend for a list of phones. Also, is not implemented any form to add phones to the PhoneList, but you can make request (there is some of them stored in backend) using the REST client of visual studio code.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Hope this fulfill your hopes on me. Anyway this was a great train to my future and i love to coding this webApp."]})}),Object(l.jsxs)("div",{className:"about_sidebar",children:[Object(l.jsx)("img",{alt:"myself.jpg",src:j}),Object(l.jsxs)("div",{className:"about_sidebar_text",children:["Ruben Tigre is a Junior Full Stack developer with experience in Escape Rooms. Maybe he can organize one when we are back in the office.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"644727176"})]})]})]})}),h=c(10),g=c(26),u=c.n(g),p=(c(56),function(A){var e=A.spec,c=A.value;return Object(l.jsxs)("tr",{className:"ModelLine_tr",children:[Object(l.jsx)("td",{className:"spec_td",children:e}),Object(l.jsx)("td",{className:"value_td",children:c})]})}),O=function(A){var e=A.phone,c=A.displayed,t=A.handleExit,n=Object.entries(e).filter((function(A){return"description"!==A[0]}));return Object(l.jsx)(l.Fragment,{children:c?Object(l.jsx)("div",{className:"ModelPhone_block",onClick:t,children:Object(l.jsxs)("div",{className:"ModelPhone_inner",children:[Object(l.jsxs)("div",{className:"ModelPhone_Top",children:[Object(l.jsx)("div",{className:"ModelPhone_Img",children:Object(l.jsx)("img",{alt:"".concat(e.name),src:e.imageFileName})}),Object(l.jsx)("div",{className:"ModelPhone_Table",children:Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:n.map((function(A){return Object(l.jsx)(p,{spec:A[0],value:A[1]},A[0])}))})})})]}),Object(l.jsxs)("div",{className:"ModelPhone_Description",children:[Object(l.jsx)("p",{children:"Description:"}),Object(l.jsx)("div",{className:"description",children:e.description})]})]})}):null})},f=(c(57),function(A){var e=A.phone,c=A.handleDisplay;return Object(l.jsxs)("div",{className:"phone_block",onClick:c,children:[Object(l.jsx)("img",{alt:"".concat(e.name),src:e.imageFileName}),Object(l.jsxs)("div",{className:"phone_text",children:[Object(l.jsx)("div",{className:"phone_text_left",children:e.name}),Object(l.jsx)("div",{className:"phone_text_right",children:"".concat(e.price,"\u20ac")})]})]})}),w=(c(58),function(A){var e=A.phoneData,c=A.handleDisplay;return Object(l.jsx)("div",{className:"phonelist_div",children:e.map((function(A){return Object(l.jsxs)("div",{children:[" ",Object(l.jsx)(f,{phone:A,handleDisplay:function(){return c(A.id)}},"".concat(A.name,"_").concat(A.id))," "]},"".concat(A.name,"_").concat(A.id))}))})}),N=(c(59),function(){var A=Object(t.useState)([]),e=Object(h.a)(A,2),c=e[0],n=e[1],s=Object(t.useState)(!1),H=Object(h.a)(s,2),a=H[0],i=H[1],o=Object(t.useState)(!1),r=Object(h.a)(o,2),d=r[0],j=r[1],b=Object(t.useState)({}),g=Object(h.a)(b,2),p=g[0],f=g[1];Object(t.useEffect)((function(){u.a.getAll().then((function(A){n(A.data),setTimeout((function(){i((function(A){return!A}))}),1500)})).catch((function(A){console.log("error at grab phones",A)}))}),[]);return Object(l.jsxs)("div",{className:"home_div",children:[a?Object(l.jsx)("div",{className:"home_phones",children:Object(l.jsx)(w,{phoneData:c,handleDisplay:function(A){console.log(A);var e=c.find((function(e){return e.id===A}));f(e),j(!0)}})}):Object(l.jsx)("div",{className:"loading"}),Object(l.jsx)(O,{phone:p,displayed:d,handleExit:function(){j(!1),f({})}})]})}),B=c.p+"static/media/github.77a97279.png",v=(c(60),function(){return Object(l.jsxs)("div",{className:"Footer_block",children:[Object(l.jsx)("div",{className:"Footer_left",children:"Ruben Tigre 2021"}),Object(l.jsxs)("div",{className:"Footer_right",children:[Object(l.jsx)("a",{href:"https://github.com/TheBrodaCoder",children:Object(l.jsx)("img",{alt:"GitHub logo",src:B})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/ruben-alejandro-tigre-rengel-20b894116/",children:Object(l.jsx)("img",{alt:"Linkedin logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABKNAAASjQEphQ1dAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvFQTFRF////AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3dPNe8AAAAPp0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMU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"})})]})]})});var m=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsxs)(a.a,{children:[Object(l.jsxs)("div",{className:"NavBar",children:[Object(l.jsx)("div",{className:"NavBar_left",children:Object(l.jsx)("img",{alt:"logo",src:o})}),Object(l.jsx)("div",{className:"NavBar_right",children:Object(l.jsxs)("div",{className:"navBar_right_links",children:[Object(l.jsx)(a.b,{exact:"true",to:"/",children:"Home"}),Object(l.jsx)(a.b,{to:"/about",children:"About"})]})})]}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/about",children:Object(l.jsx)("div",{className:"about_block",children:Object(l.jsx)(b,{})})}),Object(l.jsx)(i.a,{exact:!0,path:"/",children:Object(l.jsx)("div",{className:"home_block",children:Object(l.jsx)(N,{})})})]})]}),Object(l.jsx)(v,{})]})};H.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d277c8bf.chunk.js.map