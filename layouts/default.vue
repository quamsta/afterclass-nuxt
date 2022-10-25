<template>
    <div>
        <slot />
    </div>
</template>

<script>
export default {

    watch: {
        $route(to, from) {
            var menuCollapse = document.getElementById('navbarSupportedContent')
            var bsCollapse = new bootstrap.Collapse(menuCollapse, {
                toggle: false
            })
            bsCollapse.hide()
        },
    },

}
</script>
<style lang="scss">
@import "~/assets/scss/main.scss";
@import "~/node_modules/@fortawesome/fontawesome-svg-core/styles.css"
</style>