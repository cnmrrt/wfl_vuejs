import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { N as Navbar } from './Navbar-1Hv0UgjO.mjs';
import { u as useAsyncData } from './asyncData-BBzjBQqf.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { u as useHead } from './composables-CkQHObT5.mjs';
import 'perfect-debounce';
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
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: word } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`word-${slug}`, async () => {
      const res = await $fetch("https://words-from-life-5cb26-default-rtdb.firebaseio.com/words.json");
      return res.find((item) => item.id?.toLowerCase() === slug.toLowerCase());
    })), __temp = await __temp, __restore(), __temp);
    useHead(() => {
      if (!word.value) return {};
      return {
        title: `Meaning of ${word.value.word}`,
        meta: [
          { name: "description", content: word.value.en_meta_desc || "" },
          { property: "og:title", content: `Meaning of ${word.value.word}` },
          { property: "og:description", content: word.value.en_meta_desc || "" },
          { property: "og:image", content: word.value.img || "" },
          { property: "og:url", content: `https://wordsfromlife.com/words/${word.value.id}` }
        ],
        link: [
          {
            rel: "canonical",
            href: `https://wordsfromlife.com/words/${word.value.id}`
          }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      if (unref(word)) {
        _push(`<div class="word-detail-container" data-v-97049a33><main class="word-detail-main" data-v-97049a33><h1 data-v-97049a33>${ssrInterpolate(unref(word).word)}</h1>`);
        if (unref(word).img) {
          _push(`<div id="main-image" data-v-97049a33><img${ssrRenderAttr("src", unref(word).img)}${ssrRenderAttr("alt", unref(word).word)}${ssrRenderAttr("width", unref(word).img_width)}${ssrRenderAttr("height", unref(word).img_height)} data-v-97049a33></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-97049a33>${unref(word).content ?? ""}</div></main></div>`);
      } else {
        _push(`<div class="error" data-v-97049a33> Word not found. </div>`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/words/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-97049a33"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Cd82Xaro.mjs.map
