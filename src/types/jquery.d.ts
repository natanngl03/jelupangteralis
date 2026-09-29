import $ from "jquery";

declare global {
   interface JQuery {
      owlCarousel(options?: any): JQuery;
   }

   interface Window {
      $: typeof $;
      jQuery: typeof $;
   }
}

return {};
