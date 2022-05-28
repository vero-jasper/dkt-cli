import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProducts } from '../stores/actions/productActions';
import './Index.less';

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
          <p>Hello World!</p>
        </div>
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
