<template>
  <b-container class="bv-example-row">
    <h3>{{ product.name }} </h3>
    <b-row>
    <b-col cols="4">
      <img v-bind:src = product.configurations[0].images[0].url v-bind:alt= product.name>
    </b-col>
    <b-col cols="8">
      <p>{{ product.description}}</p>
    </b-col>
    </b-row>
    <div>
        <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>    
  </b-container>
</template>
<script>
const axios = require('axios');

export default {
  data() {
    return {
      product: null,
      fields: ['memory', 'color', 'price'],
      items: []
    }
  },
  mounted () {
  axios({
      method: 'get',
      url:"api/products/" + this.$route.params.id,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }  
  }).then(response => {
      this.product = response.data
      const test = this.conf = response.data.configurations;
      test.forEach((element)=> {
        this.items.push(element);
      });
    })
  }
}
</script>
<style scoped>
  p{
      text-align: left;
      margin-top: 30px;
  }

  @media screen and (max-width: 430px){
      .row{
          display : block;
      }
  }
</style>