<script>
import AppHeader from '../components/AppHeader.vue'
import AppContent from '../components/AppContent.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter,
  },
}
</script>

<template>
  <!-- <div className="mx-20 my-auto"> -->
  <AppHeader />
  <AppContent />
  <AppFooter />
  <!-- </div> -->
</template>
