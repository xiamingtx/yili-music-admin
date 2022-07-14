import { getToken, setToken, removeToken, setCurrentUser, getCurrentUser, removeCurrentUser } from '../../utils/auth'
import { createToken } from './../../api/token';
import { me } from '../../api/user'

const state = () => ({
  token: getToken(),
  currentUser: getCurrentUser(),
})

const getters = {
  nicknameFirstWord: state => {
    if (!state.currentUser) return;
    let nickname = state.currentUser.nickname
    if (nickname) {
      return nickname.slice(0, 1);
    } else {
      return '';
    }
  }
}

const actions = {
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      createToken(username.trim(), password)
        .then(token => {
          commit('SET_TOKEN', token);
          setToken(token);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  logout({ commit }) {
    commit('SET_TOKEN', '');
    commit('SET_CURRENT_USER', '');
    removeToken();
    removeCurrentUser();
  },
  fetchCurrentUser({ commit }) {
    return new Promise((resolve, reject) => {
      me()
        .then(currentUser => {
          console.log(currentUser)
          commit('SET_CURRENT_USER', currentUser);
          setCurrentUser(currentUser);
          resolve(currentUser);
        })
        .catch(error => {
          reject(error);
        })
    })
  }
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_CURRENT_USER: (state, currentUser) => {
    state.currentUser = currentUser;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}