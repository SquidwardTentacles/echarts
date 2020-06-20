<template>
  <div class="outer-box a-start flexbox between">
    <div class="edge-box left flexbox between">
      <div class="box-sty total-description">
        <div class="title">
          <span>总量描述</span>
        </div>
        <ul>
          <li
            v-for="(item,index) in totalDescription"
            :key="index"
            :class="{'active':(index+1)%2===0}"
          >
            <span class="icon box1"></span>
            <span class="icon box2"></span>
            <span class="content">{{item.title}}</span>
            <span class="content">{{item.num}}</span>
          </li>
        </ul>
      </div>
      <div class="box-sty machining">
        <div class="title">
          <span>加工产品数量</span>
        </div>
        <div class="bar-watch" id="barWatch"></div>
      </div>
      <div class="bot-bar box-sty">
        <div class="title">
          <span>农事操作记录</span>
        </div>
        <div class="bar-bot" id="barBot"></div>
      </div>
    </div>
    <div class="map-box">
      <div class="flexbox map-inner">
        <div class="map flexbox">
          <!-- 地图 -->
          <div class="legend-box">
            <!-- 左边搜索 -->
            <div class="search-box flexbox j-ceter">
              <input type="text" />
              <span></span>
            </div>
            <div class="legend-icon flexbox between">
              <div class="icon" v-for="(item, index) in legendArr" :key="index">
                <span :style="{'backgroundColor':item.color}"></span>
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
          <div class="zunyi-map" id="zunyiMap"></div>
        </div>
        <div class="sub-watch flexbox between">
          <div class="circular-pie">
            <div class="title">
              <span>育苗品种</span>
            </div>
            <div class="pie" id="circularPie"></div>
          </div>
          <div class="line-production">
            <div class="title">
              <span>品种预产量</span>
            </div>
            <div class="line-estimate" id="lineEstimate"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="edge-box right flexbox between">
      <div class="box-sty pie">
        <div class="title">
          <span>企业分类</span>
        </div>
        <div class="progress flexbox between">
          <div class="progress-box">
            <span class="num">130</span>
            <el-progress
              type="circle"
              color="#ea342e"
              :percentage="75"
              :width="60"
              :show-text="false"
            ></el-progress>
          </div>
          <div class="progress-box">
            <span class="num">130</span>
            <el-progress
              type="circle"
              :width="60"
              color="#eb702f"
              :percentage="25"
              :show-text="false"
            ></el-progress>
          </div>
          <div class="progress-box">
            <span class="num">130</span>
            <el-progress
              type="circle"
              color="#f2b348"
              :width="60"
              :percentage="25"
              :show-text="false"
            ></el-progress>
          </div>
          <div class="progress-box">
            <span class="num">130</span>
            <el-progress
              type="circle"
              color="#00ada2"
              :width="60"
              :percentage="25"
              :show-text="false"
            ></el-progress>
          </div>
        </div>
        <p class="total">
          企业总数：
          <span>2013</span>
        </p>
      </div>
      <div class="box-sty base">
        <div class="outer flexbox between">
          <div class="content-i basef">
            <p>种植基地</p>
            <div class="img"></div>
          </div>
          <div class="content-i factory">
            <p>加工厂</p>
            <div class="img"></div>
          </div>
        </div>
      </div>
      <div class="box-sty line-outer">
        <div class="line" id="line"></div>
      </div>
      <div class="box-sty tran-bar">
        <div class="title">
          <span>鲜椒产品</span>
        </div>
        <div class="bar-box" id="barBox"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import mapMixin from '../../assets/mixin/map'
