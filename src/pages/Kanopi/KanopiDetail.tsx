import { lazy } from "react";
import Json from "../../json/kanopi.json";
import PageDetail from "../../components/elements/PageDetail";
const NotFound = lazy(() => import("../404"));

export default function KanopiDetail({ page }: { page: string }) {
   const data = Json.find((x) => x.page == page);
   if (!data) return <NotFound backPath="/kanopi" />;
   return <PageDetail data={data} />;
}
