<script setup>
import paragraph from '/src/components/paragraph.vue';
import { I18nT } from 'vue-i18n';
import portfolioContext from '@/context/PortfolioContext';
import { computed } from 'vue';

const isEN= computed(()=>{
    return portfolioContext.state.lang!="en"
})
</script>

<template>
    <paragraph imageName="machineBias" title="honor.context_Title" subtitle="honor.context_subTitle">
        <p class="mt-3">{{ $t('honor.context_p1') }}</p>
        <p class="mt-3">{{ $t('honor.context_p2') }}</p>
        <I18nT keypath="honor.context_p3" tag="p" class="mt-3">
            <a class="btn-style-primary"
            href="https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing">
                ProPublica</a>
        </I18nT>
    </paragraph>
    <paragraph imageName="FairnessML" title="honor.field_Title" subtitle="honor.field_subTitle"
            :imageRight="true">
        <I18nT keypath="honor.field_p1" tag="p" class="mt-3">
            <template #AIF360><b>AI Fairness 360</b></template>
            <template #Aequitas><b>Aequitas</b></template>
        </I18nT>
        <p class="mt-3">{{ $t('honor.field_p2') }}</p>
        <p class="mt-3 highlight">{{ $t('honor.field_p3') }}</p>
    </paragraph>
    <paragraph imageName="ssr_example" title="honor.SBC_Title" subtitle="honor.SBC_subTitle"
        :imageSize="6">
        <p class="mt-3">{{ $t('honor.SBC_p1') }}</p>
        <I18nT keypath="honor.SBC_p2" tag="p" class="mt-3">
            <template #SBC><b>{{ $t("honor.SBC") }}</b></template>
            <template #S1><b>{{ $t("honor.S") }}<span v-if="isEN">(Slice)</span></b></template>
            <template #B1><b>{{ $t("honor.B") }}<span v-if="isEN">(Box)</span></b></template>
            <template #C1><b>{{ $t("honor.C") }}<span v-if="isEN">(Complex)</span></b></template>
            <template #S><b>{{ $t("honor.S") }}</b></template>
            <template #B><b>{{ $t("honor.B") }}</b></template>
            <template #C><b>{{ $t("honor.C") }}</b></template>
        </I18nT>
    </paragraph>
    <paragraph imageName="metabase" title="honor.experiment_Title" subtitle="honor.experiment_subTitle"
            :imageRight="true" :imageSize="6">
        <I18nT keypath="honor.experiment_p1" tag="p" class="mt-3">
            <template #any><b>{{ $t('honor.any') }}</b></template>
            <template #certain><b>{{ $t('honor.certain') }}</b></template>
        </I18nT>
        <p class="mt-3">{{$t('honor.experiment_p1')}}</p>
    </paragraph>
    <paragraph imageName="honor_result" title="honor.result_Title" subtitle="honor.result_subTitle" 
        :imageSize=6>
        <I18nT keypath="honor.result_p1" tag="p" class="mt-3" >
            <b>LightGBM</b>
        </I18nT>
        <p class="mt-3">{{ $t('honor.result_p2') }}</p>
        <p class="mt-3">{{ $t('honor.result_more') }}</p>
        <router-link to="/honorJournal.pdf" target="_blank" class="btn btn-style mt-3">{{ $t('honor.journal') }}</router-link>
    </paragraph>
</template>