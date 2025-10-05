<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const counter = ref(15);

onMounted(() => {
  const timer = setInterval(() => {
    counter.value--;
    if (counter.value <= 0) {
      clearInterval(timer);
      router.push('/');
    }
  }, 1000);
});
</script>

<template>
   <div class="inner-banner py-5" style="margin-top: 80px;">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h1 class="mb-4">404</h1>
          <h3 class="mb-4">Page Not Found</h3>
          <p class="mb-5">The page you are looking for is not available. It may be because you have inputted an incorrect address.</p>
          <p class="mb-5">You will be redirected to the home page in {{ counter }} seconds. Or click the button below to go back now.</p>
          <router-link to="/" class="btn btn-style-primary">
            <i class="fa fa-home me-2"></i>Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>