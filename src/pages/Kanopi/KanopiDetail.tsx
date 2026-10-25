import { lazy } from "react";
import { useParams } from "react-router-dom";
import Json from "../../json/kanopi.json";
import PageDetail from "../../components/elements/PageDetail";
const NotFound = lazy(() => import("../404"));

export default function KanopiDetail() {
   const { slug } = useParams();
   const data = Json.find((x) => x.page == slug);

   if (!data) return <NotFound backPath="/kanopi" />;

   return <PageDetail data={data} />;
}
