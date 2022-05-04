<template>
  <div class="box">
    <div class="title">
      <h4>关于本站</h4>
    </div>
    <div class="text">
      <p>
        梦辰小站是集合多种搜索引擎以及网站导航于一体的轻量级网站导航系统。本站收集了多种多样学习、工作中使用的开发文档和网站网页工具等等，起到了浏览器书签的功能。
      </p>
      <p>
        本站始创于2020年，最初版本为html+css的静态网页，在公益虚拟主机上运行1年时间。2021年4月，采用vue+element-ui进行重构并迁移至阿里云服务器备案上线，此版本（包含博客模块）已在github：
        <a href="https://github.com/pbstar/mcweb"
          >https://github.com/pbstar/mcweb</a
        >
        开源。2022年5月，采用vue3+element-plus进行前端重构并对样式进行修改，采用php+mysql开发后端接口，采用七牛云托管图片资源以起到提高访问速度和网站性能的作用，并将域名由mcweb.top更改为mcweb.club。
      </p>
    </div>
    <div class="title">
      <h4>关于站长</h4>
    </div>
    <div class="text">
      <p>
        初辰ge（关于网名：虽然王者荣耀的初晨确实是我比较喜欢的选手，但我的网名和这没一点关系。说起网名由来，2016年玩qq那会我叫初辰，忘了为什么要叫初辰了可能是不忘初心日月星辰什么的吧，后来因为特殊的个人原因[不可透露]改为初辰ge
        并沿用至今），本人是一名零零后小伙子（准确的说是01年），一心向钱（不要问我信不信爱情），向往思域的鬼火少年，目前主要做前端就职于北京的一家小公司。
      </p>
      <p>联系方式：pbstar@sina.cn（邮箱）、P24612582（微信）</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 0 20px;
  .title {
    margin: 30px 0 20px;
  }
  .text {
    font-size: 15px;
    p {
      text-indent: 30px;
      line-height: 28px;
      margin: 10px 0;
    }
    a {
      color: #e4ac0f;
    }
  }
}
@media screen and (max-width: 600px) {
  .box {
    padding: 0 10px;
    .title {
      margin: 25px 0 15px;
      font-size: 15px;
    }
    .text {
      font-size: 13px;
      p {
        text-indent: 26px;
        line-height: 25px;
        margin: 6px 0;
      }
    }
  }
}
</style>
