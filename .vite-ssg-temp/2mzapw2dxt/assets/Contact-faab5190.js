import feather from "feather-icons";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
import "vite-ssg";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$1 = {
  name: "Contacts",
  props: ["contacts"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "block sm:flex sm:gap-10 mt-10 sm:mt-20" }, _attrs))}><div class="text-left max-w-xl px-6"><h2 class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"> Contact details </h2><ul class="font-general-regular"><!--[-->`);
  ssrRenderList($props.contacts, (contact) => {
    _push(`<li class="flex"><a href="#" class="${ssrRenderClass([
      contact.icon === "mail" || contact.icon === "phone" ? "hover:underline cursor-pointer" : "",
      "text-lg mb-4 text-ternary-dark dark:text-ternary-light"
    ])}" aria-label="Website and Phone">${ssrInterpolate(contact.name)}</a></li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contact/ContactDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactDetails = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Contacts",
  components: {
    ContactDetails
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Davao City, Davao del Sur Philippines, 8000",
          icon: "map-pin"
        },
        {
          id: 2,
          name: "solivervmazo.jobs@gmail.com",
          icon: "mail"
        },
        {
          id: 3,
          name: "github.com/solivervmazo",
          icon: "github"
        },
        {
          id: 3,
          name: "linkedin.com/in/solivervmazo/",
          icon: "linkedin"
        }
      ]
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactDetails = resolveComponent("ContactDetails");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="container mx-auto">\\ `);
  _push(ssrRenderComponent(_component_ContactDetails, { contacts: $data.contacts }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Contact as default
};
