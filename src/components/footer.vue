<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import VueLogo from "/src/assets/logo.svg"

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const showButton=ref(false)
function scrollListener() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        showButton.value=true;
    } else {
        showButton.value=false;
    }
}

onMounted(()=>{
    window.addEventListener('scroll', scrollListener)
})
onBeforeUnmount(()=>{
    window.removeEventListener('scroll', scrollListener)
})
</script>

<template>
    <footer class="footer-w3ls text-center">
        <div class="container pt-4">
            <div class="mx-auto" style="max-width:600px;">
                <router-link to="/">
                    <img :src="VueLogo" width="52" height="52"/>
                </router-link>
                <p class="mt-4 text-white" v-html="$t('home.footer_line1')"></p>
                <p class="text-white">{{ $t('home.footer_line2') }}</p>
                <div class="social-icons-main mt-4 pb-3">
                    <ul class="social-icons3">
                        <li>
                            <a href="https://github.com/Hydracerynitis">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/kejundai/">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <Transition name="fade">
        <button @click="topFunction" v-show="showButton" id="movetop" title="Go to top">
            <span class="fas fa-level-up-alt" aria-hidden="true"></span>
        </button>
    </Transition>
</template>