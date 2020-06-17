export default {
  data() {
    return {

    }
  },
  mounted() {
    this.barWatchInit()
    this.barBot()
  },
  methods: {
    barWatchInit() {
      var myEcharts = this.$echarts.init(document.getElementById('barWatch'))
      // 绘制图表
      let dataArr = ["衬衫", "羊毛", "雪纺", "裤子"]
      let colorArr = ["#cde199", "#f6c755", "#e8fc04", "#00a1e9"]
      myEcharts.setOption({
        // 定义legend图标颜色
        color: colorArr,
        // legend中的data需要与series中的name一致 才能显示标题
        legend: {
          data: dataArr,
          bottom: 10,
          left: 'left',
          // legend排列方向
          orient: "vertical",
          textStyle: {
            fontSize: 10,
            color: '#c2cbd3'
          },
          show: true,
          itemWidth: 10,
          itemHeight: 8
        },
        grid: {
          left: '30%',
          right: 40,
          show: false,
          bottom: 10,
          top: 20,
          x: 0,
          y: 0,
          borderWidth: 10
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子"],
          type: "category",
          name: "等级",
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
          },
          nameTextStyle: {
            padding: [0, 0, 20, -5]
          },
          nameGap: -1
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
          name: "数量（条）",
          nameGap: 2,
          nameTextStyle: {
            padding: [0, 0, 0, 70]
          }
        },
        series: [{
            name: dataArr[0],
            type: "bar",
            data: [250, 900, 400, 800, 1000],
            barWidth: "40%",
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorArr[params.dataIndex]
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
        myEcharts.resize()
      })
    },
    barBot() {
      var myEcharts = this.$echarts.init(document.getElementById('barBot'))
      // 绘制图表
      let dataArr = ["衬衫", "羊毛", "雪纺", "裤子"]
      myEcharts.setOption({
        // 定义legend图标颜色
        // legend中的data需要与series中的name一致 才能显示标题
        legend: {
          show:false
        },
        grid: {
          left: 40,
          right: 40,
          show: false,
          bottom: 10,
          top: 20,
          x: 0,
          y: 0,
          borderWidth: 10
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子"],
          type: "category",
          name: "日期",
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
          },
          nameTextStyle: {
            padding: [0, 0, 20, -5]
          },
          nameGap: -1
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
          name: "记录",
          nameGap: 2,
          nameTextStyle: {
            padding: [0, 0, 0, 70]
          }
        },
        series: [{
            name: dataArr[0],
            type: "bar",
            data: [250, 900, 400, 800, 1000],
            barWidth: "40%"
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
        myEcharts.resize()
      })
    }
  },
}