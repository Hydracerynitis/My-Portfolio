<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const location = useRoute();
const crumbs = computed(() => {
    const breadcrumbs=[{ name: 'home', path: '/' }];
    if (location.path==="/"){
        return breadcrumbs
    }       
    const nodes=location.path.split("/")
    nodes.shift()
    let cumulativePath=''
    nodes.forEach((path)=>{
        cumulativePath+="/"+path
        const matchedRoute = location.matched.find(r => r.path === cumulativePath);
        const name = matchedRoute?.meta?.breadcrumb || 
                     matchedRoute?.name || 
                     path.charAt(0).toUpperCase() + path.slice(1);
        breadcrumbs.push({
          name,
          path: cumulativePath
        });
    })
    return breadcrumbs
});
</script>

<template>
    <section class="inner-banner" v-show="crumbs.length!=1" style="margin-top: 80px;">
        <div class="w3l-breadcrumb">
            <div class="container pb-sm-4">
                <h4 class="inner-text-title pt-4">{{location.name}}</h4>
                <ul class="breadcrumbs-custom-path mt-2">
                    <li v-for="(crumb, index) in crumbs" :key="index">
                        <i class="fas fa-angle-right mx-2" v-show="index!=0" />
                        <span v-if="index==crumbs.length-1">
                            {{ crumb.name }}
                        </span>
                        <span v-else>
                            <a :href="crumb.path">{{ crumb.name }}</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>