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
        <div class="dropdownBox">
          <el-dropdown @command="dropdownHandleClick">
            <el-button type="primary">
              {{userinfo.email? userinfo.email.replace("@qq.com",""):userinfo.email}}
              <i
                class="el-icon-arrow-down el-icon--right"
              ></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              <el-dropdown-item :disabled="isOther" command="person">个人中心</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOther: false,
      // 用户信息
      userinfo: {},
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
    // 下拉按钮处理函数
    dropdownHandleClick (key) {
      switch (key) {
        case "logout":
          window.sessionStorage.removeItem("JWT")
          window.sessionStorage.removeItem("userinfo")
          window.sessionStorage.removeItem("activeIndex")
          this.$router.push("/login")
          break;
        case "person":
          this.$router.push(`/home/personPhoto/personDetails/` + this.userinfo.username)
          window.location.reload()
          break;
        default:
          this.$msg("选项不存在！！！")
          break;
      }
    },
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
      window.sessionStorage.setItem("activeIndex", key)
      // console.log(key, keyPath);
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
  }, created () {
    let activeIndex = window.sessionStorage.getItem("activeIndex")
    this.activeIndex = activeIndex ? activeIndex : this.activeIndex
    let userinfo = JSON.parse(window.sessionStorage.getItem('userinfo'))
    this.userinfo = userinfo
    // console.log(userinfo, "sssssss");
    if (userinfo.username.length != 13) {
      this.isOther = true
      this.userinfo.email = "管理员"
    }
  },
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
.dropdownBox {
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
}
.menuBox {
  z-index: 99;
}
</style>