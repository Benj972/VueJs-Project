<template>
  <div class="test" id="app">
      <ul id="example-1">
        <b-list-group horizontal class="d-flex w-100 justify-content-between">
          <li v-for="product in products">
              <router-link :to="{ name: 'Product', params: {id: product.id } }">
                  <h4> {{ product.name}} </h4>
                  <img v-bind:src = product.configurations[0].images[0].url v-bind:alt= product.name>
              </router-link>
          </li>
        </b-list-group>
      </ul>
  </div>
</template>
<script>
const axios = require('axios');

export default {
  data() {
    return {
      products: null
    }
  },
  mounted () {
  axios({
      method: 'post',
      url:"api/search",
      params: {
          name : null
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }  
  })
    .then(response => {
        this.products = response.data
    })
  }
}
</script>
<style scoped>
    #example-1{
    display: flex;
  }
  ul{
    list-style:none;
  }
  h4{
    text-align: center;
    color: #17a2b8;
  }
</style>