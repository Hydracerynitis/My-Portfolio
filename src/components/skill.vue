<script setup>
import skillProgress from '/src/components/elements/skillProgress.vue';
</script>
<template>
    <section class="w3l-progress py-5" id="progress">
        <div class="container py-md-5 py-4">
            <div class="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 class="title-small mb-1">My Skills</h5>
                <h3 class="title-style">My Expertise Area</h3>
            </div>
            <div class="row py-lg-4">
                <div class="col-lg-6 pe-lg-5">
                    <skillProgress percentage=90 frontColor="#0d8abc" backColor="#61fded">Scikit-Learn</skillProgress>
                    <skillProgress percentage=95 frontColor="#d45529" backColor="#eece90">Pandas</skillProgress>
                    <skillProgress percentage=70 frontColor="#f646a9" backColor="#5c51ff">Seaborn</skillProgress>
                    <skillProgress class="mb-0"
                        percentage="75" frontColor="#e77654" backColor="#e5529a">MatplotLib</skillProgress>
                </div>
                <div class="col-lg-6 ps-lg-5 mt-lg-0 mt-5">
                    <skillProgress percentage=75 frontColor="#0d8abc" backColor="#61fded">React.js</skillProgress>
                    <skillProgress percentage=80 frontColor="#d45529" backColor="#eece90">Vue.js</skillProgress>
                    <skillProgress percentage=60 frontColor="#f646a9" backColor="#5c51ff">Express.js</skillProgress>
                    <skillProgress class="mb-0"
                        percentage="70" frontColor="#e77654" backColor="#e5529a">MongoDB</skillProgress>
                </div>
            </div>
        </div>
    </section>
</template>