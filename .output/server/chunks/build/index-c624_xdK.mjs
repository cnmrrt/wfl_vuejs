import { _ as __nuxt_component_0 } from './nuxt-link-BJFjHwd6.mjs';
import { ref, withAsyncContext, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { N as Navbar } from './Navbar-1Hv0UgjO.mjs';
import { u as useHead } from './composables-CkQHObT5.mjs';
import { u as useFetch } from './fetch-CUfkYMhd.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'better-sqlite3';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@vue/shared';
import './asyncData-BBzjBQqf.mjs';
import 'perfect-debounce';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: `Authors`,
      meta: [
        // { name: 'description', content: authorData.value.en_meta_desc || '' },
        // { property: 'og:title', content: `${authorData.value.name} ${authorData.value.surname} Quotes` },
        // { property: 'og:description', content: authorData.value.en_meta_desc || '' },
        // { property: 'og:url', content: `https://wordsfromlife.com/authors/${authorData.value.id}-quotes` },
        // { property: 'og:image', content: authorData.value.img }
      ]
    });
    const authorsData = ref([]);
    const { data: authors } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://words-from-life-5cb26-default-rtdb.firebaseio.com/quotes/authors-new.json", "$2yANOoU7kq")), __temp = await __temp, __restore(), __temp);
    authorsData.value = authors.value || [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="main" role="main" data-v-857ad007><h1 data-v-857ad007>Authors</h1><div class="home-container" data-v-857ad007><section class="section" data-v-857ad007><div id="macy-container" data-v-857ad007><!--[-->`);
      ssrRenderList(authorsData.value, (item) => {
        _push(`<div class="demo" style="${ssrRenderStyle(item.en_quotes !== "" && item.img != null ? null : { display: "none" })}" data-v-857ad007>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/authors/${item.id}-quotes`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", `${item.name} ${item.surname}`)}${ssrRenderAttr("width", item.img_width)}${ssrRenderAttr("height", item.img_height)} data-v-857ad007${_scopeId}><span style="${ssrRenderStyle({ "display": "block", "text-align": "center", "padding": ".2rem 0" })}" data-v-857ad007${_scopeId}>${ssrInterpolate(item.name)} ${ssrInterpolate(item.surname)}</span>`);
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
      _push(`<!--]--></div></section></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/authors/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-857ad007"]]);

export { index as default };
//# sourceMappingURL=index-c624_xdK.mjs.map
