import { _ as __nuxt_component_0 } from './nuxt-link-BJFjHwd6.mjs';
import { ref, withAsyncContext, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { N as Navbar } from './Navbar-1Hv0UgjO.mjs';
import { u as useFetch } from './fetch-C1n3njCS.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'better-sqlite3';
import 'ipx';
import './server.mjs';
import 'vue-router';
import '@vue/shared';
import './asyncData-DTnLR69c.mjs';
import 'perfect-debounce';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const words = ref([]);
    const { data: wordsData, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://words-from-life-5cb26-default-rtdb.firebaseio.com/words.json",
      "$XgV0vrA_2V"
    )), __temp = await __temp, __restore(), __temp);
    words.value = wordsData.value || [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="main" role="main"><h1>Words</h1><div class="home-container words-container"><section class="section" id="word-container"><ul><!--[-->`);
      ssrRenderList(words.value, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/words/${item.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.word)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.word), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/words/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-AP87O-XJ.mjs.map
