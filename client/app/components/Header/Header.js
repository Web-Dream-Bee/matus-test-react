import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { addDates } from '../../action';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(date) {
    this.setState({
      startDate: date
    });

    fetch('/api/getData?date='+date)
    .then(res => res.json())
    .then(json => {
      this.props.addDates(json)
      this.setState({
        counters: json
      });
    });
  }

  render() {
    return (
      <header>
        <img className="logo" src="/assets/img/logo.svg" width="100" height="100" />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDates: dates => dispatch(addDates(dates))
  };
}

export default connect(null,mapDispatchToProps)(Header);

