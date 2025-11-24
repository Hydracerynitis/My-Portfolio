<script setup>
import portfolioContext from "/src/context/PortfolioContext"
import VueLogo from "/src/assets/logo.svg"
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useI18n } from "vue-i18n";

const {locale}=useI18n()

const location = useRoute();
const pageName = computed(() => {
    return location.name;
})

const language= computed(()=>{
    return locale.value
})

const collapse=ref(true)
onMounted(()=>{
    document.documentElement.setAttribute('data-theme', portfolioContext.state.theme);
})

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        portfolioContext.commit("set_theme","dark")
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        portfolioContext.commit("set_theme","light")
    }
}

function switchLanguage(event) {
    if (locale.value==="zh-CN") {
        locale.value="en"
    }
    else {        
        locale.value="zh-CN"
    }
    portfolioContext.commit("set_lang",locale.value)
}

function fixScroll(){
    document.body.classList.toggle('noscroll');
    collapse.value=!collapse.value;
}
</script>

<template>
    <header id="site-header" class="fixed-top nav-fixed">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <router-link to="/">
                    <img :src="VueLogo" width="52" height="52"/>
                </router-link>
                <button class="navbar-toggler collapsed" type="button" @click="fixScroll">
                    <span class="navbar-toggler-icon fa icon-expand fa-bars" v-if="collapse"></span>
                    <span class="navbar-toggler-icon fa icon-close fa-times" v-if="!collapse"></span>
                </button>
                <div class="navbar-collapse" id="navbarScroll" :class="{'collapse':collapse}">
                    <ul class="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/" :class="{active:pageName==='Home'}">
                                {{ $t('menu.home') }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/project" :class="{active:pageName==='Project'}">
                                {{ $t('menu.project') }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact" :class="{active:pageName==='Contact'}">
                                {{ $t('menu.contact') }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="lang-position">
                    <div class="lang_toggle" @click="switchLanguage">
                        
                        <div  v-if="language==='en'">
                            <i class="fas fa-language"></i> English
                        </div>
                        <div v-else>
                            <i class="fas fa-language"></i> 简体中文
                        </div>
                    </div>
                </div>
                <div class="cont-ser-position">
                    <label class="theme-switch" for="checkbox" @change="switchTheme">
                        <input type="checkbox" id="checkbox">
                        <div v-if="portfolioContext.state.theme==='dark'">
                            <i class="gg-sun"></i>
                        </div>
                        <div v-else>
                            <i class="gg-moon"></i>
                        </div>
                    </label>
                </div>
            </nav>
        </div>
    </header>
</template>