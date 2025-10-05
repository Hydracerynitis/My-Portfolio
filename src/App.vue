<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Breadcrumb from './components/breadcrumb.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <div id="app" class="main-container">
    <Header />
    <Breadcrumb />
    <router-view />
    <Footer />
  </div>
</template>
