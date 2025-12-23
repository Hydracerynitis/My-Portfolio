<script setup>
import paragraph from '/src/components/paragraph.vue';
import { I18nT } from 'vue-i18n';

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<template>
    <paragraph imageName="honor_result" title="project.honor_Title" subtitle="project.honor_subTitle" :imageSize="6">
        <p class="mt-3">{{ $t('project.honor_p1') }}</p>
        <p class="mt-3">{{ $t('project.honor_p2') }}</p>
        <I18nT keypath="project.honor_super" tag="p" class="mt-3 highlight">
            <template #Kat>
                 <i><a href="https://www.linkedin.com/in/katdost/">Katharina Dost</a></i>
            </template>
            <template #Kim>
                 <i>Jonanthan Kim</i>
            </template>
        </I18nT>
        <router-link to="/project/honor" class="btn btn-style mt-3" @click="topFunction()">{{ $t('project.learn_More') }}</router-link>
    </paragraph>
    <paragraph imageName="ArgusML" title="project.argus_Title" subtitle="project.argus_subTitle"
            :imageRight="true" :imageSize=6>
        <p class="mt-3">{{ $t('project.argus_p1') }}</p>
        <I18nT keypath="project.argus_p2" tag="p" class="mt-3">
            <template #Team>
                <a href="https://github.com/Granicus0" target="_blank" >Vinayak Joshi</a>, 
                <a href="https://github.com/ABCCASa" target="_blank" >Peter He</a>,
                <a href="https://github.com/SLIU383" target="_blank" >Steven Liu</a>,
                <a href="https://github.com/Alina618" target="_blank" >Alina Xu</a>,
                <a href="https://github.com/leihanZzZ" target="_blank" >Leihan Zhang</a>
            </template>
        </I18nT>
        <p class="mt-3" v-html="$t('project.argus_p2')"></p>
        <p class="mt-3 highlight">{{ $t('project.argus_tech') }}</p>
        <router-link class="btn btn-style mt-3" to="project/argusML" @click="topFunction()">{{ $t('project.learn_More') }}</router-link>
    </paragraph>
    <paragraph imageName="CovidUpload" title="project.covid_Title" subtitle="project.covid_subTitle" :imageSize="6">
        <p class="mt-3">{{ $t('project.covid_p1') }}</p>
        <p class="mt-3">{{ $t('project.covid_p2') }}</p>
        <p class="mt-3">{{ $t('project.covid_p3') }}</p>
        <p class="mt-3 highlight">{{ $t('project.covid_tech') }}</p>
        <router-link class="btn btn-style mt-3" to="project/covid" @click="topFunction()">{{ $t('project.learn_More') }}</router-link>
    </paragraph>
</template>