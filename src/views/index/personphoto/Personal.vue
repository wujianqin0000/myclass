<template>
  <div class="personDetails">
    <div class="Details">
      <div class="line">
        <div></div>
      </div>
      <div class="class">
        <p>即使生活让我们遍地鳞伤，我们依旧保持热爱。</p>
        <h1>个人详情</h1>
        <p />
      </div>
    </div>

    <div class="content">
      <div class="name">
        <p>
          {{personInfo.name}}
          <el-tooltip class="item" effect="dark" content="编辑个人信息" placement="right-start">
            <el-button type="primary" icon="el-icon-edit" @click="EditdialogVisible=true" circle></el-button>
          </el-tooltip>
        </p>
        <i class="position">{{personInfo.position?personInfo.position:"软件二班-班级成员"}}</i>
      </div>
      <div class="school">
        <h2>学校：</h2>
        <p>{{personInfo.schoolname}}</p>
      </div>
      <div class="className">
        <h2>班级：</h2>
        <p>{{personInfo.classname}}</p>
      </div>
      <div class="motto">
        <h2>座右铭：</h2>
        <p>{{personInfo.motto?personInfo.motto:"这个人很懒没有座右铭。。。。。。"}}</p>
      </div>
      <div class="introduction">
        <h2>介绍：</h2>
        <p>{{personInfo.introduce?personInfo.introduce:"这个人很懒没有介绍。。。。。。"}}</p>
      </div>
      <div class="saidSome">
        <h2>留言:</h2>
        <p>{{personInfo.saidsome?personInfo.saidsome:"这个人很懒没有留言。。。。。。"}}</p>
      </div>
    </div>
    <el-button type="primary" class="goback_button" @click="$router.go(-1)">返回</el-button>
    <img class="personImg" :src="personInfo.imgpathmd" width="32%" />

    <!-- 编辑对话框开始 -->
    <el-dialog title="编辑个人信息" :visible.sync="EditdialogVisible" width="30%">
      <el-form
        :model="ruleFormData"
        :rules="rules"
        ref="ruleFormData"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="ruleFormData.name"></el-input>
        </el-form-item>
        <el-form-item label="职位：" prop="position">
          <el-input v-model="ruleFormData.position"></el-input>
        </el-form-item>
        <el-form-item label="学校：" prop="schoolname">
          <el-input v-model="ruleFormData.schoolname"></el-input>
        </el-form-item>
        <el-form-item label="班级：" prop="classname">
          <el-input v-model="ruleFormData.classname"></el-input>
        </el-form-item>
        <el-form-item label="座右铭：" prop="motto">
          <el-input v-model="ruleFormData.motto"></el-input>
        </el-form-item>
        <el-form-item label="介绍：" prop="introduce">
          <el-input type="textarea" v-model="ruleFormData.introduce"></el-input>
        </el-form-item>
        <el-form-item label="留言:" prop="saidsome">
          <el-input type="textarea" v-model="ruleFormData.saidsome"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="EditdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleFormData')">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑对话框结束 -->
  </div>
</template>
<script>
import { getInfoOne, putInfoOne } from "../../../api/ClassInfo"
export default {
  data () {
    return {
      // 表单数据
      ruleFormData: {
        id: 0,
        name: '',
        position: '',
        schoolname: '',
        classname: '',
        motto: '',
        introduce: '',
        saidsome: ''
      },
      // 个人信息
      personInfo: {},
      // 编辑弹出框参数
      EditdialogVisible: false,
      // 表单验证规则
      rules: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '职位不能为空', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        schoolname: [
          { required: true, message: '学校名不能为空', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        classname: [
          { required: true, message: '班级不能为空', trigger: 'blur' },
          { min: 2, max: 9, message: '长度在 2 到 9 个字符', trigger: 'blur' }
        ],
        motto: [
          { required: true, message: '座右铭不能为空', trigger: 'blur' },
          { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
        ],
        introduce: [
          { required: true, message: '介绍不能为空', trigger: 'blur' },
          { min: 2, max: 254, message: '长度在 2 到 254 个字符', trigger: 'blur' }
        ],
        saidsome: [
          { required: true, message: '留言不能为空', trigger: 'blur' },
          { min: 2, max: 254, message: '长度在 2 到 254 个字符', trigger: 'blur' }
        ],
      }
    }
  }, methods: {
    // 信息获取
    async getInfoOneHandle (id) {
      try {
        let { data: res } = await getInfoOne({ id })
        this.personInfo = res.data
        this.ruleFormData.name = res.data.name
        this.ruleFormData.position = res.data.position ? res.data.position : "软件二班-班级成员"
        this.ruleFormData.classname = res.data.classname
        this.ruleFormData.schoolname = res.data.schoolname
        this.ruleFormData.motto = res.data.motto
        this.ruleFormData.introduce = res.data.introduce
        this.ruleFormData.saidsome = res.data.saidsome
        // console.log(res);
      } catch (error) {
        console.log(error);
      }

    },
    submitForm (formName) {

      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            this.ruleFormData.id = this.$route.params.id
            let { data: res } = await putInfoOne(this.ruleFormData)
            // console.log(res);
            this.getInfoOneHandle(this.$route.params.id)
            this.$msg.success("修改成功！！！")
          } catch (error) {
            console.log(error);
          }
          this.EditdialogVisible = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },

  mounted () {
    this.getInfoOneHandle(this.$route.params.id)
  }
}
</script>
<style lang="less" scoped>
.personDetails {
  background-color: #faf9ff;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  //   justify-content: center;
}
.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 15vw 0 8vw;
  h2 {
    padding: 0;
    margin: 0;
  }
  .name {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    flex: 4;
    p {
      padding: 0;
      margin: 0;
      font-size: 90px;
    }
    i {
      font-size: 30px;
    }
  }
  .className {
    flex: 1;
  }
  .motto,
  .introduction {
    flex: 1;
  }
  .saidSome {
    padding-top: 20px;
    flex: 4;
  }
  .className,
  .school {
    p {
      flex: 1;
    }
    align-items: center;
    display: flex;
  }
}
.Details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: 100%;
  background-color: #131262;
  .line {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    div {
      background-color: #a3a4f4;
      height: 3px;
      width: 70px;
    }
  }
}
.class {
  margin: 20px 0;
  flex: 3;
  display: flex;
  color: #fff;
  line-height: 20px;
  h1,
  p {
    letter-spacing: 5px;
    padding: 0;
    margin: 0;
    margin-left: 20px;
    writing-mode: tb-rl;
  }
}
.goback_button {
  margin-right: 10vw;
}
</style>