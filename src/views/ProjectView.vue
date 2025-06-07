<script setup>
import portfolioContext from "@/context/PortfolioContext"
import { computed } from 'vue';

const isDark=computed(() =>{
    return portfolioContext.state.theme=="dark"
})
</script>

<template>
    <!-- Project 1 -->
     <section class="w3l-aboutblock1 white-color" id="about" >
        <div class="container py-md-5 py-4">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="position-relative">
                        <img src="../assets/images/about.jpg" alt="" class="radius-image img-fluid">
                    </div>
                </div>
                <div class="col-lg-8 ps-lg-5 mt-lg-0 mt-5">
                    <h5 class="title-small mb-1">Honour Research Project</h5>
                    <h3 class="title-style">Detect Unseen Bias with Metalearning</h3>
                    <p class="mt-3">Investigate bias in Machine Learning models without using explicit sensitive attributes, which is rarely explored in Fairness Machine Learning.</p>
                    <p class="mt-3">Develop a new Sensitive SBC framework to represent marginalized populations in continuous datasets without relying on sensitive attribute labels.</p>
                    <p class="mt-3">Train meta-learning models that estimate risks of bias in datasets using their meta-information with accuracy that is comparable with human labelling.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- // Project 1 -->

    <!-- project 2 -->
    <section class="w3l-aboutblock1 grey-color" id="about" >
        <div class="container py-md-5 py-4">
            <div class="row align-items-center">
                <div class="col-lg-8 ps-lg-5 mt-lg-0 mt-5">
                    <h5 class="title-small mb-1">6-member Group Assignment</h5>
                    <h3 class="title-style">ArgusML-- ML Model creation webapp</h3>
                    <p class="mt-3">Develop a web app that allows users to train their own Machine Learning models by simply uploading their tabular data.</p>
                    <p class="mt-3">It uses MERN-stack technologies, with its server running Python subprocess to train Scitkit-Learn supported ML models and use them for predictions.</p>
                    <p class="mt-3">	I am responsible for building model creation modules that can be invoked freely by the server to fit users’ different preferences.</p>
                </div>
                <div class="col-lg-4">
                    <div class="position-relative">
                        <img src="../assets/images/about.jpg" alt="" class="radius-image img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- // Project 2 -->

    <!-- Project 3 -->
     <section class="w3l-aboutblock1 white-color" id="about">
        <div class="container py-md-5 py-4">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="position-relative">
                        <img src="../assets/images/about.jpg" alt="" class="radius-image img-fluid">
                    </div>
                </div>
                <div class="col-lg-8 ps-lg-5 mt-lg-0 mt-5">
                    <h5 class="title-small mb-1">MSA Web Development Assessment</h5>
                    <h3 class="title-style">Covid Contact App</h3>
                    <p class="mt-3">Record your daily activities and get notified when becoming close contact.</p>
                    <p class="mt-3">If people that shared same destination with you becomes infected, you will be automatically tagged close contact</p>
                </div>
            </div>
        </div>
    </section>
    <!-- // Project 3 -->
</template>