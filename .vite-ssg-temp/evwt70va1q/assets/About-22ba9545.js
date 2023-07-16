import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
import { A as AboutCertSingle, c as certificates } from "./certificates-4d42f285.js";
import feather from "feather-icons";
import "vite-ssg";
import "vue-backtotop";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$2 = {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: `Hello, I'm Soliver, a professional with a diverse background in software development and a passion for data analytics. From 2015 to 2019, I dedicated myself to the world of software development, honing my skills in various programming languages and frameworks. During those years, I had the opportunity to work on several exciting projects, gaining valuable experience in creating efficient and innovative software solutions.`
        },
        {
          id: 2,
          bio: `However, due to the demands of my family business, I had to temporarily step away from my software development career. As an individual committed to family responsibilities, I dedicated my time and energy to ensuring the success and growth of our family business. While this was a rewarding experience, my passion for data analysis and technology never waned.`
        },
        {
          id: 3,
          bio: `Now, as I seek to re-enter the professional world as a data analyst, I am excited to leverage my software development background to explore new opportunities in the field of data analytics. I believe that my strong foundation in programming, combined with my analytical mindset and attention to detail, will allow me to excel in this evolving industry.`
        },
        {
          id: 4,
          bio: `Although I have yet to determine a specific industry in which to focus my data analytics career, I approach this decision with an open mind and eagerness to learn. I understand the power of data-driven decision-making and the immense potential it holds across various sectors. With my strong analytical skills and technical acumen, I am confident in my ability to adapt and contribute to any industry that values the transformative potential of data analytics.`
        },
        {
          id: 5,
          bio: `I am eager to engage with like-minded professionals and organizations that value data-driven insights and are open to innovative approaches to problem-solving. Together, we can harness the power of data to drive informed decision-making, uncover valuable insights, and unlock new opportunities for growth.`
        },
        {
          id: 5,
          bio: `I look forward to embarking on this exciting journey as a data analyst and contributing to the advancement of data-driven practices in whichever industry I ultimately choose.`
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "block sm:flex sm:gap-10 mt-10 sm:mt-20" }, _attrs))}><div class="w-full text-center sm:w-4/4 text-left"><!--[-->`);
  ssrRenderList($setup.bios, (bio) => {
    _push(`<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-sm">${ssrInterpolate(bio.bio)}</p>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/AboutMe.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AboutMe = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    AboutCertSingle
  },
  inject: ["linkClass"],
  data: () => {
    return {
      certsHeading: "Certificates",
      certificates: JSON.parse(JSON.stringify(certificates["featured"])).reverse().splice(0, 4).concat(JSON.parse(JSON.stringify(certificates["courses"])).reverse().splice(0, 4))
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AboutCertSingle = resolveComponent("AboutCertSingle");
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 sm:mt-20" }, _attrs))}><p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">${ssrInterpolate(_ctx.certsHeading)}</p><div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"><!--[-->`);
  ssrRenderList(_ctx.certificates, (cert) => {
    _push(ssrRenderComponent(_component_AboutCertSingle, {
      key: cert.id,
      cert
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/credentials",
    class: "font-general-medium text-center block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
    "aria-label": "Certificates"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a class="${ssrRenderClass([$options.linkClass])}"${_scopeId}>See all</a>`);
      } else {
        return [
          createVNode("a", {
            class: [$options.linkClass]
          }, "See all", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/AboutCerts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AboutCerts = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "About",
  components: {
    AboutMe,
    AboutCerts
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
  const _component_AboutMe = resolveComponent("AboutMe");
  const _component_AboutCerts = resolveComponent("AboutCerts");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="container mx-auto">`);
  _push(ssrRenderComponent(_component_AboutMe, null, null, _parent));
  _push(`</div><div class="container mx-auto">`);
  _push(ssrRenderComponent(_component_AboutCerts, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  About as default
};
