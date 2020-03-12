<template>
  <div class="auth-page">
    <div class="info">
      请填写您的真实信息，便于您之后查询您的口罩预约详情
    </div>
    <div class="form">
      <nut-textinput
        v-model="form.name"
        label="姓名"
        placeholder="请输入您的真实姓名"
        :hasBorder="false"
        :clearBtn="true"
        :disabled="false"
      />
      <nut-textinput
        v-model="form.idcard"
        label="身份证"
        placeholder="请输入您的身份证号码"
        :hasBorder="false"
        :clearBtn="true"
        :disabled="false"
      />
      <nut-textinput
        v-model="form.phone"
        label="手机号"
        placeholder="请输入您的手机号"
        :hasBorder="false"
        :clearBtn="true"
        :disabled="false"
      />
      <div class="verity">
        <nut-textinput
          v-model="form.code"
          label="验证码"
          placeholder="请输入验证码"
          :hasBorder="false"
          :clearBtn="true"
          :disabled="false"
        />
        <div class="verity-btn" @click="sendMsg" v-if="!isSend">获取验证码</div>
        <div class="verity-btn is-send-btn" v-else>重新获取 {{time}}s</div>
      </div>
    </div>
    <nut-button class="submit-btn">
      提交
    </nut-button>
  </div>
</template>
<script>
export default {
  name: 'AuthPage',
  data () {
    return {
      form: {
        name: '',
        idcard: '',
        phone: '',
        code: ''
      },
      isSend: false,
      time: 60,
      interval: null
    }
  },
  methods: {
    sendMsg () {
      this.isSend = true
      this.time = 60
      this.interval = setInterval(() => {
        this.time--
        if (this.time === 0) {
          clearInterval(this.interval)
          this.isSend = false
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  .auth-page {
    background: #F5F5F5;
    .info {
      padding: 10px 0 10px 16px;
      font-size:12px;
      font-weight:400;
      color:rgba(153,153,153,1);
    }
    .form {
      font-size: 14px;
      background: #fff;
      .nut-textinput {
        padding: 10px 16px;
        border-bottom: 1px solid #EBEBEB;
      }
      .nut-textinput-label {
        width: 56px;
      }
      .verity {
        position: relative;
        .verity-btn {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          margin-right: 7px;
          font-size: 14px;
          color: #FF6A16;
          cursor: pointer;
        }
        .is-send-btn {
          color: #999999;
          pointer-events: none;
        }
      }
    }
    .submit-btn {
      margin: 30px auto 0;
      display: block;
      width: 90%;
      background:linear-gradient(90deg,rgba(255,137,32,1) 0%,rgba(255,81,14,1) 100%);
    }
  }
</style>
