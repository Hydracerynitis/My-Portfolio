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

<style scoped>
:root {
  --primary-color: #F54748;
  --secondary-color: #131917;
  --font-color: #363636;
  --bg-color: #fff;
  --heading-color: #060606;
  --border-radius: 8px;
  --border-radius-full: 30px;
  --border-color-light: #eee;
  --iframe-filter: grayscale(0%);
  --bg-grey: #f4f4f4;
  --bg-light: #ebf4f5;
  --serach-shadow: rgb(0 0 0 / 5%);
  --wh-dar-color: #fff;
  --disable-color: #d8d6d6;
  --box-shadow: 0 0.5rem 1rem rgb(12 12 12 / 5%);
  --banner-layer-color: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(8, 8, 8, 0) 75%);
  --inner-layer-color: rgb(235 244 245 / 91%);
}

[data-theme="dark"] {
  --primary-color: #F54748;
  --secondary-color: #fff;
  --font-color: #b7b7b7;
  --bg-color: #19211e;
  --heading-color: #fdfffc;
  --border-color-light: rgba(255, 255, 255, 0.2);
  --iframe-filter: grayscale(100%);
  --bg-grey: #0b0d0e;
  --bg-light: #131917;
  --serach-shadow: rgb(6 8 8);
  --wh-dar-color: #060606;
  --disable-color: #5d5d5d;
  --box-shadow: 0 0.5rem 1rem rgb(28 28 47);
  --banner-layer-color: linear-gradient(to right, rgb(31 31 31 / 95%) 0%, rgb(8 8 8 / 30%) 100%);
  --inner-layer-color: rgb(19 25 23 / 84%);
}
</style>
