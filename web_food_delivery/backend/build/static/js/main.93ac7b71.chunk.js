(this.webpackJsonpawaproject=this.webpackJsonpawaproject||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={menuView:"RestaurantDetailView_menuView___zFXT",shoppingcart:"RestaurantDetailView_shoppingcart__15pnV",shoppingcartContainer:"RestaurantDetailView_shoppingcartContainer__2SKn_",product:"RestaurantDetailView_product__2GEe3",header:"RestaurantDetailView_header__1yp4J",commonView:"RestaurantDetailView_commonView__1WOeB",button:"RestaurantDetailView_button__2ttmc",image:"RestaurantDetailView_image__1blJz",restaurantInfo:"RestaurantDetailView_restaurantInfo__i4Yit",restaurantImage:"RestaurantDetailView_restaurantImage__2snOH",menuInfo:"RestaurantDetailView_menuInfo__89DEH",menuImage:"RestaurantDetailView_menuImage__1OkRe"}},,function(e,t,n){e.exports={product:"RestaurantUi_product__pXt8W",header:"RestaurantUi_header__2mDFU",image:"RestaurantUi_image__2AJnh"}},function(e,t,n){e.exports={product:"RestaurantList_product__2lHsX",header:"RestaurantList_header__2Gn4a",image:"RestaurantList_image__13Vgk"}},,,function(e,t,n){e.exports={container:"OrderStatus_container__3Y75s",text:"OrderStatus_text__x9rUj"}},function(e,t,n){e.exports={image:"CreateMenu_image__2ovIE",menuimage:"CreateMenu_menuimage__2IMCB",menu:"CreateMenu_menu__ERy8y"}},,,function(e,t,n){e.exports={image:"CreateRestaurant_image__1EzWp"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(16),s=n.n(c),i=(n(23),n(24),n(5)),j=n(0);function o(){var e=localStorage.getItem("status");return localStorage.clear(),localStorage.setItem("status",e),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"LOGIN"}),Object(j.jsx)("h3",{children:"LOGIN OR SIGN UP"}),Object(j.jsx)(i.b,{to:"loginconsumer",children:Object(j.jsx)("button",{children:"CONSUMER LOGIN"})}),Object(j.jsx)(i.b,{to:"loginrestaurant",children:Object(j.jsx)("button",{children:"RESTAURANT OWNER LOGIN"})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}var l=n(2),b=n(3),d=n(4);var u=function(e){var t=e.Login,n=e.error,a=Object(r.useState)({email:"",password:""}),c=Object(b.a)(a,2),s=c[0],i=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:Object(j.jsxs)("div",{className:"form-inner",children:[Object(j.jsx)("h2",{children:"Login "}),""!=n?Object(j.jsx)("div",{className:"error",children:n}):"",Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return i(Object(l.a)(Object(l.a)({},s),{},{email:e.target.value}))},value:s.email})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return i(Object(l.a)(Object(l.a)({},s),{},{password:e.target.value}))},value:s.password})]}),Object(j.jsx)("input",{type:"submit",value:"LOGIN"})]})})};function O(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(b.a)(c,2),o=s[0],O=(s[1],Object(r.useState)([])),h=Object(b.a)(O,2),x=h[0],p=h[1],m=Object(r.useState)({username:"",password:""}),g=Object(b.a)(m,2),v=g[0],f=g[1],y=function(e){fetch("/restaurant_login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){p(JSON.parse(e)),"[]"!==e&&a(!0)}))};y&&(localStorage.setItem("restaurant_key",JSON.stringify(x)),localStorage.setItem("auth","restaurant"));return Object(j.jsxs)("div",{className:"LoginRestaurant",children:[!0===n?Object(j.jsxs)("div",{className:"welcome",children:[Object(j.jsx)(d.a,{to:"/restaurantUi"}),Object(j.jsx)("button",{onClick:function(){a(!1)},children:"Kirjaudu ulos"})]}):Object(j.jsx)(u,{Login:y,error:o}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:" Create an account "}),Object(j.jsxs)("section",{children:[Object(j.jsx)("label",{htmlFor:"username"})," Enter your email ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"username",id:"username",onChange:function(e){return f(Object(l.a)(Object(l.a)({},v),{},{username:e.target.value}))},value:v.username}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"password"})," Enter a password ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"password",id:"password",onChange:function(e){return f(Object(l.a)(Object(l.a)({},v),{},{password:e.target.value}))},value:v.password}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsx)(i.b,{to:"/restaurantUi",children:Object(j.jsx)("button",{onClick:function(e){alert("a new user was submitted"),function(e){fetch("/create_restaurant_login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){}))}(v)},children:" create "})})]})]})}var h=function(e){var t=e.Login,n=e.error,a=Object(r.useState)({email:"",password:""}),c=Object(b.a)(a,2),s=c[0],i=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:Object(j.jsxs)("div",{className:"form-inner",children:[Object(j.jsx)("h2",{children:"Login "}),""!=n?Object(j.jsx)("div",{className:"error",children:n}):"",Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return i(Object(l.a)(Object(l.a)({},s),{},{email:e.target.value}))},value:s.email})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return i(Object(l.a)(Object(l.a)({},s),{},{password:e.target.value}))},value:s.password})]}),Object(j.jsx)("input",{type:"submit",value:"LOGIN"})]})})};function x(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(r.useState)([]),o=Object(b.a)(s,2),u=o[0],O=o[1],x=Object(r.useState)({username:"",password:""}),p=Object(b.a)(x,2),m=p[0],g=p[1],v=function(e){fetch("/user_login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){O(JSON.parse(e)),"[]"!==e&&a(!0)}))};v&&(localStorage.setItem("user_key",JSON.stringify(u)),localStorage.setItem("auth","user"));return Object(j.jsxs)("div",{className:"LoginConsumer",children:[!0===n?Object(j.jsxs)("div",{className:"welcome",children:[Object(j.jsx)(d.a,{to:"/restaurants"}),Object(j.jsx)("button",{onClick:function(){a(!1)},children:"Kirjaudu ulos"})]}):Object(j.jsx)(h,{Login:v,error:c}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:" Create an account "}),Object(j.jsxs)("section",{children:[Object(j.jsx)("label",{htmlFor:"username"})," Enter your email ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"username",id:"username",onChange:function(e){return g(Object(l.a)(Object(l.a)({},m),{},{username:e.target.value}))},value:m.username}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"password"})," Enter a password ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"password",id:"password",onChange:function(e){return g(Object(l.a)(Object(l.a)({},m),{},{password:e.target.value}))},value:m.password}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsx)(i.b,{to:"/restaurants",children:Object(j.jsx)("button",{onClick:function(e){alert("a new user was submitted"),function(e){fetch("/create_user_login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){}))}(m)},children:" create "})})]})]})}var p=n(10),m=n.n(p),g=n(18),v=n(13),f=n.n(v);function y(){var e=localStorage.getItem("status");if(null!==e){var t,n=JSON.parse(localStorage.getItem("user_key")),r=(t=e.split("..."),Object(g.a)(t),t);return r[1]===n[0].username?"received"===r[0]?Object(j.jsxs)("div",{className:f.a.container,children:["status info: ",n[1]," ",Object(j.jsx)("div",{children:"Your order is awaiting confiramtion"}),"Estimated delivery time: ",Object(j.jsx)("div",{children:"45 min"})]}):"preparing"===r[0]?Object(j.jsxs)("div",{className:f.a.container,children:["status info: ",r[0]," ",Object(j.jsx)("div",{children:"Your order is being prepared"}),"Estimated delivery time: ",Object(j.jsx)("div",{children:"30 min"})]}):"delivering"===r[0]?Object(j.jsxs)("div",{className:f.a.container,children:["status info: ",r[0]," ",Object(j.jsx)("div",{children:"Your order is being delivered"}),"Estimated delivery time: ",Object(j.jsx)("div",{children:"10 min"})]}):Object(j.jsxs)("div",{children:["status info: ",r[0]," ",Object(j.jsx)("div",{children:"Your order has arrived"}),"CONFRIM ARRIVAL",Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return localStorage.removeItem("status"),void window.location.reload()},children:"CONFIRM"})})]}):Object(j.jsx)("div",{})}return null}function _(){var e=Object(r.useState)(),t=Object(b.a)(e,2),n=t[0],a=t[1];return"user"===n?Object(j.jsxs)("div",{className:"topBar",style:{backgroundColor:"lightblue"},children:[Object(j.jsx)(i.b,{to:"/restaurants",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"RESTAURANTS"})}),Object(j.jsx)(i.b,{to:"/orderhistory",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"order history"})})]}):"restaurant"===n?Object(j.jsxs)("div",{className:"topBar",style:{backgroundColor:"lightblue"},children:[Object(j.jsx)(i.b,{to:"/restaurantui",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"YOUR RESTAURANTS"})}),Object(j.jsx)(i.b,{to:"/orderhistory",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"order history"})})]}):(a(localStorage.getItem("auth")),Object(j.jsx)("div",{className:"topBar",children:"Joo"}))}var S=n(7),N=n.n(S),w=0,C={products:[]},I=[];function R(e,t){var n=Object(r.useState)([]),a=Object(b.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)([]),l=Object(b.a)(o,2),u=l[0],O=l[1],h=localStorage.getItem("user_key");JSON.parse(h);Object(r.useEffect)((function(){fetch("/customer_restaurants").then((function(e){return e.text()})).then((function(e){O(JSON.parse(e))})),function(){var e=[{id:v.restaurant_id}];fetch("/restaurant_menu",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){s(JSON.parse(e))}))}()}),[]);var x=Object(r.useState)(""),p=Object(b.a)(x,2),m=p[0],g=p[1],v=Object(d.h)(),f=u.find((function(e){return e.restaurant_id===parseInt(v.restaurant_id)}));if(null==f)return Object(j.jsx)("div",{children:"No matching restaurant"});var S=function(e){e.ViewStatus;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:N.a.header,children:Object(j.jsx)("h1",{children:"Add food to shoppincart"})}),Object(j.jsxs)("div",{className:N.a.commonView,children:[Object(j.jsx)("div",{className:N.a.menuView,children:c.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:N.a.product,children:Object(j.jsxs)("button",{className:N.a.button,onClick:function(){return t=e,void(I.includes(t)?g("menu_view"):(I[w]=C.products=t,w++,g("shoppingcart")));var t},children:[Object(j.jsx)("img",{className:N.a.image,src:"".concat(e.imagepath)})," ",e.item_name,Object(j.jsx)("div",{children:e.description}),Object(j.jsxs)("div",{children:[e.price," e"]})]})})})}))})," "]}),Object(j.jsx)("div",{children:"Shopping cart"}),Object(j.jsx)("div",{className:N.a.menuInfo,children:Object(j.jsx)(R,{food:I})})]})},R=function(e){var t=e.food;if(g("menu_view"),t<1)return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:" Cart is empty "})});var n=0;return I.map((function(e){return n+=parseFloat(e.price)})),localStorage.setItem("shoppincart",JSON.stringify(I)+"..."+f.name+"..."+f.owner_id),Object(j.jsx)("div",{className:N.a.shoppingcartContainer,children:Object(j.jsxs)("div",{className:N.a.shoppingcart,children:[" ",I.map((function(e){return Object(j.jsxs)("div",{className:N.a.shoppingcartContainer,children:[Object(j.jsx)("img",{className:N.a.menuImage,src:"".concat(e.imagepath)}),Object(j.jsxs)("div",{style:{},children:[" ",e.item_name,Object(j.jsx)("div",{children:e.description}),Object(j.jsx)("div",{children:e.price})]}),Object(j.jsx)("button",{style:{},onClick:function(){return function(e){var t=0;I.forEach((function(n){n===e?(I.splice(I.indexOf(t),1),w=0,g("shoppingcart")):t++}))}(e)},children:Object(j.jsx)("div",{children:"DELETE"})})]})})),"LOPPUSUMMA: ",n+"\u20ac",Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{to:"/payment/",children:Object(j.jsx)("button",{onClick:E,food:I,summa:n,style:{margin:"20px"},children:"PAY"})})})]})})},E=function(e){e.food,e.summa;return null};return null!==h?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"topBar",children:Object(j.jsx)(_,{})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"Log Out"})}),Object(j.jsx)(y,{}),Object(j.jsxs)("div",{className:N.a.restaurantInfo,children:[Object(j.jsx)("img",{className:N.a.restaurantImage,src:"".concat(f.imagepath)}),Object(j.jsxs)("div",{children:[f.name," ",f.address]}),Object(j.jsxs)("div",{children:[f.operating_hours," "]}),f.restaurant_type," ",f.price_level.replaceAll("o","\u20ac")]}),Object(j.jsx)("div",{children:Object(j.jsx)(S,{ViewStatus:m})})]}):Object(j.jsx)("div",{children:"You must sign in"})}function E(){null!==localStorage.getItem("shoppincart")&&(localStorage.removeItem("shoppincart"),window.location.reload());var e=localStorage.getItem("user_key"),t=Object(r.useState)([]),n=Object(b.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){fetch("/customer_restaurants").then((function(e){return e.text()})).then((function(e){c(JSON.parse(e))}))}),[]),null!==e?Object(j.jsxs)("div",{className:m.a.restaurantList,children:[Object(j.jsx)("div",{className:"topBar",children:Object(j.jsx)(_,{})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"Log Out"})}),Object(j.jsx)(y,{}),Object(j.jsx)("div",{children:a.map((function(e){return Object(j.jsx)(i.b,{to:"/restaurants/"+e.restaurant_id,children:Object(j.jsxs)("div",{className:m.a.product,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:m.a.image,src:"".concat(e.imagepath)})}),Object(j.jsx)("div",{className:m.a.header,children:e.name}),Object(j.jsx)("div",{children:e.address}),Object(j.jsx)("div",{children:e.price_level.replaceAll("o","\u20ac")})]})})}))})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"YOU HAVE TO LOG IN"}),Object(j.jsx)("button",{children:Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"PALAA P\xc4\xc4SIVULLE"})})})]})}var T=n(9),L=n.n(T),J=n(14),A=n.n(J);function k(){var e=Object(r.useState)({item_name:"",description:"",price:"",imagepath:"",owner_id:""}),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(b.a)(c,2),o=s[0],u=s[1],O=function(e){alert("menu was submitted"),a(n.owner_id=h),function(e){fetch("/create_restaurant_menu",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){}))}(n)};var h=Object(d.h)().id;return Object(r.useEffect)((function(){fetch("/restaurant_menu",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([{id:h}])}).then((function(e){return e.text()})).then((function(e){u(JSON.parse(e))}))}),[]),null===h?Object(j.jsx)("div",{children:"Something went wrong"}):null!==localStorage.getItem("restaurant_key")?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"topBar",children:Object(j.jsx)(_,{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:A.a.menu,children:o.map((function(e){return Object(j.jsxs)("div",{children:["  ",Object(j.jsx)("div",{children:e.item_name}),Object(j.jsx)("img",{className:A.a.image,src:"".concat(e.imagepath)})]})}))})}),Object(j.jsx)("h1",{children:" Create a menu for your restaurant "}),Object(j.jsx)("br",{}),Object(j.jsx)("section",{children:Object(j.jsxs)("form",{onSubmit:O,children:[Object(j.jsx)("label",{for:"item_name"})," Enter a name ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"item_name",id:"item_name",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{item_name:e.target.value}))},value:n.item_name}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{for:"description"})," Enter a description ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"description",id:"description",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{description:e.target.value}))},value:n.description}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{for:"price"})," Enter a price ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"price",id:"price",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{price:e.target.value}))},value:n.price}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{for:"imagepath"})," Enter an imagepath for your image ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"imagepath",id:"imagepath",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{imagepath:e.target.value}))},value:n.imagepath}),Object(j.jsx)("a",{href:"https://fi.imgbb.com/",target:"_blank",rel:"noopener noreferrer",children:"CLICK HERE TO UPLOAD NEW IMAGE"}),Object(j.jsx)("div",{children:"(if you don't have one yet, You can upload one throught the link and copy the url as show in the image below: )"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:A.a.menuimage,src:"/images/example.png"})}),Object(j.jsx)("br",{})]})}),Object(j.jsx)(i.b,{to:"/restaurantui",children:Object(j.jsx)("button",{onClick:O,children:" Submit "})})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"YOU HAVE TO LOG IN"}),Object(j.jsx)("button",{children:Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"PALAA P\xc4\xc4SIVULLE"})})})]})}function V(){var e,t,n=localStorage.getItem("restaurant_key"),a=Object(r.useState)("rest"),c=Object(b.a)(a,2),s=c[0],o=c[1],l=Object(r.useState)([]),d=Object(b.a)(l,2),u=d[0],O=d[1],h=[{id:JSON.parse(n)[0].restaurant_id}];Object(r.useEffect)((function(){fetch("/myrestaurants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.text()})).then((function(e){O(JSON.parse(e))}))}),[]);var x=localStorage.getItem("status"),p=[];return null!==x&&(p=x.split("..."),t=h[0].id===parseInt(p[2])),null!==n?"menu"!==s?Object(j.jsxs)("div",{className:L.a.restaurantList,children:[Object(j.jsx)("div",{className:"topBar",children:Object(j.jsx)(_,{})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"Log Out"})}),Object(j.jsxs)("div",{children:[t?Object(j.jsxs)("div",{style:{fontSize:"40px"},children:["You have an open order with status:",p[0],Object(j.jsxs)("div",{children:["from ",p[1]]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){"received"===p[0]?(localStorage.setItem("status","preparing..."+p[1]+"..."+p[2]),window.location.reload()):"preparing"===p[0]?(localStorage.setItem("status","delivering..."+p[1]+"..."+p[2]),window.location.reload()):(localStorage.setItem("status","delivered..."+p[1]+"..."+p[2]),window.location.reload())},children:"CHANGE STATUS"})})]}):Object(j.jsx)("div",{}),u.map((function(t){return Object(j.jsxs)("div",{className:L.a.product,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:L.a.image,src:"".concat(t.imagepath)})}),Object(j.jsx)("div",{className:L.a.header,children:t.name}),Object(j.jsx)("div",{children:t.address}),Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{to:"createmenu/"+t.restaurant_id,children:Object(j.jsx)("button",{className:L.a.button,onClick:function(){return n=t.restaurant_id,e=n,void o("menu");var n},children:"EDIT MENU"})})})]})}))]}),Object(j.jsx)(i.b,{to:"createrestaurant",children:Object(j.jsx)("button",{children:" Create new Restaurant "})})]}):Object(j.jsx)(k,{rest_id:e}):Object(j.jsx)("div",{className:"restaurantInfo",children:"INFO"})}var F=n(17),P=n.n(F);function U(){var e=Object(r.useState)({name:"",address:"",operating_hours:"",imagepath:"",restaurant_type:"",price_level:"",owner_id:""}),t=Object(b.a)(e,2),n=t[0],a=t[1],c=function(e){alert("restaurant was submitted"),a(n.owner_id=JSON.parse(localStorage.getItem("restaurant_key"))[0].restaurant_id),function(e){fetch("/restaurant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){}))}(n)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:" Add a restaurant "}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:c,children:Object(j.jsxs)("section",{children:[Object(j.jsx)("label",{for:"name"})," Enter a name ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{name:e.target.value}))},value:n.name}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{for:"address"})," Enter an address ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"address",id:"address",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{address:e.target.value}))},value:n.address}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{for:"hours"})," Enter the operating hours ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"hours",id:"hours",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{operating_hours:e.target.value}))},value:n.operating_hours}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{for:"imagepath"})," Enter a HTML url for your image: ",Object(j.jsx)("label",{}),Object(j.jsx)("input",{type:"text",name:"imagepath",id:"imagepath",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{imagepath:e.target.value}))},value:n.imagepath}),Object(j.jsx)("a",{href:"https://fi.imgbb.com/",target:"_blank",rel:"noopener noreferrer",children:"CLICK HERE TO UPLOAD NEW IMAGE"}),Object(j.jsx)("div",{children:"(if you don't have one yet, You can upload one throught the link and copy the url as show in the image below: )"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:P.a.image,src:"/images/example.png"})}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:" Enter the restaurant type "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"radio",name:"type",id:"buffet",value:"buffet",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{restaurant_type:e.target.value}))}}),Object(j.jsx)("label",{for:"buffet",children:" Buffet "}),Object(j.jsx)("input",{type:"radio",name:"type",id:"fastfood",value:"fastfood",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{restaurant_type:e.target.value}))}}),Object(j.jsx)("label",{for:"fastfood",children:" Fast food "}),Object(j.jsx)("input",{type:"radio",name:"type",id:"fastcasual",value:"fastcasual",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{restaurant_type:e.target.value}))}}),Object(j.jsx)("label",{for:"fastcasual",children:" Fast casual "}),Object(j.jsx)("input",{type:"radio",name:"type",id:"casualdining",value:"casualdining",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{restaurant_type:e.target.value}))}}),Object(j.jsx)("label",{for:"casualdining",children:" Casual dining "}),Object(j.jsx)("input",{type:"radio",name:"type",id:"finedining",value:"finedining",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{restaurant_type:e.target.value}))}}),Object(j.jsx)("label",{for:"finedining",children:" Fine dining "}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:" Enter the price level"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"radio",name:"price",id:"price1",value:"o",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{price_level:e.target.value}))}}),Object(j.jsx)("label",{for:"price1",children:" \u20ac "}),Object(j.jsx)("input",{type:"radio",name:"price",id:"price2",value:"oo",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{price_level:e.target.value}))}}),Object(j.jsx)("label",{for:"price2",children:" \u20ac\u20ac "}),Object(j.jsx)("input",{type:"radio",name:"price",id:"price3",value:"ooo",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{price_level:e.target.value}))}}),Object(j.jsx)("label",{for:"price3",children:" \u20ac\u20ac\u20ac "}),Object(j.jsx)("input",{type:"radio",name:"price",id:"price4",value:"oooo",onChange:function(e){return a(Object(l.a)(Object(l.a)({},n),{},{price_level:e.target.value}))}}),Object(j.jsx)("label",{for:"price4",children:" \u20ac\u20ac\u20ac\u20ac "})]})}),Object(j.jsx)(i.b,{to:"/restaurantUi",children:Object(j.jsx)("button",{onClick:c,children:" Submit "})})]})}function D(e){var t=localStorage.getItem("auth"),n=localStorage.getItem(t+"_key"),a=JSON.parse(n)[0],c=Object(r.useState)([]),s=Object(b.a)(c,2),o=s[0],l=s[1];if(Object(r.useEffect)((function(){"user"===t&&fetch("/restaurantorderhistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.text()})).then((function(e){l(JSON.parse(e))})),"restaurant"===t&&fetch("/userorderhistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.text()})).then((function(e){l(JSON.parse(e))}))}),[]),null!==t)return"user"===t?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"topBar",children:Object(j.jsx)(_,{})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"Log Out"})}),Object(j.jsx)("h3",{children:" YOUR ORDER HISTORY: "}),Object(j.jsx)("div",{className:"orderHistory",children:o.map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[" Restaurant: ",e.restaurant_name," "]}),Object(j.jsxs)("div",{children:[" Order: ",e.products.replaceAll(",",", ").slice(0,-2)," "]}),Object(j.jsxs)("div",{children:[" Total price: ",e.total_price," "]})]})}))})]}):"restaurant"===t?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"topBar",children:Object(j.jsx)(_,{})}),Object(j.jsx)("h3",{children:" YOUR ORDER HISTORY "}),Object(j.jsx)("div",{className:"orderHistoryRestaurant",children:o.map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[" Restaurant: ",e.restaurant_name," "]}),Object(j.jsxs)("div",{children:[" Order: ",e.products.replaceAll(",",", ").slice(0,-2)," "]}),Object(j.jsxs)("div",{children:[" Total price: ",e.total_price," "]})]})}))})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"YOU HAVE TO LOG IN"}),Object(j.jsx)("button",{children:Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:" GO BACK AND LOGIN "})})})]})}function Y(e){var t=localStorage.getItem("shoppincart").split("..."),n=JSON.parse(t[0]),a=0,c="",s=t[1],o=t[2],l=JSON.parse(localStorage.getItem("user_key"));l=(l=JSON.stringify(l[0].username)).replace('"',"").replace('"',"");var u={orderer_username:"",products:"",total_price:"",owner_id:"",restaurant_name:""},O={restaurant_name:"",products:"",total_price:""},h=Object(r.useState)(!1),x=Object(b.a)(h,2),p=x[0],m=x[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"topBar",children:Object(j.jsx)(_,{})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{style:{paddingRight:"50px"},children:"Log Out"})}),!0===p?Object(j.jsx)("div",{children:Object(j.jsx)(d.a,{to:"/restaurants"})}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:" your order: "}),n.map((function(e){return Object(j.jsxs)("div",{children:[" ",e.item_name," ",e.price,Object(j.jsxs)("script",{children:[a+=parseInt(e.price),c+=e.item_name+","]})]})})),Object(j.jsx)("h3",{children:" total price: "})," ",Object(j.jsxs)("div",{children:[a," e"]}),Object(j.jsx)("label",{htmlFor:":",children:" Select a delivery location "}),Object(j.jsx)("input",{type:"text",name:"delivery",id:"delivery"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:":",children:" Special requests for your order "}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{name:"request",id:"request",rows:"3",cols:"40"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{children:" Select a payment method"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{for:"pay1",children:" Visa "}),Object(j.jsx)("input",{type:"radio",name:"pay",id:"pay1",value:"Visa"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{for:"pay2",children:" Mastercard "}),Object(j.jsx)("input",{type:"radio",name:"pay",id:"pay1",value:"Mastercard"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{for:"pay2",children:" American Express "}),Object(j.jsx)("input",{type:"radio",name:"pay",id:"pay1",value:"AmericanExpress"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{children:" Enter your credit card information "}),Object(j.jsx)("label",{htmlFor:":",children:" Enter your  cardnumber "}),Object(j.jsx)("input",{type:"text",name:"cardnumber",id:"cardnumber"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:":",children:" Date of expiration "}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:":",children:" month  "}),Object(j.jsxs)("select",{name:"month",id:"month",children:[Object(j.jsx)("option",{value:"01",children:"01"}),Object(j.jsx)("option",{value:"02",children:"02"}),Object(j.jsx)("option",{value:"03",children:"03"}),Object(j.jsx)("option",{value:"04",children:"04"}),Object(j.jsx)("option",{value:"05",children:"05"}),Object(j.jsx)("option",{value:"06",children:"06"}),Object(j.jsx)("option",{value:"07",children:"07"}),Object(j.jsx)("option",{value:"08",children:"08"}),Object(j.jsx)("option",{value:"09",children:"09"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"11",children:"11"}),Object(j.jsx)("option",{value:"12",children:"12"})]}),Object(j.jsx)("label",{htmlFor:":",children:" year  "}),Object(j.jsxs)("select",{name:"year",id:"year",children:[Object(j.jsx)("option",{value:"01",children:"21"}),Object(j.jsx)("option",{value:"02",children:"22"}),Object(j.jsx)("option",{value:"03",children:"23"}),Object(j.jsx)("option",{value:"04",children:"24"}),Object(j.jsx)("option",{value:"04",children:"25"}),Object(j.jsx)("option",{value:"04",children:"26"}),Object(j.jsx)("option",{value:"04",children:"27"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:":",children:" CVC "}),Object(j.jsx)("textarea",{name:"cardnumber",id:"cardnumber",cols:"3",rows:"1"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){u.orderer_username=l,u.products=c,u.total_price=a,u.owner_id=o,u.restaurant_name=s,O.restaurant_name=s,O.products=c,O.total_price=a,localStorage.setItem("order",JSON.stringify(u)),fetch("/restaurant_orderhistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}).then((function(e){return e.text()})).then((function(e){})),fetch("/user_orderhistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}).then((function(e){return e.text()})).then((function(e){})),localStorage.setItem("status","received..."+l+"..."+o),m(!0)},children:" Submit order "})]})]})}var G=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/",element:Object(j.jsx)(o,{})}),Object(j.jsx)(d.b,{path:"/loginrestaurant",element:Object(j.jsx)(O,{})}),Object(j.jsx)(d.b,{path:"/loginconsumer",element:Object(j.jsx)(x,{})}),Object(j.jsx)(d.b,{path:"/restaurants",element:Object(j.jsx)(E,{})}),Object(j.jsx)(d.b,{path:"/restaurants/:restaurant_id/*",element:Object(j.jsx)(R,{restaurant:R})}),Object(j.jsx)(d.b,{path:"restaurantui/createmenu/:id/*",element:Object(j.jsx)(k,{rest_id:k})}),Object(j.jsx)(d.b,{path:"/restaurantui",element:Object(j.jsx)(V,{})}),Object(j.jsx)(d.b,{path:"/restaurantui/createrestaurant",element:Object(j.jsx)(U,{})}),Object(j.jsx)(d.b,{path:"/orderhistory",element:Object(j.jsx)(D,{})}),Object(j.jsx)(d.b,{path:"/payment",element:Object(j.jsx)(Y,{})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),B()}],[[26,1,2]]]);
//# sourceMappingURL=main.93ac7b71.chunk.js.map