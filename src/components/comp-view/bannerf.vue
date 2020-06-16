<template>
  <div class="bannerf flexbox between">
    <div class="left">
      <div class="zhu" id="zhu"></div>
    </div>
    <div class="center">center</div>
    <div class="right">right</div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initialization();
  },
  methods: {
    initialization() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("zhu"));
      // 绘制图表
      let dataArr = ["衬衫", "羊毛衫", "雪纺衫", "裤子"];
      myChart.setOption({
        // 定义legend图标颜色
        color: ["#f24e06", "#f24e06", "#e2ff1f", "#069dee"],
        // legend中的data需要与series中的name一致 才能显示标题
        legend: {
          data: dataArr,
          left: "left",
          top: "middle",
          // legend排列方向
          orient: "vertical"
        },
        grid: {
          left: "30%"
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
            // legendHoverLink: true,
            // itemStyle: {
            //   barBorderRadius: [10, 10, 0, 0],
            // },
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = ["#f24e06", "#f24e06", "#e2ff1f", "#069dee"];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "羊毛衫",
            type: "bar"
          },
          {
            name: "雪纺衫",
            type: "bar"
          },
          {
            name: "裤子",
            type: "bar"
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
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
      width: 1.5625rem;
      height: 1.302083rem;
    }
  }
  .center {
    height: 100%;
    flex: 1;
  }
}
</style>
