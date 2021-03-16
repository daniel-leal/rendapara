import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://ce.banpara.b.br/fundoesperancaws/',
  // baseURL: 'https://srvsuins/fundoesperancaws/',
  // baseURL: 'http://desenv-suins/rendapara-api',
  baseURL: 'https://ce.banpara.b.br/rendapara-api',
});

// export const api = axios.create({
//   // baseURL: 'https://ce.banpara.b.br/fundoesperancaws/',
//   // baseURL: 'https://srvsuins/fundoesperancaws/',
//   // baseURL: 'http://desenv-suins/rendapara-api',
//   baseURL: 'https://srvsuins/rendapara-api',
// });
