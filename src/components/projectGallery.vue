<script setup>
import projectPreview from '/src/components/elements/projectPreview.vue';
</script>

<template>
    <section class="w3l-gallery pb-5" id="gallery">
        <div class="container py-md-5 py-4">
            <div class="title-heading-w3 text-center mb-4">
                <h5 class="title-small mb-1">Portfolio</h5>
                <h3 class="title-style">Some of my most recent projects</h3>
            </div>
            <div class="row">
                <projectPreview url="/project/honor" imageName="MetaBias_thumb" title="Detect Unseen Bias with Metalearning">
                    Train meta-learning models to estimate bias in datasets using their meta-feature instead of explicit labels.
                </projectPreview>

                <projectPreview url="/project/argusML" imageName="ArgusML_thumb" title="ArgusML">
                    Web app to train ML models without any code use.
                </projectPreview>

                <projectPreview url="/project/covid" imageName="Covid_thumb" title="Covid Contact App">
                    Record your daily activities and get notified when becoming close contact.
                </projectPreview>

            </div>
        </div>
    </section>
</template>