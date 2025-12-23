<script setup>
import WechatQR from '/src/assets/images/WechatQR.jpg'
import WechatQR_dark from '/src/assets/images/WechatQR_dark.jpg'
import portfolioContext from "/src/context/PortfolioContext"
</script>

<template>
    <section class="w3l-contact" id="contact">
        <div class="container py-4">
            <div class="row contact-block">
                <div class="col-md-6 contact-left mt-3">
                    <h2 class="title-style"><b>{{ $t('contact.Title') }}</b></h2>
                    <p class="cont-para my-3">{{ $t('contact.Info_Text') }}</p>
                    <div class="cont-details">
                        <p><i class="fas fa-envelope-open-text"></i><a href="mailto:kejundai53@gmail.com"
                                class="mail">kejundai53@gmail.com</a></p>
                        <p><i class="fas fa-envelope-open-text"></i><a href="mailto:dai_kejun@qq.com"
                                class="mail">dai_kejun@qq.com</a></p>
                        <p><i class="fas fa-phone-alt"> (+86) 18116492230</i></p>
                    </div>
                    <h4 class="mb-3 mt-3">{{ $t('contact.Follow') }}</h4>
                    <ul class="social-icons-contact">
                        <li>
                            <a href="https://github.com/Hydracerynitis"> <i class="fab fa-github"></i> </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/kejundai/"> <i class="fab fa-linkedin-in"></i> </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 contact-right ">
                    <div v-if="portfolioContext.state.theme==='light'" >
                        <img :src="WechatQR" alt="Wechat QRcode" class="QRcode radius-image img-fluid">
                    </div>
                    <div v-else>
                        <img :src="WechatQR_dark" alt="Wechat QRcode dark" class="QRcode radius-image img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.QRcode {
    padding-left: 100px;
    padding-right: 100px;
}
</style>