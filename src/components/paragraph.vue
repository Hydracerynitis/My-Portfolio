<script setup>
import { computed } from 'vue'

const props=defineProps({
    "imageName":String,
    "title":String,
    "subtitle":String,
    "imageLeft":Boolean
})

const imageUrl=computed(()=>{
    return "/src/assets/images/"+props.imageName
})
</script>

<template>
    <section class="w3l-aboutblock1" id="about" :class="{'grey-color':imageLeft}">
        <div class="container py-md-5 py-4">
            <div class="row align-items-center">
                <div class="col-lg-4" v-if="!imageLeft">
                    <div class="position-relative" >
                        <img :src="imageUrl" alt="" class="radius-image img-fluid">
                    </div>
                </div>
                <div class="col-lg-8 ps-lg-5 mt-lg-0 mt-5">
                    <h5 class="title-small mb-1">{{subtitle}}</h5>
                    <h3 class="title-style">{{title}}</h3>
                    <slot/>
                </div>
                <div class="col-lg-4" v-if="imageLeft">
                    <div class="position-relative" >
                        <img :src="imageUrl" alt="" class="radius-image img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>