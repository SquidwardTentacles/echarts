<template>
  <div class="internet-of-things map-watch-zunyi">
    <div class="top-map flexbox between">
      <div class="edge-box left">
        <div class="box-sty total-description">
          <div class="title">
            <span>实时监测数值</span>
          </div>
          <div class="real-time flexbox">
            <div class="img-box">
              <div class="inner-box">
                <div class="tip-box left">
                  <div class="icon" v-for="(item, index) in realDataLabelLeft" :key="index">
                    <p>{{item}}</p>
                    <p></p>
                  </div>
                </div>
                <div class="tip-box right">
                  <div class="icon" v-for="(item, index) in realDataLabelRight" :key="index">
                    <p>{{item}}</p>
                    <p></p>
                  </div>
                </div>
                <img src="../../assets/img/real-time.png" alt srcset />
              </div>
            </div>
            <div class="right-tip">
              <div class="right-real-data">
                <div class="inner-box">
                  <div>
                    <p>土壤湿度(RH%)</p>
                    <span>具体描述</span>
                  </div>
                  <div class="right-data">30%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-sty machining">
          <div class="title">
            <span>加工产品数量</span>
          </div>
          <div class="bar-watch" id="barWatch"></div>
        </div>
      </div>
      <div class="map-box">
        <div class="map flexbox">
          <!-- 地图 -->
          <div class="legend-box">
            <!-- 左边搜索 -->
            <div class="search-box flexbox j-ceter">
              <input type="text" />
              <span></span>
            </div>
            <div class="legend-icon flexbox between">
              <!-- <div class="icon" v-for="(item, index) in legendArr" :key="index">
                <span :style="{'backgroundColor':item.color}"></span>
                <span>{{item.name}}</span>
              </div>-->
            </div>
          </div>
          <div class="zunyi-map" id="zunyiMap"></div>
        </div>
      </div>
      <div class="edge-box">
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
      </div>
    </div>
    <div class="bot-box">
      <div class="inner flexbox between">
        <div class="bot-bar box-sty">
          <div class="title">
            <span>农事操作记录</span>
          </div>
          <div class="bar-bot" id="barBot"></div>
        </div>

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

        <div class="box-sty tran-bar">
          <div class="title">
            <span>鲜椒产品</span>
          </div>
          <div class="bar-box" id="barBox"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      realDataLabelLeft: ["风向", "光照强度", "PM2.5", "雨量"],
      realDataLabelRight: ["风速", "空气湿度", "空气温度", "大气气压"]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.internet-of-things {
  .top-map {
    .edge-box {
      &.left {
        .total-description {
          .title {
            padding-top: 0.05rem;
          }
          .real-time {
            .img-box {
              text-align: center;
              .inner-box {
                position: relative;
                margin-left: 0.75rem;
                .tip-box {
                  position: absolute;
                  top: 0.0375rem;
                  &.left {
                    left: -0.5rem;
                  }
                  &.right {
                    right: -.6rem;
                    .icon {
                      &:nth-child(1) {
                        margin-bottom: .0625rem;
                      }
                      &:nth-child(2) {
                        margin-bottom: .025rem;
                      }
                      &:nth-child(3) {
                        margin-bottom: .08rem;
                      }
                    }
                  }
                  .icon {
                    height: 0.5rem;
                    background-color: #e6e4e5;
                    border-radius: 0.2rem;
                    padding: 0.0375rem;
                    padding-bottom: 0;
                    box-sizing: border-box;
                    flex-direction: column;
                    margin-bottom: 0.4rem;
                    &:nth-child(2) {
                      margin-bottom: 0.13rem;
                    }
                    &:nth-child(3) {
                      margin-bottom: 0.2rem;
                    }
                    p {
                      color: #fffcfd;
                      text-align: center;
                      &:nth-child(1) {
                        white-space: nowrap;
                        background-color: #12b1ad;
                        border-radius: 0.1875rem;
                        font-size: 0.15rem;
                        padding: 0.00625rem 0;
                        box-sizing: border-box;
                      }
                      &:nth-child(2) {
                        border: 0.5px solid #122c67;
                        margin: 0 auto;
                        margin-top: 0.1rem;
                        width: 60%;
                      }
                    }
                  }
                }
                img {
                  max-width: 2.025rem;
                }
              }
            }
            .right-tip {
              flex: 1;
              .right-real-data {
                
              }
            }
          }
        }
      }
    }
  }
}
</style>