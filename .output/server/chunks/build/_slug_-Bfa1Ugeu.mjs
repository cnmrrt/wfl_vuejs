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
    const { data: preverb } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`preverb-${slug}`, async () => {
      const res = await $fetch("https://words-from-life-5cb26-default-rtdb.firebaseio.com/idioms%20and%20proverbs/en/preverbs.json");
      return res.find((item) => item.id?.toLowerCase() === slug.toLowerCase());
    })), __temp = await __temp, __restore(), __temp);
    useHead(() => {
      if (!preverb.value) return {};
      return {
        title: `${preverb.value.preverb}`,
        meta: [
          // { name: 'description', content: preverb.value.en_meta_desc || '' },
          // { property: 'og:title', content: `${preverb.value.preverb}` },
          // { property: 'og:description', content: preverb.value.en_meta_desc || '' },
          // { property: 'og:image', content: preverb.value.img || '' },
          // { property: 'og:url', content: `https://wordsfromlife.com/words/${word.value.id}` }
        ],
        link: [
          {
            rel: "canonical",
            href: `https://wordsfromlife.com/words/${preverb.value.id}`
          }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      if (unref(preverb)) {
        _push(`<div class="preverb-detail-container" data-v-a812e8a8><main class="preverb-detail-main" data-v-a812e8a8><h1 data-v-a812e8a8>${ssrInterpolate(unref(preverb).preverb)}</h1>`);
        if (unref(preverb).img) {
          _push(`<div id="main-image" data-v-a812e8a8><img${ssrRenderAttr("src", unref(preverb).img)}${ssrRenderAttr("alt", unref(preverb).preverb)}${ssrRenderAttr("width", unref(preverb).img_width)}${ssrRenderAttr("height", unref(preverb).img_height)} data-v-a812e8a8></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-a812e8a8>${unref(preverb).content ?? ""}</div></main></div>`);
      } else {
        _push(`<div class="error" data-v-a812e8a8> Proverb not found. </div>`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/preverbs/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a812e8a8"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Bfa1Ugeu.mjs.map
