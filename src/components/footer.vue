<script setup>
import VueLogo from "/src/assets/logo.svg"
</script>

<template>
    <footer class="footer-w3ls text-center">
        <div class="container pt-4">
            <div class="mx-auto" style="max-width:600px;">
                <router-link to="/">
                    <img :src="VueLogo" width="52" height="52"/>
                </router-link>
                <p class="mt-4 text-white">Built with <b>Vue</b> framework.</p>
                <p class="text-white">Contact me on Social Media.</p>
                <div class="social-icons-main mt-4 pb-3">
                    <ul class="social-icons3">
                        <li>
                            <a href="https://www.facebook.com/kejun.dai.3">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
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
        <button v-on:click="topFunction()" v-show="showButton" id="movetop" title="Go to top">
                <span class="fas fa-level-up-alt" aria-hidden="true"></span>
            </button>
    </Transition>
    

</template>

<script>
export default{
    data(){
        return {
            showButton: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollFunction)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollFunction)
    },
    methods:{
        scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                this.showButton=true;
            } else {
                this.showButton=false;
            }
        },
        topFunction() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>