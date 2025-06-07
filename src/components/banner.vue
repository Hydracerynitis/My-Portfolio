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
    <section class="inner-banner" v-show="crumbs.length!=1">
        <div class="w3l-breadcrumb" style="padding-top: 2rem;">
            <div class="container pt-4 pb-sm-4">
                <h4 class="inner-text-title pt-sm-5 pt-4">{{location.name}}</h4>
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

<!-- const crumbs = computed(() => {
      const pathArray = route.path.split('/').filter(path => path);
      
      // Start with home if not already there
      const breadcrumbs = [];
      if (pathArray.length === 0) {
        return [{ name: 'Home', path: '/' }];
      }
      
      // Build breadcrumb array
      let cumulativePath = '';
      pathArray.forEach((path, index) => {
        cumulativePath += `/${path}`;
        
        // Get the route name or formatted path
        const matchedRoute = route.matched.find(r => r.path === cumulativePath);
        const name = matchedRoute?.meta?.breadcrumb || 
                     matchedRoute?.name || 
                     path.charAt(0).toUpperCase() + path.slice(1);
        
        breadcrumbs.push({
          name,
          path: cumulativePath
        });
      });
      
      return [{ name: 'Home', path: '/' }, ...breadcrumbs];
    }); -->