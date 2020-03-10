<template>
  <div class="home-page">
    <img class="product-img" src="@/assets/kz.png" alt="" />
    <div class="price-block">
      <nut-price
        class="price-num"
        :price="101"
        :needSymbol="true"
        :thousands="false"
      />
      <div class="time">
        <div>距口罩预约结束</div>
        <nut-countdown
          :startTime="Date.now()"
          :endTime="1589120019000"
          showDays
          showPlainText
        >
        </nut-countdown>
      </div>
    </div>
    <div class="product-main">
      <div class="product-title">
        <div class="title">N95口罩预约购买，限量供应，每个身份证50个，顺丰快递配送</div>
        <div class="share-btn">
          <div class="icon-share"></div>
        </div>
      </div>
      <div class="product-num">
        剩余<span class="num">10000</span>个
      </div>
      <div class="product-extra">
        <div class="extra-item">
          <div>发货时间</div>
          <div>三天内</div>
        </div>
        <div class="extra-item">
          <div>运费</div>
          <div>
            ￥0.00
          </div>
        </div>
      </div>
    </div>
    <div class="white-space"></div>
    <div class="no-auth">
      <div class="text">口罩进行实名认证预约购买，请您及时进行实名认证</div>
      <nut-button class="goto-btn">
        去填写
      </nut-button>
    </div>
    <div class="info-title">产品详情</div>
    <div class="product-info">
      <img class="info-img" src="@/assets/info.png" alt="">
    </div>
    <div class="footer">
      <nut-buttongroup class="btn-group">
        <nut-button class="left-btn">
          重新开团
        </nut-button>
        <nut-button class="right-btn">
          参团购买
        </nut-button>
      </nut-buttongroup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.white-space {
  height: 10px;
  background: #F5F5F5;
}
.product-img {
  width: 100%;
  height: 300px;
  vertical-align: top;
}
.price-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  height:60px;
  background:linear-gradient(90deg,rgba(255,141,34,1) 0%,rgba(255,68,10,1) 100%);
  .price-num {
    color: #fff;
    .price-symbol {
      font-size: 17px;
    }
    .price-big,
    .price-small {
      font-size: 27px;
    }
  }
  .time {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 164px;
    height: 100%;
    line-height: 2;
    background: url(../../assets/price-bg.png) center no-repeat;
    font-size: 12px;
    color: #FF6A16;
  }
}
.product-main {
  padding: 20px 0 20px 15px;
  background: #fff;
}

.product-title {
  margin-bottom: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    line-height: 1.5;
    font-weight: bold;
    font-size: 17px;
    color: #333;
  }
  .share-btn {
    padding: 4px 0 4px 5px;
    margin-left: 23px;
    width:49px;
    height:20px;
    line-height: 20px;
    background:linear-gradient(90deg,rgba(255,190,37,1) 0%,rgba(255,140,16,1) 100%);
    border-radius:87px 0px 0px 87px;
    box-sizing: border-box;
    .icon-share {
      width: 12px;
      height: 13px;
      background: url(../../assets/share.png) center no-repeat;
    }
  }
}
.product-num {
  margin-bottom: 15px;
  font-size: 12px;
  .num {
    color: #FF6A16;
  }
}
.product-extra {
  padding-right: 15px;
  line-height: 2;
  font-size: 12px;
  color: #999999;
  .extra-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.no-auth {
  padding: 15px 26px;
  text-align: center;
  .text {
    font-size: 14px;
    color: #333;
  }
  .goto-btn {
    background:linear-gradient(270deg,rgba(255,137,32,1) 0%,rgba(255,81,14,1) 100%);
  }
}
.info-title {
  height:37px;
  line-height: 37px;
  background:#f5f5f5;
  text-align: center;
  font-size: 12px;
  color: #c5c5c5;
}
.info-img {
  width: 100%;
  vertical-align: top;
}
.footer {
  position: relative;
  height: 40px;
  .btn-group {
    width: 95%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .nut-button.left-btn {
    background:linear-gradient(90deg,rgba(255,190,37,1) 0%,rgba(255,118,16,1) 100%);
  }
  .nut-button.right-btn {
    background:rgba(255,106,22,1);
  }
}
</style>
