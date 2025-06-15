<script setup>
import { computed } from 'vue'

const props=defineProps({
    "url":String,
    "imageName":String,
    "title":String,
})

const imageUrl=computed(()=>{
    return "/src/assets/images/"+props.imageName
})
</script>

<template>
    <div class="col-lg-4 col-md-6 item" style="margin-top:2rem;">
        <a :href="url" data-lightbox="example-set" @data-title="title" class="zoom d-block">
            <img class="card-img-bottom d-block" :src="imageUrl" alt="Card image cap">
                <span class="overlay__hover"></span>
                <span class="hover-content">
                    <span class="title">{{title}}</span>
                    <span class="content"><slot/></span>
                </span>
        </a>
    </div>
</template>

<!-- <script>
export default {
//   data() {
//     return {
//       imageName: 'my-image.jpg',
//       imageUrl: null
//     }
//   },
  async mounted() {
    
  }
}
</script> -->