import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
    const wordData = ref(null);
    const loading = ref(true);
    const error = ref(null);
    computed(() => route.params.slug);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if (loading.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading" }, _attrs))} data-v-67b0aadb><p data-v-67b0aadb>Loading word details...</p></div>`);
      } else if (error.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "error" }, _attrs))} data-v-67b0aadb><p data-v-67b0aadb>${ssrInterpolate(error.value)}</p></div>`);
      } else if (wordData.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "word-detail-container" }, _attrs))} data-v-67b0aadb><main class="word-detail-main" data-v-67b0aadb><h1 data-v-67b0aadb>${ssrInterpolate(wordData.value.name)} ${ssrInterpolate(wordData.value.surname)} Quotes</h1><div id="main-image" data-v-67b0aadb><img${ssrRenderAttr("src", wordData.value.img)}${ssrRenderAttr("alt", `${wordData.value.word}`)}${ssrRenderAttr("width", wordData.value.img_width)}${ssrRenderAttr("height", wordData.value.img_height)} data-v-67b0aadb></div><p data-v-67b0aadb>${(_a = wordData.value.content) != null ? _a : ""}</p></main></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/words/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67b0aadb"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-C4Kw6znJ.mjs.map
