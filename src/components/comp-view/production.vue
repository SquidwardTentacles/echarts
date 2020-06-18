<template>
  <div class="bannerf">
    <div class="inner-box flexbox">
      <div class="header">
        <p>遵义产业大数据分析平台</p>
        <div class="right-swich">
          <span>生产</span>
          <span></span>
        </div>
      </div>
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
            <div class="map"></div>
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
    </div>
    <!-- <div class="edge-box"></div> -->
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
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.bannerf {
  align-items: flex-start;
  height: 100%;
  background: url("../../assets/img/bgc.jpg") no-repeat center center;
  background-size: cover;
  .inner-box {
    height: 13.5rem;
    width: 24rem;
    box-sizing: border-box;
    padding: 0 0.125rem;
    flex-direction: column;
  }
  .header {
    height: 0.8rem;
    background: url("../../assets/img/header.png") no-repeat center center;
    background-size: cover;
    width: 100%;
    position: relative;
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
          padding:.025rem .0625rem;
          padding-left: 0.375rem;
          font-size: 0.225rem;
          background: url("../../assets/img/icon-productibn.png") no-repeat left
            center;
          background-size: 0.225rem 0.225rem;
          background-position: 0.1rem;
        }
        &:nth-child(2) {
          width: 0.375rem;
          height: 0.375rem;
          background: url("../../assets/img/icon-switch.png") no-repeat center
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
      font-size: 0.45rem;
      padding-top: 0.125rem;
    }
  }
  .outer-box {
    flex:1 ;
    .title {
      margin-bottom: .125rem;
      text-align: right;
      width: 100%;
      padding-right: .125rem;
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
          padding-top: 0.0625rem;
          padding-bottom: 0.25rem;
          padding-bottom: 0.25rem;
          background: url("../../assets/img/1.png") no-repeat center center;
          background-size: 100% 98%;
          ul {
            margin-top: 0.2rem;
            width: 100%;
            li {
              width: 75%;
              font-size: .175rem;
              white-space: nowrap;
              margin: 0 auto;
              border-top: 1px solid #0c4a80;
              &:nth-last-child(1) {
                border-bottom: 1px solid #0c4a80;
                &:before {
                  content: "";
                  display: block;
                  width: .025rem;
                  height: .025rem;
                  border: .025rem solid #08669f;
                  background: rgb(15, 47, 94);
                  position: absolute;
                  bottom: -0.0375rem;
                  left: -0.025rem;
                }
                &:after {
                  content: "";
                  display: block;
                  width:.025rem;
                  height:.025rem;
                  border:.025rem solid #08669f;
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
                width: .025rem;
                height: .025rem;
                background-color: #0e2d5c;
                border: .025rem solid #08669f;
                position: absolute;
                top: -0.0375rem;
                &.box1 {
                  left: -.025rem;
                }
                &.box2 {
                  right: -.025rem;
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
                  padding: .025rem 0 .025rem 10px;
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
          height: 3rem;
          .title {
            padding-top: 0.1625rem;
            box-sizing: border-box;
          }
          .bar-watch {
            width: 4.6625rem;
            height: 2.25rem;
          }
        }
        .bot-bar {
          background: url("../../assets/img/3.png") no-repeat center;
          background-size: cover;
          height: 3.25rem;
          .bar-bot {
            width: 4.75rem;
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
          padding-bottom: 0.125rem;
          padding-top: 0;
          max-height: 2.1875rem;
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
          padding-top: 0.3rem;
          .line {
            width: 5.0625rem;
            height: 2.3rem;
          }
        }
        .tran-bar {
          background: url("../../assets/img/3.png") no-repeat center center;
          background-size: 100% 98%;
          padding-top: 0.125rem;
          height:3.225rem;
          .title {
            padding-left:.125rem ;
            padding-top: .125rem;
            box-sizing: border-box;
          }
          .bar-box {
            width: 5.0625rem;
            height: 2.3rem;
          }
        }
      }
    }
    .map-box {
      width: 12.5rem;
      height: 100%;
      .map-inner {
        flex-direction: column;
        justify-content: space-between;
        height:100% ; 
        .map {
          width: 100%;
          flex:1 ;
        }
        .sub-watch {
          height: 3.125rem;
          width: 100%;
          margin-bottom: 0.1875rem;
          padding:0 0.5rem ;
          box-sizing: border-box;
          .circular-pie {
            width: 5.4375rem;
            height: 3.175rem;
            background: url("../../assets/img/4.png") no-repeat center center;
            background-size: 100% 98%;
            .title {
              padding-top: 0.1875rem;
              padding-right: 0.8rem;
              box-sizing: border-box;
            }
            .pie {
              width: 4.8375rem;
              height: 2.5rem;
            }
          }
          .line-production {
            width:5.55rem ;
            height:3.225rem ;
            background:url('../../assets/img/5.png') no-repeat center center ;
            background-size: cover;
            .title {
              text-align: left;
              padding-left: .6rem;
              padding-top: .25rem;
            }
            .line-estimate {
              width:4.7125rem ;
              height:2rem ;
              margin:0 auto ;
              padding-top: .0625rem;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
</style>