<script setup>
import paragraph from '/src/components/paragraph.vue';
</script>

<template>
    <!-- Project 1 -->
    <paragraph imageName="about.jpg" title="Detect Unseen Bias with Metalearning" subtitle="Honour Research Project">
        <p class="mt-3">Investigate bias in Machine Learning models without using explicit sensitive attributes, which is rarely explored in Fairness Machine Learning.</p>
        <p class="mt-3">Develop a new Sensitive SBC framework to represent marginalized populations in continuous datasets without relying on sensitive attribute labels.</p>
        <p class="mt-3">Train meta-learning models that estimate risks of bias in datasets using their meta-information with accuracy that is comparable with human labelling.</p>
    </paragraph>
    <paragraph imageName="about.jpg" title="ArgusML - an ML Model creation webapp" subtitle="6-member Group Assignment"
            imageLeft="true">
        <p class="mt-3">Develop a web app that allows users to train their own Machine Learning models by simply uploading their tabular data.</p>
        <p class="mt-3">It uses MERN-stack technologies, with its server running Python subprocess to train Scitkit-Learn supported ML models and use them for predictions.</p>
        <p class="mt-3">I am responsible for building model creation modules that can be invoked freely by the server to fit users’ different preferences.</p>
    </paragraph>
    <paragraph imageName="about.jpg" title="Covid Contact App" subtitle="MSA Web Development Assessment">
        <p class="mt-3">Record your daily activities and get notified when becoming close contact.</p>
        <p class="mt-3">If people that shared same destination with you becomes infected, you will be automatically tagged close contact</p>
    </paragraph>
</template>