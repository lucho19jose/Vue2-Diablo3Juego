<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <b-nav pills small>
      <b-nav-item :active="!isPassiveSkillsActive" @click="changeComponent('ActiveSkills')">Active</b-nav-item>
      <b-nav-item :active="isPassiveSkillsActive" @click="changeComponent('PassiveSkills')">Passive</b-nav-item>

    </b-nav>
    <keep-alive>
      <component :is="currentComp" :skills="componentProps"/>
    </keep-alive>
    <!-- <active-skills :skills="skills.active"/>
    <hr>
    <passive-skills :skills="skills.passive"/> -->

  </div>
</template>

<script>
/* import ActiveSkills from './ActiveSkills'
import PassiveSkills from './PassiveSkills' */

export default {
  name: 'HeroSkills',
  components: {
    ActiveSkills: () => import(/* webpackChunkName:"ActiveSkills" */'./ActiveSkills'),
    PassiveSkills: () => import(/* webpackChunkName:"PasiveSkills" */'./PassiveSkills')
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      currentComp: 'ActiveSkills'
    }
  },
  methods: {
    changeComponent (component) {
      this.currentComp = component
    }
  },
  computed: {
    componentProps () {
      return this.currentComp === 'ActiveSkills' ? this.skills.active : this.skills.passive
    },
    isPassiveSkillsActive () {
      return this.currentComp === 'PassiveSkills'
    }
  }
}
</script>
