import { useParams } from "react-router-dom";
import Json from "../../json/kanopi.json";
import PageDetail from "../../components/elements/PageDetail";

export default function KanopiDetail() {
   const { slug } = useParams();
   const data = Json.find((x) => x.page == slug);
   return <PageDetail data={data} page="kanopi" />;
}
