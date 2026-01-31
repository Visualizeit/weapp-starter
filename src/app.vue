<script setup lang="ts">
  defineAppJson({
    pages: ["pages/index/index"],
    window: {
      navigationBarTitleText: "Weapp Starter",
      navigationBarBackgroundColor: "#0969FF",
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
