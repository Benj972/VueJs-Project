<template>
  <b-container class="bv-example-row">
      <ul id="example-1">
        <b-list-group horizontal class="d-flex w-100">
          <li v-for="product in products">
              <router-link :to="{ name: 'Product', params: {id: product.id } }">
                <h4> {{ product.name}} </h4>
                <img v-bind:src = product.configurations[0].images[0].url v-bind:alt= product.name>
              </router-link>
          </li>
        </b-list-group>  
      </ul>
      <b-pagination size="md" :total-rows="pageTotal" v-model="currentPage" :per-page="10" @input="getProductsData(currentPage)"></b-pagination>
  </b-container>
</template>

<script>
const axios = require('axios');

export default {
  data() {
    return {
      currentPage: 1,
      limit: 4,
      products: [],
      pageTotal: null
    }
  },
  methods: {
      // Fetches posts when the component is created.
      getProductsData (currentPage) {
      axios.get('api/products?page='+this.currentPage+'&limit='+this.limit)
      .then(response => {
        this.products = response.data._embedded.products
        this.pageTotal = response.data.pages * 10
      })
    }
  },
  //Called when page rendered
  mounted(currentPage){
    this.getProductsData(currentPage)
  }
}
</script>

<style scoped>
  .bv-example-row.container{
    padding-right: 5px;
    padding-left: 5px;
    margin-right: 5px;
    margin-left: 5px;
    width: 100%;
  }
  #example-1{
    display: flex;
  }
  ul{
    list-style:none;
  }
  .list-group.list-group-horizontal{
      justify-content: space-around;
    }
  h4{
    text-align: center;
    color: #17a2b8;
  }
  .col-sm-3{
    background-color: orange;
  }
  @media screen and (max-width: 780px){
    .list-group.list-group-horizontal{
      display : block!important;
    }
  }
</style>
