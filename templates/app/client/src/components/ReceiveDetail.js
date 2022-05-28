import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ReceiveDetail extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let { products } = this.props;
    return <div className="test">{products}</div>;
  }
}

ReceiveDetail.propTypes = {
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  products: state.products.items,
});

export default connect(mapStateToProps)(ReceiveDetail);
