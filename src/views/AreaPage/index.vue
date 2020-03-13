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
      custmerCityData: [
        [{
          label: 1,
          value: '北京'
        },
        {
          label: 2,
          value: '上海'
        }]
      ],
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
    },
    switchPicker (param) {
      this[`${param}`] = !this[`${param}`]
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
