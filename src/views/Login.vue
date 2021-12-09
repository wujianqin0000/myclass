<template>
  <div>
    <!-- bg effect -->
    <div id="bg">
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
    <!-- //bg effect -->
    <!-- title -->
    <h1>Effect Login Form</h1>
    <!-- //title -->
    <!-- content -->
    <div class="sub-main-w3">
      <!-- 表单开始 -->
      <form @submit.prevent="()=>false">
        <h2>
          Login Now
          <i class="fas fa-level-down-alt"></i>
        </h2>
        <!-- 密码输入框开始 -->
        <div class="form-style-agile">
          <label>
            <i class="fas fa-user"></i>
            Username
          </label>
          <input placeholder="学号" name="Name" type="text" required v-model="fromData.username" />
        </div>
        <!-- 密码输入框结束 -->
        <!-- 密码输入框开始 -->
        <div class="form-style-agile">
          <label>
            <i class="fas fa-unlock-alt"></i>
            Password
          </label>
          <input
            placeholder="初始密码888888"
            name="Password"
            type="password"
            v-model="fromData.password"
            required
          />
        </div>
        <!-- 密码输入框结束 -->
        <!-- 验证码输入框开始 -->
        <div class="form-style-agile">
          <label>
            <i class="fas fa-unlock-alt"></i>
            VerifyCode
          </label>
          <div class="VerifyCodebox">
            <input
              placeholder="验证码"
              name="VerifyCode"
              id="VerifyCode_input"
              type="text"
              v-model="fromData.code"
              required
            />
            <img class="VerifyCode_img" :src="VERIFY_CODE_URL+fromData.token" alt />
            <el-button type="primary" @click="reNewCode" class="VerifyCode_button">换一张看不清</el-button>
          </div>
        </div>
        <!-- 验证码输入框结束 -->
        <!-- checkbox -->
        <div class="wthree-text">
          <ul>
            <li>
              <label class="anim">
                <input type="checkbox" v-model="isAcpect" class="checkbox" required />
                <span>Stay Signed In</span>
              </label>
            </li>
            <li>
              <a href="#">Forgot Password?</a>
            </li>
          </ul>
        </div>
        <!-- //checkbox -->
        <input type="submit" @click="postLoginHandel" value="Log In" />
      </form>
      <!-- 表单结束 -->
    </div>
    <!-- //content -->

    <!-- copyright -->
    <div class="footer">
      <p>Copyright &copy; 2022.7 as time goes by 我们的青春一去不回,但我们还是保持热爱勇往直前！！！.</p>
    </div>
    <!-- //copyright -->
  </div>
</template>
<style herf="http://maxcdn.bootstrapcdn.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i"  scoped></style>
<style herf="http://maxcdn.bootstrapcdn.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"  scoped></style>
<style src="@/assets/css/style.css"  scoped></style>
<style src="@/assets/css/fontawesome-all.css"  scoped></style>
<script>
import $ from 'jquery'
import canva from '../assets/js/canva_moving_effect'
import { uuid } from 'vue-uuid' // 导入uuid插件
import { LoginPost } from "../api/LoginReq"
import { VERIFY_CODE_URL } from "../api/AllApiUrl"
addEventListener('load', function () {
  setTimeout(hideURLbar, 0)
}, false)

function hideURLbar () {
  window.scrollTo(0, 1)
}
export default {
  data () {
    return {
      isAcpect: false,
      // 登录表单信息
      VERIFY_CODE_URL,
      fromData: {
        code: '',
        password: '',
        token: uuid.v4(),
        username: ''

      }

    }
  },
  methods: {
    // 更新验证码
    reNewCode () {
      this.fromData.token = uuid.v4()
    },
    // 登录处理函数
    async postLoginHandel () {
      if (this.fromData.code && this.fromData.password && this.fromData.username && this.isAcpect) {
        try {
          let res = await LoginPost(this.fromData);
          window.sessionStorage.setItem('JWT', res.headers.authorization)
          window.sessionStorage.setItem('userinfo', JSON.stringify(res.data.data))
          // console.log(userinfo, "userinfo");
          this.$router.push('/home');
        } catch (error) {

        }
      }
    }
  },
  mounted () {
    canva($)
    console.log(this.fromData, 'fromData')
  }
}
</script>
<style lang="less" scoped>
.VerifyCodebox {
  display: flex;
  .VerifyCode_button {
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 10px;
  }
  #VerifyCode_input {
    width: 260px;
  }
  .VerifyCode_img {
    width: 150px;
    height: 49px;
    border: black 1px solid;
    margin-left: 10px;
  }
}
</style>
