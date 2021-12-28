import Vue from 'vue'
import App from './App.vue'
import Particles from 'particles.vue'
import apiKeyConf from "../keys.config";
import axios from 'axios'
import qs from 'qs'
// import express from 'express'

Vue.use(Particles)
Vue.use( axios)

var authMixin = {
  
  created: function () {

  },
  mounted() {
  },
  data() {
    return {
      apiKeys: apiKeyConf,
    };
  },
  methods: {
    getAuthToken() {
      let token = ""
      var client_id = this.apiKeys.CLIENT_ID;
      var client_secret = this.apiKeys.CLIENT_SECRET;
      
      const headers = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: client_id,
          password: client_secret,
        },
      };
      const data = {
        grant_type: 'client_credentials',
      };

      axios
      .post('https://accounts.spotify.com/api/token',qs.stringify(data),headers)
      .then(response => (token = response.data.access_token))

      return token
  }

    },
    
};

new Vue({
  mixins:[authMixin],
  el: '#app',
  render: h => h(App)
})
