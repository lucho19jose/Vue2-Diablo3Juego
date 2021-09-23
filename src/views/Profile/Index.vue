<template>
  <div>
    <h1>Profile view</h1>
    <base-loading v-if="isloading"/>
    <template v-if="profileData !== null">
      <main-block :profile-data="profileData"/>
    </template>
  </div>
</template>
<script>
// Traemos el mixin
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
import BaseLoading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index.vue'

export default {
  name: 'ProfileView',
  mixins: [
    setError
  ],
  components: { BaseLoading, MainBlock },
  data () {
    return {
      profileData: null,
      isloading: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.isloading = true
      // Desestructuración
      const { region, battleTag: account } = this.$route.params
      // Llamada a la API con los datos necesarios
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data
          console.log(this.profileData)
        })
        .catch((err) => {
          this.profileData = null
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          this.setApiErr(errObj)
          this.$router.push({ name: 'Error' })
        }).finally(() => {
          this.isloading = false
        })
    }
  }
}
</script>
