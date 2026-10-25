import { lazy } from "react";
import { useParams } from "react-router-dom";
import Json from "../../json/lainnya.json";
import PageDetail from "../../components/elements/PageDetail";
const NotFound = lazy(() => import("../404"));

export default function LainnyaDetail() {
   const { slug } = useParams();
   const data = Json.find((x) => x.page == slug);

   if (!data) return <NotFound backPath="/lainnya" />;

   return <PageDetail data={data} />;
}
