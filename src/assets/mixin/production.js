// import '../../../node_modules/echarts/map/js/china.js'
import '../js/mapJs/guangxi'
export default {
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    this.mapjs()
    this.barWatchInit()
    this.barBot()
    this.lineInit()
    this.barBox()
    this.circularPie()
    this.lineEstimate()
    this.ZunYiMap()
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


      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          icon: 'rect',//长方形
          data: ['计划劳务资源', "实际劳务资源"],
          //align: 'left',
          right: 10,//legend距离canvas右边的距离
          //left: 20,
          top: 0,//legend距离canvas上面的距离
          textStyle: {//文字颜色
            fontSize: 12,
            color: '#F1F1F3'
          },
          itemWidth: 14,//图标宽
          itemHeight: 10,//图标高
          itemGap: 13,//间距
        },
        grid: {
          left: 30,
          top: 20,
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgba(219,225,255,1)",
              margin: 15
            },
            // formatter: '{value} %'
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: ['选项', '选项', '选项']
        }],
        series: [{
          name: '计划劳务资源',
          type: 'bar',
          data: [38, 38, 42, 48],
          barWidth: 10, //柱子宽度
          barGap: .5, //柱子之间间距
          itemStyle: {
            normal: {//vue中this.$echarts  jquery用echarts 
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#96082e'
              }, {
                offset: 1,
                color: '#f65066'
              }]),
              opacity: 1,
            }
          }
        }, {
          name: '实际劳务资源',
          type: 'bar',
          data: [40, 30, 42, 50],
          barWidth: 10,
          barGap: .5,
          itemStyle: {
            normal: {//vue中this.$echarts  jquery用echarts 
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#0665e5'
              }, {
                offset: 1,
                color: '#11abdf'
              }]),
              opacity: 1,
            }
          }
        }]
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
          type: 'scroll',
          orient: 'vertical',
          x: 'right',
          y: 'bottom',
          textStyle: {
            color: '#fefeff',
            fontSize: 12
          },
          align: 'left',
          itemWidth: 15,
          top: 20
        },
        series:
        {

          name: '访问来源',
          type: 'pie',
          radius: ['30%', '50%'],
          avoidLabelOverlap: false,
          center: ['35%', '45%'],

          labelLine: {
            show: true
          },
          label: {
            formatter: '{d}%'
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
    },
    // 品种预产量
    lineEstimate () {
      let echarts = this.$echarts.init(document.getElementById('lineEstimate'))
      var option = {
        grid: {
          bottom: 35,
          left: 50,
          top: 10
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#073c70'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#45749e'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          },
          {
            data: [705, 860, 640, 630, 750, 1000, 1120],
            type: 'line',
            smooth: true
          },
          {
            data: [300, 132, 501, 334, 1090, 930, 600],
            type: 'line',
            smooth: true
          }
        ]
      }
      echarts.setOption(option)
      window.addEventListener("resize", function () {
        echarts.resize()
      })
    },
    // 遵义地图
    ZunYiMap () {
      let echarts = this.$echarts.init(document.getElementById('zunyiMap'))

      //自定义城市坐标菜单
      var geoCoordMap = {
        "海门": [106.92, 27.73],
        "桐梓县": [106.82, 28.13],
        "招远": [120.38, 37.35],
        "舟山": [122.207216, 29.985295],
        "齐齐哈尔": [123.97, 47.33],
        "盐城": [120.13, 33.38],
        "赤峰": [118.87, 42.28],
        "青岛": [120.33, 36.07],
        "乳山": [121.52, 36.89],
        "金昌": [102.188043, 38.520089],
      }
      //拼接对象数组
      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name] //获取坐标
          if (geoCoord) { //如果有坐标
            res.push({ //创建对象数组，
              name: data[i].name,
              value: geoCoord.concat(data[i].value) //用连接数组的形式将value值加入
            })
            //res.push(geoCoord.concat(data[i].value));
            //res.push(geoCoord.concat(data[i].name));
          }
        }
        return res
      }
      var data = [{
        name: "海门",
        value: 9
      },
      {
        name: "鄂尔多斯",
        value: 12
      },
      {
        name: "桐梓县",
        value: 12
      },
      {
        name: "舟山",
        value: 12
      },
      {
        name: "齐齐哈尔",
        value: 14,
      },
      {
        name: "盐城",
        value: 15
      },
      {
        name: "赤峰",
        value: 100
      },
      {
        name: "青岛",
        value: 18
      },
      {
        name: "乳山",
        value: 300
      },
      {
        name: "金昌",
        value: 19
      },
      ]

      var max = 480,
        min = 9
      var maxSize4Pin = 50,
        minSize4Pin = 20

      echarts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: function loadData (result) {
            return result.name + '<br />' + result.value[3]
          }
        },
        grid: {
          top: 20,
          bottom: 50
        },
        geo: {
          zoom: 1.2,
          show: true,
          map: '遵义',
          mapType: '遵义',
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "#fff"
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
          },
          roam: true,
          itemStyle: {
            normal: {
              borderColor: 'rgba(65, 145, 214, 0.8)',
              borderWidth: 2,
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(65, 145, 214, 0.8)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(65, 145, 214, 0.8)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              /*  shadowColor: 'rgba(128, 217, 248, 1)',*/
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: 'rgba(51, 133, 255, 1.0)',
              borderWidth: 0
            }
          }
        },
        series: [{
          name: '辣椒种植基地',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: function (val) {
            var a = (maxSize4Pin - minSize4Pin) / (max - min)
            var b = minSize4Pin - a * min
            b = maxSize4Pin - a * max
            return a * val[2] + b
          },
          label: {
            normal: {
              formatter: '{b}',
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 10,
              }
            }
          },

          itemStyle: {
            normal: {
              color: 'red', //标志颜色
            },
            emphasis: {
              borderColor: '#fff',
              borderWidth: 1
            },
            areaStyle: {
              color: 'red',//默认的地图板块颜色
            },
          },

          data: convertData(data),
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(data.sort(function (a, b) {
            return b.value - a.value
          }).slice(0, 47)),
          symbolSize: function (val) {
            return val[2] / 10
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: '#05C3F9',
              shadowBlur: 10,
              shadowColor: '#05C3F9'
            }
          },
          zlevel: 1
        }
        ]
      })
      // 散点点击事件
      echarts.on('click', function (params) {
        if (params.value && params.value.length > 1) {
          console.log(params)
        }
      })
      window.addEventListener("resize", function () {
        echarts.resize()
      })
    },
    mapjs () {
      // echart_map中国地图

      var myChart = this.$echarts.init(document.getElementById('zunyiMap'))

      function showProvince () {
        //自定义城市坐标菜单
        var geoCoordMap = {
          "海门": [106.92, 27.73],
          "桐梓县": [106.82, 28.13],
          "招远": [120.38, 37.35],
          "舟山": [122.207216, 29.985295],
          "齐齐哈尔": [123.97, 47.33],
          "盐城": [120.13, 33.38],
          "赤峰": [118.87, 42.28],
          "青岛": [120.33, 36.07],
          "乳山": [121.52, 36.89],
          "金昌": [102.188043, 38.520089],
        }
        //拼接对象数组
        var convertData = function (data) {
          var res = []
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name] //获取坐标
            if (geoCoord) { //如果有坐标
              res.push({ //创建对象数组，
                name: data[i].name,
                value: geoCoord.concat(data[i].value) //用连接数组的形式将value值加入
              })
              //res.push(geoCoord.concat(data[i].value));
              //res.push(geoCoord.concat(data[i].name));
            }
          }
          return res
        }
        var data = [{
          name: "海门",
          value: 9
        },
        {
          name: "鄂尔多斯",
          value: 12
        },
        {
          name: "桐梓县",
          value: 12
        },
        {
          name: "舟山",
          value: 12
        },
        {
          name: "齐齐哈尔",
          value: 14,
        },
        {
          name: "盐城",
          value: 15
        },
        {
          name: "赤峰",
          value: 100
        },
        {
          name: "青岛",
          value: 18
        },
        {
          name: "乳山",
          value: 300
        },
        {
          name: "金昌",
          value: 19
        },
        ]

        var max = 480,
          min = 9
        var maxSize4Pin = 50,
          minSize4Pin = 20
        // var convertData = function (data) {
        //   var res = []
        //   for (var i = 0; i < data.length; i++) {
        //     var geoCoord = geoCoordMap[data[i].name]

        //     if (geoCoord) {
        //       res.push({
        //         name: data[i].name,
        //         value: geoCoord.concat(data[i].value),
        //       })
        //     }
        //   }
        //   return res
        // }

        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: function loadData (result) {
              return result.name + '<br />' + result.value[3]
            }
          }, 

          geo: {
            zoom: 1.2,
            show: true,
            map: '遵义',
            mapType: '遵义',
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff"
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: '#fff'
                }
              },
            },
            roam: true,
            itemStyle: {
              normal: {
                borderColor: 'rgba(65, 145, 214, 0.8)',
                borderWidth: 2,
                areaColor: {

                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(65, 145, 214, 0.8)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(65, 145, 214, 0.8)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                /*  shadowColor: 'rgba(128, 217, 248, 1)',*/
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
              },
              emphasis: {
                areaColor: 'rgba(51, 133, 255, 1.0)',
                borderWidth: 0
              }
            }
          },
          grid:{
            left:10,
            top:10,
            right:10
          },
          // legend: {
          //   icon:'none',
          //   show: true,
          //   data: ['辣椒种植基地'],
          //   left: 'left',
          //   bottom: 50,
          //   textStyle: {
          //     color: '#f8fbff',
          //     backgroundColor : require('../../assets/img/14.png'),
          //     width:100,
          //     height:50
          //   },
          // },
          series: [
            {
              name: '辣椒种植基地',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbolSize: function (val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min)
                var b = minSize4Pin - a * min
                b = maxSize4Pin - a * max
                return a * val[2] + b
              },
              label: {
                normal: {
                  formatter: '{b}',
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: 10,
                  }
                }
              },

              itemStyle: {
                normal: {
                  color: 'red', //标志颜色
                },
                emphasis: {
                  borderColor: '#fff',
                  borderWidth: 1
                }
              },

              data: convertData(data),
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(data.sort(function (a, b) {
                return b.value - a.value
              }).slice(0, 47)),
              symbolSize: function (val) {
                return val[2] / 10
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                normal: {
                  color: '#05C3F9',
                  shadowBlur: 10,
                  shadowColor: '#05C3F9'
                }
              },
              zlevel: 1
            }
          ]
        })
        // 散点点击事件
        myChart.on('click', function (params) {
          if (params.value && params.value.length > 1) {
            console.log(params)
          }
        })
      }
      showProvince()
      window.addEventListener("resize", function () {
        myChart.resize()
      })

    }
  },
}