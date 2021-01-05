const HelloVueApp = {
  data() {
    return {
      message: 'Hello Vue!!' + this.$route.query.test
    }
  }
}

Vue.createApp(HelloVueApp).mount('#hello-vue')
