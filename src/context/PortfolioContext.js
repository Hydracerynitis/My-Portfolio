import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  storage: window.localStorage
})

const portfolioContext = createStore({
  state:{
    theme:"light"
  },
  mutations:{
    set_theme(state,new_theme){
      state.theme=new_theme
    }
  },
  plugins: [vuexPersist.plugin]
})

export default portfolioContext