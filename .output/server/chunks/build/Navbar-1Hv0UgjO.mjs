import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "Navbar"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<nav${ssrRenderAttrs(mergeProps({ id: "navbar" }, _attrs))} data-v-3bece456><ul data-v-3bece456><li data-v-3bece456>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-3bece456>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/authors" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Authors`);
      } else {
        return [
          createTextVNode("Authors")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-3bece456>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/words" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Words`);
      } else {
        return [
          createTextVNode("Words")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-3bece456>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/preverbs" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Proverbs`);
      } else {
        return [
          createTextVNode("Proverbs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-3bece456>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3bece456"]]), { __name: "Navbar" });

export { Navbar as N };
//# sourceMappingURL=Navbar-1Hv0UgjO.mjs.map
