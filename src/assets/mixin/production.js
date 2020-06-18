export default {
  data () {
    return {

    }
  },
  mounted () {
    this.barWatchInit()
    this.barBot()
    this.lineInit()
    this.barBox()
    this.circularPie()
  },
  methods: {
    barWatchInit () {
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
    barBot () {
      var myEcharts = this.$echarts.init(document.getElementById('barBot'))
      // 绘制图表
      let dataArr = ["衬衫", "羊毛", "雪纺", "裤子"]
      myEcharts.setOption({
        // 定义legend图标颜色
        // legend中的data需要与series中的name一致 才能显示标题
        legend: {
          show: false
        },
        grid: {
          left: 40,
          right: 40,
          show: false,
          bottom: 10,
          top: 15,
          x: 0,
          y: 0,
          borderWidth: 10
        },
        tooltip: {
          axisPointer: {
            type: 'shadow'
          }
        },
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
          barWidth: "40%",
          itemStyle: {//
            normal: {
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#02bcf8' },
                  { offset: 1, color: '#00325c ' }
                ]
              )
            },
          },
          // label: {//label要加入normal才可生效,label即为x轴对应Y轴的值
          //   normal: {
          //     show: true,
          //     color: 'red',//设置渐变时候控制不到颜色，只能通过全局textStyle来控制
          //     position: 'top'
          //   }
          // }
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
    lineInit () {
      var echarts = this.$echarts.init(document.getElementById('line'))
      let legendArr = ['辣椒', '鲜椒']
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: legendArr,
          top: 0,
          show: true,
          icon: 'rect',
          right: 10,
          textStyle: {
            color: '#9dacb9'
          }
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        grid: {
          left: 10,
          right: 20,
          bottom: 5,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
              color: '#278d86'
            },

          }
        ],
        yAxis: [
          {
            type: 'value',
            max: 500,
            name: '品种种植面积',
            nameTextStyle: {
              color: '#67c3d5',
              padding: [0, 0, 20, 0]
            },
            axisLabel: {
              color: '#278d86'
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#248582'
              }
            }
          }
        ],
        series: [

          {
            name: legendArr[0],
            type: 'line',
            areaStyle: {},
            data: [0, 300, 201, 154, 190, 330, 0],
            smooth: true
          },
          {
            name: legendArr[1],
            type: 'line',
            smooth: true,
            areaStyle: {},
            data: [0, 200, 301, 400, 300, 330, 0]
          },
          {
            smooth: true,
            name: '搜索引擎',
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {},
            data: [0, 200, 350, 200, 200, 430, 0]
          }
        ]
      }

      echarts.setOption(option)
      window.addEventListener("resize", function () {
        echarts.resize()
      })
    },
    // 鲜椒产品柱状图
    barBox () {
      let echarts = this.$echarts.init(document.getElementById('barBox'))

      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2011年', '2012年'],
          textStyle: {
            color: '#b6bfcb'
          }
        },
        grid: {
          left: '1%',
          right: '5%',
          top: 25,
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          show: false
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
          axisLine: {
            show: false,
            lineStyle: {
              color: '#e7e7eb'
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      }


      echarts.setOption(option)
      window.addEventListener("resize", function () {
        echarts.resize()
      })
    },
    // 育苗品种
    circularPie () {
      let echarts = this.$echarts.init(document.getElementById('circularPie'))
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'bottom',
          data: ['在线', '离线']
        },
        series:
        {

          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          center: ['40%', '50%'],

          labelLine: {
            show: true
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }

      }
      echarts.setOption(option)
      window.addEventListener("resize", function () {
        echarts.resize()
      })
    }
  },
}