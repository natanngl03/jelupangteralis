import { lazy } from "react";
import { type RouteObject } from "react-router-dom";
import App from "./App";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Faq = lazy(() => import("./pages/Faq"));
const Portofolio = lazy(() => import("./pages/Portofolio"));
const Videos = lazy(() => import("./pages/Videos"));
const Kanopi = lazy(() => import("./pages/Kanopi/Kanopi"));
const KanopiDetail = lazy(() => import("./pages/Kanopi/KanopiDetail"));
const Lainnya = lazy(() => import("./pages/Lainnya/Lainnya"));
const LainnyaDetail = lazy(() => import("./pages/Lainnya/LainnyaDetail"));
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
            path: "about",
            Component: About,
         },
         {
            path: "faq",
            Component: Faq,
         },
         {
            path: "portofolio",
            Component: Portofolio,
         },
         {
            path: "videos",
            Component: Videos,
         },
         {
            path: "kanopi",
            Component: Kanopi,
         },
         {
            path: "kanopi/:slug",
            Component: KanopiDetail,
         },
         {
            path: "lainnya",
            Component: Lainnya,
         },
         {
            path: "lainnya/:slug",
            Component: LainnyaDetail,
         },
         {
            path: "testimonial",
            Component: Testimonial,
         },
         {
            path: "notfound",
            element: <NotFound backPath="/" />,
         },
         {
            path: "*",
            element: <NotFound backPath="/" />,
         },
      ],
   },
];

export { Routes };
