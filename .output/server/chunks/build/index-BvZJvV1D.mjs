import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    const preverbsData = ref([]);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "main",
        role: "main"
      }, _attrs))} data-v-536470a3><h1 data-v-536470a3>Proverbs</h1><div class="home-container" data-v-536470a3><section class="section" data-v-536470a3><div id="preverbs-container" data-v-536470a3><!--[-->`);
      ssrRenderList(preverbsData.value, (item) => {
        _push(`<div class="demo" data-v-536470a3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/preverbs/${item.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-536470a3${_scopeId}>${ssrInterpolate(item.preverb)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(item.preverb), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/preverbs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-536470a3"]]);

export { index as default };
//# sourceMappingURL=index-BvZJvV1D.mjs.map
