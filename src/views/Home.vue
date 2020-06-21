<template>
  <div class="home" id="div">
    <div class="header">
      <p>遵义产业大数据分析平台</p>
      <div class="right-swich">
        <span>{{currentPageName}}</span>
        <span @click="nextClick"></span>
      </div>
    </div>
    <div class="content-box">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      acctive: 0,
      time: 0,
      currentPageName: ""
    };
  },
  mounted() {
    this.imgHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    this.nextClick();
  },
  methods: {
    setActiveItem(i) {
      this.$refs.carousel.setActiveItem(i);
      this.time = Date.now();
    },
    // 页面切换的点击事件
    nextClick(type) {
      // 点击事件会有点击对象的相关dom元素 所以点击事件会有参数 如果是mounted生命周期则没有此参数
      // 如果是生命周期进来的 则页面相关信息等于当页信息 否则等于下一页信息
      let routerArr = this.$router.options.routes[0].children;
      let currentPath = this.$router.currentRoute.path;
      let nextPathI = "";
      routerArr.map((item, i) => {
        if (item.path === currentPath) {
          if (!type) {
            nextPathI = i;
          } else {
            nextPathI = i + 1 === routerArr.length ? 0 : i + 1;
          }
          this.currentPageName = routerArr[nextPathI].subName;
          if (nextPathI !== i) {
            this.$router.push({
              path: routerArr[nextPathI].path
            });
          }
          return;
        }
      });
    }
  }
};
</script>
<style lang="less">
.home {
  background: url("../assets/img/bgc.jpg") no-repeat center center;
  background-size: 100% 100%;
  min-height: 100%;
  min-width: 100%;
  .header {
    height: 0.7rem;
    background: url("../assets/img/header.png") no-repeat center center;
    background-size: 100% 98%;
    min-width: 100%;
    position: relative;
    margin-bottom: 0.375rem;
    .right-swich {
      position: absolute;
      right: 0.625rem;
      top: 50%;
      color: #adccd7;
      transform: translateX(-50%);
      span {
        display: inline-block;
        vertical-align: middle;
        &:nth-child(1) {
          border: 1px solid #3e537d;
          border-radius: 0.25rem;
          width: 1rem;
          padding: 0.025rem 0.0625rem;
          padding-left: 0.375rem;
          font-size: 0.225rem;
          background: url("../assets/img/icon-productibn.png") no-repeat left
            center;
          background-size: 0.225rem 0.225rem;
          background-position: 0.1rem;
        }
        &:nth-child(2) {
          width: 0.375rem;
          height: 0.375rem;
          background: url("../assets/img/icon-switch.png") no-repeat center
            center;
          background-size: cover;
          margin-left: 0.225rem;
          cursor: pointer;
        }
      }
    }
    p {
      text-align: center;
      color: #e9ecf1;
      font-size: 0.3rem;
      line-height: 0.7rem;
    }
  }
  .content-box {
    min-height: calc(100vh - 1.1rem);
    max-height: 13.5rem;
    width: 100%;
    overflow: auto;
    padding: 0 0.8125rem;
    padding-bottom: 0.25rem;
    box-sizing: border-box;
  }
}

.map-watch-zunyi {
  // min-height: calc(100vh - 1.3rem);
  
  .title {
    margin-bottom: 0.125rem;
    text-align: left;
    width: 100%;
    padding-right: 0.125rem;
    span {
      color: #80dbef;
    }
  }
  .edge-box {
    min-height: 100%;

    .box-sty {
      width: 100%;
      margin-bottom: 0.1875rem;
    }

    .total-description {
      padding: 0.2rem;
      padding-top: 0.125rem;
      background: url("~@/assets/img/1.png") no-repeat center center;
      background-size: 100% 98%;
      width: 5.275rem;
      box-sizing: border-box;
    }

    .machining {
      background: url("~@/assets/img/2.png") no-repeat center center;
      background-size: cover;
      min-height: 2.975rem;
      padding: 0.2rem;
      width: 5.275rem;
      margin-top: .4rem;
      box-sizing: border-box;
    }
    &.left {
      .title {
        text-align: right;
        padding-top: 0.125rem;
      }
    }
    .box-sty {
      margin-bottom: 0.1rem;
    }
    .pie {
      background: url("~@/assets/img/9.png") no-repeat center center;
      background-size: 100% 98%;
      padding: 0.2rem 0.2rem;
      min-width: 5.275rem;
      box-sizing: border-box;
      flex-direction: column;
    }
    .base {
      padding: 0.2rem 0;
      min-width: 5.275rem;
      box-sizing: border-box;
      .outer {
        .content-i {
          // width: 45%;
          background: url('../assets/img/8.png') no-repeat center center;
          background-size: cover;
          padding: .125rem;
          box-sizing: border-box;
          &:nth-child(1) {
            margin-right:.125rem;
          }
          p {
            color: #85efff;
            margin: 0.125rem;
          }
          .img {
            width: 2.3rem;
            height:2.0625rem ;
            background: url("~@/assets/img/no-img.jpg") no-repeat center center;
            background-size: 100% 100%;
          }
        }
      }
    }
    .line-outer {
      background: url("~@/assets/img/7.png") no-repeat center center;
      background-size: cover;
      padding: 0.2rem 0;
      min-width: 5.275rem;
      min-height: 3.225rem;
      box-sizing: border-box;
      .line {
        width: 4.75rem;
        height: 2.2rem;
      }
    }
  }
  .map-box {
    width: 11rem;
    min-height: 100%;
  }
  .bot-box {
    .inner {
      .title {
        text-align: right;
      }
      .bot-bar {
        padding: 0.2rem 0;
        box-sizing: border-box;
        background: url("~@/assets/img/3.png") no-repeat center;
        background-size: cover;
        min-width: 5.275rem;
        min-height: 3.225rem;
        margin-right: 0.2rem;
      }

      .circular-pie {
        padding: 0.2rem 0;
        box-sizing: border-box;
        margin-right: 0.2rem;
        background: url("~@/assets/img/4.png") no-repeat center center;
        background-size: 100% 98%;
        min-width: 5.275rem;
        min-height: 3.225rem;
        margin-right: 0.2rem;
      }

      .line-production {
        padding: 0.2rem 0;
        margin-right: 0.2rem;
        min-width: 5.275rem;
        box-sizing: border-box;
        min-height: 3.225rem;
        background: url("~@/assets/img/5.png") no-repeat center center;
        background-size: 100% 98%;
      }

      .tran-bar {
        background: url("~@/assets/img/3.png") no-repeat center center;
        background-size: 100% 98%;
        padding: 0.2rem 0;
        min-width: 5.275rem;
        min-height: 3.225rem;
        box-sizing: border-box;
      }
    }
  }
}
</style>
