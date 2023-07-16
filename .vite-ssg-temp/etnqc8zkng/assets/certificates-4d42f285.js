import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const _sfc_main = {
  props: ["cert"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: $props.cert.credential,
    target: "_blank",
    class: "relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",
    "aria-label": "Single Project"
  }, _attrs))}>`);
  if ($props.cert.featured) {
    _push(`<div class="absolute left-0 top-0 h-16 w-16"><div class="bg-gradient-to-r from-green-400 to-blue-500 absolute transform -rotate-45 bg-gray-600 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]"> Featured </div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div><img${ssrRenderAttr("src", $props.cert.img)}${ssrRenderAttr("alt", $props.cert.img)} class="rounded-t-xl border-none"></div><div class="text-center px-4 py-6"><p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">${ssrInterpolate($props.cert.title)}</p><span class="font-general-medium text-sm text-ternary-dark dark:text-ternary-light">${ssrInterpolate($props.cert.org)}</span></div></a>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/AboutCertSingle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutCertSingle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const certificates = {
  featured: [
    {
      id: 1,
      title: "Python for Everybody Specialization",
      credential: "https://www.coursera.org/account/accomplishments/specialization/certificate/74TB8VE8HFQ9",
      img: new URL("../assets/images/certs/74TB8VE8HFQ9.png", import.meta.url).href,
      org: "Coursera | University of Michigan",
      featured: true,
      skills: ["Python", "JSON", "XML", "DBMS"]
    }
  ],
  courses: [
    {
      id: 1,
      title: "SQL for Data Science",
      credential: "https://www.coursera.org/account/accomplishments/certificate/RPHXLFSDMY5Q",
      img: new URL("../assets/images/certs/RPHXLFSDMY5Q.png", import.meta.url).href,
      org: "Coursera | University of California, Davis",
      featured: false,
      skills: ["Data Science"]
    },
    {
      id: 2,
      title: "Foundations: Data, Data, Everywhere",
      credential: "https://www.coursera.org/account/accomplishments/certificate/WQTCNGESCJE6",
      img: new URL("../assets/images/certs/WQTCNGESCJE6.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: 3,
      title: "Ask Questions to Make Data-Driven Decisions",
      credential: "https://www.coursera.org/account/accomplishments/certificate/4PACMBRHMSD4",
      img: new URL("../assets/images/certs/4PACMBRHMSD4.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: 4,
      title: "Prepare Data for Exploration",
      credential: "https://www.coursera.org/account/accomplishments/certificate/4PACMBRHMSD4",
      img: new URL("../assets/images/certs/4PACMBRHMSD4.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: 5,
      title: "Process Data from Dirty to Clean",
      credential: "https://www.coursera.org/account/accomplishments/certificate/VSMTAGTWLBN3",
      img: new URL("../assets/images/certs/VSMTAGTWLBN3.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: 6,
      title: "Analyze Data to Answer Questions",
      credential: "https://www.coursera.org/account/accomplishments/certificate/7BUJPD6TJL3Q",
      img: new URL("../assets/images/certs/7BUJPD6TJL3Q.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Google BigQuery", "Data Analysis", "Google Sheets", "SQL"]
    },
    {
      id: 7,
      title: "Share Data Through the Art of Visualization",
      credential: "https://www.coursera.org/account/accomplishments/certificate/FL94MR4L6JZY",
      img: new URL("../assets/images/certs/FL94MR4L6JZY.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: [""]
    },
    {
      id: 8,
      title: "Programming for Everybody (Getting Started with Python)",
      credential: "https://www.coursera.org/account/accomplishments/certificate/AN5QQMNDFDKM",
      img: new URL("../assets/images/certs/AN5QQMNDFDKM.png", import.meta.url).href,
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    },
    {
      id: 9,
      title: "Python Data Structures",
      credential: "https://www.coursera.org/account/accomplishments/certificate/WW9AXFF2J87L",
      img: new URL("../assets/images/certs/WW9AXFF2J87L.png", import.meta.url).href,
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    },
    {
      id: 10,
      title: "Using Python to Access Web Data",
      credential: "https://www.coursera.org/account/accomplishments/certificate/VRHW6YK5CAR9",
      img: new URL("../assets/images/certs/VRHW6YK5CAR9.png", import.meta.url).href,
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    },
    {
      id: 11,
      title: "Using Databases with Python",
      credential: "https://www.coursera.org/account/accomplishments/certificate/D5V2D4PUP35R",
      img: new URL("../assets/images/certs/D5V2D4PUP35R.png", import.meta.url).href,
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    }
  ]
};
export {
  AboutCertSingle as A,
  certificates as c
};
