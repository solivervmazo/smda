import { useSSRContext, ref, createApp } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
const style = "";
const _imports_0 = "/vite.svg";
const _imports_1 = "/assets/vue-5532db34.svg";
const HelloWorld_vue_vue_type_style_index_0_scoped_4b8d1567_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  __name: "HelloWorld",
  __ssrInlineRender: true,
  props: {
    msg: String
  },
  setup(__props) {
    const count = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-4b8d1567>${ssrInterpolate(__props.msg)}</h1><div class="card" data-v-4b8d1567><button type="button" data-v-4b8d1567>count is ${ssrInterpolate(count.value)}</button><p data-v-4b8d1567> Edit <code data-v-4b8d1567>components/HelloWorld.vue</code> to test HMR </p></div><p data-v-4b8d1567> Check out <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" data-v-4b8d1567>create-vue</a>, the official Vue + Vite starter </p><p data-v-4b8d1567> Install <a href="https://github.com/vuejs/language-tools" target="_blank" data-v-4b8d1567>Volar</a> in your IDE for a better DX </p><p class="read-the-docs" data-v-4b8d1567>Click on the Vite and Vue logos to learn more</p><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HelloWorld.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4b8d1567"]]);
const App_vue_vue_type_style_index_0_scoped_d6420450_lang = "";
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div data-v-d6420450><a href="https://vitejs.dev" target="_blank" data-v-d6420450><img${ssrRenderAttr("src", _imports_0)} class="logo" alt="Vite logo" data-v-d6420450></a><a href="https://vuejs.org/" target="_blank" data-v-d6420450><img${ssrRenderAttr("src", _imports_1)} class="logo vue" alt="Vue logo" data-v-d6420450></a></div>`);
      _push(ssrRenderComponent(HelloWorld, { msg: "Vite + Vue" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d6420450"]]);
createApp(App).mount("#app");
