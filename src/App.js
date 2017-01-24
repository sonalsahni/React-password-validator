import React, { Component } from 'react';
import './App.css';

function Strength(props) {
  const pass= props.value.toString();
  const specialChar= new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
  const num= new RegExp(/[0-9]/);
  if(pass.length === 0){
    return (<p> </p>);
  }
  if(pass.length < 6 ){
    return(
      <p className="weak">Too short</p>
    )
  }
  if(!num.test(pass)) {
      return (
        <p className="med">Must contain atleast one number</p>
      )
    }
  if(!specialChar.test(pass)) {
      return (
        <p className="med">Must contain atleast one special character</p>
      )
    }
  return(
    <div>
      <p className="good">Strong password</p>
      <input type="submit" value="Submit" />
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={value:'',dis:"true"};
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your password was successfully subitted');
    event.preventDefault();
  }
  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
        <input type="password" value={this.state.value} onChange={this.handleChange} />
        <Strength value={this.state.value} />

        </form>

      </div>
    );
  }
}

export default App;
