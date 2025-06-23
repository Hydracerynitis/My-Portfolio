<script setup>
import upRightIcon from '/src/assets/images/icon2.png'
import bottomRightIcon from '/src/assets/images/icon3.png'
import upLeftIcon from '/src/assets/images/icon1.png'
import bottomLeftIcon from '/src/assets/images/icon6.png'
</script>

<template>
    <section class="w3l-banner" id="home" style="margin-top: 80px;">
        <div class="container" style="padding-bottom: 5rem;">
            <div class="row align-items-center">
                <div class="col-md-6 banner-left pe-xl-5">
                    <h4>Hi, I'm Kejun Dai</h4>
                    <h3 class="mb-3 mt-1">New IT Graduate</h3>
                    <p class="banner-sub me-md-5">I love to work in Data Analysing and Software Developer.
                        I want to bring the best solutions to the problem with power of Machine Learning.
                    </p>
                    <div class="d-flex align-items-center buttons-banner mt-sm-5 mt-4">
                        <router-link to="/contact" class="btn btn-style me-2">Hire Me</router-link>
                    </div>
                </div>
                <div class="col-md-6">
                </div>
            </div>
        </div>
        <!-- animations icons -->
        <div class="icon-effects-w3-1 text-right">
            <img :src="upRightIcon" alt="" class="img-fluid">
        </div>
        <div class="icon-effects-w3-2 text-right">
            <img :src="bottomRightIcon" alt="" class="img-fluid">
        </div>
        <div class="icon-effects-w3-3 text-right">
            <img :src="upLeftIcon" alt="" class="img-fluid">
        </div>
        <div class="icon-effects-w3-4 text-right">
            <img :src="bottomLeftIcon" alt="" class="img-fluid">
        </div>
        <!-- //animations icons -->
    </section>
</template>