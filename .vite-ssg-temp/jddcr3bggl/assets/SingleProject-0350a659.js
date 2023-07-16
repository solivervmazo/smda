import feather from "feather-icons";
import { _ as _export_sfc, s as strings, u as urls, p as projects } from "../main.mjs";
import { resolveComponent, useSSRContext, mergeProps, withCtx, createVNode, defineAsyncComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { useRoute } from "vue-router";
import "vite-ssg";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$6 = {
  props: ["project"],
  mixins: [strings],
  inject: ["linkClass"]
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">${ssrInterpolate($props.project.title)}</p><div class="flex"><div class="flex items-center mr-10"><i data-feather="clock" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i><span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">${ssrInterpolate(_ctx.capitalize($props.project.type))}</span></div>`);
  if ($props.project.link) {
    _push(`<div class="flex items-center mr-10">`);
    if ($props.project.link && $props.project.link.iconSet == "feathericons") {
      _push(`<i${ssrRenderAttr("data-feather", $props.project.link.icon)} class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>`);
    } else {
      _push(`<!---->`);
    }
    if ($props.project.link && $props.project.link.iconSet == "fontawesome") {
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", $props.project.link.icon],
        class: "w-4 h-4 text-ternary-dark dark:text-ternary-light"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<a${ssrRenderAttr("href", $props.project.link.url)} target="_blank" class="${ssrRenderClass(`font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light ${$options.linkClass}`)}">${ssrInterpolate(`View in ${$props.project.link.name}`)}</a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex items-center"><i data-feather="codepen" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i><span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">${ssrInterpolate($props.project.date)}</span></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/projects/ProjectHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ProjectHeader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  inject: ["linkClass"],
  props: ["project"],
  data() {
    return {
      open: false,
      imgEnlarge: ""
    };
  },
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
  },
  mixins: [urls]
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TransitionRoot, {
    as: "template",
    show: $data.open
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          class: "relative z-10",
          onClose: ($event) => $data.open = false
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="fixed inset-0 z-10 overflow-y-auto"${_scopeId2}><div class="flex items-end justify-center p-4 text-center sm:items-center sm:p-0"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "relative max-w-screen-lg sm:max-h-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-10" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="${ssrRenderClass([[$options.linkClass], "bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3"])}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_font_awesome_icon, {
                            icon: "xmark",
                            class: "w-4 h-4 cursor-pointer",
                            onClick: ($event) => {
                              $data.open = false;
                              $data.imgEnlarge = void 0;
                            }
                          }, null, _parent5, _scopeId4));
                          _push5(`</div><div class="bg-white border-t-2 border-primary-light dark:border-secondary-dark px-4 py-4 sm:p-6 sm:pb-4"${_scopeId4}><img${ssrRenderAttr("src", $data.imgEnlarge)} alt=""${_scopeId4}></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: [[$options.linkClass], "bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3"]
                            }, [
                              createVNode(_component_font_awesome_icon, {
                                icon: "xmark",
                                class: "w-4 h-4 cursor-pointer",
                                onClick: ($event) => {
                                  $data.open = false;
                                  $data.imgEnlarge = void 0;
                                }
                              }, null, 8, ["onClick"])
                            ], 2),
                            createVNode("div", { class: "bg-white border-t-2 border-primary-light dark:border-secondary-dark px-4 py-4 sm:p-6 sm:pb-4" }, [
                              createVNode("img", {
                                src: $data.imgEnlarge,
                                alt: ""
                              }, null, 8, ["src"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "relative max-w-screen-lg sm:max-h-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-10" }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: [[$options.linkClass], "bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3"]
                          }, [
                            createVNode(_component_font_awesome_icon, {
                              icon: "xmark",
                              class: "w-4 h-4 cursor-pointer",
                              onClick: ($event) => {
                                $data.open = false;
                                $data.imgEnlarge = void 0;
                              }
                            }, null, 8, ["onClick"])
                          ], 2),
                          createVNode("div", { class: "bg-white border-t-2 border-primary-light dark:border-secondary-dark px-4 py-4 sm:p-6 sm:pb-4" }, [
                            createVNode("img", {
                              src: $data.imgEnlarge,
                              alt: ""
                            }, null, 8, ["src"])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode(_component_TransitionChild, {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0",
                  "enter-to": "opacity-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100",
                  "leave-to": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "fixed inset-0 z-10 overflow-y-auto" }, [
                  createVNode("div", { class: "flex items-end justify-center p-4 text-center sm:items-center sm:p-0" }, [
                    createVNode(_component_TransitionChild, {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                      "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                      "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogPanel, { class: "relative max-w-screen-lg sm:max-h-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-10" }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [[$options.linkClass], "bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3"]
                            }, [
                              createVNode(_component_font_awesome_icon, {
                                icon: "xmark",
                                class: "w-4 h-4 cursor-pointer",
                                onClick: ($event) => {
                                  $data.open = false;
                                  $data.imgEnlarge = void 0;
                                }
                              }, null, 8, ["onClick"])
                            ], 2),
                            createVNode("div", { class: "bg-white border-t-2 border-primary-light dark:border-secondary-dark px-4 py-4 sm:p-6 sm:pb-4" }, [
                              createVNode("img", {
                                src: $data.imgEnlarge,
                                alt: ""
                              }, null, 8, ["src"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Dialog, {
            as: "div",
            class: "relative z-10",
            onClose: ($event) => $data.open = false
          }, {
            default: withCtx(() => [
              createVNode(_component_TransitionChild, {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                ]),
                _: 1
              }),
              createVNode("div", { class: "fixed inset-0 z-10 overflow-y-auto" }, [
                createVNode("div", { class: "flex items-end justify-center p-4 text-center sm:items-center sm:p-0" }, [
                  createVNode(_component_TransitionChild, {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                    "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogPanel, { class: "relative max-w-screen-lg sm:max-h-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-10" }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: [[$options.linkClass], "bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3"]
                          }, [
                            createVNode(_component_font_awesome_icon, {
                              icon: "xmark",
                              class: "w-4 h-4 cursor-pointer",
                              onClick: ($event) => {
                                $data.open = false;
                                $data.imgEnlarge = void 0;
                              }
                            }, null, 8, ["onClick"])
                          ], 2),
                          createVNode("div", { class: "bg-white border-t-2 border-primary-light dark:border-secondary-dark px-4 py-4 sm:p-6 sm:pb-4" }, [
                            createVNode("img", {
                              src: $data.imgEnlarge,
                              alt: ""
                            }, null, 8, ["src"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }, 8, ["onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--[-->`);
  ssrRenderList($props.project.src.images, (img) => {
    _push(`<div class="mb-10 sm:mb-0"><img${ssrRenderAttr("src", _ctx.projectUrl(`${$props.project.dir}/${$props.project.project}-img-${img}`))} class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"${ssrRenderAttr("alt", `${$props.project.dir}/${$props.project.project}-img-${img}`)}></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/projects/ProjectGallery.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProjectGallery = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const _sfc_main$4 = {
  data() {
    return {
      img: new URL(`../../assets/images/404.png`, import.meta.url).href
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-10 sm:mt-20" }, _attrs))}><div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"><div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0"><div class="relative"><div class="absolute"><div class=""><h1 class="my-2 text-gray-800 dark:text-ternary-light font-bold text-2xl"> Oops!! Something went wrong </h1><p class="my-2 text-gray-800 dark:text-ternary-light mb-5">Sorry about that! Please visit our hompage to get where you need to go.</p><a href="/" class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"> Take me there! </a></div></div><div><span class="text-9xl font-bold text-gray-300 dark:text-ternary-dark">404</span></div></div></div><div><img${ssrRenderAttr("src", $data.img)}></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/error/Markdown404.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const ProjectMd_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  props: ["dir", "file"],
  components: {
    Md: void 0
  },
  beforeMount() {
    this.$options.components["Md"] = defineAsyncComponent({
      loader: () => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../data/projects/1/notebook.md": () => import("./notebook-104bf69c.js"), "../../data/projects/coursera_py2/notebook.md": () => import("./notebook-2b349b89.js"), "../../data/projects/portfolio/README.md": () => import("./README-852b9942.js"), "../../data/projects/sql_airbnb_london/README.md": () => import("./README-2ab81f59.js"), "../../data/projects/sql_window_func/README.md": () => import("./README-b46b55cb.js") }), `../../data/projects/${this.$props.dir}/${this.$props.file}.md`),
      timeout: 200,
      errorComponent: NotFound
    });
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Md = resolveComponent("Md");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "prose" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Md, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/projects/ProjectMd.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Md = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  props: ["project"],
  mixins: [strings],
  inject: ["linkClass"],
  data: () => {
    return {
      hasMd: () => project.dir && project.src.md
    };
  },
  components: {
    Md
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Md = resolveComponent("Md");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "block sm:flex gap-0 sm:gap-10 mt-14" }, _attrs))}><div class="w-full sm:w-1/4 text-left">`);
  if ($props.project.details.client) {
    _push(`<div class="mb-7"><p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">${ssrInterpolate(_ctx.details.clientHeading)}</p><ul class="leading-loose"><!--[-->`);
    ssrRenderList(_ctx.details.companyInfos, (info) => {
      _push(`<li class="font-general-regular text-ternary-dark dark:text-ternary-light"><span>${ssrInterpolate(info.title)}: </span><a href="#" class="${ssrRenderClass(
        info.title == "Website" || info.title == "Phone" ? "hover:underline cursor-pointer" : ""
      )}" aria-label="Project Website and Phone">${ssrInterpolate(info.details)}</a></li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.project.details.guided) {
    _push(`<div class="mb-7"><p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">${ssrInterpolate($props.project.details.guided.heading)}</p><ul class="leading-loose"><li class="font-general-regular text-ternary-dark dark:text-ternary-light"><a${ssrRenderAttr("href", $props.project.details.guided.courseUrl)}>${ssrInterpolate($props.project.details.guided.courseTitle)}</a></li><!--[-->`);
    ssrRenderList(Object.keys($props.project.details.guided.details), (key) => {
      _push(`<span>`);
      if ($props.project.details.guided.details[key]) {
        _push(`<li class="font-general-regular text-ternary-dark dark:text-ternary-light"><span>${ssrInterpolate(_ctx.capitalize(key))}: </span><a${ssrRenderAttr("href", $props.project.details.guided.details[key].url)} class="${ssrRenderClass($options.linkClass)}" target="_blank">${ssrInterpolate($props.project.details.guided.details[key].name)}</a></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.project.details.objective) {
    _push(`<div class="mb-7"><p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">${ssrInterpolate($props.project.details.objective.heading)}</p><p class="font-general-regular text-primary-dark dark:text-ternary-light">${ssrInterpolate($props.project.details.objective.text)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.project.details.tags) {
    _push(`<div class="mb-7"><p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">${ssrInterpolate($props.project.details.tags.heading)}</p><p class="font-general-regular text-primary-dark dark:text-ternary-light">${ssrInterpolate($props.project.details.tags.tags.join(", "))}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="w-full sm:w-3/4 text-left mt-10 text-sm sm:mt-0 bg-slate-100 p-3 rounded-md overflow-auto max-h-screen">`);
  if (_ctx.hasMd) {
    _push(ssrRenderComponent(_component_Md, {
      dir: $props.project.dir,
      file: $props.project.src.md
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/projects/ProjectInfo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProjectInfo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: ["relatedProject"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark" }, _attrs))}><p class="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">${ssrInterpolate($props.relatedProject.relatedProjectsHeading)}</p><div class="grid grid-cols-1 sm:grid-cols-4 gap-10"><!--[-->`);
  ssrRenderList($props.relatedProject.relatedProjects, (item) => {
    _push(`<div><img${ssrRenderAttr("src", item.img)} class="rounded-xl cursor-pointer"${ssrRenderAttr("alt", item.title)}></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/projects/ProjectRelatedProjects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectRelatedProjects = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects
  },
  data: () => {
    return {
      project: projects.find((x) => x.project == useRoute().params.project)
    };
  },
  beforeRouteEnter(to, _, next) {
    const project2 = projects.find((x) => x.project == to.params.project);
    if (project2 && project2.dir && project2.dir) {
      next();
    }
    next({ name: "NotFound", params: { pathMatch: to.path.substring(1).split("/") } });
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProjectHeader = resolveComponent("ProjectHeader");
  const _component_ProjectGallery = resolveComponent("ProjectGallery");
  const _component_ProjectInfo = resolveComponent("ProjectInfo");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-10 sm:mt-20" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ProjectHeader, { project: _ctx.project }, null, _parent));
  if (_ctx.project.src && _ctx.project.src.images && _ctx.project.src.images.length > 0) {
    _push(ssrRenderComponent(_component_ProjectGallery, { project: _ctx.project }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_ProjectInfo, { project: _ctx.project }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/SingleProject.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SingleProject as default
};
