// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "nuxt-schema-org",
        "@nuxt/test-utils/module"
    ],
    runtimeConfig: {
        // Public keys that are exposed to the client
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api/',
        }
    },
    nitro: {
        experimental: {
            database: true,
        },
    },
    routeRules: {
        "/": {
            ssr: false,
        },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    image: {
        domains: ['picsum.photos']
    }
});