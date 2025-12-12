<template>
    <section class="w3l-timeline-1 py-5">
        <div class="container py-lg-5 py-4">
            <div class="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 class="title-small">{{ $t('home.resume_sT') }}</h5>
                <h3 class="title-style">{{$t('home.resume_T')}}</h3>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h5 class="sub-title-timeline"><i class="fas fa-graduation-cap me-3"></i>
                        {{ $t('home.resume_ed') }}</h5>
                    <div class="timeline">
                        <div class="column">
                            <div class="title">
                                <h2>{{ $t('home.resume_uni_T') }}</h2>
                            </div>
                            <div class="description">
                                <p>{{ ($t('home.resume_uni_sT')) }}</p>
                                <h6><i class="fas fa-calendar-alt"></i> 2021.3 - 2025.5</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-lg-0 mt-4">
                    <h5 class="sub-title-timeline"><i class="fas fa-briefcase me-3"></i>
                        {{ $t('home.resume_exp') }}</h5>
                    <div class="timeline">
                        <div class="column">
                            <div class="title">
                                <h2>{{ $t('home.resume_intern_T') }}</h2>
                            </div>
                            <div class="description">
                                <p>{{ $t('home.resume_intern_sT') }}</p>
                                <h6><i class="fas fa-calendar-alt"></i> 2025.6 - {{ $t('home.present') }}</h6>
                            </div>
                        </div>
                        <div class="column">
                            <div class="title">
                                <h2>{{ $t('home.resume_ass_T') }}</h2>
                            </div>
                            <div class="description">
                                <p>{{ $t('home.resume_ass_sT') }}</p>
                                <h6><i class="fas fa-calendar-alt"></i> 2024.6 - 2024.7</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>