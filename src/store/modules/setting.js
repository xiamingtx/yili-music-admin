import { getSiteSetting } from '../../api/setting'

const state = () => ({
  site: {
    bucket: null,
    region: null,
    storage: null,
  }
})

const getters = {
  bucket: state => state.site.bucket,
  region: state => state.site.region
}

const actions = {
  fetchSiteSetting({ commit }) {
    getSiteSetting().then(siteSetting => {
      commit('SITE_SETTING_FETCHED', siteSetting)
    })
  }
}

const mutations = {
  SITE_SETTING_FETCHED: (state, siteSetting) => {
    state.site = siteSetting
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}