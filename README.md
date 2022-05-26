## Eslint
- 使用 vue/cli 配置的 eslint `vue add @vue/cli-plugin-eslint`
- 添加 ts 模块
```json
{
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.4.0",
    "@typescript-eslint/parser": "^5.4.0",
    "@vue/eslint-config-typescript": "^9.1.0",
  }
}
```
- `eslintrc.js`
```ts
module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
```

## Sass
- 使用全局变量
```js
{
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/variables.scss";'
      }
    }
  }
}
```

## vite 静态资源引入
`<img :src="require('../assets/images/bg/ddd.png')" />`
- `require` 是 webpack 的引入方式，报错 `require is not defind` 
- [Vite 官方文档 | 静态资源处理](https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url)

1. 单个链接的资源文件
```js
import homeIcon from '@/assets/images/home/home_icon.png'
<img :src="homeIcon" />
```
2. 多个链接的资源文件
```js
const getImgUrl = computed((id) => {
  return new URL(`../../assets/images/bg/${id}.png`, import.meta.url).href
})
```
3. 背景图，必须使用相对路径，否则打包后不正确
```css
.imgText {
  background-image: url('../../assets/images/bg.jpg');
}
```

## pinia 代替 vuex
```ts
import { defineStore } from 'pinia'
import { Names } from './store-name'

type User = {
  name: string,
  age: number,
}

const login = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '000',
        age: 0
      })
    }, 1000)
  })
}

export const useAuthStore = defineStore(Names.AUTH, {
  state: () => ({
    a: <number | string> 1,
    user: <User> {}
  }),
  // 有缓存 computed
  getters: {
    // ts 无法自动推导
    // 需要手动定义返回值类型
    newName (): string {
      return `prefix-${this.user.name}`
    }
  },
  // 同步/异步
  actions: {
    setStateA (num: number | string) {
      this.a = num || '999'
    },
    setUser () {
      this.user = {
        name: 'tan',
        age: 10000
      }
    },
    async setAsyncUser () {
      const res = await login()
      this.user = res
      this.setStateA('hhhh')
    }
  }
})

/**
 * getter 和 action 当中的方法可以互相调用
 */
```