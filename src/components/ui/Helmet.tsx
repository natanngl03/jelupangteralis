import { Helmet as ReactHelmet } from "react-helmet";
export default function Helmet({ title }: { title: string }) {
   return (
      <ReactHelmet>
         <title>{title}</title>
      </ReactHelmet>
   );
}
