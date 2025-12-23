<script setup>
import paragraph from '/src/components/paragraph.vue';
</script>

<template>
    <paragraph imageName="CovidHome" title="covid.overview_Title" subtitle="covid.overview_subTitle"
    :imageSize=6>
        <p class="mt-3">{{ $t('covid.overview_p1') }}</p>
        <I18nT keypath="covid.overview_p2" tag="p" class="mt-3">
            <template #MVC><b>{{ $t('covid.overview_MVC') }}</b></template>
            <template #M><b>{{ $t('covid.overview_M') }}</b></template>
            <template #V><b>{{ $t('covid.overview_V') }}</b></template>
            <template #C><b>{{ $t('covid.overview_C') }}</b></template>
            <template #React><b>React</b></template>
            <template #Typescript><b>Typescript</b></template>
            <template #MUI><b>Material UI</b></template>
            <template #Storybook><b>StoryBook</b></template>
            <template #GraphQL><b>GraphQL</b></template>
            <template #HotChocolate><b>HotChocolate</b></template>
            <template #Apollo><b>Apollo Client</b></template>
            <template #Jest><b>Jest</b></template>
        </I18nT>
    </paragraph>
    <paragraph imageName="CovidDiary" title="covid.logic_Title" subtitle="covid.logic_subTitle"
            :imageRight="true" :imageSize=6>
        <p class="mt-3">{{ $t('covid.logic_p1') }}</p>
        <I18nT keypath="covid.logic_p2" tag="p" class="mt-3">
            <template #normal><span class="txt_normal">{{ $t('covid.logic_normal') }}</span></template>
            <template #active><span class="txt_active">{{ $t('covid.logic_active') }}</span></template>
            <template #close><span class="txt_close">{{ $t('covid.logic_close') }}</span></template>
        </I18nT>
    </paragraph>
    <paragraph imageName="CovidModel" title="covid.data_Title" subtitle="covid.data_subTitle"
        :imageSize=6>
        <I18nT keypath="covid.data_p1" tag="p" class="mt-3">
            <template #AppUser><b>AppUser</b></template>
            <template #Entry><b>Entry</b></template>
            <template #Destination><b>Destination</b></template>
        </I18nT>
        <I18nT keypath="covid.data_p2" tag="p" class="mt-3">
            <template #AppUser><b>AppUser</b></template>
        </I18nT>
        <I18nT keypath="covid.data_p3" tag="p" class="mt-3">
            <template #Entry><b>Entry</b></template>
        </I18nT>
        <I18nT keypath="covid.data_p4" tag="p" class="mt-3">
            <template #Destination><b>Destination</b></template>
            <template #Entry><b>Entry</b></template>
        </I18nT>
        <I18nT keypath="covid.data_p5" tag="p" class="mt-3">
            <template #AppUser><b>AppUser</b></template>
            <template #Entry><b>Entry</b></template>
            <template #Destination><b>Destination</b></template>
            <template #close><span class="txt_close">{{ $t('covid.data_close') }}</span></template>
            <template #active><span class="txt_active">{{ $t('covid.data_active') }}</span></template>
        </I18nT>
        <p class="mt-3">{{ $t('covid.more_detail') }}</p>
        <a href="https://github.com/Hydracerynitis/MSA-Assessment" 
           target="_blank" class="btn btn-style mt-3">{{ $t('covid.github') }}</a>
    </paragraph>
</template>

<style>
.txt_normal{
    color:#4caf50 ; 
    font-weight: 600;
}
.txt_active{
    color:#e65100 ; 
    font-weight: 600;
}
.txt_close{
    color:#ff8f00 ;
    font-weight: 600;
}
</style>