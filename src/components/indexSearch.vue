<template>
  <div class="searchbox">
    <div class="bg2"></div>
    <div class="bg1"></div>
    <div class="bear"></div>
    <div class="inputbox">
      <div class="inputlogo">
        <span>全能搜索</span>
      </div>
      <el-input
        placeholder="请输入要搜索的内容"
        v-model="input"
        size="large"
        v-on:keyup="toEnter"
        class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="select">
            <el-option
              v-for="(item, index) in linkList"
              :label="item.name"
              :value="item.url"
              :key="index"
            ></el-option>
          </el-select>
        </template>
        <template #append>
          <el-button @click="toSearch">搜索</el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      select: "https://www.baidu.com/s?wd=",
      linkList: [],
    };
  },
  created() {
    this.getLink();
  },
  methods: {
    getLink() {
      this.$http
        .get("getLink.php", {
          type: 0,
        })
        .then((res) => {
          if (res.code == 200) {
            this.linkList = res.data;
          }
        });
    },
    toSearch() {
      window.open(this.select + this.input);
    },
    toEnter() {
      let key = window.event.keyCode;
      if (key == 13) this.toSearch();
    },
  },
};
</script>
<style lang="scss" scoped>
.inputbox {
  width: 60%;
  margin: 130px auto 0;
}
:deep() .el-input__wrapper {
  height: 48px;
}
:deep() .el-select .el-input {
  width: 90px;
  background-color: #fff;
}
:deep() .el-button {
  padding: 8px 20px;
}
:deep() .el-input-group__append {
  background-color: #fff;
}
:deep() .el-input__wrapper.is-focus {
  box-shadow: 0 0 0 1px #dcdfe6 inset;
}
.searchbox {
  width: 100%;
  height: 389px;
  background-color: rgb(245, 245, 245);
  overflow: hidden;
}
.inputlogo {
  display: none;
}
.bg1 {
  position: absolute;
  width: 100%;
  height: 300px;
  top: 200px;
  background: url(http://oss.mcweb.club/img/navs/bg1.png) no-repeat;
  animation: move_bg 80s linear infinite;
}
.bg2 {
  position: absolute;
  top: 100px;
  width: 100%;
  height: 300px;
  background: url(http://oss.mcweb.club/img/navs/bg2.png) no-repeat;
  animation: move_bg 100s linear infinite;
}
.bear {
  position: absolute;
  top: 370px;
  width: 100px;
  height: 50px;
  background: url(http://oss.mcweb.club/img/navs/bear.png) no-repeat;
  animation: bear 1s steps(8) infinite, move 12s forwards;
}
@media all and (max-width: 600px) {
  .inputbox {
    margin: 45px 15px 0;
    z-index: 9;
    width: calc(100vw - 30px);
    position: relative;
    :deep() .el-input__wrapper {
      height: 38px;
      padding: 0 7px;
    }
    :deep() .el-select .el-input {
      width: 68px;
    }
    :deep() .el-select__caret {
      margin-left: -2px;
    }
    :deep() .el-button {
      padding: 8px 10px;
    }
  }
  .searchbox {
    height: 254px;
  }
  .inputlogo {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    line-height: 40px;
    height: 40px;
    color: #fff;
    width: 180px;
    margin: 0 auto 25px;
    background-color: rgba(0, 0, 0, 0.463);
    border-radius: 25px;
  }
  .bg1 {
    height: 200px;
    top: 100px;
    z-index: 2;
  }
  .bg2 {
    top: 65px;
    height: 200px;
    z-index: 1;
  }
  .bear {
    z-index: 3;
    top: 230px;
    animation: bear 1s steps(8) infinite, move 6s forwards;
  }
}
@keyframes bear {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -800px 0;
  }
}
@keyframes move {
  0% {
    left: 0;
  }
  100% {
    left: 50%;
    transform: translateX(-50%);
  }
}
@keyframes move_bg {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>
