import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Header.less';
import PropTypes from 'prop-types';

class Header extends PureComponent {
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
    // let { buttonName } = this.props;
    return (
      <div className="header-area">
        <div className="inner">
          <div className="current-date">2018.07</div>
          <div className="line-seperator" />
          <div className="monthly-salary">
            <div className="num">88,888.00</div>
            <div className="txt">本月可领取金额（元）</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buttonName: state.products.items,
});

export default connect(mapStateToProps)(Header);
