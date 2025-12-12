<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router';

const location = useRoute();
const router=useRouter();
const crumbs = computed(() => {
    console.log(location)
    if(location.name==='404')
        return [{ name: '404', path: '/*' }]
    const crumbs=[{ name: 'breadcrumb.home', path: '/' }];
    if (location.path==="/"){
        return crumbs
    }       
    const nodes=location.path.split("/")
    nodes.shift()
    let cumulativePath=''
    nodes.forEach((path)=>{
        cumulativePath+="/"+path
        const matchedRoute = router.getRoutes().find(r => r.path === cumulativePath);
        const name = matchedRoute?.meta?.breadcrumb || 
                     matchedRoute?.name || 
                     path.charAt(0).toUpperCase() + path.slice(1);
        crumbs.push({
          name,
          path: cumulativePath
        });
    })
    return crumbs
});
</script>

<template>
    <section class="inner-banner" v-show="crumbs.length!=1" style="margin-top: 80px;">
        <div class="w3l-breadcrumb">
            <div class="container pb-sm-4">
                <h4 class="inner-text-title pt-4">{{ $t(crumbs[crumbs.length-1].name)}}</h4>
                <ul class="breadcrumbs-custom-path mt-2">
                    <li v-for="(crumb, index) in crumbs" :key="index">
                        <i class="fas fa-angle-right mx-2" v-show="index!=0" />
                        <span v-if="index==crumbs.length-1">
                            {{ $t(crumb.name )}}
                        </span>
                        <span v-else>
                            <router-link :to="crumb.path">{{ $t(crumb.name) }}</router-link>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>