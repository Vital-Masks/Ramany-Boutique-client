(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{9511:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carts",function(){return r(3523)}])},2707:function(e,t,r){"use strict";var n=r(5893),s=r(6294),a={display:"block",margin:"0 auto",borderColor:"red"};t.Z=function(e){var t=e.load;return(0,n.jsx)(s.Z,{color:"#368ED7",loading:t,css:a,size:10,margin:2})}},3523:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(4051),s=r.n(n),a=r(5893),c=r(7294),l=r(5675),o=r.n(l),i=r(1664),d=r.n(i),u=r(3667),x=r(2067),f=r(6501);var p=c.forwardRef((function(e,t){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),c.createElement("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}))})),m=r(2707),h=r(1124);function j(e,t,r,n,s,a,c){try{var l=e[a](c),o=l.value}catch(i){return void r(i)}l.done?t(o):Promise.resolve(o).then(n,s)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var a=e.apply(t,r);function c(e){j(a,n,s,c,l,"next",e)}function l(e){j(a,n,s,c,l,"throw",e)}c(void 0)}))}}var y=function(){var e=(0,c.useState)([]),t=e[0],r=e[1],n=(0,c.useState)(!1),l=n[0],i=n[1],j=(0,c.useContext)(h.A),y=j.cart,g=j.clearCart,w=j.clearCartItem,N=function(){var e=v(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,Promise.all(null===y||void 0===y?void 0:y.map((function(e){return(0,x.wv)(e.productId)})));case 3:(t=e.sent)&&(n=[],y.map((function(e){return n.push({id:e.id,productId:e.productId,name:t.find((function(t){return t._id===e.productId})).clothName,code:t.find((function(t){return t._id===e.productId})).clothCode,size:e.size,qty:e.quantity})})),r(n)),i(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=v(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:return e.next=4,N();case 4:f.ZP.success("Cart item removed successfully!");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){y&&N()}),[y]),(0,a.jsxs)("div",{className:"relative w-full max-w-screen-xl px-5 py-3 mx-auto mt-20 md:py-5 md:px-20 xl:px-0 lg:mt-28 xl:mt-12",children:[(0,a.jsx)(f.x7,{}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h5",{className:"text-xl font-bold",children:"Shopping Cart"}),(0,a.jsx)("div",{className:"relative h-[600px] overflow-y-auto mt-16",children:(0,a.jsxs)("table",{className:"w-full text-sm text-left text-gray-500 table-auto dark:text-gray-400",children:[(0,a.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Product"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Size"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 ",children:"Quantity"}),(0,a.jsx)("th",{scope:"col",className:"w-12 px-6 py-3"})]})}),(0,a.jsxs)("tbody",{children:[t.length?t.map((function(e,t){return(0,a.jsxs)("tr",{className:"text-gray-900",children:[(0,a.jsxs)("th",{scope:"row",className:"flex items-center gap-4 px-6 py-8 font-medium",children:[(0,a.jsx)("div",{className:"relative flex-shrink-0 overflow-hidden rounded-full w-14 h-14",children:(0,a.jsx)(o(),{src:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",layout:"fill",objectFit:"cover",alt:"img"})}),(0,a.jsxs)("div",{children:[e.name," ",(0,a.jsx)("br",{}),(0,a.jsxs)("span",{className:"mt-1 text-gray-400",children:["# ",e.code]})]})]}),(0,a.jsx)("td",{className:"px-6 py-8",children:e.size}),(0,a.jsx)("td",{className:"px-6 py-8",children:e.qty}),(0,a.jsx)("td",{className:"px-6 py-8 text-right",children:(0,a.jsx)("button",{onClick:function(){return b(e.id)},children:(0,a.jsx)(p,{className:"w-5 h-5 text-gray-400 transition-colors hover:text-gray-500"})})})]},t)})):l?(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{}),(0,a.jsx)("td",{className:"flex items-center justify-center w-full gap-4 px-6 py-8 font-medium text-center",children:(0,a.jsx)(m.Z,{load:l})})]}):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{}),(0,a.jsx)("td",{className:"flex items-center justify-center w-full gap-4 px-6 py-8 font-medium text-center",children:(0,a.jsx)("p",{children:"No Items !"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{})]})]})]})}),(0,a.jsxs)("div",{className:"flex flex-col-reverse items-center justify-end gap-2 md:flex-row",children:[(0,a.jsx)("button",{onClick:function(){return localStorage.removeItem("cart"),r([]),g(),void f.ZP.success("Cart cleared successfully!")},className:"px-8 py-2 text-sm font-bold text-gray-400 uppercase transition-colors bg-gray-100 rounded-full hover:text-gray-600 md-max:w-full",children:"Clear cart"}),(0,a.jsx)(d(),{href:u.bQ,children:(0,a.jsx)("a",{className:"px-8 py-2 text-sm font-bold text-center text-black uppercase transition-colors bg-white border rounded-full hover:bg-gray-100 md-max:w-full",children:"Continue shopping"})}),(0,a.jsx)(d(),{href:u.iK,children:(0,a.jsx)("a",{className:"px-8 py-2 text-sm font-bold text-center text-black uppercase transition-colors bg-orange-400 rounded-full hover:bg-orange-500 md-max:w-full",children:"Checkout"})})]})]})]})}}},function(e){e.O(0,[294,774,888,179],(function(){return t=9511,e(e.s=t);var t}));var t=e.O();_N_E=t}]);