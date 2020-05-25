import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default class OpportunitiesList extends React.Component {

  PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  URL = 'http://calzatefe.eastus.cloudapp.azure.com:8080/api/opportunities';
  state = {
    opportunities: []
  }

  componentDidMount() {
    axios.get(this.PROXY_URL+this.URL)
      .then(res => {
        const opportunities = res.data.data;
        this.setState({ opportunities });
      })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Goverment App in ReactJS
        </p>
      </header>
      <section>
      { this.state.opportunities.map(opportunity => <ul><li>{opportunity.number}</li><li>{opportunity.title}</li><li>{opportunity.agency}</li><li>{opportunity.status}</li><li>{opportunity.posted}</li><li>{opportunity.close}</li></ul>)}
      </section>
    </div>  
    )
  }
}