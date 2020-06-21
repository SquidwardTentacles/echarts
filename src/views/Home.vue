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
    background-size: cover;
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
      font-size: 0.4rem;
      padding-top: 0.08rem;
    }
  }
  .content-box {
    min-height: calc(100vh - 1.3rem);
    width: 100%;
    overflow-y: auto;
    padding: 0 0.8125rem;
    box-sizing: border-box;
  }
}

.map-watch-zunyi {
  min-height: calc(100vh - 1.3rem);
  // align-items: flex-start;
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
      ul {
        margin-top: 0.2rem;
        width: 100%;
        li {
          width: 75%;
          font-size: 0.175rem;
          white-space: nowrap;
          margin: 0 auto;
          border-top: 1px solid #0c4a80;
          &:nth-last-child(1) {
            border-bottom: 1px solid #0c4a80;
            &:before {
              content: "";
              display: block;
              width: 0.025rem;
              height: 0.025rem;
              border: 0.025rem solid #08669f;
              background: rgb(15, 47, 94);
              position: absolute;
              bottom: -0.0375rem;
              left: -0.025rem;
            }
            &:after {
              content: "";
              display: block;
              width: 0.025rem;
              height: 0.025rem;
              border: 0.025rem solid #08669f;
              background: rgb(15, 47, 94);
              position: absolute;
              bottom: -0.0375rem;
              right: -0.025rem;
            }
          }
          position: relative;
          background-color: #0f376b;
          &.active {
            background-color: rgb(17, 46, 93);
          }
          span.icon {
            display: inline-block;
            width: 0.025rem;
            height: 0.025rem;
            background-color: #0e2d5c;
            border: 0.025rem solid #08669f;
            position: absolute;
            top: -0.0375rem;
            &.box1 {
              left: -0.025rem;
            }
            &.box2 {
              right: -0.025rem;
            }
          }
          .content {
            display: inline-block;
            width: 50%;
            text-align: center;
            box-sizing: border-box;
            color: #bcc637;
            text-decoration: underline;

            &:nth-child(3) {
              color: #c4cacb;
              padding: 0.025rem 0 0.025rem 10px;
              border-right: 1px solid #0c4a80;
              text-align: left;
            }
          }
        }
      }
    }

    .machining {
      background: url("~@/assets/img/2.png") no-repeat center center;
      background-size: cover;
      // height: 2.975rem;
      padding: 0.2rem;
      width: 5.275rem;
      box-sizing: border-box;
      .title {
        padding-top: 0.1625rem;
        box-sizing: border-box;
      }
      .bar-watch {
        width: 4.675rem;
        height: 2.4875rem;
      }
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
      padding: 0.2rem;
      max-height: 2rem;
      width: 5rem;
      box-sizing: border-box;
      .progress {
        padding: 0 5px;
        overflow: hidden;
        .progress-box {
          position: relative;
          .num {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #dde4e7;
            font-size: 20px;
          }
          // margin-right: -0.0375rem;
        }
      }
      .total {
        color: #74d1e6;
        span {
          color: #f4f4f9;
        }
      }
    }
    .base {
      padding: 0.2rem;
      width: 5rem;
      box-sizing: border-box;
      .outer {
        .content-i {
          width: 45%;
          p {
            color: #85efff;
            margin: 0.125rem;
          }
          .img {
            width: 2rem;
            height: 1.5rem;
            background: url("~@/assets/img/no-img.jpg") no-repeat center center;
            background-size: 100% 100%;
          }
        }
      }
    }
    .line-outer {
      background: url("~@/assets/img/7.png") no-repeat center center;
      background-size: cover;
      padding: 0.2rem;
      width: 5rem;
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

    .map {
      width: 100%;
      height: 100%;
      overflow: hidden;
      justify-content: center;
      .zunyi-map {
        width: 8.3rem;
        height: 8.15rem;
      }
      .legend-box {
        width: 2.275rem;
        height: 100%;
        padding-top: 0.725rem;
        box-sizing: border-box;
        .legend-icon {
          flex-direction: column;
          height: 75%;
          .icon {
            height: 0.4625rem;
            line-height: 0.4625rem;
            margin-top: 0.5rem;
            width: 100%;
            background: url("~@/assets/img/14.png") no-repeat center center;
            background-size: 2.275rem 0.45rem;
            span {
              vertical-align: middle;
              color: #fff;
              font-size: 0.175rem;
              &:nth-child(1) {
                display: inline-block;
                margin-right: 0.125rem;
                width: 0.1875rem;
                height: 0.1875rem;
                border-radius: 50%;
                background-color: #fffc00;
              }
            }
          }
        }
        .search-box {
          width: 2.625rem;
          height: 0.25rem;
          vertical-align: middle;
          margin-bottom: 1.5rem;
          input {
            width: 2.075rem;
            height: 0.2625rem;
            background-color: #7883a1;
            border: none;
            border: 0.0125rem solid #fff;
            border-left: none;
            box-sizing: border-box;
          }
          span {
            height: 0.2625rem;
            width: 0.5375rem;
            background: #23b6fb url("~@/assets/img/search-icon.svg") no-repeat
              center center;
            background-size: 0.1875rem 0.1875rem;
          }
        }
      }
    }
    .sub-watch {
      height: 3rem;
      width: 100%;
      margin-bottom: 0.1875rem;
      justify-content: space-around;
    }
  }
  .bot-box {
    .inner {
      .title {
        text-align: right;
      }
      .bot-bar {
        padding: 0.2rem;
        background: url("~@/assets/img/3.png") no-repeat center;
        background-size: cover;
        // height: 2.8rem;
        box-sizing: border-box;
        width: 5.275rem;
        .bar-bot {
          width: 4.675rem;
          height: 2.4875rem;
        }
      }

      .circular-pie {
        padding: 0 0.4375rem;
        background: url("~@/assets/img/4.png") no-repeat center center;
        background-size: 100% 98%;
        .title {
          padding-top: 0.25rem;
          padding-right: 0.5rem;
          box-sizing: border-box;
        }
        .pie {
          width: 4.425rem;
          height: 2.5rem;
          margin: 0 auto;
        }
      }

      .line-production {
        padding: 0 0.4375rem;
        background: url("~@/assets/img/5.png") no-repeat center center;
        background-size: cover;
        .title {
          text-align: left;
          padding-left: 0.2rem;
          padding-top: 0.25rem;
          box-sizing: border-box;
        }
        .line-estimate {
          width: 4.425rem;
          height: 2.4rem;
          margin: 0 auto;
        }
      }

      .tran-bar {
        background: url("~@/assets/img/3.png") no-repeat center center;
        background-size: 100% 98%;
        padding: 0.2rem;
        min-height: 2.8rem;
        box-sizing: border-box;
        width: 5rem;
        .title {
          padding-left: 0.125rem;
          padding-top: 0.125rem;
          box-sizing: border-box;
        }
        .bar-box {
          width: 4.7rem;
          height: 2.3rem;
        }
      }
    }
  }
}
</style>
