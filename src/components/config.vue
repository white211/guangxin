<template>
  <div id="config">
    <el-row :gutter="10">
      <div class="content">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="grid-content left">
            <div class="title">添加事件</div>
            <div class="form">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="row">
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                    事件名称
                  </el-col>
                  <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                    <el-input class="input" v-model="name" placeholder="输入关键词或事件名称"></el-input>
                  </el-col>
                </div>
              </el-col>

              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="row">
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                    关键词
                  </el-col>
                  <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                    <el-input class="input" v-model="name" placeholder="输入关键词"></el-input>
                  </el-col>
                </div>
              </el-col>

              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="row">
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                    反关键词
                  </el-col>
                  <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                    <el-input class="input" v-model="name" placeholder="输入反关键词"></el-input>
                  </el-col>
                </div>
              </el-col>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="grid-content right">
            <div class="grid-content left">
              <div class="title">事件信息</div>
              <div class="form">

              </div>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "config",
    data() {
      return {};
    }

  };
</script>

<style scoped lang="less">
  .content{
    background: white;
  }

  .left {
    width: 100%;
    height: 500px;
    border-radius: 6px;
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
    .title {
      padding-left: 20px;
      text-align: left;
      height: 50px;
      line-height: 50px;
      background: rgb(243, 243, 244);
      border-bottom:1px solid rgba(0,0,0,0.2);
    }
    .form{
      .row{
        margin-top: 20px;
        margin-right: 10px;
        text-align: right;
      }

    }
  }

  .right {
    width: 100%;
    height: 500px;
    border-radius: 6px;
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
    .title{
      padding-left: 20px;
      text-align: left;
      height: 50px;
      line-height: 50px;
      background: rgb(243, 243, 244);
      border-bottom:1px solid rgba(0,0,0,0.2);
    }

  }
</style>
