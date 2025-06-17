<script setup>
import headlineBanner from '/src/components/headlineBanner.vue';
import qualification from '/src/components/qualification.vue';
import skill from '/src/components/skill.vue';
import projectGallery from '/src/components/projectGallery.vue';
import paragraph from '@/components/paragraph.vue';
</script>
<template>
    <headlineBanner/>
    <paragraph imageName="about" title="About Me" subtitle="My Intro">
        <p class="mt-3">I am a graduate student of Bachelor of Advanced Science (Honor) with first class honor with a GPA of 7.563. 
                        I specialize in Machine Learning and fairness in machine learning. Experienced in machine learning research, with strong software development, critical thinking and collaboration skills. 
                        Currently looking for full-time graduate data scientist roles or software development roles.</p>
        <div class="my-info mt-md-5 mt-4">
            <ul class="single-info">
                <li class="name-style">Name</li> <li>:</li> <li><p>Kejun Dai</p></li>
            </ul>
            <ul class="single-info">
               <li class="name-style">Age</li> <li>:</li> <li><p>23 Years</p></li>
            </ul>
            <ul class="single-info">
                <li class="name-style">From</li> <li>:</li> <li><p>Shanghai, China</p></li>
            </ul>
            <ul class="single-info">
                <li class="name-style">Live in</li> <li>:</li> <li><p>Auckland, New Zealand</p></li>
            </ul>
            <ul class="single-info">
                <li class="name-style">Email</li> <li>:</li> <li><p><a href="mailto:kejundai53@gmail.com">kejundai53@gmail.com</a></p></li>
            </ul>
        </div>
        <a href="#download" class="btn btn-style mt-5">Download CV</a>
    </paragraph>
    <qualification class="grey-color"/>
    <skill />
    <projectGallery class="grey-color"/>
</template>