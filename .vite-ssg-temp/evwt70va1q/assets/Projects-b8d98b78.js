import { _ as _export_sfc, P as ProjectsGrid } from "../main.mjs";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "vite-ssg";
import "feather-icons";
import "vue-backtotop";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  name: "Projects",
  components: {
    ProjectsGrid
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProjectsGrid = resolveComponent("ProjectsGrid");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ProjectsGrid, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Projects as default
};
