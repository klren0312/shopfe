<template>
  <div class="auth-page">
    <div class="info">
      请填写详细的收货地址，便于商品准确无误的发货至您手中
    </div>
    <div class="form">
      <nut-textinput v-model="form.name" label="收货人" placeholder="请输入收货人姓名" :hasBorder="false" :clearBtn="true"
        :disabled="false" />
      <nut-textinput v-model="form.idcard" label="身份证" placeholder="请输入收货人的身份证号码" :hasBorder="false" :clearBtn="true"
        :disabled="false" />
      <nut-textinput v-model="form.phone" label="手机号" placeholder="请输入收货人的手机号" :hasBorder="false" :clearBtn="true"
        :disabled="false" />
      <div class="verity" @click="showArea">
        <nut-textinput v-model="form.name" label="所在地区" placeholder="请输入您的所在地区" :hasBorder="false" :clearBtn="true"
          :disabled="false" />
        <div class="icon-arrow"></div>
      </div>
      <nut-textinput v-model="form.details" label="详细地址" placeholder="请输入详细地址" :hasBorder="false" :clearBtn="true"
        :disabled="false" />
    </div>
    <nut-button class="submit-btn">
      保存
    </nut-button>
    <nut-picker
    :is-visible="show"
    title="请选择城市"
    :default-value-data="defaultValueData"
    :list-data="custmerCityData"
    @close="switchPicker('show')"
    @confirm="setChooseValueCustmer"
    @choose="updateChooseValueCustmer"
    @close-update="closeUpdateChooseValueCustmer"
></nut-picker>
  </div>
</template>
<script>
const APIData = [
  {
    label: 1,
    array: [
      {
        label: 3,
        value: '朝阳区'
      },
      {
        label: 4,
        value: '海淀区'
      }
    ]
  },
  {
    label: 2,
    array: [
      {
        label: 5,
        value: '测试1'
      },
      {
        label: 6,
        value: '测试2'
      }
    ]
  }
]
export default {
  name: 'AuthPage',
  data () {
    return {
      form: {
        name: '',
        phone: '',
        idcard: '',
        city: '',
        details: ''
      },
      show: false,
      data: {
        北京: ['北京'],
        黑龙江: ['哈尔滨', '绥化', '漠河', '大兴安岭', '牡丹江', '佳木斯', '齐齐哈尔', '大庆', '五大连池'],
        江西: ['九江', '南昌', '赣州'],
        上海: ['上海'],
        重庆: ['重庆'],
        内蒙古: ['呼和浩特', '呼和浩特1', '呼和浩特2', '呼和浩特3', '呼和浩特4', '呼和浩特5', '呼和浩特6', '呼和浩特7']
      },
      dataSub: {
        上海: ['测试1', '测试2'],
        北京: ['西城区', '东城区', '大兴区', '朝阳区', '海淀区'],
        南昌: ['青山湖区', '西湖区', '宏都中路', '梦时代', '八一广场'],
        绥化: ['明水', '拜泉'],
        哈尔滨: ['道里区', '道外区']
      },
      defaultValueData: null
    }
  },
  methods: {
    showArea () {
      this.show = true
    },
    setChooseValueCustmer (chooseData) {
      const str = chooseData.map(item => item.value).join('-')
      this.cityCustmer = str
    },
    closeUpdateChooseValueCustmer (self, chooseData) {
      this.setChooseValueCustmer(chooseData)
    },
    updateChooseValueCustmer (self, index, resValue) {
      const { label } = resValue
      // 此处模拟查询API
      setTimeout(() => {
        const resItems = APIData.find(item => item.label === label)
        if (resItems && resItems.array.length) {
          this.$set(this.custmerCityData, index + 1, resItems.array)
        }
      }, 100)
    }
  }
}

</script>

<style lang="scss">
  .auth-page {
    background: #F5F5F5;

    .info {
      padding: 10px 0 10px 16px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
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

        .icon-arrow {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          height: 16px;
          width: 16px;
          background: url(../../assets/arrow.png) center no-repeat;
        }
      }
    }

    .submit-btn {
      margin: 30px auto 0;
      display: block;
      width: 90%;
      background: linear-gradient(90deg, rgba(255, 137, 32, 1) 0%, rgba(255, 81, 14, 1) 100%);
    }
  }

</style>
