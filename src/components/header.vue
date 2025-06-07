<script setup>
import portfolioContext from "@/context/PortfolioContext"
import VueLogo from "@/assets/logo.svg"
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const location = useRoute();
const pageName = computed(() => {
    return location.name;
})
</script>

<template>
    <header id="site-header" class="fixed-top nav-fixed">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a href="/">
                    <img class="narbar-brand" :src="VueLogo" width="52" height="52"/>
                </a>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                    aria-label="Toggle navigation" @click="fixScroll">
                    <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/" :class="{active:pageName==='Home'}">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/project" :class="{active:pageName==='Project'}">Project</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact" :class="{active:pageName==='Contact'}">Contact</a>
                        </li>
                    </ul>
                </div>
                <!-- toggle switch for light and dark theme -->
                <div class="cont-ser-position">
                    <nav class="navigation">
                        <div class="theme-switch-wrapper">
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
                <!-- //toggle switch for light and dark theme -->
            </nav>
        </div>
    </header>
</template>


<script>
export default{
    mounted() {
        document.documentElement.setAttribute('data-theme', portfolioContext.state.theme);
    },
    methods:{
        switchTheme(event) {
            if (event.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                portfolioContext.commit("set_theme","dark")
            }
            else {        
                document.documentElement.setAttribute('data-theme', 'light');
                portfolioContext.commit("set_theme","light")
            }
        },
        fixScroll(){
            document.body.classList.toggle('noscroll');
            document.getElementsByTagName("header")[0].classList.toggle('active');
        }
    }
}
</script>
    