import { lazy } from "react";
import Json from "../../json/lainnya.json";
import PageDetail from "../../components/elements/PageDetail";
const NotFound = lazy(() => import("../404"));

export default function LainnyaDetail({ page }: { page: string }) {
   const data = Json.find((x) => x.page == page);
   if (!data) return <NotFound backPath="/lainnya" />;
   return <PageDetail data={data} />;
}
