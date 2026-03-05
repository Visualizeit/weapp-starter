<script setup lang="ts">
  import routes from "weapp-vite/auto-routes";

  defineAppJson({
    pages: routes.pages,
    window: {
      navigationBarTitleText: "Weapp Starter",
      navigationBarBackgroundColor: "@navigationBarBackgroundColor",
      navigationBarTextStyle: "@navigationBarTextStyle",
    },
    darkmode: true,
    style: "v2",
    componentFramework: "glass-easel",
    sitemapLocation: "sitemap.json",
    themeLocation: "theme.json",
  });
</script>

<style lang="css">
  @import "./app.css";
</style>
