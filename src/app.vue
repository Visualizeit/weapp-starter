<script setup lang="ts">
import { pages } from 'weapp-vite/auto-routes'

defineAppJson({
    componentFramework: 'glass-easel',
    darkmode: true,
    pages,
    sitemapLocation: 'sitemap.json',
    style: 'v2',
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
