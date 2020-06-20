<template>
  <div class="home"
       id="div">
    <div class="header">
      <p>遵义产业大数据分析平台</p>
      <div class="right-swich">
        <span>生产</span>
        <span @click="nextClick"></span>
      </div>
    </div>
    <div class="content-box">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      acctive: 0,
      time: 0
    }
  },
  mounted () {
    this.imgHeight =
      document.documentElement.clientHeight || document.body.clientHeight

  },
  methods: {
    setActiveItem (i) {
      this.$refs.carousel.setActiveItem(i)
      this.time = Date.now()
    },
    nextClick () {
      let routerArr = this.$router.options.routes[0].children
      let currentPath = this.$router.currentRoute.path
      routerArr.map((item,i)=>{
       if(item.path===currentPath) {
         let nextPathI = ''
         nextPathI = (i+1)===routerArr.length?0:i+1
         this.$router.push({
           path:routerArr[nextPathI].path
         })
         return
       }
      })
      

    }
  },

}
</script>
<style lang="less">
.home {
  background: url('../assets/img/bgc.jpg') no-repeat center center;
  background-size: 100% 100%;
  .header {
    height: 0.7rem;
    background: url('../assets/img/header.png') no-repeat center center;
    background-size: cover;
    width: 100%;
    position: relative;
    margin-bottom: .375rem;
    .right-swich {
      position: absolute;
      right: 0.625rem;
      top: 50%;
      color: #adccd7;
      transform: translateX(-50%);
      span {
        display: inline-block;
        vertical-align: middle;
        &:nth-child(1) {
          border: 1px solid #3e537d;
          border-radius: 0.25rem;
          width: 1rem;
          padding: 0.025rem 0.0625rem;
          padding-left: 0.375rem;
          font-size: 0.225rem;
          background: url('../assets/img/icon-productibn.png') no-repeat left
            center;
          background-size: 0.225rem 0.225rem;
          background-position: 0.1rem;
        }
        &:nth-child(2) {
          width: 0.375rem;
          height: 0.375rem;
          background: url('../assets/img/icon-switch.png') no-repeat center
            center;
          background-size: cover;
          margin-left: 0.225rem;
          cursor: pointer;
        }
      }
    }
    p {
      text-align: center;
      color: #e9ecf1;
      font-size: 0.4rem;
      padding-top: 0.08rem;
    }
  }
  .content-box {
    max-height: 13.5rem;
    min-height: calc(100vh - 1.3rem);
    width: 24rem;
    padding:0 .8125rem;
    box-sizing: border-box;
  }
}
</style>
