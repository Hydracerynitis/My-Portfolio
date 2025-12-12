<script setup>
import projectPreview from '/src/components/elements/projectPreview.vue';
</script>

<template>
    <section class="w3l-gallery pb-5" id="gallery">
        <div class="container py-md-5 py-4">
            <div class="title-heading-w3 text-center mb-4">
                <h5 class="title-small mb-1">{{ $t("home.portfolio_sT") }}</h5>
                <h3 class="title-style">{{ $t("home.portfolio_T") }}</h3>
            </div>
            <div class="row">
                <!-- <projectPreview url="/project/portfolio" imageName="portfolio_thumb" title="Portfolio Website">
                    The website that you are currently seeing, which display various projects that I have worked on.
                </projectPreview> -->
                <projectPreview url="/project/honor" imageName="MetaBias_thumb" title="home.thumb_BiasDetect">
                    {{ $t('home.thumb_BiasDetect_desc') }}
                </projectPreview>

                <projectPreview url="/project/argusML" imageName="ArgusML_thumb" title="home.thumb_ArgusML">
                    {{ $t('home.thumb_ArgusML_desc') }}
                </projectPreview>

                <projectPreview url="/project/covid" imageName="Covid_thumb" title="home.thumb_Covid">
                   {{ $t('home.thumb_Covid_desc') }}
                </projectPreview>

            </div>
        </div>
    </section>
</template>