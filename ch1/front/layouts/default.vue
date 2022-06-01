<template>
  <v-app>
    <nav>
      <v-toolbar
        dark
        color="green"
      >
        <v-toolbar-title>
          <nuxt-link to="/">
            Nodebird
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items :style="{alignItems:'center'}">
          <v-text-field
            label="검색"
            hide-details
            prepend-icon="mdi-magnify"
          />
          <v-btn
            text
            nuxt
            to="/profile"
          >
            <div>프로필</div>
          </v-btn>
          <v-btn
            text
            nuxt
            to="/signup"
          >
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <!-- 
      row부터 헤더, 컨텐츠 두 영역으로 나누고 
      컨텐츠 row 안에서 column으로 나누어 준다.
    -->
    <v-row no-gutters>
      <v-col
        cols="12"
        md="4"
      >
        <LoginForm />
      </v-col>
      <v-col
        cols="12"
        md="8"
      >
        <nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import LoginForm from "@/components/LoginForm";

export default{
  components:{
    LoginForm
  },
  data(){
    return{

    }
  }
}

</script>
<style>

</style>
