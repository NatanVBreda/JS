import axios from 'axios';

export default {
  methods: {
    fetchData() {
      axios.get('https://app.lojascombate.com.br:8443/HostCombateAPP/ConsultaProdutos?consultar')
        .then(response => {
          // Manipular os dados recebidos
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
    }
  }
}