import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './SalaryTable.less';
import PropTypes from 'prop-types';

class SalaryTable extends PureComponent {
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
      <div className="salary-table-area">
        <div className="row">
          <div className="detail-block last-surplus-detail">
            <span className="num">66,666.00</span>
            <span className="label">上月累计结余</span>
          </div>
          <div className="detail-block salary-detail">
            <span className="num">66,666.00</span>
            <span className="label">本月计税工资</span>
          </div>
        </div>
        <div className="row">
          <div className="detail-block receive-detail">
            <span className="num highlight">66,666.00</span>
            <span className="label">本月领取</span>
          </div>
          <div className="detail-block cur-surplus-detail">
            <span className="num">66,666.00</span>
            <span className="label">本月结余</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buttonName: state.products.items,
});

export default connect(mapStateToProps)(SalaryTable);
