<template>
  <v-app>
    <div>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <nuxt-link to="/">Nodebird</nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-text-field label="검색" hide-details class="material-icons"/>

          <v-btn text nuxt to="/profile">
            <div>프로필</div>
          </v-btn>
          <v-btn text nuxt to="/signup">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </v-app>
<!--  <div>-->
<!--    <nav>-->
<!--      <nuxt-link to="/">Home</nuxt-link>-->
<!--      <nuxt-link to="/profile">Profile</nuxt-link>-->
<!--      <nuxt-link to="/signup">Signup</nuxt-link>-->
<!--    </nav>-->
<!--    <nuxt/>-->
<!--  </div>-->
</template>
<script>
export default{
  data(){
    return{

    }
  }
}

</script>
<style>

</style>
