const consomeAPI = (cep)=> {
    let resultado = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log(resultado);
} 

consomeAPI("12235060")