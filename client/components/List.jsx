import React from 'react'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someString: 'text',
      someArr: []
    };
    //this.someStringInput = this.someStringInput.bind(this);
  }

  someStringInput () {
    console.log(this.refs.textInput.value)
    this.setState({
      someString: this.refs.textInput.value
    })
    this.state.someArr.push(this.refs.textInput.value);
    console.log(this.state.someArr)
  }

  render() {
    return (
      <div>
       A List <input ref='textInput' type='text' placeholder='text'></input>
       <br></br>
       <input type='button' value='a button' onClick={this.someStringInput.bind(this)}></input>
      </div>
    )
  }
}

export default List;