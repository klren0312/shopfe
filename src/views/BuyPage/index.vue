<template>
  <div class="buy-page">
    <div class="main">
      <div class="header">
        <div class="title">
          <img src="@/assets/market.png">
          <div class="text">某某平台</div>
        </div>
      </div>
      <div class="card">
        <img class="kz-img" src="@/assets/kz.png">
        <div class="product">
          <div class="info">N95口罩预约购买，限量供应，每个身份证50个，顺丰快递配送</div>
          <div class="price">
            <nut-price
              class="price-num"
              :price="101"
              :needSymbol="true"
              :thousands="false"
            />
            <div class="num">x1</div>
          </div>
        </div>
      </div>
      <div class="group-info">
        <div class="title">请确认拼团信息</div>
        <div class="avatar-group">
          <div class="avatar-item top">
            <img src="@/assets/info.png" />
          </div>
          <div class="avatar-item">
            <img src="@/assets/info.png" />
          </div>
          <div class="avatar-item">
            <img src="@/assets/info.png" />
          </div>
        </div>
      </div>
      <div class="tip">注：发起拼团团长可以额外获得<span class="light">口罩50个</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BuyPage'
}
</script>
<style lang="scss">
  .buy-page {
    padding-top: 10px;
    min-height: 100vh;
    background: #f5f5f5;
    box-sizing: border-box;
    .main {
      background: #fff;
    }
    .header .title {
      padding: 10px 15px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #333;
      border-bottom: 1px solid #EBEBEB;
      .text {
        margin-left: 15px;
      }
    }
    .card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 15px 17px;
      color: #333;
      border-bottom: 1px solid #EBEBEB;
      .kz-img {
        width: 81px;
        height: 81px;
      }
      .product {
        height: 81px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 15px;
        .info {
          line-height: 1.5;
          font-size: 13px;
        }
        .price {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .num {
          font-size: 12px;
          color: #999;
        }
      }
    }
    .price-num {
      color: #FF6A16;
      .price-symbol {
        font-size: 12px;
      }
      .price-big,
      .price-small {
        font-size: 17px;
      }
    }
    .group-info {
      padding: 19px 15px;
      .title {
        padding-bottom: 24px;
        text-align: center;
        font-size: 14px;
      }
      .avatar-group {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .avatar-item {
          position: relative;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          &.top::after {
            content: '我';
            position: absolute;
            bottom: 6px;
            left: 0;
            right: 0;
            margin: auto;
            padding: 2px 5px;
            width: 32px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            font-size: 10px;
            color: #fff;
            border-radius: 2rem;
            background: #FF6A16;
          }
        }
      }
    }
    .tip {
      padding: 0 15px 15px;
      font-size: 12px;
      color: #999;
      .light {
        color: #FF6A16;
      }
    }
  }
</style>
