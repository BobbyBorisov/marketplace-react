import React, {Component} from 'react';
import factory from '../ethereum/factory';

class SaleIndex extends Component {
  async componentDidMount(){
    const sales = await factory.methods.getDeployedSales().call();
    console.log(sales);
  }

  render(){
    return <div>Sales index</div>
  }
}

export default SaleIndex;
