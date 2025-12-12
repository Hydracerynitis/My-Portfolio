<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Breadcrumb from './components/breadcrumb.vue'
</script>

<template>
  <div id="app" class="main-container">
    <Header />
    <Breadcrumb />
    <router-view />
    <Footer />
  </div>
</template>
