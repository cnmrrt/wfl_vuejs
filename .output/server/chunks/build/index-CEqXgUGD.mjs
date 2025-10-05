import { a as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authorsData = ref([]);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "main",
        role: "main"
      }, _attrs))}><h1>Authors</h1><div class="home-container"><section class="section"><div id="macy-container"><!--[-->`);
      ssrRenderList(authorsData.value, (item) => {
        _push(`<div class="demo" style="${ssrRenderStyle(item.en_quotes !== "" && item.img != null ? null : { display: "none" })}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/authors/${item.id}-quotes`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", `${item.name} ${item.surname}`)}${ssrRenderAttr("width", item.img_width)}${ssrRenderAttr("height", item.img_height)}${_scopeId}><span style="${ssrRenderStyle({ "display": "block", "text-align": "center", "padding": ".2rem 0" })}"${_scopeId}>${ssrInterpolate(item.name)} ${ssrInterpolate(item.surname)}</span>`);
            } else {
              return [
                createVNode("img", {
                  src: item.img,
                  alt: `${item.name} ${item.surname}`,
                  width: item.img_width,
                  height: item.img_height
                }, null, 8, ["src", "alt", "width", "height"]),
                createVNode("span", { style: { "display": "block", "text-align": "center", "padding": ".2rem 0" } }, toDisplayString(item.name) + " " + toDisplayString(item.surname), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/authors/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CEqXgUGD.mjs.map
