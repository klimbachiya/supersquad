(this.webpackJsonpsupersquad=this.webpackJsonpsupersquad||[]).push([[0],{15:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n.n(c),s=n(8),a=n.n(s),l=n(2),u=n(3),o=n(6),d=n(5),h=n(4),j="ADD_CHARACTER",p="REMOVE_CHARACTER",b="CLEAR_ALL";function O(e){return{type:j,id:e}}n(15);var m=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.props),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Characters"}),Object(r.jsx)("ul",{className:"list-group",children:this.props.characters.map((function(t){return Object(r.jsxs)("li",{className:"list-group-item",children:[" ",Object(r.jsx)("div",{className:"line",children:t.name}),Object(r.jsx)("div",{className:"box line",onClick:function(){return e.props.listener(t.id)},children:"+"})]},t.id)}))})]})}}]),n}(i.a.Component);var f=Object(h.b)((function(e){return{characters:e.characters}}),(function(e){return{listener:function(t){return e(O(t))}}}))(m),v=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h4",{children:["Heros\xa0\xa0",Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.props.clear()},children:"ClearAll"})]}),Object(r.jsx)("ul",{className:"list-group",children:this.props.heros.map((function(t){return Object(r.jsxs)("li",{className:"list-group-item",children:[" ",Object(r.jsx)("div",{className:"line",children:t.name}),Object(r.jsx)("div",{className:"box line",onClick:function(){return e.props.remove(t.id)},children:"\u2a2f"})]},t.id)}))})]})}}]),n}(i.a.Component);var g=Object(h.b)((function(e){return{heros:e.heros}}),(function(e){return{remove:function(t){return e(function(e){return{type:p,id:e}}(t))},clear:function(){return e({type:b})}}}))(v),x=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"strength",value:function(){var e=0;return this.props.heros.forEach((function(t){e+=t.strength})),e}},{key:"intelligence",value:function(){var e=0;return this.props.heros.forEach((function(t){e+=t.intelligence})),e}},{key:"speed",value:function(){var e=0;return this.props.heros.forEach((function(t){e+=t.speed})),e}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Squad Stats"}),Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsxs)("li",{className:"list-group-item",children:["Overall Strength: ",this.strength()]}),Object(r.jsxs)("li",{className:"list-group-item",children:["Overall Intelligence: ",this.intelligence()]}),Object(r.jsxs)("li",{className:"list-group-item",children:["Overall Speed: ",this.speed()]})]})]})}}]),n}(i.a.Component);var y=Object(h.b)((function(e){return{heros:e.heros}}),null)(x),N=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Super Squad"}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsx)(f,{})}),Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsx)(g,{})}),Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsx)(y,{})})]})]})}}]),n}(i.a.Component),C=n(14),k=n(9),A=n(7);function S(e){return k.find((function(t){return t.id==e}))}var E=Object(A.b)({characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return e.filter((function(e){return e.id!==t.id}));case p:var n=S(t.id);return[].concat(Object(C.a)(e),[n]);case b:return k;default:return e}},heros:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=S(t.id);return[].concat(Object(C.a)(e),[n]);case p:return e.filter((function(e){return e.id!==t.id}));case b:return[];default:return e}}}),w=Object(A.c)(E);w.subscribe((function(){return console.log(w.getState())})),w.dispatch(O(2)),a.a.render(Object(r.jsx)(h.a,{store:w,children:Object(r.jsx)(N,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":0,"name":"Superman","strength":10,"intelligence":7,"speed":9},{"id":1,"name":"Batman","strength":7,"intelligence":10,"speed":6},{"id":2,"name":"Wonderwoman","strength":5,"intelligence":9,"speed":7},{"id":3,"name":"Flash","strength":5,"intelligence":6,"speed":10},{"id":4,"name":"Green Lantern","strength":7,"intelligence":8,"speed":7},{"id":5,"name":"Aquaman","strength":8,"intelligence":7,"speed":8},{"id":6,"name":"Cyborg","strength":9,"intelligence":8,"speed":6},{"id":7,"name":"Green Arrow","strength":5,"intelligence":9,"speed":7},{"id":8,"name":"Hawkman","strength":5,"intelligence":8,"speed":8},{"id":9,"name":"Supergirl","strength":10,"intelligence":9,"speed":7}]')}},[[28,1,2]]]);
//# sourceMappingURL=main.e548c140.chunk.js.map