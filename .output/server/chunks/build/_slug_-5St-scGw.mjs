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
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading" }, _attrs))} data-v-0f41b0cd><p data-v-0f41b0cd>Loading proverb details...</p></div>`);
      } else if (error.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "error" }, _attrs))} data-v-0f41b0cd><p data-v-0f41b0cd>${ssrInterpolate(error.value)}</p></div>`);
      } else if (wordData.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "word-detail-container" }, _attrs))} data-v-0f41b0cd><main class="word-detail-main" data-v-0f41b0cd><h1 data-v-0f41b0cd>${ssrInterpolate(wordData.value.preverb)}</h1><div id="main-image" data-v-0f41b0cd><img${ssrRenderAttr("src", wordData.value.img)}${ssrRenderAttr("alt", `${wordData.value.word}`)}${ssrRenderAttr("width", wordData.value.img_width)}${ssrRenderAttr("height", wordData.value.img_height)} data-v-0f41b0cd></div><p data-v-0f41b0cd>${(_a = wordData.value.content) != null ? _a : ""}</p></main></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/preverbs/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f41b0cd"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-5St-scGw.mjs.map
