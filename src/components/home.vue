<template>
  <div id="home">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
        <div class="grid-content  left">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
            <div class="left-top"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
            <div class="left-bottom">
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="left-bottom-left"></div>
              </el-col>
              <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                <div class="left-bottom-right">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="left-bottom-right-top">
                      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <div class="left-bottom-right-top-left">
                        </div>
                      </el-col>
                      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <div class="left-bottom-right-top-right">
                        </div>
                      </el-col>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="left-bottom-right-bottom">
                    </div>
                  </el-col>
                </div>
              </el-col>
            </div>
          </el-col>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="hidden-md-and-down">
        <div class="grid-content  right">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
            <div class="right-top"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
            <div class="right-bottom"></div>
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {};
    }
  };
</script>

<style scoped lang="less">
  /*body{*/
    /*background-color: rgb(243,243,244);*/
  /*}*/
  /*#home{*/
    /*background-color: rgb(243,243,244);*/
  /*}*/
  .el-col {
    padding: 0;
    margin: 0;
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .bg-white-light{
    background: rgba(255,255,255,0.8);
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .left{
    height: 770px;
    .left-top{
      height: 300px;
      background: white;
      width: 100%;
    }
    .left-bottom{
      margin-top: 10px;
      height: 460px;
      width: 100%;
      .left-bottom-left{
        height: 460px;
        background: white;
        width: 100%;
      }
      .left-bottom-right{
        height: 460px;
        width: 100%;
        .left-bottom-right-top{
          height: 180px;
          width: 100%;
          .left-bottom-right-top-left{
            height: 180px;
            width: 100%;
            background: white;
          }
          .left-bottom-right-top-right{
            height: 180px;
            width: 100%;
            background: white;
          }
        }
        .left-bottom-right-bottom{
          height: 270px;
          margin-top: 10px;
          width: 100%;
          background: white;
        }
      }
    }
  }

  .right{
    height: 710px;
    .right-top{
      height: 380px;
      background: white;
    }
    .right-bottom{
      height: 380px;
      margin-top: 10px;
      background: white;
    }
  }

</style>
