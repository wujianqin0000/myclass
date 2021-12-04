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
      <form action="#" method="post">
        <h2>
          Login Now
          <i class="fas fa-level-down-alt"></i>
        </h2>
        <div class="form-style-agile">
          <label>
            <i class="fas fa-user"></i>
            Username
          </label>
          <input placeholder="学号" name="Name" type="text" required />
        </div>
        <div class="form-style-agile">
          <label>
            <i class="fas fa-unlock-alt"></i>
            Password
          </label>
          <input placeholder="初始密码888888" name="Password" type="password" required />
        </div>
        <!-- checkbox -->
        <div class="wthree-text">
          <ul>
            <li>
              <label class="anim">
                <input type="checkbox" class="checkbox" required />
                <span>Stay Signed In</span>
              </label>
            </li>
            <li>
              <a href="#">Forgot Password?</a>
            </li>
          </ul>
        </div>
        <!-- //checkbox -->
        <input type="submit" value="Log In" />
      </form>
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
addEventListener('load', function () {
  setTimeout(hideURLbar, 0)
}, false)

function hideURLbar () {
  window.scrollTo(0, 1)
}
export default {
  data () {
    return {

    }
  },
  mounted () {
    canva($)
  }
}
</script>
