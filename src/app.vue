<script setup lang="ts">
  import routes from "weapp-vite/auto-routes";

  defineAppJson({
    pages: routes.pages,
    window: {
      navigationBarTitleText: "Weapp Starter",
      navigationBarBackgroundColor: "#0969ff",
      navigationBarTextStyle: "white",
    },
    style: "v2",
    componentFramework: "glass-easel",
    sitemapLocation: "sitemap.json",
  });
</script>

<style lang="css">
  @import "./app.css";
</style>
