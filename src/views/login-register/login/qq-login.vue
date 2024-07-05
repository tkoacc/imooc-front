<template>
  <div>
    <span id="qqLoginBtn" v-show="false"></span>
    <m-svg-icon
      class="w-4 cursor-pointer"
      name="qq"
      @click="onQQLogin"
    ></m-svg-icon>
  </div>
</template>

<script>
// QQ 登录的 URL
const QQ_LOGIN_URL =
  'https://graph.qq.com/oauth2.0/authorize?client_id=101998494&response_type=token&scope=all&redirect_uri=https%3A%2F%2Fimooc-front.lgdsunday.club%2Flogin'
</script>

<script setup>
import { onMounted } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'
import broadcast from './broadcast'

// QQ 登录挂起
onMounted(() => {
  QC.Login(
    {
      btnId: 'qqLoginBtn' //插入按钮的节点id
    },
    (data, opts) => {
      console.log('QQ登录成功')
      console.log(data)
      // 注销登录，否则在后续登录中会直接触发该回调
      QC.Login.signOut()
      // 2. 获取当前用户唯一标识，作为判断用户是否已注册的依据
      const accessToken = /access_token=((.*))&expires_in/.exec()
      window.location.hash
      // 3. 拼接请求对象
      const oauthObj = {
        nickname: data.nickname,
        figureurl_qq_2: data.figureurl_qq_2,
        accessToken
      }
      console.log(oauthObj)
      // 4. 完成跨页面传输
      broadcast.send(oauthObj)
      oauthLogin(LOGIN_TYPE_QQ, oauthObj)
      // 5. 在 PC 端下，关闭第三方窗口
      window.close()
    }
  )
})

/**
 * 登录按钮事件
 */
const onQQLogin = () => {
  openQQWindow()
}

/**
 * 处理 QQ 登录视窗
 */

const openQQWindow = async () => {
  window.open(
    QQ_LOGIN_URL,
    'oauth2Login_10609',
    'height=525,width=585, toolbar=no, menubar=no, scrollbars=no, status=no, location=yes, resizable=yes'
  )
  // 打开视窗之后开始等待
  broadcast.wait().then(async (oauthObj) => {
    // 登录成功,关闭通知
    broadcast.clear()
    // TODO：执行登录操作
    console.log('TODO：执行登录操作')
    console.log(oauthObj)
    oauthLogin(LOGIN_TYPE_QQ, oauthObj)
  })
}
</script>
