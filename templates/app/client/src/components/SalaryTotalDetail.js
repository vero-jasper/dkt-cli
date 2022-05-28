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
      <div className="salary-total-detail-area">
        <div className="title">本月工资明细</div>
        <div className="row">
          <span>本月领取</span>
          <span class="num">7,777.00</span>
        </div>
        <div className="row">
          <span>本月不计税工资</span>
          <span class="num">+20.00</span>
        </div>
        <div className="row">
          <span>
            实际个税<i class="desc">个税抵扣项：-1,000.00</i>
          </span>
          <span class="num">-20,000.00</span>
        </div>
        <div class="line-seperator" />
        <div className="row row-bold salary">
          <span>实发工资</span>
          <span class="num">57,757.00</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buttonName: state.products.items,
});

export default connect(mapStateToProps)(SalaryDetail);
