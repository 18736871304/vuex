<template>
  <!-- 按de可以快速出来页面模板 -->
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <el-form label-width="60px" class="login_form" :model="loginForm" ref="loginForm">
        <el-form-item label="账号:">
          <el-input
            prefix-icon="el-icon-s-custom"
            v-model=" loginForm.user"
            placeholder="请输入账号"
            class="user"
            @keyup.enter.native="goToPwdInput"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码:">
          <el-input
            prefix-icon="el-icon-search"
            v-model="loginForm.password"
            placeholder="请输入密码"
            class="password"
            @keyup.enter.native="onLogin"
            ref="pwd"
          ></el-input>
        </el-form-item>

        <el-form-item label="记住密码" label-width="80px" class="jipassword">
          <el-switch v-model="value" active-color="#13ce66"></el-switch>
        </el-form-item>
        <el-button type="primary" class="primary" @click="onLogin('loginForm')">登录</el-button>
        <!-- <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>-->
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      loginForm: {
        user: "weiqinlu",
        password: "123"
      }
    };
  },
  methods: {
    // 用户名输入框回车后切换到密码输入框
    goToPwdInput() {
      this.$refs.pwd.$el.getElementsByTagName("input")[0].focus();
    },
    // 登录操作
    onLogin() {
      this.$refs.pwd.$el.getElementsByTagName("input")[0].blur();
      //如果没有输入用户名，就给他一个账号
      let user = {
        use: "weiqinlu",
        pwd: 123
      };
      sessionStorage.setItem("user", JSON.stringify(user));
      this.$router.push({ path: "/home" });
    }
  }
};
</script>
<style scoped>
.primary {
  width: 100%;
}
.jipassword {
  width: 40%;
}
.login_form {
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -225px;
  padding: 0 50px;
  box-sizing: border-box;
}
.btns {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.login_container {
  width: 100%;
  height: 100%;
  background: url(../assets/beijing.jpg);
  background-size: 100% 100%;
  position: fixed;
}
.login_box {
  width: 450px;
  height: 335px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
</style>