<template>
  <div class="home">
    <home-title/>

    <home-form/>
  </div>
</template>

<script>
import HomeTitle from './HomeTitle.vue'
import HomeForm from './HomeForm.vue'
// @ is an alias to /src
export default {
  name: 'Home',
  components: { HomeTitle, HomeForm }
}
</script>
