<template>
  <div>
    <v-container>
      <v-card style="margin-bottom:20px">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
        </v-container>
        <v-form>
          <v-container>
          <v-text-field
            label="닉네임"
            required
          >
          </v-text-field>
          <v-btn color="blue" type="submit">수정</v-btn>
          </v-container>
        </v-form>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로잉</v-subheader>
          <follow-list/>
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <follow-list/>
        </v-container>
      </v-card>

    </v-container>
  </div>
</template>
<script>
import FollowList from "@/components/FollowList"
export default{

  components:{
    FollowList
  },
  data(){
    return{
    }
  }
}

</script>
<style>

</style>
