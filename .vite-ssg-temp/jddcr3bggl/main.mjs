import { ViteSSG } from "vite-ssg";
import feather from "feather-icons";
import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode, openBlock, createBlock, createVNode, Transition, toDisplayString, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faKaggle, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$c = {
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      this.$emit("theme-changed", newTheme);
      this.$router.go();
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "#",
    "aria-label": "Theme Switcher"
  }, _attrs))}>`);
  if ($props.theme === "light") {
    _push(`<i data-feather="moon" class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"></i>`);
  } else {
    _push(`<i data-feather="sun" class="text-gray-200 hover:text-gray-50 w-5"></i>`);
  }
  _push(`</a>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ThemeSwitcher.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ThemeSwitcher = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
  props: ["showModal", "isOpen"]
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [$props.isOpen ? "block" : "hidden", "m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"]
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/projects",
    class: "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2",
    "aria-label": "Projects"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/about",
    class: "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
    "aria-label": "About Me"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Me`);
      } else {
        return [
          createTextVNode("About Me")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/contact",
    class: "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
    "aria-label": "Contact"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/credentials",
    class: "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
    "aria-label": "Credentials"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Credentials`);
      } else {
        return [
          createTextVNode("Credentials")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/AppHeaderLinks.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const AppHeaderLinks = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {
  props: ["title"],
  data: () => {
    return {
      //
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(_attrs)}>${ssrInterpolate($props.title)}</button>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/reusable/Button.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const AppHeader_vue_vue_type_style_index_0_scoped_efe718dd_lang = "";
const _sfc_main$9 = {
  components: {
    ThemeSwitcher,
    AppHeaderLinks,
    Button
  },
  data() {
    return {
      isOpen: false,
      theme: "",
      logoDark: new URL("~@/assets/images/logo-dark.png", import.meta.url).href,
      logoLight: new URL("~@/assets/images/logo-light.png", import.meta.url).href,
      categories: [
        {
          id: 1,
          value: "web",
          name: "Web Application"
        },
        {
          id: 2,
          value: "mobile",
          name: "Mobile Application"
        },
        {
          id: 3,
          value: "ui-ux",
          name: "UI/UX Design"
        },
        {
          id: 4,
          value: "branding",
          name: "Branding & Anim"
        }
      ]
    };
  },
  created() {
  },
  mounted() {
    feather.replace();
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    }
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_AppHeaderLinks = resolveComponent("AppHeaderLinks");
  const _component_theme_switcher = resolveComponent("theme-switcher");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    id: "nav",
    class: "fixed top-0 z-10 bg-gray-50 w-full x-0 mx-auto top-0 z-10 bg-primary-light dark:bg-primary-dark"
  }, _attrs))} data-v-efe718dd><div class="z-10 max-w-screen-lg mx-auto sm:flex justify-between sm:items-center my-3" data-v-efe718dd><div class="flex justify-between items-center px-4 sm:px-0" data-v-efe718dd><div data-v-efe718dd>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($data.theme === "light") {
          _push2(`<img${ssrRenderAttr("src", $data.logoDark)} class="w-36" alt="Dark Logo" data-v-efe718dd${_scopeId}>`);
        } else {
          _push2(`<img${ssrRenderAttr("src", $data.logoLight)} class="w-36" alt="Light Logo" data-v-efe718dd${_scopeId}>`);
        }
      } else {
        return [
          $data.theme === "light" ? (openBlock(), createBlock("img", {
            key: 0,
            src: $data.logoDark,
            class: "w-36",
            alt: "Dark Logo"
          }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
            key: 1,
            src: $data.logoLight,
            class: "w-36",
            alt: "Light Logo"
          }, null, 8, ["src"]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_AppHeaderLinks, { isOpen: $data.isOpen }, null, _parent));
  _push(`<div class="hidden sm:flex justify-between items-center flex-col md:flex-row" data-v-efe718dd>`);
  _push(ssrRenderComponent(_component_theme_switcher, {
    theme: $data.theme,
    onThemeChanged: $options.updateTheme,
    class: "ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
  }, null, _parent));
  _push(`</div></div></nav>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/AppHeader.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-efe718dd"]]);
const _sfc_main$8 = {
  data: () => {
    return {
      copyrightDate: "2023",
      author: "Soliver Mazo"
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center text-center" }, _attrs))}><div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"> © ${ssrInterpolate(_ctx.copyrightDate)} ${ssrInterpolate("-")} ${ssrInterpolate(_ctx.author)}. </div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/FooterCopyright.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const FooterCopyright = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const socmeds = [
  {
    id: 1,
    name: "LinkedIn",
    icon: "linkedin",
    iconSet: "feathericons",
    url: "https://linkedin.com/in/solivervmazo"
  },
  {
    id: 2,
    name: "GitHub",
    icon: "github",
    iconSet: "feathericons",
    url: "https://github.com/solivervmazo"
  },
  {
    id: 3,
    name: "Kaggle",
    icon: "kaggle",
    iconSet: "fontawesome",
    url: "https://www.kaggle.com/solivermazo"
  }
];
const _sfc_main$7 = {
  components: { FooterCopyright },
  data() {
    return {
      socmeds
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_FooterCopyright = resolveComponent("FooterCopyright");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"><div class="flex flex-col justify-center items-center mb-12 sm:mb-20"><p class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"> Follow me </p><ul class="flex gap-4 sm:gap-8"><!--[-->`);
  ssrRenderList($data.socmeds, (socmed) => {
    _push(`<a${ssrRenderAttr("href", socmed.url)} target="__blank" class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500">`);
    if (socmed.iconSet == "feathericons") {
      _push(`<i${ssrRenderAttr("data-feather", socmed.icon)} class="w-5 sm:w-8 h-5 sm:h-8"></i>`);
    } else {
      _push(`<!---->`);
    }
    if (socmed.iconSet == "fontawesome") {
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", socmed.icon],
        class: "w-5 sm:w-8 h-5 sm:h-8"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</a>`);
  });
  _push(`<!--]--></ul></div>`);
  _push(ssrRenderComponent(_component_FooterCopyright, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/AppFooter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  components: {
    AppHeader,
    AppFooter
  },
  data: () => {
    return {
      appTheme: localStorage.getItem("theme")
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = resolveComponent("client-only");
  const _component_AppHeader = resolveComponent("AppHeader");
  const _component_router_view = resolveComponent("router-view");
  const _component_AppFooter = resolveComponent("AppFooter");
  _push(ssrRenderComponent(_component_client_only, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${ssrRenderClass([_ctx.appTheme, "pt-0.5"])}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_AppHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="pt-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_router_view, { theme: _ctx.appTheme }, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_AppFooter, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: [_ctx.appTheme, "pt-0.5"]
          }, [
            createVNode(_component_AppHeader),
            createVNode("div", { class: "pt-8" }, [
              createVNode(Transition, {
                name: "fade",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  createVNode(_component_router_view, { theme: _ctx.appTheme }, null, 8, ["theme"])
                ]),
                _: 1
              })
            ]),
            createVNode(_component_AppFooter)
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  name: "Home",
  data: () => {
    return {
      theme: "",
      bannerImage: new URL("~@/assets/images/soliver-mazo-data-analysis.png", import.meta.url).href
    };
  },
  created() {
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {}
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full relative pt-20" }, _attrs))}><div class="max-h-72 h-72 w-full text-right float-right mb-4"><img class="object-cover max-h-72 w-full text-right float-right"${ssrRenderAttr("src", _ctx.bannerImage)} alt="Developer"></div><div class="absolute w-full max-h-72 h-72 flex flex-col justify-between"><div class="container flex flex-col mx-auto sm:justify-end sm:flex-row mt-12 sm:mt-10"><div class="w-full md:w-3/3 text-right"><h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-primary-light uppercase"> Hi, I&#39;m Soliver </h1><p class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl leading-none text-gray-200"> Aspiring Data Analyst </p></div></div><div class="typewriter container flex flex-col mx-auto sm:justify-end sm:flex-row mb-8 sm:mb-8"><p class="font-general-medium mt-2 text-right py-1 text-md sm:text-lg xl:text-2xl leading-tight text-gray-100 bg-primary-dark px-2"> SQL • PYTHON • TABLEAU • GOOGLE SHEETS<span class="px-1 typer_end">.</span></p></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/AppBanner.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AppBanner = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const sources = {
  coursera: {
    id: "coursera",
    name: "Coursera.org",
    url: "https://www.coursera.org/"
  }
};
const repos = {
  kaggle: {
    name: "Kaggle",
    icon: "kaggle",
    iconSet: "fontawesome"
  },
  github: {
    name: "Github",
    icon: "github",
    iconSet: "feathericons"
  },
  bigquery: {
    name: "BigQuery",
    icon: "google",
    iconSet: "fontawesome"
  }
};
const categories = [
  "Sql",
  "Python",
  "Tableau",
  "Sheets",
  "Others"
];
const projects = [
  {
    id: 1,
    dir: "portfolio",
    project: "soliver-portfolio-using-vue-vite-tailwind",
    title: "Soliver portfolio using Vue+Vite and TailwinCSS hosted in Github pages",
    category: "others",
    img: "cover.png",
    type: "soliver mazo",
    date: "July 2023",
    details: {
      client: false,
      guided: false,
      objective: {
        key: "objective",
        heading: "Objective",
        text: `To create a portfolio for showcasing your my skills. With interactive project displays, skill highlighting, and optimized performance, impress potential employers and clients.`
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["Vue3", "Vite", "TailwindCSS", "GitHub Pages"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: [
        "about.png",
        /*'about-dark.png',*/
        "project1.png",
        "project2.png"
      ],
      md: "README"
    },
    link: {
      ...repos.github,
      url: "https://github.com/solivervmazo/soliver"
    }
  },
  {
    id: 2,
    dir: "sql_airbnb_london",
    project: "sql-data-cleaning-london-airbnb-listings-2023",
    title: "Data cleaning using SQL: London AirBnb listings March 2023",
    category: "Data Analysis",
    img: "cover.png",
    type: "soliver mazo",
    date: "June 2023",
    details: {
      client: false,
      guided: false,
      objective: {
        key: "objective",
        heading: "Objective",
        text: `This project aims to prepare the data for analysis by filtering out data outside Uk.`
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["SQL", "Data Analysis", "BigQuery"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: [],
      md: "README"
    },
    link: {
      ...repos.bigquery,
      url: "https://console.cloud.google.com/bigquery?sq=855219307890:df8ae76bb28948059671d59ab8a5d913"
    }
  },
  {
    id: 3,
    dir: "1",
    project: "exploratory-data-analysis-python-pandas",
    title: "Exploratory Data Analysis With Python and Pandas",
    category: "Data Analysis",
    img: "cover.png",
    type: "guided project",
    date: "July 2023",
    details: {
      client: false,
      guided: {
        heading: "About Project",
        details: {
          provider: sources["coursera"],
          course: {
            name: `Exploratory Data Analysis With Python and Pandas`,
            url: "https://www.coursera.org/projects/exploratory-data-analysis-python-pandas"
          },
          certificate: {
            name: "98S98F7JS7CT",
            url: "https://www.coursera.org/account/accomplishments/certificate/98S98F7JS7CT"
          }
        }
      },
      objective: {
        key: "objective",
        heading: "Objective",
        text: `Apply practical Exploratory Data Analysis (EDA) techniques on any tabular dataset using Python packages such as Pandas and Numpy.`
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["Python", "Data Analysis", "Pandas", "EDA"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: ["output_15_1.png", "output_14_1.png", "output_32_2.png"],
      md: "notebook"
    },
    link: {
      ...repos.kaggle,
      url: "https://www.kaggle.com/code/solivermazo/exploratory-data-analysis-with-python-and-pandas"
    }
  },
  {
    id: 4,
    dir: "coursera_py2",
    project: "python-for-data-analysis-pandas-numpy",
    title: "Python for Data Analysis: Pandas & NumPy",
    category: "Data Analysis",
    img: "cover.png",
    type: "guided project",
    date: "July 2023",
    details: {
      client: false,
      guided: {
        heading: "About Project",
        details: {
          provider: sources["coursera"],
          course: {
            name: `Python for Data Analysis: Pandas & NumPy`,
            url: "https://www.coursera.org/projects/python-for-data-analysis-numpy"
          },
          certificate: {
            name: "527RS23WZTLH",
            url: "https://www.coursera.org/account/accomplishments/certificate/527RS23WZTLH"
          }
        }
      },
      objective: {
        key: "objective",
        heading: "Objective",
        text: ` Understand the fundamentals of data analysis in Python and we will leverage the power of two important python libraries known as Numpy and pandas. NumPy and Pandas are two of the most widely used python libraries in data science. They offer high-performance, easy to use structures and data analysis tools.`
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["Python", "Data Analysis", "Pandas", "NumPy", "Data Science"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: [],
      md: "notebook"
    },
    link: {
      ...repos.kaggle,
      url: "https://www.kaggle.com/solivermazo/python-for-data-analysis-pandas-numpy"
    }
  },
  {
    id: 4,
    dir: "sql_window_func",
    project: "sql-window-functions-for-analytics",
    title: "SQL Window Functions for Analytics",
    category: "Data Analysis",
    img: "cover.png",
    type: "guided project",
    date: "July 2023",
    details: {
      client: false,
      guided: {
        heading: "About Project",
        details: {
          provider: sources["coursera"],
          course: {
            name: `SQL Window Functions for Analytics`,
            url: "https://www.coursera.org/projects/sql-window-functions-for-analytics"
          }
          // certificate: {
          // 	name: '527RS23WZTLH',
          // 	url: 'https://www.coursera.org/account/accomplishments/certificate/527RS23WZTLH'
          // }
        }
      },
      objective: {
        key: "objective",
        heading: "Objective",
        text: `This is a hands-on project that will help SQL users use window functions extensively for database insights. In this project, you will learn how to explore and query the project-db database extensively. We will start this hands-on project by retrieving the data in the table in the database.`
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["SQL", "MySql Workbench", "Data Analysis", "Data Science"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: ["1.png"],
      md: "README"
    },
    link: false
  }
];
const _sfc_main$4 = {
  props: {
    select: {
      type: String,
      default: "projects",
      required: true
    },
    selectOptions: {
      type: Array,
      default: () => categories
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<select${ssrRenderAttrs(mergeProps({
    name: $props.select,
    id: $props.select,
    class: "font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
  }, _attrs))}><option value class="text-sm sm:text-md">All Projects</option><!--[-->`);
  ssrRenderList($props.selectOptions, (option) => {
    _push(`<option${ssrRenderAttr("value", option)} class="sm:text-md">${ssrInterpolate(option)}</option>`);
  });
  _push(`<!--]--></select>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/projects/ProjectsFilter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProjectsFilter = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const strings = {
  methods: {
    capitalize(string) {
      return string.split(" ").map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(" ");
    }
  }
};
const urls = {
  methods: {
    projectUrl(string) {
      return new URL(`../data/projects/${string}`, import.meta.url).href;
    }
  }
};
const _sfc_main$3 = {
  props: ["project"],
  mixins: [strings, urls],
  inject: ["imgProjectErrorUrl"]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(ssrRenderComponent(_component_router_link, mergeProps({
    to: { path: `/projects/${$props.project.project}` },
    class: "relative rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",
    "aria-label": "Single Project"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="overflow-hidden max-h-40"${_scopeId}><img${ssrRenderAttr("src", _ctx.projectUrl(`${$props.project.dir}/${$props.project.project}-img-${$props.project.img}`))}${ssrRenderAttr("alt", $props.project.img)} class="rounded-t-xl border-none"${_scopeId}></div><div class="text-center px-4 pt-6 pb-4"${_scopeId}><p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"${_scopeId}>${ssrInterpolate($props.project.title)}</p></div>`);
        if ($props.project.details && $props.project.details.tags) {
          _push2(`<div class="flex px-4 pt-2 pb-8"${_scopeId}><span class="font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light"${_scopeId}>${ssrInterpolate($props.project.details.tags.tags.join(", "))}</span></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="absolute inset-x-0 bottom-0 text-right px-2 pt-2 pb-2"${_scopeId}><p class="font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light"${_scopeId}>${ssrInterpolate(_ctx.capitalize($props.project.type))}</p></div>`);
      } else {
        return [
          createVNode("div", { class: "overflow-hidden max-h-40" }, [
            createVNode("img", {
              src: _ctx.projectUrl(`${$props.project.dir}/${$props.project.project}-img-${$props.project.img}`),
              alt: $props.project.img,
              onError: ($event) => $event.target.src = $options.imgProjectErrorUrl,
              class: "rounded-t-xl border-none"
            }, null, 40, ["src", "alt", "onError"])
          ]),
          createVNode("div", { class: "text-center px-4 pt-6 pb-4" }, [
            createVNode("p", { class: "font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2" }, toDisplayString($props.project.title), 1)
          ]),
          $props.project.details && $props.project.details.tags ? (openBlock(), createBlock("div", {
            key: 0,
            class: "flex px-4 pt-2 pb-8"
          }, [
            createVNode("span", { class: "font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light" }, toDisplayString($props.project.details.tags.tags.join(", ")), 1)
          ])) : createCommentVNode("", true),
          createVNode("div", { class: "absolute inset-x-0 bottom-0 text-right px-2 pt-2 pb-2" }, [
            createVNode("p", { class: "font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light" }, toDisplayString(_ctx.capitalize($props.project.type)), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/projects/ProjectSingle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProjectSingle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { ProjectSingle, ProjectsFilter },
  data: () => {
    return {
      projects: JSON.parse(JSON.stringify(projects)).reverse(),
      projectsHeading: "Projects Portfolio",
      selectedCategory: "",
      searchProject: "",
      categories
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    }
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        console.log(category);
        return category.includes(this.selectedCategory);
      });
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    }
  },
  mounted() {
    feather.replace();
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProjectSingle = resolveComponent("ProjectSingle");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pt-10 sm:pt-14" }, _attrs))}><div class="text-center"><p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">${ssrInterpolate(_ctx.projectsHeading)}</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"><!--[-->`);
  ssrRenderList($options.filteredProjects, (project) => {
    _push(ssrRenderComponent(_component_ProjectSingle, {
      key: project.id,
      project
    }, null, _parent));
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/projects/ProjectsGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProjectsGrid = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  // setup () {
  // 	useMeta({
  // 		meta: [
  // 			{ name : 'title', content : 'Soliver Mazo' },
  // 			{ name : 'description', content : 'Soliver Mazo, A portfolio showcasing project for data analytics and relevant skills' },
  // 			{ property : 'og:type', content : 'website' },
  // 			{ property : 'og:url', content : 'https://solivervmazo.github.io/soliver/' },
  // 			{ property : 'og:description', content : 'Soliver Mazo, A portfolio showcasing project for data analytics and relevant skills' },
  // 			{ property : 'og:image', content : 'https://solivervmazo.github.io/soliver/solivervmazo.png' },
  // 			{ property : 'twitter:card', content : 'summary_large_image' },
  // 			{ property : 'twitter:url', content : 'https://solivervmazo.github.io/soliver/' },
  // 			{ property : 'twitter:title', content : 'Soliver Mazo' },
  // 			{ property : 'twitter:description', content : 'Soliver Mazo, A portfolio showcasing project for data analytics and relevant skills' },
  // 			{ property : 'twitter:image', content : 'https://solivervmazo.github.io/soliver/solivervmazo.png' },
  // 		]
  // 	})
  // },
  name: "Home",
  components: {
    AppBanner,
    ProjectsGrid,
    Button
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppBanner = resolveComponent("AppBanner");
  const _component_ProjectsGrid = resolveComponent("ProjectsGrid");
  const _component_router_link = resolveComponent("router-link");
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppBanner, { class: "mb-5 sm:mb-8" }, null, _parent));
  _push(`<div class="container mx-auto">`);
  _push(ssrRenderComponent(_component_ProjectsGrid, null, null, _parent));
  _push(`<div class="mt-10 sm:mt-20 flex justify-center">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/projects",
    class: "font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300",
    "aria-label": "More Projects"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, { title: "More Projects" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, { title: "More Projects" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomePage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-10 sm:mt-20" }, _attrs))}><div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"><div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0"><div class="relative"><div class="absolute"><div class=""><h1 class="my-2 text-gray-800 dark:text-ternary-light font-bold text-2xl"> Looks like you&#39;ve found the doorway to the great nothing </h1><p class="my-2 text-gray-800 dark:text-ternary-light mb-5">Sorry about that! Please visit our hompage to get where you need to go.</p><a href="/" class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"> Take me there! </a></div></div><div><span class="text-9xl font-bold text-gray-300 dark:text-ternary-dark">404</span></div></div></div><div><img${ssrRenderAttr("src", $data.img)}></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/error/NotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const router = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/about",
    name: "About",
    component: () => import(
      /* webpackChunkName: "about" */
      "./assets/About-84d97fa9.js"
    )
  },
  {
    path: "/credentials",
    name: "Credentials",
    component: () => import(
      /* webpackChunkName: "about" */
      "./assets/Credentials-bcfea61d.js"
    )
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import(
      /* webpackChunkName: "projects" */
      "./assets/Projects-1eab57df.js"
    )
  },
  {
    path: "/projects/:project",
    name: "SingleProject",
    component: () => import(
      /* webpackChunkName: "projects" */
      "./assets/SingleProject-0350a659.js"
    )
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import(
      /* webpackChunkName: "projects" */
      "./assets/Contact-faab5190.js"
    )
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  }
];
const app = "";
library.add(faKaggle, faXmark, faGoogle);
const createApp = ViteSSG(
  App,
  {
    routes: router,
    base: "/soliver/",
    mode: "history"
  },
  ({ app: app2, router: router2, routes, isClient, initialState }) => {
    app2.use(router2).component("font-awesome-icon", FontAwesomeIcon).provide("imgProjectErrorUrl", new URL(`../src/assets/images/placeholder-project.jpg`, import.meta.url).href).provide("linkClass", "text-indigo-600 dark:text-indigo-300");
    router2.beforeEach((to, from, next) => {
      var desc = "Soliver Mazo, A portfolio showcasing project for data analytics and relevant skills";
      to.name == "Home" ? "website" : "article";
      "https://solivervmazo.github.io" + to.href;
      new URL(`../src/assets/images/solivervmazo.png`, import.meta.url).href;
      if (to.name == "SingleProject") {
        const project = projects.find((x) => x.project == to.params.project);
        if (project && project.title)
          desc = project.title;
        if (project && project.details.tags && project.details.tags.tags)
          desc = desc + ` - ${project.details.tags.tags.join(",")}`;
      }
      next();
    });
  }
);
export {
  ProjectsGrid as P,
  _export_sfc as _,
  createApp,
  projects as p,
  strings as s,
  urls as u
};
