<template>
  <div id="index">
    <el-container >
      <el-aside width="250px">
          <div class="header">
            <div class="headerImg" >
              <img src="../../assets/logo/header.jpg" />
            </div>
          </div>
          <el-col :span="24" :style="{height: '740px'}">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              router='true'
              active-text-color="#ffd04b">
              <el-menu-item index="home" class="itemHover">
                <i class="el-icon-menu"></i>
                <span slot="title">
                  首页
                </span>
              </el-menu-item>
              <el-menu-item index="config">
                <i class="el-icon-setting"></i>
                <span slot="title">事件配置</span>
              </el-menu-item>
            </el-menu>
          </el-col>
      </el-aside>
      <el-container>
        <el-header>
          <span>广新控股集团舆情监控系统</span>
          <span style="float: right">今日新增文章：0 条</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          Copyright广州纳指电子科技有限公司 © 2014-2018
        </el-footer>
      </el-container>
    </el-container>
  </div>

</template>

<script>
  export default {
    name: "index",
    data() {
      return {};
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style scoped lang="less">
  #index {
    margin: 0;
    padding: 0;
    user-select: none;
  }

  .el-header, .el-footer {
    color: rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    border-top: 1px solid rgba(0,0,0,0.1);
    line-height: 60px;
  }
  .el-header{
    background-color: rgb(243, 243, 244);
  }
  .el-footer{
    background-color: white;
  }
  .el-aside {
    /*background-color: rgb(47,64,80);*/
    /*color: white;*/
    /*text-align: center;*/
    height: 940px;
    line-height: 200px;
    /*border: 1px solid black;*/
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    background-color: rgb(243,243,244);
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
    /*border: 1px solid black;*/
  }

  body > .el-container {
    /*margin-bottom: 40px;*/
    padding: 0;
    margin: 0;
  }

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
    /*line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(7) .el-aside {*/
    /*line-height: 320px;*/
  /*}*/

  .el-menu-vertical-demo {
    height: 100%;
    text-align: left;
  }

  .itemHover:hover {
    background-color: rgb(41, 56, 70);
  }

  /*.el-menu-vertical-demo:hover{*/
  /*background-color: rgb(41,56,70);*/
  /*}*/

  /*.el-icon-menu:hover{*/
  /*background-color: rgb(41,56,70);*/
  /*}*/
  .header {
    height: 200px;
    color: white;
    width:99.5%;
    background-color: rgb(41,56,70);
    .headerImg{
      height: 80px;
      width: 100%;
      text-align: center;
      img{
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 2px solid rgba(0,0,0,0);
      }
      img:hover{
        border: 2px solid rgba(255,255,255,0.5);
        cursor: pointer;
      }
    }
  }

</style>
