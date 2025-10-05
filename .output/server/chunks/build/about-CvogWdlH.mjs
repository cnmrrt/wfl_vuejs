import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({
    class: "main",
    role: "main"
  }, _attrs))} data-v-03242820><h1 data-v-03242820>About Words From Life</h1><div class="home-container" data-v-03242820><section class="section" data-v-03242820><div class="about-content" data-v-03242820><p data-v-03242820>Welcome to Words From Life, a collection of inspiring quotes, meaningful words, and timeless proverbs that capture the essence of human experience.</p><h2 data-v-03242820>Our Mission</h2><p data-v-03242820>We believe that words have the power to inspire, motivate, and transform lives. Our platform brings together wisdom from authors, thinkers, and cultures around the world.</p><h2 data-v-03242820>What You&#39;ll Find</h2><ul data-v-03242820><li data-v-03242820><strong data-v-03242820>Authors:</strong> Inspiring quotes from renowned authors and thinkers</li><li data-v-03242820><strong data-v-03242820>Words:</strong> Meaningful words with their definitions and context</li><li data-v-03242820><strong data-v-03242820>Preverbs:</strong> Timeless proverbs and idioms that offer life wisdom</li></ul><h2 data-v-03242820>Contact</h2><p data-v-03242820>Have questions or suggestions? We&#39;d love to hear from you!</p></div></section></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-03242820"]]);

export { about as default };
//# sourceMappingURL=about-CvogWdlH.mjs.map
