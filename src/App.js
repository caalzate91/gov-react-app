import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';

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
        <TableContainer component={Paper}>  
          <Table stickyHeader  aria-label="sticky table">  
              <TableHead>  
              <TableRow>  
                  <TableCell>Id</TableCell>  
                  <TableCell align="right">Number</TableCell>  
                  <TableCell align="right">Title</TableCell>  
                  <TableCell align="right">Agency</TableCell>  
                  <TableCell align="right">Status</TableCell>  
                  <TableCell align="right">Posted Date</TableCell>  
                  <TableCell align="right">Closed Date</TableCell>  
              </TableRow>  
              </TableHead>  
              <TableBody>  
              {  
                  this.state.opportunities.map((p, index) => {  
                  return <TableRow key={index}>  
                      <TableCell component="th" scope="row">  
                      {p.id}  
                      </TableCell>  
                      <TableCell align="right">{p.number}</TableCell>  
                      <TableCell align="right">{p.title}</TableCell>  
                      <TableCell align="right">{p.agency}</TableCell>  
                      <TableCell align="right">{p.status}</TableCell>  
                      <TableCell align="right">{p.posted}</TableCell>  
                      <TableCell align="right">{p.close}</TableCell>  
                  </TableRow>  
                  })  
              }  
              </TableBody>  
          </Table>  
        </TableContainer>
      </section>
    </div>  
    )
  }
}