<script setup>
import paragraph from '/src/components/paragraph.vue';

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<template>
    <paragraph imageName="honor_result" title="Detect Unseen Bias with Metalearning" subtitle="Honour Research Project" :imageSize="6">
        <p class="mt-3">This research project develop new methods to investigate datasets' risk of training biased models 
            without explicit involvments' of sensitive attribute values, which is rarely explored in Fairness Machine Learning field.</p>
        <p class="mt-3">I propose the new framework called Sensitive SBC to use subspace of dataspace instead of set partition to represent 
            marginalised populations. And I train metalearning models to estime datasets' risk of bias based on their meta-information
            with accuracy comparable with human labelling.</p>
        <p class="mt-3 highlight">Supervised by <a href="https://www.linkedin.com/in/katdost/">Katharina Dost</a> and 
            Jonanthan Kim</p>
        <router-link to="/project/honor" class="btn btn-style mt-3" @click="topFunction()">Learn More About it</router-link>
    </paragraph>
    <paragraph imageName="ArgusML" title="ArgusML - an ML Model creation webapp" subtitle="6-member Group Assignment"
            :imageRight="true" :imageSize=6>
        <p class="mt-3">ArgusML is a web app that handles Machine Learning models creations for the users, allowing users without
            any knowledge of code or AI to create their own models to aid them processing their tabular data.</p>
        <p class="mt-3">It is work of a six-member team for a university assignment. The team consists of 
            <a href="https://github.com/Granicus0">Vinayak Joshi</a>, <a href="https://github.com/ABCCASa">Peter He</a>,
            <a href="https://github.com/SLIU383">Steven Liu</a>, <a href="https://github.com/Alina618">Alina Xu</a>,
            <a href="https://github.com/leihanZzZ">Leihan Zhang</a> and me. Throughout the developments, I am responsible
            of implementing machine learning modules which will be invoked to train new models or using them for predictions
            based on users' preference.</p>
        <p class="mt-3 highlight">The app is built with MERN stack - MongoDB, Expres.js, React.js and Node.js.</p>
        <router-link class="btn btn-style mt-3" to="project/argusML" @click="topFunction()">Learn More About it</router-link>
    </paragraph>
    <paragraph imageName="CovidUpload" title="Covid Contact App" subtitle="MSA Web Development Assessment" :imageSize="6">
        <p class="mt-3">This app is made as software development assignment for the 2021 MSA Web Development program</p>
        <p class="mt-3">It is made in the context of Covid-19, where keeping the whereabouts of infected cases and their
            close contact is imperitive for the public health. This app provides a tool for general public to record their
            daily activities online.</p>
        <p class="mt-3">Whenever an user is flagged with infested through self reporting, other users that share the same 
            destinations at the same time with infested individual will be automatically flagged with close contact. These
            users will get notified such change due to a drastic change in the website's color.</p>
        <p class="mt-3 highlight">The app is built with React (Typescript) + Apollo Hook, alongside GraphQL as its backend server.</p>
        <router-link class="btn btn-style mt-3" to="project/covid" @click="topFunction()">Learn More About it</router-link>
    </paragraph>
</template>