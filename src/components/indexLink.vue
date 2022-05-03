<template>
  <div class="rbbox flex" v-if="data" @click="toLink">
    <div class="rbbleft flex_ce">
      <img :src="data.img" alt="" />
    </div>
    <div class="rbbright">
      <h5>{{ data.name }}</h5>
      <p>{{ data.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  methods: {
    toLink() {
      window.open(this.data.url);
    },
  },
};
</script>
<style lang="scss" scoped>
.rbbox {
  width: 203px;
  cursor: pointer;
  border-radius: 10px;
  padding: 8px;
  margin: 10px 30px 10px 0;
  .rbbleft {
    margin-right: 10px;
    background-color: #fff;
    padding: 3px;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    img {
      max-width: 26px;
      max-height: 26px;
    }
  }
  .rbbright {
    line-height: 18px;
    p {
      font-size: 12px;
    }
    h5 {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }
}
.rbbox:hover {
  background-color: #eee;
}
@media screen and (max-width: 600px) {
  .rbbox {
    width: 45vw;
    padding: 3px 2px;
    margin: 6px 3px;
    .rbbleft {
      margin-right: 8px;
      padding: 2px;
      width: 30px;
      height: 30px;
    }
    .rbbright {
      h5 {
        font-size: 14px;
        margin-bottom: 4px;
      }
    }
  }
}
</style>
