import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  storage: window.localStorage
})

const portfolioContext = createStore({
  state:{
    theme:"light",
    lang:"zh-CN"
  },
  mutations:{
    set_theme(state,new_theme){
      state.theme=new_theme
    },
    set_lang(state,new_lang){
      state.lang=new_lang
    }
  },
  plugins: [vuexPersist.plugin]
})

export default portfolioContext