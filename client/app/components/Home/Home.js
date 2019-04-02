import React, { Component } from 'react';
import 'whatwg-fetch';
import { connect } from "react-redux";
import { addDates } from '../../action';
class Home extends Component {
  constructor(props) {
    super(props);

    this.newCounter = this.newCounter.bind(this);
  }

  componentDidMount() {
    let d = new Date(2019,2,27);
    fetch('/api/getData?date='+d)
      .then(res => res.json())
      .then(json => {
        this.props.addDates(json)
        this.setState({
          counters: json
        });
      });
  }

  newCounter() {
    fetch('/api/counters', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
      });
  }
  render() {
    const { dates } = this.props;
    return (
      <React.Fragment>
        <p>Timestamps:</p>

        <ul>
          { dates.map((element, i) => (
            <li key={i}>
              <span>{element.target_date} </span> | <span>{element.task}</span> | <span>{element.status}</span>
            </li>
          )) }
        </ul>

        <button onClick={this.newCounter}>Genereate New Collection</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { dates: state.dates };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addDates: dates => dispatch(addDates(dates))
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
