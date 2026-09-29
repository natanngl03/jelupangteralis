import { lazy } from "react";
import { type RouteObject } from "react-router-dom";
import App from "./App";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Faq = lazy(() => import("./pages/Faq"));
const Portofolio = lazy(() => import("./pages/Portofolio"));
const Videos = lazy(() => import("./pages/Videos"));
const Service = lazy(() => import("./pages/Service"));
const Testimonial = lazy(() => import("./pages/Testimonial"));
const NotFound = lazy(() => import("./pages/404"));

const Routes: RouteObject[] = [
   {
      path: "/",
      Component: App,
      children: [
         {
            index: true,
            Component: Home,
         },
         {
            path: "/about",
            Component: About,
         },
         {
            path: "/faq",
            Component: Faq,
         },
         {
            path: "/portofolio",
            Component: Portofolio,
         },
         {
            path: "/videos",
            Component: Videos,
         },
         {
            path: "/service",
            Component: Service,
         },
         {
            path: "/testimonial",
            Component: Testimonial,
         },
         {
            path: "*",
            Component: NotFound,
         },
      ],
   },
];

export { Routes };
