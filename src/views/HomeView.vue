<script setup>
import headlineBanner from '/src/components/headlineBanner.vue';
import qualification from '/src/components/qualification.vue';
import skill from '/src/components/skill.vue';
import projectGallery from '/src/components/projectGallery.vue';
import paragraph from '@/components/paragraph.vue';
</script>
<template>
    <headlineBanner/>
    <paragraph imageName="about" title="home.about_T" subtitle="home.about_sT">
        <p class="mt-3">{{$t('home.about_p')}}</p>
        <router-link to="/Kejun_Dai_CV.pdf" target="_blank" class="btn btn-style m-5">{{$t('home.about_viewCV')}}</router-link>
        <router-link to="/contact" class="btn btn-style m-5">{{$t('home.about_contactMe')}}</router-link>
    </paragraph>
    <qualification class="grey-color"/>
    <skill />
    <projectGallery class="grey-color"/>
</template>