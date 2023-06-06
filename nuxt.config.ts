// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "service-worker",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      title: "Bharatrath | Bharat runs on Bharatrath",
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: "https://cdn.tailwindcss.com" },
        { src: "https://unpkg.com/swiper/swiper-bundle.min.js" },
        { src: "https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js" },
        { src: "https://unpkg.com/flowbite@1.1.1/dist/flowbite.js" },
      ],
      link: [
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css" },
        { rel: "stylesheet", href: "https://unpkg.com/swiper/swiper-bundle.min.css" },
      ],
    },
  },
});
// <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
// <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
// <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// <script src="https://unpkg.com/flowbite@1.1.1/dist/flowbite.js"></script>
// <link rel="stylesheet" href="https://unpkg.com/flowbite@1.1.1/dist/flowbite.min.css" />
// <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css" rel="stylesheet" type="text/css" />
// <script src="https://cdn.tailwindcss.com"></script>
// <script src="https://cdn.tailwindcss.com"></script>
