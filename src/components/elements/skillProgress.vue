<script setup>
import { computed  } from 'vue'

const props=defineProps({
    "percentage":String,
    "frontColor":String,
    "backColor":String,
})

const widthPercentage=computed(()=>{
    return (props.percentage)+"%"
})

const rightPercentage=computed(()=>{
    return (100-props.percentage)+"%"
})
</script>

<template>
    <div class="progress-info info">
        <h6 class="progress-tittle"><slot/> <span class="">{{ props.percentage }}%</span></h6>
        <div class="progress">
            <div class="progress-bar progress-bar-striped gradient" role="progressbar" :style="{width: props.percentage+'%'}" 
                @aria-valuenow=props.percentage aria-valuemin="0" aria-valuemax="100" />
        </div>
    </div>
    
</template>

<style scoped>
.info h6 {
  display: grid;
  grid-template-columns: 1fr auto;
  width: v-bind(widthPercentage);
}

.gradient::before,
.gradient::after{
  content: "";
  position: absolute;
  right: v-bind(rightPercentage); /* 圆点的位置，可使用right / left */
  top: 92.5%;
  border-radius: 50%;
  transform: translate(50%, -50%);
}
.gradient::before{
    height: 28px;
    width: 28px;
    border: 3px solid;
    opacity: .2;
}
.gradient::after{
    height: 16px;
    width: 16px;
    border: 3px solid;
    background-color: var(--bg-color);    
}
.gradient{ /* background color */
    background-color: v-bind("props.frontColor");
    color: v-bind("props.backColor") ;
    background-image: linear-gradient(-224deg, v-bind("props.frontColor"), v-bind("props.backColor"));
}
</style>