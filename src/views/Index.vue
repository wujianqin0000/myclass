<template >
  <div class="index">
    <div class="menuBox" v-show="isFull">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c6467"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item
          :key="element.id"
          v-for="element in menuDatas"
          :index="element.index"
        >{{element.title}}</el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 是否为全屏
      isFull: true,
      // 导航栏数据
      menuDatas: [{
        id: 1,
        index: "/home/index",
        title: "首页"
      },
      {
        id: 2,
        index: "/home/classPhoto",
        title: "班级相册"
      },
      {
        id: 3,
        index: "/home/personPhoto",
        title: "成员介绍"
      },
      {
        id: 4,
        index: "/home/aboutSchool",
        title: "关于学校"
      },
      {
        id: 5,
        index: "/home/aboutAuthor",
        title: "关于作者"
      },
      {
        id: 6,
        index: "/home/aboutProject",
        title: "项目说明"
      }
      ],
      activeIndex: '/home/index',
    };
  },
  methods: {
    show (is) {
      this.isFull = is
    },
    //fullScreen()和exitScreen()有多种实现方式，此处只使用了其中一种
    //全屏
    fullScreen () {
      var element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
        return
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
        return
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        return
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
        return
      }
    }
    ,
    //退出全屏 
    exitFullscreen () {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        return
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        return
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        return
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        return
      }
    },
    handleSelect (key, keyPath) {
      if (key === "/home/aboutSchool") {
        this.fullScreen()
      }
      console.log(key, keyPath);
    }

  }, mounted () {
    let that = this;
    // 监听window是否全屏，并进行相应的操作,支持esc键退出
    window.onresize = function () {
      var isFull = !!(document.webkitIsFullScreen || document.mozFullScreen ||
        document.msFullscreenElement || document.fullscreenElement
      );//!document.webkitIsFullScreen都为true。因此用!!
      if (isFull == false) {
        that.show(true);
      } else {
        that.show(false);
      }
    }
  }
}
</script>
<style>
html::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

html {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
<style lang="less" scoped>
.menuBox {
  top: 0;
  width: 100%;
  position: fixed;
}
</style>