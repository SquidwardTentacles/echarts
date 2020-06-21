<template>
  <div class="outer-box map-watch-zunyi">
    <div class="top-map flexbox between">
      <div class="edge-box left">
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
              <div class="icon" v-for="(item, index) in legendArr" :key="index">
                <span :style="{'backgroundColor':item.color}"></span>
                <span>{{item.name}}</span>
              </div>
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
