// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'After Class',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {
                charset: 'utf-8'
            }, {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }, {
                hid: 'description',
                name: 'description',
                content: ''
            }, {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    googleFonts: {
        families: {
            Roboto: true,
            'Roboto+Condensed': true,
            'Zilla+Slab': true
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    // css: ['~/assets/scss/main.scss'],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        //'~/plugins/bootstrap.js',
        '~/plugins/fontawesome.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxtjs/google-fonts'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        // '@nuxt/content'
        // '@nuxtjs/tailwindcss'
    ],
    // bootstrapVue: {
    //     bootstrapCSS: false, // Or `css: false`
    //     bootstrapVueCSS: false // Or `bvCSS: false`
    // },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,


        transpile: [
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-solid-svg-icons'
        ]

    }
})
