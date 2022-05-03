<template>
  <div class="boxf">
    <div class="box flex_dc_no_ce">
      <p>
        Copyright © 2020 - 2022 By
        <a href="http://mcweb.club/">mcweb.club</a> All Rights Reserved
      </p>
      <a href="https://beian.miit.gov.cn">冀ICP备2021011553号-2</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.boxf {
  width: 100%;
  background-color: #545c64;
}
.box {
  height: 100px;
  color: #fff;
  font-size: 15px;
  line-height: 28px;
  padding: 16px 0;
  a {
    color: #ffd04b;
  }
}
@media screen and (max-width: 600px) {
  .box {
    height: 80px;
    font-size: 12px;
    line-height: 22px;
    padding: 10px 0;
  }
}
</style>
