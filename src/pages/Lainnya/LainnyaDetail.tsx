import { useParams } from "react-router-dom";
import Json from "../../json/lainnya.json";
import PageDetail from "../../components/elements/PageDetail";

export default function LainnyaDetail() {
   const { slug } = useParams();
   const data = Json.find((x) => x.page == slug);
   return <PageDetail data={data} page="lainnya" />;
}