import productionEch from "../../assets/mixin/production";
export default {
  mixins: [productionEch],
  data() {
    return {
      totalDescription: [
        { title: "育苗品种个数", num: 111 },
        { title: "育苗总盘数", num: 111 },
        { title: "种植总面积", num: 111 },
        { title: "鲜椒总预产量", num: 111 },
        { title: "种植总面积", num: 111 },
        { title: "农事记录总条数", num: 111 },
        { title: "今日鲜椒采后量", num: 111 },
        { title: "鲜椒总采收量", num: 111 },
        { title: "加工成品总数量", num: 111 },
        { title: "客商总数量", num: 111 }
      ],
      legendArr: [
        { name: "育苗企业", color: "#fbfa00" },
        { name: "种植企业", color: "#01ff00" },
        { name: "加工企业", color: "#01ffff" },
        { name: "销售企业", color: "#e70012" }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.outer-box {
  // align-items: flex-start;
  height: calc(100vh - 1.3rem);
  .title {
    margin-bottom: 0.125rem;
    text-align: right;
    width: 100%;
    padding-right: 0.125rem;
    span {
      color: #80dbef;
    }
  }
  .edge-box {
    width: 5.4rem;
    height: 100%;
    box-sizing: border-box;
    padding: 0.0375rem 0.125rem;
    flex-direction: column;
    .box-sty {
      width: 100%;
      margin-bottom: 0.1875rem;
    }

    &.left {
      .total-description {
        padding: 0.2rem;
        padding-top: 0.125rem;
        background: url("../../assets/img/1.png") no-repeat center center;
        background-size: 100% 98%;
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
        background: url("../../assets/img/2.png") no-repeat center center;
        background-size: cover;
        height: 2.6rem;
        padding: 0.2rem;
        .title {
          padding-top: 0.1625rem;
          box-sizing: border-box;
        }
        .bar-watch {
          width: 4.675rem;
          height: 2.25rem;
        }
      }
      .bot-bar {
        padding: 0.2rem;
        background: url("../../assets/img/3.png") no-repeat center;
        background-size: cover;
        height: 2.8rem;
        .bar-bot {
          width: 4.675rem;
          height: 2.5625rem;
        }
      }
    }
    &.right {
      .title {
        text-align: left;
        padding-top: 0.125rem;
      }
      .box-sty {
        margin-bottom: 0.1rem;
      }
      .pie {
        background: url("../../assets/img/9.png") no-repeat center center;
        background-size: 100% 98%;
        padding: 0.2rem;
        max-height: 2rem;
        width: 5rem;
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
              background: url("../../assets/img/no-img.jpg") no-repeat center
                center;
              background-size: 100% 100%;
            }
          }
        }
      }
      .line-outer {
        background: url("../../assets/img/7.png") no-repeat center center;
        background-size: cover;
        padding: 0.2rem;
        .line {
          width: 5rem;
          height: 2.2rem;
        }
      }
      .tran-bar {
        background: url("../../assets/img/3.png") no-repeat center center;
        background-size: 100% 98%;
        padding: 0.2rem;
        height: 2.8rem;
        .title {
          padding-left: 0.125rem;
          padding-top: 0.125rem;
          box-sizing: border-box;
        }
        .bar-box {
          width: 5rem;
          height: 2.3rem;
        }
      }
    }
  }
  .map-box {
    width: 11.1rem;
    height: 100%;
    .map-inner {
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .map {
        width: 100%;
        flex: 1;
        overflow: hidden;
        justify-content: center;
        .zunyi-map {
          width: 8.3rem;
          height: calc(100vh - 4.3rem);
        }
        .legend-box {
          width: 2.275rem;
          height: 100%;
          padding-top: 0.725rem;
          box-sizing: border-box;
          .legend-icon {
            flex-direction: column;
           height:75% ;
            .icon {
              height: 0.4625rem;
              line-height: 0.4625rem;
              // margin-top: 1rem;
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
              background: #23b6fb url("../../assets/img/search-icon.svg")
                no-repeat center center;
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
        .circular-pie {
          padding: 0 0.4375rem;
          background: url("../../assets/img/4.png") no-repeat center center;
          background-size: 100% 98%;
          .title {
            padding-top: 0.25rem;
            padding-right: 0.9rem;
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
          background: url("../../assets/img/5.png") no-repeat center center;
          background-size: cover;
          .title {
            text-align: left;
            padding-left: 0.6rem;
            padding-top: 0.25rem;
            box-sizing: border-box;
          }
          .line-estimate {
            width: 4.425rem;
            height: 2.4rem;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.outer-box {
  .map-box {
    .map {
      .legend-box {
        .legend-icon {
          .icon {
            width: 100%;
            background: url("../../assets/img/14.png") no-repeat center center;
            background-size: 2.275rem 0.45rem;
          }
        }
      }
    }
  }
}
</style>