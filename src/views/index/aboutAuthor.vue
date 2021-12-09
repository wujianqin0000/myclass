<template>
  <el-card class="box-card" :body-style="{padding: 0}">
    <iframe src="https://author-xi.vercel.app" frameborder="0" scrolling="0"></iframe>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
    }
  }, methods: {
    esc () {
      //   this.exitFullscreen()
    },

    // //fullScreen()和exitScreen()有多种实现方式，此处只使用了其中一种
    // //全屏
    // fullScreen () {
    //   var element = document.documentElement;
    //   if (element.requestFullscreen) {
    //     element.requestFullscreen();
    //     return
    //   } else if (element.msRequestFullscreen) {
    //     element.msRequestFullscreen();
    //     return
    //   } else if (element.mozRequestFullScreen) {
    //     element.mozRequestFullScreen();
    //     return
    //   } else if (element.webkitRequestFullscreen) {
    //     element.webkitRequestFullscreen();
    //     return
    //   }
    // }
    // ,
    // //退出全屏 
    // exitFullscreen () {
    //   if (document.exitFullscreen) {
    //     document.exitFullscreen();
    //     return
    //   } else if (document.msExitFullscreen) {
    //     document.msExitFullscreen();
    //     return
    //   } else if (document.mozCancelFullScreen) {
    //     document.mozCancelFullScreen();
    //     return
    //   } else if (document.webkitExitFullscreen) {
    //     document.webkitExitFullscreen();
    //     return
    //   }
    // },


  }, mounted () {
    // this.fullScreen()
    //监听window是否全屏，并进行相应的操作,支持esc键退出
    // window.onresize = function () {
    //   var isFull = !!(document.webkitIsFullScreen || document.mozFullScreen ||
    //     document.msFullscreenElement || document.fullscreenElement
    //   );//!document.webkitIsFullScreen都为true。因此用!!
    //   if (isFull == false) {
    //     console.log("ssssssssssssss");
    //   } else {
    //     console.log("aaaaaaaaaaaaaaaaaaaaaa");
    //   }
    // }

  }
}
</script>
<style  scoped>
iframe {
  height: 100vh;
  width: 100vw;
}
.black {
  position: relative;
}
</style>