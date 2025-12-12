<script setup>
import { onMounted,ref } from 'vue'

const props=defineProps({
    "imageName":String,
    "title":String,
    "subtitle":String,
    "imageRight":Boolean,
    "imageSize":Number
})

const imageUrl=ref("")
const image_col=ref("col-lg-4")
const paragraph_col=ref("col-lg-8")
onMounted(async()=>{
    if(props.imageSize){
        image_col.value="col-lg-"+props.imageSize;
        paragraph_col.value="col-lg-"+(12-props.imageSize);
    }
    imageUrl.value=(await import(`../assets/images/${props.imageName}.jpg`)).default;
})
</script>

<template>
    <section class="w3l-aboutblock1" :class="{'grey-color':imageRight}">
        <div class="container py-md-5 py-4">
            <div class="row align-items-center">
                <div :class="image_col" v-if="!imageRight">
                    <div class="position-relative" >
                        <img :src="imageUrl" alt="" class="radius-image img-fluid">
                    </div>
                </div>
                <div class="mt-lg-0 mt-5" :class="[{'ps-lg-5':!imageRight,'pe-lg-5':imageRight},paragraph_col]" >
                    <h5 class="title-small mb-1">{{ $t(subtitle)}}</h5>
                    <h3 class="title-style">{{$t(title)}}</h3>
                    <slot/>
                </div>
                <div :class="image_col" v-if="imageRight">
                    <div class="position-relative" >
                        <img :src="imageUrl" alt="" class="radius-image img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>