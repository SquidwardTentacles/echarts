<template>
  <div class="bannerf flexbox between">
    <div class="edge-box">
      <div class="common-sty total-description">
        <div class="title">
          <span>总量描述</span>
        </div>
        <ul>
          <li v-for="(item,index) in totalDescription"
              :key="index"
              :class="{'active':(index+1)%2===0}">
            <span class="icon box1"></span>
            <span class="icon box2"></span>
            <span class="content">{{item.title}}</span>
            <span class="content">{{item.num}}</span>
          </li>
        </ul>
      </div>
      <div class="machining common-sty ">
        <div class="title">
          <span>加工产品数量</span>
        </div>
        <div class="bar-watch"
             id="barWatch">

        </div>
      </div>
    </div>
    <div class="map-box"></div>
    <div class="edge-box"></div>
  </div>
</template>
<script>

// import mapMixin from '../../assets/mixin/map'
import productionEch from '../../assets/mixin/production'
export default {
  mixins: [productionEch],
  data () {
    return {
      totalDescription: [
        { title: '育苗品种个数', num: 111 },
        { title: '育苗总盘数', num: 111 },
        { title: '种植总面积', num: 111 },
        { title: '鲜椒总预产量', num: 111 },
        { title: '种植总面积', num: 111 },
        { title: '农事记录总条数', num: 111 },
        { title: '今日鲜椒采后量', num: 111 },
        { title: '鲜椒总采收量', num: 111 },
        { title: '加工成品总数量', num: 111 },
        { title: '客商总数量', num: 111 }
      ]
    }
  },
  mounted () {

  },
  methods: {

  }
};
</script>
<style lang="less" scope="d">
.bannerf {
  align-items: flex-start;
  padding: 0 0.125rem 0 0.125rem;
  box-sizing: border-box;
  height: 100%;
  background-color: #0d2456;
  .edge-box {
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    padding: 0.0375rem 0.125rem;
    .common-sty {
      margin: 0 auto;
      // width: 4rem;
      padding: 20px;
      box-sizing: border-box;
      background: rgb(15, 47, 94);
      margin-bottom: 10px;
    }
    .title {
      margin-bottom: 10px;
      text-align: right;
      span {
        color: #80dbef;
      }
    }
    .total-description {
      ul li {
        width: 98%;
        border-top: 1px solid #0c4a80;
        &:nth-last-child(1) {
          border-bottom: 1px solid #0c4a80;
          &:before {
            content: '';
            display: block;
            width: 2px;
            height: 2px;
            border: 2px solid #08669f;
            background: rgb(15, 47, 94);
            position: absolute;
            bottom: -3px;
            left: -2px;
          }
          &:after {
            content: '';
            display: block;
            width: 2px;
            height: 2px;
            border: 2px solid #08669f;
            background: rgb(15, 47, 94);
            position: absolute;
            bottom: -3px;
            right: -2px;
          }
        }
        position: relative;
        background-color: #0f376b;
        &.active {
          background-color: rgb(17, 46, 93);
        }
        span.icon {
          display: inline-block;
          width: 2px;
          height: 2px;
          background-color: #0e2d5c;
          border: 2px solid #08669f;
          position: absolute;
          top: -3px;
          &.box1 {
            left: -2px;
          }
          &.box2 {
            right: -2px;
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
            padding: 2px 0 2px 10px;
            border-right: 1px solid #0c4a80;
            text-align: left;
          }
        }
      }
    }
    .machining {
      .bar-watch {
        width: 5rem;
        height: 2.5rem;
      }
    }
  }
  .map-box {
    flex: 1;
    height: 100%;
  }
}
</style>
