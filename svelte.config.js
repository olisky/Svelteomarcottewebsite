import adapterNetlify from "@sveltejs/adapter-netlify";
import adapterAuto from "@sveltejs/adapter-auto";

const isProd = process.env.NODE_ENV === "production";

export default {
  kit: {
    adapter: isProd ? adapterNetlify() : adapterAuto(),
  },
};
