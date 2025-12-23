<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { I18nT } from 'vue-i18n';

const router = useRouter();
const counter = ref(15);

onMounted(() => {
  const timer = setInterval(() => {
    counter.value--;
    if (counter.value <= 0) {
      clearInterval(timer);
      router.replace('/');
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
          <h3 class="mb-4">{{ $t('notFound.Title') }}</h3>
          <p class="mb-5">{{ $t('notFound.Desc') }}</p>
          <p class="mb-5">
            <I18nT keypath="notFound.Redirect" tag="p">
              {{ counter }}
            </I18nT>
          </p>
          <router-link to="/" class="btn btn-style" replace>
            <i class="fa fa-home me-2"></i> {{ $t('notFound.Button') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>