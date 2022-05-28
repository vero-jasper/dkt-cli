import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../stores/actions/productActions';
import ReceiveDetail from 'components/ReceiveDetail';
import Header from 'components/Header';
import SalaryDetail from 'components/SalaryDetail';
import SalaryTable from 'components/SalaryTable';
import SalaryTotalDetail from 'components/SalaryTotalDetail';
import PropTypes from 'prop-types';
import '../pages/Index.less';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Test1 ---',
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    let { products } = this.props;
    return (
      <div className="page-index">
        <div className="main-content">
          <Header />
          <SalaryDetail />
          <SalaryTable />
          <SalaryTotalDetail />
          <div className="clearfix" />
        </div>
        {/* <input type="button" value="领取" /> */}
      </div>
    );
  }
}

Index.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  products: state.products.items,
});

export default connect(
  mapStateToProps,
  { fetchProducts },
)(Index);
