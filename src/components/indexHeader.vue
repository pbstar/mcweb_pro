<template>
  <div class="boxf">
    <div class="box flex_sb_ce">
      <div class="bleft" @click="toHome">
        <span>梦辰小站</span>
      </div>
      <div class="bright">
        <span :class="$route.name == 'about' ? 'active' : ''" @click="toAbout"
          >关于</span
        >
      </div>
    </div>
  </div>
</template>

<script>
// import { ElMessage } from "element-plus";
export default {
  methods: {
    toAbout() {
      this.$router.push({
        name: "about",
      });
      // ElMessage("开发中！");
    },
    toHome() {
      this.$router.push({
        name: "nav",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.boxf {
  background-color: #545c64;
}
.box {
  height: 60px;
  width: 100%;
  padding: 0 20px;
  .bleft {
    font-size: 18px;
    line-height: 18px;
    color: #fff;
    cursor: pointer;
  }
  .bright {
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    .active {
      color: #ffd04b;
      padding: 8px 3px 7px;
      border-bottom: 1px solid #ffd04b;
    }
  }
}
@media screen and (max-width: 600px) {
  .box {
    height: 46px;
    padding: 0 10px;
    .bleft {
      font-size: 16px;
      line-height: 16px;
    }
    .bright {
      font-size: 12px;
      .active {
        padding: 4px 2px 5px;
      }
    }
  }
}
</style>
