// // $(function () {
// import echarts from 'echarts'
// echart_map()



// // echart_map中国地图
// function echart_map () {
//   var myChart = echarts.init(document.getElementById('zunyiMap'))

//   function showProvince () {
//     //自定义城市坐标菜单
//     var geoCoordMap = {
//       "海门": [106.92, 27.73],
//       "桐梓县": [106.82, 28.13],
//       "招远": [120.38, 37.35],
//       "舟山": [122.207216, 29.985295],
//       "齐齐哈尔": [123.97, 47.33],
//       "盐城": [120.13, 33.38],
//       "赤峰": [118.87, 42.28],
//       "青岛": [120.33, 36.07],
//       "乳山": [121.52, 36.89],
//       "金昌": [102.188043, 38.520089],
//     }
//     //拼接对象数组
//     var convertData = function (data) {
//       var res = []
//       for (var i = 0; i < data.length; i++) {
//         var geoCoord = geoCoordMap[data[i].name] //获取坐标
//         if (geoCoord) { //如果有坐标
//           res.push({ //创建对象数组，
//             name: data[i].name,
//             value: geoCoord.concat(data[i].value) //用连接数组的形式将value值加入
//           })
//           //res.push(geoCoord.concat(data[i].value));
//           //res.push(geoCoord.concat(data[i].name));
//         }
//       }
//       return res
//     }
//     var data = [{
//       name: "海门",
//       value: 9
//     },
//     {
//       name: "鄂尔多斯",
//       value: 12
//     },
//     {
//       name: "桐梓县",
//       value: 12
//     },
//     {
//       name: "舟山",
//       value: 12
//     },
//     {
//       name: "齐齐哈尔",
//       value: 14,
//     },
//     {
//       name: "盐城",
//       value: 15
//     },
//     {
//       name: "赤峰",
//       value: 100
//     },
//     {
//       name: "青岛",
//       value: 18
//     },
//     {
//       name: "乳山",
//       value: 300
//     },
//     {
//       name: "金昌",
//       value: 19
//     },
//     ]

//     var max = 480,
//       min = 9
//     var maxSize4Pin = 50,
//       minSize4Pin = 20
//     // var convertData = function (data) {
//     //   var res = []
//     //   for (var i = 0; i < data.length; i++) {
//     //     var geoCoord = geoCoordMap[data[i].name]

//     //     if (geoCoord) {
//     //       res.push({
//     //         name: data[i].name,
//     //         value: geoCoord.concat(data[i].value),
//     //       })
//     //     }
//     //   }
//     //   return res
//     // }

//     myChart.setOption({
//       tooltip: {
//         trigger: 'item',
//         formatter: function loadData (result) {
//           return result.name + '<br />' + result.value[3]
//         }
//       },

//       geo: {
//         zoom: 1.2,
//         show: true,
//         map: '遵义',
//         mapType: '遵义',
//         label: {
//           normal: {
//             show: true,
//             textStyle: {
//               color: "#fff"
//             }
//           },
//           emphasis: {
//             show: true,
//             textStyle: {
//               color: '#fff'
//             }
//           },
//         },
//         roam: true,
//         itemStyle: {
//           normal: {
//             borderColor: 'rgba(65, 145, 214, 0.8)',
//             borderWidth: 2,
//             areaColor: {
//               type: 'radial',
//               x: 0.5,
//               y: 0.5,
//               r: 0.8,
//               colorStops: [{
//                 offset: 0,
//                 color: 'rgba(65, 145, 214, 0.8)' // 0% 处的颜色
//               }, {
//                 offset: 1,
//                 color: 'rgba(65, 145, 214, 0.8)' // 100% 处的颜色
//               }],
//               globalCoord: false // 缺省为 false
//             },
//             /*  shadowColor: 'rgba(128, 217, 248, 1)',*/
//             shadowOffsetX: -2,
//             shadowOffsetY: 2,
//             shadowBlur: 10
//           },
//           emphasis: {
//             areaColor: 'rgba(51, 133, 255, 1.0)',
//             borderWidth: 0
//           }
//         }
//       },
//       series: [{
//         name: '辣椒种植基地',
//         type: 'scatter',
//         coordinateSystem: 'geo',
//         symbolSize: function (val) {
//           var a = (maxSize4Pin - minSize4Pin) / (max - min)
//           var b = minSize4Pin - a * min
//           b = maxSize4Pin - a * max
//           return a * val[2] + b
//         },
//         label: {
//           normal: {
//             formatter: '{b}',
//             show: true,
//             textStyle: {
//               color: '#fff',
//               fontSize: 10,
//             }
//           }
//         },

//         itemStyle: {
//           normal: {
//             color: 'red', //标志颜色
//           },
//           emphasis: {
//             borderColor: '#fff',
//             borderWidth: 1
//           }
//         },

//         data: convertData(data),
//       },
//       {
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         data: convertData(data.sort(function (a, b) {
//           return b.value - a.value
//         }).slice(0, 47)),
//         symbolSize: function (val) {
//           return val[2] / 10
//         },
//         showEffectOn: 'render',
//         rippleEffect: {
//           brushType: 'stroke'
//         },
//         hoverAnimation: true,
//         itemStyle: {
//           normal: {
//             color: '#05C3F9',
//             shadowBlur: 10,
//             shadowColor: '#05C3F9'
//           }
//         },
//         zlevel: 1
//       }
//       ]
//     })
//     // 散点点击事件
//     myChart.on('click', function (params) {
//       if (params.value && params.value.length > 1) {
//         console.log(params)
//       }
//     })
//   }
//   showProvince()
//   window.addEventListener("resize", function () {
//     myChart.resize()
//   })
// }


// // })


