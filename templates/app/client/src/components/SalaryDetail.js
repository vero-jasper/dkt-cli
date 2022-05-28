import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './SalaryDetail.less';
import PropTypes from 'prop-types';

class SalaryDetail extends PureComponent {
  constructor(props) {
    super(props);
  }

  // static propTypes = {
  //   buttonName: PropTypes.array.isRequired
  // }
  // static defaultProps = {
  //   buttonName: ''
  // }

  render() {
    return (
      <div className="salary-detail-area">
        <div className="title">本月领取详情</div>
        <div className="row">
          <span>本月领取</span>
          <span className="num">7,777.00</span>
        </div>
        <div className="row">
          <span>本月不计税工资</span>
          <span className="num">+20.00</span>
        </div>
        <div className="row">
          <span>
            实际个税<i className="desc">个税抵扣项：-1,000.00</i>
          </span>
          <span className="num">-20,000.00</span>
        </div>
        <div className="line-seperator" />
        <div className="row row-bold salary">
          <span>实发工资</span>
          <span className="num">57,757.00</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buttonName: state.products.items,
});

export default connect(mapStateToProps)(SalaryDetail);
