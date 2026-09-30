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
         dynamicRoutes: ["/about", "/faq", "/portofolio", "/videos", "/service", "/testimonial"],
      }),
   ],
   build: {
      outDir: "docs",
   },
   ssgOptions: {
      dirStyle: "nested",
   },
});
