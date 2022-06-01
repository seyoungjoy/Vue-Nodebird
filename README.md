# Vue-nodebird 강의 메모
## 1 Nuxt 적용
### [issue] vue package version mismatch
```
- vue@2.6.10
- vue-server-renderer@2.6.14
```
- solution
1. yarn upgrade / npm update + yarn or npm i
2. remove lock files
```
rm -rf node_modules/ package-lock.json
npm i
```

### `pages폴더`에 파일을 만들면 코드스플리팅를 통해 페이지 개별 구현
- 이때 프리렌더링과 하이드레이션을 통해 화면 깜빡임없이 CSR과 같은 부드러운 화면 전환을 보여줌.

### vue/nuxt.js 라우터 사용법 차이
- `<router-link to="/"></router-link>` -> `<nuxt-link to="/"></nuxt-link>` 
- `<router-view/>` -> `<nuxt />` 

### layouts : admin페이지에서만 특정 메뉴가 필요할 때
- `layouts폴더` 에 admin.vue 로 관리자 메뉴를 만든 후
- 관리자 페이지에 layout:"admin" 으로 등록하면 default.vue 대신 admin.vue가 기본 레이아웃으로 변경됨.

### head
- html head 태그 내부의 속성들을 지정할 수 있음.

### nuxt.config.js
- 공통 head 속성 추가 가능.
```jsx
module.exports = {
    head(){
        return{
            title:'Nodebird'
        }
    }
}
```

## Vuetify
### [issue] material icon not showing
1. mdi 설치
```
$ npm install @mdi/font -D
```

2. nuxt.config.js에 css 파일 추가
```
css: [
        '@mdi/font/css/materialdesignicons.css',
    ],
```

### 12 grid system
- 화면 영역을 12등분해서 원하는 column의 비율을 설정할 수 있다.
- 반응형도 지원.
```jsx
<nav></nav>
<v-row>
    <v-col cols="12" md="4">12컬럼으로 나누고 md size에서는 4/12, 즉 1/3 비율을 컬럼 영역으로 설정.</v-col>
    <v-col cols="12" md="8">12컬럼으로 나누고 md size에서는 8/12, 즉 3/2 비율을 컬럼 영역으로 설정</v-col>
</v-row>
```

### `<v-container></v-container>`
- 여백 생성

### form validation
#### rules
- 뷰티파이에서는 form validation을 쉽게 구현할 수 있다. rules prop을 통해 input에 폼 검증 조건을 지정할 수 있다.
- valid 값은 rules의 조건이 모두 충족할 때 자동으로 true값으로 변경된다.
- valid는 버튼 비활성화 할 때 사용하기 좋음. : `<v-btn :disabled=!valid >제출하기</v-btn>`

```jsx
//template
<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-btn :disabled=!valid >제출하기</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
```
```jsx
//script
<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>
```
#### Validation with submit & clear
- 컴포넌트에 ref 지정 후 form에 접근하여 3가지 함수를 제공한다.
- form에 ref 지정 : `<v-form ref="form">`
- `this.$refs.form.validate()` : 모두 input들이 유효한지 아닌지 검증한다. true/false로 반환
- `this.$refs.form.reset()` : 모든 input과 validation error를 초기화
- `this.$refs.form.resetValidation()` : input 값만 초기화



## doc
- vue/nuxt csr/ssr
- 프리렌더링, 하이드레이션
- https://kr.vuejs.org/v2/guide/class-and-style.html 
## Reference
https://www.bottlehs.com/vue/vue-js-%EC%84%9C%EB%B2%84-%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81/
