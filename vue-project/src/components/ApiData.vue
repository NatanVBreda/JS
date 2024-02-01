<template>
  <div>
    <h2 v-if="!hideAllElements && !selectedProduct">Dados da API</h2>
    <input v-model="searchQuery" placeholder="Pesquisar produto" @input="searchProducts" v-if="!hideAllElements" />
    <ul v-if="showApiData && apiData.length > 0 && !hideAllElements">
      <li v-for="product in apiData" :key="product.codigo">
        <button @click="handleProductClick(product)">
          {{ product.descricao }}
        </button>
      </li>
    </ul>

    <!-- Página do Produto -->
    <div v-if="selectedProduct">
      <h2>Página do Produto</h2>
      <p>codigo: {{ selectedProduct.codigo }}</p>
      <p>Preço de Venda: {{ selectedProduct.precoVenda }}</p>
      <p>Comissão: {{ selectedProduct.comissao }}</p>
      <p>Preço de Custo: {{ selectedProduct.precoCusto }}</p>
      <p>Quantidade em Reserva Filial: {{ selectedProduct.qtdReservaFilial }}</p>
      <p>Cor: {{ selectedProduct.cor }}</p>
      <p>Quantidade Estoque Disponível CD: {{ selectedProduct.qtdEstoqueDisponivelCD }}</p>
      <p>Quantidade Estoque Filial: {{ selectedProduct.qtdEstoqueFilial }}</p>
      <p>Quantidade Estoque Filial Disponível: {{ selectedProduct.qtdEstoqFilialDisponivel }}</p>
      <p>Fabricante: {{ selectedProduct.fabricante }}</p>
      <p>Descrição: {{ selectedProduct.descricao }}</p>

      <!-- Botão Voltar -->
      <button @click="showAllElements">Voltar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiData: [],
      searchQuery: '',
      showApiData: true,
      hideAllElements: false,
      selectedProduct: null
    };
  },
  methods: {
    searchProducts() {
      if (this.searchQuery.trim() !== '') {
        axios.get(`https://app.lojascombate.com.br:8443/HostCombateAPP/ConsultaProdutos?consultar=${this.searchQuery}`)
          .then(response => {
            this.apiData = response.data;
            this.showApiData = true;
          })
          .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
          });
      } else {
        this.apiData = [];
        this.showApiData = true;
      }
    },
    handleProductClick(product) {
      this.selectedProduct = product;
      this.hideAllElements = true;
    },
    showAllElements() {
      this.hideAllElements = false;
      this.selectedProduct = null; // Limpar as informações do produto selecionado
    }
  }
};
</script>