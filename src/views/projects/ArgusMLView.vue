<script setup>
import paragraph from '/src/components/paragraph.vue';
import { I18nT } from 'vue-i18n';
</script>

<template>
    <paragraph imageName="ArgusML" title="argus.overview_Title" subtitle="argus.overview_subTitle"
        imageSize="6">
        <p class="mt-3">{{ $t('argus.overview_p1') }}</p>
        <I18nT keypath="argus.overview_p2" tag="p" class="mt-3">
            <template #MERN><b>MERN</b></template>
            <template #MongoDB><b>MongoDB</b></template>
            <template #Express><b>Express.js</b></template>
            <template #React><b>React.js</b></template>
            <template #Node><b>Nodes.js</b></template>
            <template #Vite><b>Vite.js</b></template>
            <template #Tree><b>Tree.js</b></template>
            <template #D3><b>D3.js</b></template>
            <template #Chakra><b>ChakraUI</b></template>
            <template #Postman><b>Postman</b></template>
            <template #Python><b>Python</b></template>
            <template #Scikit><b>Scikit-Learn</b></template>
        </I18nT>
        <I18nT keypath="argus.overview_p3" tag="p" class="mt-3">
            <template #Vercel><b>Vercel</b></template>
            <template #Render><b>Render</b></template>
        </I18nT>
    </paragraph>
    <paragraph imageName="ArgusTeam" title="argus.team_Title" subtitle="argus.team_subTitle"
            :imageRight="true" :imageSize=6>
        <I18nT keypath="argus.team_p1" tag="p" class="mt-3">
            <template #team>
                <a href="https://github.com/Granicus0">Vinayak Joshi</a>, 
                <a href="https://github.com/ABCCASa">Peter He</a>,
                <a href="https://github.com/SLIU383">Steven Liu</a>, 
                <a href="https://github.com/Alina618">Alina Xu</a>, 
                <a href="https://github.com/leihanZzZ">Leihan Zhang</a> 
            </template>
            <template #frontend><b>{{ $t('argus.team_front') }}</b></template>
            <template #backend><b>{{ $t('argus.team_back') }}</b></template>
            <template #ML><b>{{ $t('argus.team_ML') }}</b></template>
        </I18nT>
        <I18nT keypath="argus.team_p2" tag="p" class="mt-3">
            <template #frontend><b>{{ $t('argus.team_front') }}</b></template>
            <template #backend><b>{{ $t('argus.team_back') }}</b></template>
            <template #ML><b>{{ $t('argus.team_ML') }}</b></template>
        </I18nT>
    </paragraph>
    <paragraph imageName="ArgusModel" title="argus.logic_Title" subtitle="argus.logic_subTitle" :imageSize=6>
        <p class="mt-3">{{ $t('argus.logic_p1') }}</p>
        <p class="mt-3">{{ $t('argus.logic_p2') }}</p>
        <p class="mt-3">{{ $t('argus.logic_p3') }}</p>
    </paragraph>
    <paragraph imageName="ArgusTrain" title="argus.challenge_Title" subtitle="argus.challenge_subTitle"
            :imageRight="true" :imageSize=6>
        <p class="mt-3">{{ $t('argus.challenge_p1') }}</p>
        <p class="mt-3">{{ $t('argus.challenge_p2') }}</p>
        <p class="mt-3">{{ $t('argus.challenge_repo') }}</p>
        <a href="https://github.com/Granicus0/project-group-xanthic-xiphosuras-FINAL-DEPLOYMENT" class="btn btn-style mt-3">
            {{ ($t('argus.challenge_link')) }}
        </a>
    </paragraph>
</template>