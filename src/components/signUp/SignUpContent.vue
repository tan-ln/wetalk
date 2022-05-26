<template>
  <div id="sign__up__content" :class="changeTitle ? 'animate__animated animate__flipInY' : ''">
    <transition-group
      :duration="400"
      v-on:before-enter="beforeAniEnter"
      v-on:after-leave="afterAniLeave"
    >
      <div class="content__header" key="signup_title">{{title}}</div>
      <!-- form -->
      <div class="content__center" key="signup_center">
        <!-- username -->
        <div class="content__center__username" :class="(illegal && email.length === 0) ? 'illegal' : ''">
          <div class="input__tips">
            <svg t="1653470427457" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4455" width="18" height="18"><path d="M161.52380967 138.971429h724.114286s29.257143 0 51.2 29.257142 7.314286 43.885714 7.314285 43.885715l-438.857143 292.571428-424.228571-270.628571s-14.628571-14.628571-7.314286-43.885714c7.314286-14.628571 21.942857-29.257143 36.571429-43.885715l21.942857-14.628571 29.257143 7.314286z" fill="#3a4481" p-id="4456"></path><path d="M505.29523767 533.942857c-7.314286 0-7.314286 0-14.628571-7.314286L66.43809567 256c-7.314286-7.314286-29.257143-29.257143-21.942858-73.142857 14.628571-21.942857 29.257143-36.571429 43.885715-58.514286l29.257143-21.942857h21.942857l29.257143 7.314286h724.114285c7.314286 0 43.885714 0 73.142857 36.571428s14.628571 65.828571 7.314286 80.457143l-446.171428 292.571429c-14.628571 14.628571-14.628571 14.628571-21.942858 14.628571zM103.00952367 212.114286l402.285714 256 416.914286-277.942857s0-7.314286-7.314286-7.314286c-14.628571-14.628571-29.257143-14.628571-29.257142-14.628572H161.52380967h-7.314286l-14.628571-7.314285-14.628572 7.314285c-7.314286 7.314286-21.942857 21.942857-29.257143 36.571429 0 0 0 7.314286 7.314286 7.314286z" p-id="4457"></path><path d="M878.32380967 914.285714H154.20952367c-58.514286 0-109.714286-51.2-109.714286-109.714285V219.428571c0-58.514286 51.2-109.714286 109.714286-109.714285h724.114286c58.514286 0 109.714286 51.2 109.714286 109.714285v585.142858c0 58.514286-51.2 109.714286-109.714286 109.714285zM154.20952367 168.228571c-29.257143 0-51.2 21.942857-51.2 51.2v585.142858c0 29.257143 21.942857 51.2 51.2 51.2h724.114286c29.257143 0 51.2-21.942857 51.2-51.2V219.428571c0-29.257143-21.942857-51.2-51.2-51.2H154.20952367z" p-id="4458"></path><path d="M951.46666667 863.085714c-7.314286 0-14.628571 0-21.942857-7.314285L607.69523767 453.485714c-7.314286-7.314286-7.314286-29.257143 7.314286-36.571428 14.628571-7.314286 29.257143-7.314286 36.571429 7.314285l321.828571 394.971429c7.314286 14.628571 7.314286 29.257143-7.314286 36.571429 0 0-7.314286 7.314286-14.628571 7.314285z" p-id="4459"></path><path d="M95.69523767 863.085714c-7.314286 0-14.628571 0-14.628571-7.314285-14.628571-7.314286-14.628571-29.257143-7.314286-36.571429l299.885715-394.971429c7.314286-14.628571 29.257143-14.628571 36.571428-7.314285 14.628571 7.314286 14.628571 29.257143 7.314286 36.571428l-299.885714 394.971429c-7.314286 7.314286-14.628571 14.628571-21.942858 14.628571z" p-id="4460"></path></svg>
          </div>
          <input type="email" :placeholder="(illegal && email.length === 0) ? 'Email can not be empty' : 'Email'" v-model="email" />
        </div>
        <!-- password -->
        <div class="content__center__password" :class="(illegal && password.length === 0) ? 'illegal' : ''">
          <div class="input__tips">
            <svg t="1653470257978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4301" width="18" height="18"><path d="M559.21777777 126.86222223c-76.8 76.8-90.45333333 192-40.96 282.45333333L272.49777777 655.07555556 152.17777777 534.75555557l-48.64 48.63999999 86.18666667 154.45333334L79.64444444 847.9288889 176.0711111 944.35555556l438.61333334-438.61333333c90.45333333 48.64 205.65333333 34.98666667 282.45333333-40.96 93.01333333-93.01333333 93.01333333-244.90666667 0-337.92-93.01333333-93.86666666-244.05333333-93.86666667-337.92 0zM800.7111111 223.2888889c40.10666667 40.10666667 40.10666667 104.96 0 145.06666666s-104.96 40.10666667-145.06666666 0-40.10666667-104.96 0-145.06666666 104.96-40.10666667 145.06666666 0z" p-id="4302"></path></svg>
          </div>
          <input type="password" :placeholder="(illegal && password.length === 0) ? 'Password can not be empty' : 'Password'" v-model="password" @keypress.enter="handleSubmit" />
        </div>
        <!-- submit button -->
        <div class="content__center__submit" @click="handleSubmit">
          <input v-if="!loading" type="submit" :value="route.name === 'signin' ? 'Sign In' : 'Sign Up'" />
          <svg v-else t="1641981383737" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2365" width=".2rem" height=".2rem"><path d="M254.29333333 194.56C324.26666667 136.53333333 413.86666667 102.4 512 102.4c226.13333333 0 409.6 183.46666667 409.6 409.6h68.26666667c0-263.68-214.18666667-477.86666667-477.86666667-477.86666667-114.34666667 0-219.30666667 40.10666667-301.22666667 106.66666667l43.52 53.76z" fill="#ffffff" p-id="2366"></path></svg>
        </div>
      </div>
      <!-- buttom -->
      <div class="content__bottom" v-show="route.name === 'signin'" key="signin">
        <span>Even have no account ? </span>
        <router-link replace to="/signup">Sign Up here</router-link>
      </div>
      <div class="content__bottom" v-show="route.name === 'signup'" key="signup">
        <span>Already have account ? </span>
        <router-link replace to="/signin">Sign In here</router-link>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { useOtherStore } from '@/store/index'
