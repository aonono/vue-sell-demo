<template>
  <div>
    <v-header :seller="seller"></v-header>
    <ul>
      <li><router-link to="/goods">商品</router-link></li>
      <li><router-link to="/ratings">评价</router-link></li>
      <li><router-link to="/seller">商家</router-link></li>
    </ul>
    <router-view v-bind:seller="seller"></router-view>
    <i class="icon-keyboard_arrow_right"></i>
  </div>
</template>

<script>
import header from './components/header/header'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created(){
    this.$http.get('static/data.json').then((res) => {
      this.seller = res.body.seller
    })
  }
}

</script>

<style>

</style>
