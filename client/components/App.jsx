import React from 'react'
import List from './List.jsx';
import ListEntry from './ListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: this.props.first,
      last: this.props.last
    };
  }


  changeFirstName(e) {
    console.log('changed name', e.target.value)
    this.setState({
      first: e.target.value
    })
  }

  changeLastName(e) {
    console.log('changed name', e.target.value)
    this.setState({
      last: e.target.value
    })
  }

  render() {
    return (
      <div>
        First Name: <input placeholder={this.props.first} onChange={this.changeFirstName.bind(this)}></input>
        <br></br>
        Last Name: <input placeholder={this.props.last} onChange={this.changeFirstName.bind(this)}></input>
        <List />
      </div>
    )
  }
}

export default App;