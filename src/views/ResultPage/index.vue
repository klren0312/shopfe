<template>
  <div class="result-page">
    <div class="header">
      <div class="warning-text">
        <span class="icon">!</span><span> 很遗憾，拼团结束！</span>
      </div>
      <div class="info">不要灰心，快去开团增加更多机会吧！</div>
    </div>
    <div class="content">
      <div class="info">拼团结束，以下是拼团信息</div>
      <div class="avatar-block">
        <div class="avatar top">
          <img src="@/assets/logo.png">
        </div>
        <div class="avatar">
          <img src="@/assets/kz.png">
        </div>
        <div class="avatar">
          <img src="@/assets/info.png">
        </div>
        <div class="avatar">
          <img src="@/assets/logo.png">
        </div>
      </div>
      <div class="time">
        <span class="left">本次拼团已结束</span>   <my-time textBg="#999999"></my-time>
      </div>
      <div class="user-list">
        <div class="list-item">
          <div class="people top"><img class="avatar" src="@/assets/kz.png" alt=""><span> 团长</span></div>
          <div class="buy-num">
            <span class="top">赠品口罩50个</span>
            <span> 购买商品数量1x</span>
          </div>
        </div>
        <div class="list-item">
          <div class="people"><img class="avatar" src="@/assets/kz.png" alt=""><span> 团员</span></div>
          <div class="buy-num">
            <span> 购买商品数量1x</span>
          </div>
        </div>
        <div class="list-item">
          <div class="people"><img class="avatar" src="@/assets/kz.png" alt=""><span> 团员</span></div>
          <div class="buy-num">
            <span> 购买商品数量1x</span>
          </div>
        </div>
        <div class="list-item">
          <div class="people"><img class="avatar" src="@/assets/kz.png" alt=""><span> 团员</span></div>
          <div class="buy-num">
            <span> 购买商品数量1x</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <nut-buttongroup class="btn-group">
        <nut-button class="left-btn">
          我要开团
        </nut-button>
        <nut-button class="right-btn" disabled>
          参团购买
        </nut-button>
      </nut-buttongroup>
    </div>
  </div>
</template>
<script>
import MyTime from '@/components/MyTime/index.vue'
export default {
  name: 'ResultPage',
  components: {
    MyTime
  }
}
</script>
<style lang="scss">
.result-page {
  min-height: 100vh;
  background: #F5F5F5;
  .header {
    padding: 30px 0;
    text-align: center;
    .warning-text {
      font-size: 17px;
      color: #FFBE25;
      .icon {
        display: inline-block;
        margin-right: 3px;
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        background: #FFBE25;
      }
      span {
        vertical-align: middle;
      }
    }
    .info {
      margin-top: 15px;
      font-size: 14px;
      color: #999;
    }
  }
  .content {
    padding: 15px 0 0;
    background: #fff;
    box-sizing: border-box;
    .info {
      padding-bottom: 15px;
      text-align: center;
      font-size: 14px;
      color: #333;
    }
    .avatar-block {
      padding: 0 52px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .avatar {
      position: relative;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      background: #999;
      img {
        height: 45px;
        width: 45px;
        border-radius: 50%;
      }
      &.top::after {
        content: '团长';
        position: absolute;
        bottom: 0;
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
    .time {
      margin: 25px 0 18px;
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: 12px;
      color: #999999;
      .left {
        margin-right: 10px;
      }
    }

    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      border-top: 1px solid #EBEBEB;
      .people {
        font-size: 14px;
        color: #333;
        &.top {
          color: #FF6A16;
        }
        .avatar {
          margin-right: 5px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        * {
          vertical-align: middle;
        }
      }
      .buy-num {
        font-size: 12px;
        color: #999;
        .top {
          color: #FF6A16;
        }
      }
    }
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
    .nut-button[disabled] {
      background: rgba(255, 106, 22, .5);
    }
  }
}
</style>
