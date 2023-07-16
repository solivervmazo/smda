import { A as AboutCertSingle, c as certificates } from "./certificates-4d42f285.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
import feather from "feather-icons";
import "vite-ssg";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import "@vueuse/core";
const _sfc_main$1 = {
  components: {
    AboutCertSingle
  },
  data: () => {
    return {
      certsHeading: "Certificates",
      featured: JSON.parse(JSON.stringify(certificates["featured"])).reverse(),
      courses: JSON.parse(JSON.stringify(certificates["courses"])).reverse()
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AboutCertSingle = resolveComponent("AboutCertSingle");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 sm:mt-20" }, _attrs))}><p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">${ssrInterpolate(_ctx.certsHeading)}</p><p class="font-general-medium text-start text-2lg sm:text-3lg mt-2 sm:mt-6 text-primary-dark dark:text-primary-light"> Featured </p><div class="grid grid-cols-2 sm:grid-cols-4 mt-2 sm:mt-6 gap-2 mb-5"><!--[-->`);
  ssrRenderList(_ctx.featured, (cert) => {
    _push(ssrRenderComponent(_component_AboutCertSingle, {
      key: cert.id,
      cert
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="border-t-2 border-primary-light dark:border-secondary-dark"><p class="font-general-medium text-start text-2lg sm:text-3lg mt-2 sm:mt-6 text-primary-dark dark:text-primary-light"> Courses </p><div class="grid grid-cols-2 sm:grid-cols-4 mt-2 sm:mt-6 gap-2"><!--[-->`);
  ssrRenderList(_ctx.courses, (cert) => {
    _push(ssrRenderComponent(_component_AboutCertSingle, {
      key: cert.id,
      cert
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/credentials/Certificates.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Certificates = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Credentials",
  components: {
    Certificates
  },
  data: () => {
    return {};
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Certificates = resolveComponent("Certificates");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="container mx-auto">`);
  _push(ssrRenderComponent(_component_Certificates, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Credentials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Credentials = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Credentials as default
};
