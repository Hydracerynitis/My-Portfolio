<script setup>
import emailjs from '@emailjs/browser';
import { VueRecaptcha } from 'vue-recaptcha';

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
emailjs.init({
  publicKey: publicKey,
  limitRate: {
    throttle: 10000, // 10s
  },
});
</script>

<template>
    <section class="w3l-contact" id="contact">
        <div class="container py-lg-5 py-4">
            <div class="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 class="title-small">Get In Touch</h5>
                <h3 class="title-style">Contact Me</h3>
            </div>
            <div class="row contact-block">
                <div class="col-md-6 contact-left pe-lg-5">
                    <h3 class="mb-sm-4 mb-3">Contact Info</h3>
                    <p class="cont-para mb-sm-5 mb-4">I enjoy discussing new projects and design challenges. Please
                        share as much info, as possible so we can get the most out of our first catch-up.</p>
                    <div class="cont-details">
                        <p><i class="fas fa-map-marker-alt"></i>Flat 712/421 Queen Street, Auckland CBD, Auckland,
                            New Zealand, 1010</p>
                        <p><i class="fas fa-phone-alt"></i>(+64) 021 081 08288</p>
                        <p><i class="fas fa-envelope-open-text"></i><a href="mailto:kejundai53@gmail.com"
                                class="mail">kejundai53@gmail.com</a></p>
                    </div>
                    <h4 class="mb-3 mt-5">Follow Me</h4>
                    <ul class="social-icons-contact">
                        <li>
                            <a href="https://www.facebook.com/kejun.dai.3"> <i class="fab fa-facebook-f"></i> </a>
                        </li>
                        <li>
                            <a href="https://github.com/Hydracerynitis"> <i class="fab fa-github"></i> </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/kejundai/"> <i class="fab fa-linkedin-in"></i> </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 contact-right mt-md-0 mt-5 ps-lg-0">
                    <form @submit.prevent="sendEmail" class="signin-form">
                        <div class="input-grids">
                            <input type="text" name="user_name" id="user_name" placeholder="Your Name*" 
                                class="contact-input" v-model="formData.user_name" required="true" />
                            <input type="email" name="user_email" id="user_email" placeholder="Your Email*"
                                class="contact-input" v-model="formData.user_email" required="true" />
                            <input type="text" name="subject" id="subject" placeholder="Subject*"
                                class="contact-input" v-model="formData.subject" required="true" />
                        </div>
                        <div class="form-input">
                            <textarea name="message" id="message" placeholder="Type your message here*"
                                v-model="formData.message" required="true" ></textarea>
                        </div>
                        
                        <!-- reCAPTCHA Component -->
                        <div class="recaptcha-container mb-3">
                            <vue-recaptcha
                                ref="recaptcha"
                                :sitekey="recaptchaSiteKey"
                                @verify="onRecaptchaVerify"
                                @expired="onRecaptchaExpired"
                                @error="onRecaptchaError"
                            ></vue-recaptcha>
                        </div>
                        
                        <button type="submit" class="btn btn-style" :disabled="isLoading || !recaptchaToken">
                            <span v-if="isLoading">Sending...</span>
                            <span v-else-if="!recaptchaToken">Please complete reCAPTCHA</span>
                            <span v-else>Send Message</span>
                        </button>
                    </form>
                    
                    <!-- Success/Error Messages -->
                    <div v-if="message" class="mt-3">
                        <div v-if="isSuccess" class="alert alert-success" role="alert">
                            {{ message }}
                        </div>
                        <div v-else class="alert alert-danger" role="alert">
                            {{ message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
export default {
    data() {
        return {
            formData: {
                user_name: '',
                user_email: '',
                subject: '',
                message: ''
            },
            isLoading: false,
            message: '',
            isSuccess: false,
            recaptchaToken: null,
            recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY
        }
    },
    methods: {
        onRecaptchaVerify(token) {
            this.recaptchaToken = token;
            console.log('reCAPTCHA verified:', token);
        },
        onRecaptchaExpired() {
            this.recaptchaToken = null;
            console.log('reCAPTCHA expired');
        },
        onRecaptchaError(error) {
            this.recaptchaToken = null;
            console.error('reCAPTCHA error:', error);
        },
        sendEmail() {
            // Check if reCAPTCHA is verified
            if (!this.recaptchaToken) {
                this.message = 'Please complete the reCAPTCHA verification before sending your message.';
                this.isSuccess = false;
                return;
            }

            this.isLoading = true;
            this.message = '';
            this.isSuccess = false;

            // Use Vite environment variables for service and template IDs
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
           
            emailjs.send(
                serviceId,
                templateId,
                {
                    subject: this.formData.subject,
                    name: this.formData.user_name,
                    email: this.formData.user_email,
                    time: this.formData.user_email,
                    message: this.formData.message,
                    recaptchaToken: this.recaptchaToken, // Include reCAPTCHA token
                }
            ).then(
                (response) =>{
                    console.log('SUCCESS!', response.status, response.text)
                    this.isLoading = false;
                    this.isSuccess = true;
                    this.message = 'Thank you! Your message has been sent successfully.';
                    this.resetForm();
                },
                (error) => {
                    if (error instanceof EmailJSResponseStatus) {
                        
                        console.log('EMAILJS FAILED:', error);
                    }
                    else{
                        console.error('Email sending failed:', error);
                    }
                    this.isLoading = false;
                    this.isSuccess = false;
                    this.message = 'Sorry, there was an error sending your message. Please try again or contact me directly at kejundai53@gmail.com';
                }
            )
        },
        resetForm() {
            this.formData = {
                user_name: '',
                user_email: '',
                subject: '',
                message: ''
            };
        },
    }
}
</script>