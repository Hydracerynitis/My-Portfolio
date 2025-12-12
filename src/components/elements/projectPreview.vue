<script setup>
import { ref,onMounted } from 'vue'

const props=defineProps({
    "url":String,
    "imageName":String,
    "title":String,
})

const imageUrl=ref("")
const imageName=ref(props.imageName)
onMounted(async()=>{
    imageUrl.value=(await import(`../../assets/images/${imageName.value}.jpg`)).default
})

function topFunction() {
    setTimeout(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    },100)
    
}
</script>

<template>
    <div class="col-lg-4 col-md-6 item" style="margin-top:2rem;">
        <router-link :to="url" data-lightbox="example-set" class="zoom d-block"
            @click="topFunction()">
            <img class="card-img-bottom d-block" :src="imageUrl" alt="Card image cap">
                <span class="overlay__hover"></span>
                <span class="hover-content">
                    <span class="title">{{$t(title)}}</span>
                    <span class="content"><slot/></span>
                </span>
        </router-link>
    </div>
</template>