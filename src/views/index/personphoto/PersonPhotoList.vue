<template>
  <div class="photo_person">
    <div class="box">
      <div
        class="single-member effect-3"
        v-for="(item, index) in picList"
        @mouseenter="hide($event, index)"
        @mouseleave="show($event, index)"
        :key="item.id"
        @click="goDetailsPage(item.id)"
      >
        <div class="member-image">
          <img
            :src="item.imgpathmd?item.imgpathmd:'https://img.wenhairu.com/images/2021/12/08/pabtU.jpg'"
            alt="Member"
            id="image-img"
            style="width: 60%"
          />
        </div>
        <div class="member-info">
          <h3>{{ item.name }}</h3>
          <h5>学号：{{ item.id }}</h5>
          <p>博学多能，厚德笃行</p>
          <div class="social-touch">
            点击查看人物介绍
            <!-- <a class="fb-touch" href="#"></a>
            <a class="tweet-touch" href="#"></a>
            <a class="linkedin-touch" href="#"></a>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPicListApi } from "../../../api/ClassInfo"
export default {
  name: 'Photoshow',
  created () {
    this.getPicList()

  },
  data () {
    return {
      imgpathmd: "",
      picList: [],
      nameShow: false
    }
  },
  methods: {
    goDetailsPage (id) {
      this.$router.push(`personDetails/${id}`)
    },
    getPicList () {
      getPicListApi()
        .then((response) => {
          if (response.status !== 200) {
            console.log(response.msg);
          } else {
            this.picList = response.data.data
            // console.log(this.picList);
          }
        }).catch(error => { console.log(error); })


    },
    hide (e, i) {
      // console.log(e.target.children[0].children[0], "hide");
      e.target.children[0].children[0].style.width = "100%"
      // console.log(this.picList[i], "hide");
      this.imgpathmd = this.picList[i].imgpathmd;
      this.picList[i].imgpathmd = this.picList[i].imgpathmini
    },
    show (e, i) {
      console.log(e, "show");
      e.target.children[0].children[0].style.width = "60%"
      this.picList[i].imgpathmd = this.imgpathmd
      // console.log(this.picList[i], "show");
    }



  },

}
</script>

<style scoped>
/* #region */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  max-width: 1000px;
}
.row {
  width: 103%;
  float: left;
  margin: 110px -1.5%;
}
/*= Media Query 
=============== */
@media only screen and (max-width: 980px) {
  .row {
    width: 100%;
    margin: 110px 0;
  }
  .team-members {
    text-align: center;
  }
  .single-member {
    float: none;
    display: inline-block;
    vertical-align: bottom;
  }
}
/*= Media Query End
=================== */
/* #endregion */
/* #region */
/*= common css to all effects =*/
.single-member {
  width: 280px;
  float: left;
  margin: 30px 2.5%;
  background-color: #fff;
  text-align: center;
  position: relative;
}
.member-image img {
  height: 100%;
  vertical-align: middle;
}

h3 {
  font-size: 24px;
  font-weight: normal;
  margin: 10px 0 0;
  text-transform: uppercase;
}
h5 {
  font-size: 16px;
  font-weight: 300;
  margin: 0 0 15px;
  line-height: 22px;
}
p {
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  padding: 0 30px;
  margin-bottom: 10px;
}
.social-touch a {
  display: inline-block;
  width: 27px;
  height: 26px;
  vertical-align: middle;
  margin: 0 2px;
  /* background-image: url(../assets/social-icons.png); */
  background-repeat: no-repeat;
  opacity: 0.7;
  transition: 0.3s;
}
.social-touch a:hover {
  opacity: 1;
  transition: 0.3s;
}
.fb-touch {
  background-position: 0 0;
}
.tweet-touch {
  background-position: -35px 0;
}
.linkedin-touch {
  background-position: -71px 0;
}
.icon-colored .fb-touch {
  background-position: 0 -27px;
}
.icon-colored .tweet-touch {
  background-position: -35px -27px;
}
.icon-colored .linkedin-touch {
  background-position: -71px -27px;
}
/*= common css to all effects end =*/
/* #endregion */
/* #region */
/*= effect-3 css =*/
.effect-3 {
  max-height: 302px;
  min-height: 302px;
  overflow: hidden;
}
.effect-3 h3 {
  padding-top: 7px;
  line-height: 33px;
}
.effect-3 .member-image {
  border-bottom: 5px solid #e5642b;
  transition: 0.4s;
  height: 212px;
  width: 100%;
  display: inline-block;
  float: none;
  vertical-align: middle;
}
.effect-3 .member-info {
  transition: 0.4s;
}
.effect-3 .member-image img {
  width: 100%;
  vertical-align: bottom;
}
.effect-3 .social-touch {
  background-color: #e5642b;
  float: left;
  left: 0;
  bottom: 0;
  overflow: hidden;
  padding: 5px 0;
  width: 100%;
  transition: 0.4s;
}
.effect-3:hover .member-image {
  border-bottom: 0;
  border-radius: 0 0 50px 50px;
  height: 81px;
  display: inline-block;
  overflow: hidden;
  width: 109px;
  transition: 0.4s;
}
/*= effect-3 css end =*/
/* #endregion */

.box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* padding: 0 3vw; */
  background: url('../../../assets/images/bg5.jpg');
}
.photo_person {
  /* width: 100%;
  display: flex;
  justify-content: center; */
}
</style>
<style>
.effect-3 .member-image img {
  width: 60%;
}
.social-touch {
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}
</style>