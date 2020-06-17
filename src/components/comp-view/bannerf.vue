<template>
  <div class="bannerf flexbox between">
    <div class="left">
      <div class="zhu"
           id="zhu"></div>
      <div class="zhu"
           id="line"></div>
    </div>
    <div class="center">center</div>
    <div class="right">right</div>
  </div>
</template>
<script>
import echarts from "echarts/lib/echarts"
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
// 引入折线图
require("echarts/lib/chart/line")
export default {
  data () {
    return {}
  },
  mounted () {
    this.initialization()
    this.lineWatch()
  },
  methods: {
    // 柱形图
    initialization () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("zhu"))
      // 绘制图表
      let dataArr = ["衬衫", "羊毛", "雪纺", "裤子"]
      myChart.setOption({
        // 定义legend图标颜色
        color: ["#f24e06", "#f24e06", "#e2ff1f", "#069dee"],
        // legend中的data需要与series中的name一致 才能显示标题
        legend: {
          data: dataArr,
          left: "left",
          bottom: 20,
          // legend排列方向
          orient: "vertical",
          textStyle: {
            fontSize: 10
          },
          itemWidth: 10,
          itemHeight: 8
        },
        grid: {
          left: "30%",
          bottom: 20,
          show: false
        },
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子"],
          type: "category",
          name: "类别",
          nameLocation: "end",
          // 坐标轴刻度标签的相关设置
          axisLabel: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#718faf'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#718faf'
            }
          },
          name: "价格"
        },
        series: [
          {
            name: "衬衫",
            type: "bar",
            data: [5, 20, 36, 10],
            barWidth: "40%",
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = ["#f24e06", "#f24e06", "#e2ff1f", "#069dee"]
                  return colorList[params.dataIndex]
                }
              }
            }
          },
          {
            name: "羊毛",
            type: "bar"
          },
          {
            name: "雪纺",
            type: "bar"
          },
          {
            name: "裤子",
            type: "bar"
          }
        ]
      })
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    // 折线图
    lineWatch () {
      let myChart = echarts.init(document.getElementById('line'))
      var option = {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%']
        },
        visualMap: {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [{
            gt: 1,
            lt: 3,
            color: 'rgba(0, 180, 0, 0.5)'
          }, {
            gt: 5,
            lt: 7,
            color: 'rgba(0, 180, 0, 0.5)'
          }]
        },
        series: [
          {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: 'green',
              width: 5
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false },
              data: [
                { xAxis: 1 },
                { xAxis: 3 },
                { xAxis: 5 },
                { xAxis: 7 }
              ]
            },
            areaStyle: {},
            data: [
              ['2019-10-10', 200],
              ['2019-10-11', 400],
              ['2019-10-12', 650],
              ['2019-10-13', 500],
              ['2019-10-14', 250],
              ['2019-10-15', 300],
              ['2019-10-16', 450],
              ['2019-10-17', 300],
              ['2019-10-18', 100]
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
};
</script>
<style lang="less" scope="d">
.bannerf {
  // background-color: #0c1b44;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  .left,
  .right {
    height: 100%;
    width: 20%;
  }
  .left {
    .zhu {
      width: 6rem;
      height: 6.25rem;
    }
  }
  .center {
    height: 100%;
    flex: 1;
  }
}
</style>
