import { ssrRenderComponent } from 'vue/server-renderer';
import { N as Navbar } from './Navbar-1Hv0UgjO.mjs';
import { useSSRContext } from 'vue';
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
import 'vue-router';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="main" role="main" data-v-462e8095><h1 data-v-462e8095>About Words From Life</h1><div class="home-container" data-v-462e8095><section class="section" data-v-462e8095><div class="about-content" data-v-462e8095><p data-v-462e8095> Welcome to Words From Life, a collection of inspiring quotes, meaningful words, and timeless proverbs that capture the essence of human experience. </p><h2 data-v-462e8095>Our Mission</h2><p data-v-462e8095> We believe that words have the power to inspire, motivate, and transform lives. Our platform brings together wisdom from authors, thinkers, and cultures around the world. </p><h2 data-v-462e8095>What You&#39;ll Find</h2><ul data-v-462e8095><li data-v-462e8095><strong data-v-462e8095>Authors:</strong> Inspiring quotes from renowned authors and thinkers</li><li data-v-462e8095><strong data-v-462e8095>Words:</strong> Meaningful words with their definitions and context</li><li data-v-462e8095><strong data-v-462e8095>Preverbs:</strong> Timeless proverbs and idioms that offer life wisdom</li></ul><h2 data-v-462e8095>Contact</h2><p data-v-462e8095>Have questions or suggestions? We&#39;d love to hear from you!</p></div></section></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-462e8095"]]);

export { about as default };
//# sourceMappingURL=about-BozppNDE.mjs.map
