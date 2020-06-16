<template>
  <div class="about"
       id="div">
    <el-carousel direction="vertical"
                 ref="carousel"
                 :loop="false"
                 :autoplay="false">
      <el-carousel-item>
        <bannerf></bannerf>
      </el-carousel-item>
      <el-carousel-item>
        <bannert></bannert>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import bannerf from '../components/comp-view/bannerf'
import bannert from '../components/comp-view/bannert'
export default {
  components: {
    bannerf,
    bannert
  },
  data () {
    return {
      acctive: 0,
      time: 0
    }
  },
  mounted () {
    this.imgHeight =
      document.documentElement.clientHeight || document.body.clientHeight
    window.addEventListener("mousewheel", this.handleScroll, false)
  },
  methods: {
    handleScroll (e) {
      if (this.time) {
        return
      }
      // 设置一秒内只能执行一次
      this.time = setTimeout(() => {
        clearTimeout(this.time)
        this.time = ""
      }, 1000)

      var direction = e.deltaY > 0 ? "down" : "up" //该语句可以用来判断滚轮是向上滑动还是向下
      if (direction === "down") {
        if (this.acctive >= 2) {
          return
        }
        this.acctive++
      } else {
        if (this.acctive <= 0) {
          return
        }
        this.acctive--
      }
      // 调用方法改变轮播图位置
      this.setActiveItem(this.acctive)
    },
    setActiveItem (i) {
      this.$refs.carousel.setActiveItem(i)
      this.time = Date.now()
    },
  },
  destroyed () {
    window.removeEventListener("scroll", this.handleScroll) //  离开页面清除（移除）滚轮滚动事件
  },
}
</script>
<style lang="less">
.about {
  height: 100%;
}
.el-carousel.el-carousel--vertical {
  width: 100%;
  height: 100%;
  .el-carousel__container {
    height: 100%;
  }
  // .el-carousel__indicators.el-carousel__indicators--vertical {
  //   width: 100%;
  //   height: 100%;
  // }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
