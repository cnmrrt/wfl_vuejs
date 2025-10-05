import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
    ref(null);
    const { data: authorData, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`author-${slug}`, async () => {
      const res = await fetch("https://words-from-life-5cb26-default-rtdb.firebaseio.com/quotes/authors-new.json");
      if (!res.ok) throw new Error("Failed to fetch authors");
      const allAuthors = await res.json();
      const author = allAuthors.find((a) => `${a.id}-quotes`.toLowerCase() === slug.toLowerCase());
      if (!author) throw new Error("Author not found");
      return author;
    })), __temp = await __temp, __restore(), __temp);
    if (authorData.value) {
      useHead({
        title: `${authorData.value.name} ${authorData.value.surname} Quotes`,
        meta: [
          { name: "description", content: authorData.value.en_meta_desc || "" },
          { property: "og:title", content: `${authorData.value.name} ${authorData.value.surname} Quotes` },
          { property: "og:description", content: authorData.value.en_meta_desc || "" },
          { property: "og:url", content: `https://wordsfromlife.com/authors/${authorData.value.id}-quotes` },
          { property: "og:image", content: authorData.value.img }
        ],
        link: [
          {
            rel: "canonical",
            href: `https://wordsfromlife.com/authors/${authorData.value.id}-quotes`
          }
        ]
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      if (unref(error)) {
        _push(`<div class="error" data-v-c8faa37f><p data-v-c8faa37f>${ssrInterpolate(unref(error).message)}</p></div>`);
      } else if (unref(authorData)) {
        _push(`<div class="author-detail-container" data-v-c8faa37f><main class="author-detail-main" data-v-c8faa37f><h1 data-v-c8faa37f>${ssrInterpolate(unref(authorData).name)} ${ssrInterpolate(unref(authorData).surname)} Quotes</h1><div id="main-image" data-v-c8faa37f><img${ssrRenderAttr("src", unref(authorData).img)}${ssrRenderAttr("alt", `${unref(authorData).name} ${unref(authorData).surname}`)}${ssrRenderAttr("width", unref(authorData).img_width)}${ssrRenderAttr("height", unref(authorData).img_height)} data-v-c8faa37f></div><ul id="quotes" data-v-c8faa37f><!--[-->`);
        ssrRenderList(unref(authorData).en_quotes, (quote, index) => {
          _push(`<li data-v-c8faa37f>${quote ?? ""}</li>`);
        });
        _push(`<!--]--></ul><span style="${ssrRenderStyle({ "display": "block", "text-align": "center" })}" data-v-c8faa37f>${ssrInterpolate(unref(authorData).born)} - ${ssrInterpolate(unref(authorData).dead)}</span></main></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/authors/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8faa37f"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-CnTsFOKG.mjs.map
