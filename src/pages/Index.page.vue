<template>
  <q-page class="flex flex-center">
    <h3>aaa</h3>

    <q-btn color="primary" icon="check" label="OK" @click="onClick" />
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageIndex',

  data: function() {
    return {
      startTime: 0,
      endTime: 0,
      clickedTime: 0
    }
  },

  methods: {
    onClick() {
      this.goToSchoolIntroPage()
    },

    goToSchoolIntroPage() {
      this.$router.push({
        name: 'school-intro'
      })
    }
  }
})
</script>
