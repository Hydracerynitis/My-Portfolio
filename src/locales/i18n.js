import { createI18n } from "vue-i18n";
import * as en from '/src/locales/en'
import * as cn from '/src/locales/cn'
import portfolioContext from "@/context/PortfolioContext";

const i18n =createI18n({
    legacy:false,
    locale:portfolioContext.state.lang || 'zh-CN',
    fallbackLocale:en,
    globalInjection: true,
    messages:{en,'zh-CN':cn}
})

export default i18n