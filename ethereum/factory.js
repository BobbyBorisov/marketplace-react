import web3 from './web3';
import SaleFactory from '../build/contracts/SaleFactory.json';

console.log(SaleFactory.abi);
const instance = new web3.eth.Contract(
  SaleFactory.abi,
  '0x75510e249f9edb14e1b8b9677ce875d89987c0df'
);

export default instance;
