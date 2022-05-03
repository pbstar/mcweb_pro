<template>
  <div class="flex_dc" style="min-height: 100%">
    <Header />
    <div class="box">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/indexHeader.vue";
import Footer from "@/components/indexFooter.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  height: 100%;
}
@import "@/assets/css/public.css";
@import "@/assets/css/flex.css";
</style>
<style scoped>
.box {
  flex: 1;
}
</style>
