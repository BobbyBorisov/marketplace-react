import React, {Component} from 'react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class SaleIndex extends Component {
  static async getInitialProps(){
    const sales = await factory.methods.getDeployedSales().call();
    console.log(sales);
    return {sales};
  }

  render(){
    return (
      <Layout>
        <div>Sales: {this.props.sales[0]}</div>
      </Layout>
    )
  }
}

export default SaleIndex;
