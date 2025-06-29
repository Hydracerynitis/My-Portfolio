<script setup>
import paragraph from '/src/components/paragraph.vue';
</script>

<template>
    <paragraph imageName="honor_result" title="Detect Unseen Bias with Metalearning" subtitle="Honour Research Project"
        imageSize="6">
        <p class="mt-3">This research project develop new methods to investigate datasets' risk of training biased models 
            without explicit involvments' of sensitive attribute values, which is rarely explored in Fairness Machine Learning field.</p>
        <p class="mt-3">I propose the new framework called Sensitive SBC to use subspace of dataspace instead of set partition to represent 
            marginalised populations. And I train metalearning models to estime datasets' risk of bias based on their meta-information
            with accuracy comparable with human labelling.</p>
        <p class="mt-3 highlight">Supervised by <a href="https://www.linkedin.com/in/katdost/">Katharina Dost</a> and 
            Jonanthan Kim</p>
        <router-link to="/project/honor" class="btn btn-style mt-3">Learn More About it</router-link>
    </paragraph>
    <paragraph imageName="ArgusML" title="ArgusML - an ML Model creation webapp" subtitle="6-member Group Assignment"
            :imageRight="true" :imageSize=6>
        <p class="mt-3">Develop a web app that allows users to train their own Machine Learning models by simply uploading their tabular data.</p>
        <p class="mt-3">It uses MERN-stack technologies, with its server running Python subprocess to train Scitkit-Learn supported ML models and use them for predictions.</p>
        <p class="mt-3">I am responsible for building model creation modules that can be invoked freely by the server to fit users’ different preferences.</p>
    </paragraph>
    <paragraph imageName="Covid" title="Covid Contact App" subtitle="MSA Web Development Assessment">
        <p class="mt-3">Record your daily activities and get notified when becoming close contact.</p>
        <p class="mt-3">If people that shared same destination with you becomes infected, you will be automatically tagged close contact</p>
    </paragraph>
</template>