import React, {Component} from 'react';
import factory from '../ethereum/factory';

class SaleIndex extends Component {
  static async getInitialProps(){
    const sales = await factory.methods.getDeployedSales().call();
    console.log(sales);
    return {sales};
  }

  render(){
    return <div>Sales: {this.props.sales[0]}</div>
  }
}

export default SaleIndex;