import 'animate.css'

const changeTitle = ref<boolean>(false)
const illegal = ref<boolean>(false)
const loading = ref<boolean>(false)
const email = ref<string>('123@qq.com')
const password = ref<string>('123')
const route = useRoute()
const router = useRouter()
const Auth = useAuthStore()
const Other = useOtherStore()

const beforeAniEnter = () => {
  changeTitle.value = true
  email.value = password.value = ''
  illegal.value = false
}
const afterAniLeave = () => {
  changeTitle.value = false
  email.value = password.value = ''
}
const handleSubmit = async () => {
  if (email.value === '' || password.value === '') { illegal.value = true; return }
  loading.value = true
  const data = {
    path: route.name as string,
    email: email.value,
    password: password.value
  }
  await Auth.reqSignIn(data)
  // modal
  if (Other.modal.show) loading.value = false
  // 登录或注册后 路由跳转及动画状态修改
  if (Auth.__self.email && Auth.__self.username) {
    loading.value = false
    router.replace({ path: '/' })
  }
  //   this.$store.commit('changeFlipAni', true)
}

const title = computed<string>(() => {
  return route.name === 'signup' ? 'Create account' : 'Welcome'
})

</script>

<style lang="scss" scoped>
#sign__up__content {
  width: 3.2rem;
  height: 5.28rem;
  padding: .32rem .2rem;
  letter-spacing: .01rem;
  position: relative;
  .content__header {
    font-size: 0.2rem;
    font-weight: bold;
    text-align: center;
    margin: 0.4rem 0;
  }
  .content__center {
    .illegal input::placeholder {
      color: $url_font_color;
    }
    .illegal input {
      border-color: $url_font_color;
    }
    &__username, &__password {
      padding-top: 0.3rem;
      line-height: 0.32rem;
      display: flex;
      flex-direction: row;
      .input__tips {
        display: inline-block;
        width: 0.4rem;
        text-align: center;
        background-color: $signUp_key_color;
        border-radius: .04rem;
        svg {
          vertical-align: middle;
        }
      }
      input {
        flex: 1;
        line-height: 0.32rem;
        font-size: 0.16rem;
        border-bottom: .01rem solid $border_middle_color;
        padding: 0 .1rem 0 .2rem;
        letter-spacing: .01rem;

        &::placeholder {
          color: $light_font_color;
          font-size: 0.14rem;
          font-weight: 100;
          letter-spacing: .006rem;
        }
      }
    }
    &__submit {
      width: 100%;
      height: 0.32rem;
      line-height: 0.32rem;
      background-color: $nav_bg_color;
      border-radius: .2rem;
      text-align: center;
      margin: 0.4rem 0 0.2rem;
      position: relative;
      cursor: pointer;
      input {
        color: oldlace;
        font-size: 0.16re;
        letter-spacing: .02rem;
        cursor: pointer;
      }
      svg {
        animation: loadingRotate 2s infinite linear;
        position: absolute;
        left: 50%;
        margin-left: -.1rem;
        top: 0.06rem;
      }
    }
  }
  .content__bottom {
    font-size: 0.12rem;
    color: $light_font_color;
    position: absolute;
    width: 2.8rem;
    display: flex;
    justify-content: center;

    a {
      color: $url_font_color;
      margin-left: .06rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
}

.v-enter, .v-leave-to {
  opacity: 0;
}
.v-enter-active, .v-leave-active {
  transition: opacity 2s;
}

@keyframes loadingRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
