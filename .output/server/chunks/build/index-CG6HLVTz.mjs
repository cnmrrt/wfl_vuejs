import { _ as __nuxt_component_0 } from './nuxt-link-BJFjHwd6.mjs';
import { withAsyncContext, ref, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { N as Navbar } from './Navbar-1Hv0UgjO.mjs';
import { u as useHead } from './composables-CkQHObT5.mjs';
import { u as useAsyncData } from './asyncData-DTnLR69c.mjs';
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
import 'better-sqlite3';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead(() => {
      return {
        title: "Words From Life - Quotes, Words, Idioms and Proverbs",
        meta: [
          { name: "description", content: "All inspirational and motivational quotes." },
          { property: "og:title", content: "Words From Life - Quotes, Words, Idioms and Proverbs" },
          { property: "og:description", content: "All inspirational and motivational quotes." },
          // { property: 'og:image', content: preverb.value.img || '' },
          { property: "og:url", content: `https://wordsfromlife.com/` }
        ],
        link: [
          {
            rel: "canonical",
            href: `https://wordsfromlife.com/`
          }
        ]
      };
    });
    const { data: authorsData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "authors",
      () => $fetch("https://words-from-life-5cb26-default-rtdb.firebaseio.com/quotes/authors-new.json")
    )), __temp = await __temp, __restore(), __temp);
    const { data: wordsData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "words",
      () => $fetch("https://words-from-life-5cb26-default-rtdb.firebaseio.com/words.json")
    )), __temp = await __temp, __restore(), __temp);
    const { data: preverbsData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "preverbs",
      () => $fetch("https://words-from-life-5cb26-default-rtdb.firebaseio.com/idioms%20and%20proverbs/en/preverbs.json")
    )), __temp = await __temp, __restore(), __temp);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="main" role="main" data-v-180dc519><h1 data-v-180dc519>Words From Life</h1><div class="home-container" data-v-180dc519><section class="section" data-v-180dc519><div id="macy-container" data-v-180dc519><!--[-->`);
      ssrRenderList(unref(authorsData), (item) => {
        _push(`<div class="demo" style="${ssrRenderStyle(item.en_quotes !== "" && item.img != null ? null : { display: "none" })}" data-v-180dc519>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/authors/${item.id}-quotes`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", `${item.name} ${item.surname}`)}${ssrRenderAttr("width", item.img_width)}${ssrRenderAttr("height", item.img_height)} data-v-180dc519${_scopeId}><span style="${ssrRenderStyle({ "display": "block", "text-align": "center", "padding": ".2rem 0" })}" data-v-180dc519${_scopeId}>${ssrInterpolate(item.name)} ${ssrInterpolate(item.surname)}</span>`);
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
      _push(`<!--]--></div></section><section class="section" data-v-180dc519><h2 style="${ssrRenderStyle({ "font-size": "40px", "text-align": "center", "margin": "3rem 0 2rem 0" })}" data-v-180dc519>Words</h2><div id="word-container" data-v-180dc519><!--[-->`);
      ssrRenderList(unref(wordsData), (item) => {
        _push(`<div class="demo" data-v-180dc519>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/words/${item.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-180dc519${_scopeId}>${ssrInterpolate(item.word)}</span><p data-v-180dc519${_scopeId}>${ssrInterpolate(item.en_meta_desc)}</p>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(item.word), 1),
                createVNode("p", null, toDisplayString(item.en_meta_desc), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><section class="section" data-v-180dc519><h2 style="${ssrRenderStyle({ "font-size": "40px", "text-align": "center", "margin": "3rem 0 2rem 0" })}" data-v-180dc519>Proverbs</h2><div id="preverbs-container" data-v-180dc519><!--[-->`);
      ssrRenderList(unref(preverbsData), (item) => {
        _push(`<div class="demo" data-v-180dc519>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/preverbs/${item.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-180dc519${_scopeId}>${ssrInterpolate(item.preverb)}</span>`);
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
      _push(`<!--]--></div></section></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-180dc519"]]);

export { index as default };
//# sourceMappingURL=index-CG6HLVTz.mjs.map
