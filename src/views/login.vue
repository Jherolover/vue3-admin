<template>
       <!--<h1>欢迎登录</h1>--> 
        <div id="loginformContainer"   >
            <img src="../assets/logo.png">
            <label id="title">欢迎登录系统</label>
            <el-form id="loginform" ref="ruleForm" :model="ruleForm" status-icon
                :rules="rules" label-width="120px"    class="demo-ruleForm" >
                
                <el-form-item label="用户名" prop="username" >
                    <el-input v-model="ruleForm.username"
                        type="text"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input
                        v-model="ruleForm.pass"
                        type="password"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                    >登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
</template>
<script>
 export default {
  data() {
   
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名！'))
      } else {
        if (this.ruleForm.username !== '') {
          this.$refs.ruleForm.validateField('username')
        }
        callback()
      }
    }
    const validatepass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码！'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        pass: ''
      },
      rules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        pass: [{ validator: validatepass, trigger: 'blur' }]
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            alert(this.ruleForm.username+","+this.ruleForm.pass)
            console.log(this.ruleForm.username)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>
<style scoped>
    
    #loginformContainer{
        background-image: url('../assets/images/bg2.jpg');
        background-repeat:no-repeat;
        background-size:100% 100%; 


        background-color:#f2f6fc;
        position: relative;;
        padding: auto;
        width: 100%;
        height: 100%;
        text-align: center;
        overflow: hidden;
    }
    #title{
        position: relative;
        font-size: 16px;
        text-align: center;
        margin-right: 20%;
        color:black;
    }
    #loginform{
        margin-top: 15%;
        margin-left: 35%;
        position : absolute;
        top: 0;
        bottom: 0;
        height: 20px;
        text-align: center;

    }
    
</style>