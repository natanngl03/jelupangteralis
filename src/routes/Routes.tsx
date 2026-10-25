import { lazy } from "react";
import { type RouteObject } from "react-router-dom";
import App from "../App";

import KanopiJSON from "../json/kanopi.json";
import LainnyaJSON from "../json/lainnya.json";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Faq = lazy(() => import("../pages/Faq"));
const Portofolio = lazy(() => import("../pages/Portofolio"));
const Videos = lazy(() => import("../pages/Videos"));
const Kanopi = lazy(() => import("../pages/Kanopi/Kanopi"));
const KanopiDetail = lazy(() => import("../pages/Kanopi/KanopiDetail"));
const Lainnya = lazy(() => import("../pages/Lainnya/Lainnya"));
const LainnyaDetail = lazy(() => import("../pages/Lainnya/LainnyaDetail"));
const Testimonial = lazy(() => import("../pages/Testimonial"));

const NotFound = lazy(() => import("../pages/404"));

const kanopi_pages = () => {
   const pages = KanopiJSON.map((item) => ({ path: item.page, element: <KanopiDetail page={item.page} /> }));
   return pages;
};

const lainya_pages = () => {
   const pages = LainnyaJSON.map((item) => ({ path: item.page, element: <LainnyaDetail page={item.page} /> }));
   return pages;
};

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
            children: [{ index: true, Component: Kanopi }, ...kanopi_pages()],
         },
         {
            path: "lainnya",
            children: [{ index: true, Component: Lainnya }, ...lainya_pages()],
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
