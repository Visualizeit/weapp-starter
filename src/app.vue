<script setup lang="ts">
import autoRoutes from 'weapp-vite/auto-routes'

const routes = autoRoutes


defineAppJson({
    componentFramework: 'glass-easel',
    darkmode: true,
    pages: routes.pages,
    sitemapLocation: 'sitemap.json',
    style: 'v2',
    subPackages: routes.subPackages,
    themeLocation: 'theme.json',
    window: {
        navigationBarBackgroundColor: '@navigationBarBackgroundColor',
        navigationBarTextStyle: '@navigationBarTextStyle',
        navigationBarTitleText: 'Weapp Starter',
    },
})
</script>

<style lang="css">
@import './app.css';
</style>
