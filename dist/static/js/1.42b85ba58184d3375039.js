webpackJsonp([1],{b0ui:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("4YfN"),n=s.n(i),a=s("9rMa"),c={computed:n()({},Object(a.e)({Picturelist:function(t){return t.Image.Picturelist}})),methods:n()({colorClick:function(){}},Object(a.b)({list:"Image/list",Images:"Image/Images"}),{param:function(){console.log("Imgid……",this.$route.query.id)}}),mounted:function(){this.list(this.$route.query.id),console.log(this.Images)}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"tit"},[s("p",{staticClass:"color",attrs:{"data-hover":"hover"},on:{click:t.colorClick}},[s("span",[t._v("颜色")])]),t._v(" "),t._m(0)]),t._v(" "),s("ul",{staticClass:"pic"},t._l(t.Picturelist,function(e,i){return s("li",{key:i},[s("p",{staticClass:"title"},[s("span",[t._v(t._s(e.Name))]),t._v(" "),s("span",[t._v(t._s(e.Count)+"张")])]),t._v(" "),t._l(e.List,function(t,e){return s("div",{key:e,staticClass:"ImgBox"},[s("img",{attrs:{src:t.Url.replace("{0}",t.LowSize)}})])})],2)}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"second_p"},[e("span",[e("em",[this._v("车款")])])])}]};var o=s("C7Lr")(c,r,!1,function(t){s("hPtT")},"data-v-d0a99ed0",null);e.default=o.exports},hPtT:function(t,e){}});
//# sourceMappingURL=1.42b85ba58184d3375039.js.map