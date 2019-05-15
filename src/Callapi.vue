<template>
  <div id="app">

      <div class="jumbotron text-center" style="margin-bottom:0">
          <h1>My First VUE.JS Project with call API REST</h1>
      </div>
      
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand>Menu</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                  <b-nav-item href="#">Connexion</b-nav-item>
                  <b-nav-item>
                  <router-link to="/">Liste des Produits</router-link>
                  </b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                  <b-nav-form>
                      <b-form-input  v-model="message" size="sm" class="mr-sm-2" placeholder="Search">{{message}}</b-form-input>
                      <router-link :to="{ name: 'Search', params: { name : message } }" tag="button" size="sm" class="my-2 my-sm-0" >Search</router-link>
                  </b-nav-form>
              </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <router-view/> 
  
      <div class="jumbotron text-center" style="margin-bottom:0">
          <p>&copy; Copyright 2019 Gallot Benjamin</p>
      </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      message: null
    }
  }
}
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  }
  #footer {
    background-color: #17a2b8!important;
  }
  a {
    color: rgba(255, 255, 255, 0.5);
  }
</style>
