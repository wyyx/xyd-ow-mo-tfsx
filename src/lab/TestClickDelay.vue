<template>
  <q-page class="flex flex-center">
    <h3>aaa</h3>

    <q-btn
      color="primary"
      icon="check"
      label="OK"
      @click="onClick"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    />
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
      this.clickedTime = Date.now()
      console.log(
        'TCL: onClick -> this.clickedTime',
        this.clickedTime - this.startTime
      )
    },

    onTouchStart() {
      this.startTime = Date.now()
      console.log('TCL: onTouchStart -> this.startTime', 0)
    },

    onTouchEnd() {
      this.endTime = Date.now()
      console.log(
        'TCL: onTouchEnd -> this.endTime',
        this.endTime - this.startTime
      )
    },

    goToSchoolIntroPage() {
      this.$router.push({
        name: 'school-intro'
      })
    }
  }
})
</script>
