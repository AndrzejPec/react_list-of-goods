(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(3),o=n.n(c),r=n(4),i=n(5),a=n(8),l=n(6),u=n(7),b=n(1),d=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var p=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={sortType:s.NONE,isReversed:!1},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.sortType,c=e.isReversed,o=n!==s.NONE||c,r=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(u.a)(t);switch(n){case s.ALPHABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case s.LENGTH:o.sort((function(t,e){return t.length-e.length}))}return c&&o.reverse(),o}(h,{sortType:n,isReversed:c});return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:"button is-info ".concat(n===s.ALPHABET?"":"is-light"),onClick:function(){t.setState({sortType:s.ALPHABET})},children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button is-success ".concat(n===s.LENGTH?"":"is-light"),onClick:function(){t.setState({sortType:s.LENGTH})},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"button is-warning ".concat(c?"":"is-light"),onClick:function(){t.setState({isReversed:!c})},children:"Reverse"}),o&&Object(d.jsx)("button",{type:"button",className:"button is-danger ".concat(n!==s.NONE||c?"":"is-light"),onClick:function(){t.setState({sortType:s.NONE,isReversed:!1})},children:"Reset"})]}),Object(d.jsx)("ul",{children:r.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),n}(b.Component);o.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.56e0d349.chunk.js.map