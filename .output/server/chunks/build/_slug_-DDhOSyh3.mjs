import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const authorData = ref(null);
    const loading = ref(true);
    const error = ref(null);
    computed(() => route.params.slug);
    return (_ctx, _push, _parent, _attrs) => {
      if (loading.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading" }, _attrs))} data-v-46bee257><p data-v-46bee257>Loading author details...</p></div>`);
      } else if (error.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "error" }, _attrs))} data-v-46bee257><p data-v-46bee257>${ssrInterpolate(error.value)}</p></div>`);
      } else if (authorData.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "author-detail-container" }, _attrs))} data-v-46bee257><main class="author-detail-main" data-v-46bee257><h1 data-v-46bee257>${ssrInterpolate(authorData.value.name)} ${ssrInterpolate(authorData.value.surname)} Quotes</h1><div id="main-image" data-v-46bee257><img${ssrRenderAttr("src", authorData.value.img)}${ssrRenderAttr("alt", `${authorData.value.name} ${authorData.value.surname}`)}${ssrRenderAttr("width", authorData.value.img_width)}${ssrRenderAttr("height", authorData.value.img_height)} data-v-46bee257></div><ul id="quotes" data-v-46bee257><!--[-->`);
        ssrRenderList(authorData.value.en_quotes, (quote, index) => {
          _push(`<li data-v-46bee257>${quote != null ? quote : ""}</li>`);
        });
        _push(`<!--]--></ul><span style="${ssrRenderStyle({ "display": "block", "text-align": "center" })}" data-v-46bee257>${ssrInterpolate(authorData.value.born)} - ${ssrInterpolate(authorData.value.dead)}</span></main></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/authors/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46bee257"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-DDhOSyh3.mjs.map
