<template>
  <div>
    <Search />
    <div class="box">
      <div class="rowbox">
        <div class="rbtop">
          <img src="@/assets/icons/row1.png" alt="" />
          <span>热门常用</span>
        </div>
        <div class="rbmid">
          <Link v-for="(item, index) in list1" :key="index" :data="item"></Link>
        </div>
      </div>
      <div class="rowbox">
        <div class="rbtop">
          <img src="@/assets/icons/row2.png" alt="" />
          <span>视频媒体</span>
        </div>
        <div class="rbmid">
          <Link v-for="(item, index) in list2" :key="index" :data="item"></Link>
        </div>
      </div>
      <div class="rowbox">
        <div class="rbtop">
          <img
            src="@/assets/icons/row3.png"
            style="width: 18px; margin: 1px 6px 1px 1px"
            alt=""
          />
          <span>必备站点</span>
        </div>
        <div class="rbmid">
          <Link v-for="(item, index) in list3" :key="index" :data="item"></Link>
        </div>
      </div>
      <div class="rowbox">
        <div class="rbtop">
          <img
            src="@/assets/icons/row4.png"
            style="width: 18px; margin: 1px 6px 1px 1px"
            alt=""
          />
          <span>社交资讯</span>
        </div>
        <div class="rbmid">
          <Link v-for="(item, index) in list4" :key="index" :data="item"></Link>
        </div>
      </div>
      <div class="rowbox">
        <div class="rbtop">
          <img
            src="@/assets/icons/row5.png"
            style="width: 18px; margin: 1px 6px 1px 1px"
            alt=""
          />
          <span>实用工具</span>
        </div>
        <div class="rbmid">
          <Link v-for="(item, index) in list5" :key="index" :data="item"></Link>
        </div>
      </div>
      <div class="rowbox">
        <div class="rbtop">
          <img
            src="@/assets/icons/row6.png"
            style="width: 17px; margin: 1px 6px 1px 1px"
            alt=""
          />
          <span>在线文档</span>
        </div>
        <div class="rbmid">
          <Link v-for="(item, index) in list6" :key="index" :data="item"></Link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "@/components/indexSearch.vue";
import Link from "@/components/indexLink.vue";
export default {
  components: {
    Search,
    Link,
  },
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
    };
  },
  created() {
    this.getLink();
  },
  methods: {
    getLink() {
      let arr = [1, 2, 3, 4, 5, 6];
      for (let i = 0; i < arr.length; i++) {
        this.$http
          .get("getLink.php", {
            type: arr[i],
          })
          .then((res) => {
            if (res.code == 200) {
              this["list" + arr[i]] = res.data;
            }
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 0 20px;
  background-color: rgb(245, 245, 245);
  overflow: hidden;
}
.rowbox {
  margin: 20px 0;
  .rbtop {
    line-height: 15px;
    font-size: 15px;
    height: 50px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    padding-left: 10px;
    img {
      margin-right: 5px;
    }
  }
  .rbmid {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 600px) {
  .box {
    padding: 0 10px;
  }
  .rowbox {
    margin: 10px 0;
    .rbtop {
      line-height: 13px;
      font-size: 13px;
      height: 40px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
    }
  }
}
</style>
