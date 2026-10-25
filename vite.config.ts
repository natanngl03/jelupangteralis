/// <reference types="vite-react-ssg" />
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      sitemap({
         hostname: "https://jelupangteralis.com",
         outDir: "docs",
         dynamicRoutes: [
            "/about",
            "/faq",
            "/portofolio",
            "/videos",
            "/testimonial",

            "/lainnya",
            "/lainnya/teralis",
            "/lainnya/railing-tangga",
            "/lainnya/tangga-putar",
            "/lainnya/gerbang",
            "/lainnya/pintu-besi",
            "/lainnya/perbaikan",

            "/kanopi",
            "/kanopi/kordoba-non-plavon",
            "/kanopi/kordoba-with-plavon",
            "/kanopi/kaca",
            "/kanopi/otomatis",
            "/kanopi/spandek",
            "/kanopi/baja-ringan",
            "/kanopi/custom-repair",
         ],
      }),
   ],
   build: {
      outDir: "docs",
   },
   ssgOptions: {
      dirStyle: "nested",
   },
});
