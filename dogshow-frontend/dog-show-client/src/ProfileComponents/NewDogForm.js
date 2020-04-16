import React, { Component } from 'react';

class NewDogForm extends Component {

  state = {
    user_id: this.props.user.id,
    name: "",
    breed: "",
    size: "",
    commands: "",
    tricks: "",
    image_url: "",

  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:4000/dogs", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${this.props.token}`
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then((newlyCreatedDog) => {
      this.props.addOneDog(newlyCreatedDog)
    })
}

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Pup Bio:</label><br></br>
        <input type="text" placeholder="Pup Name" autoComplete="off" name="name" value={this.state.name} onChange={this.handleChange} /><br></br>
        <input type="text" placeholder="Pup Breed" autoComplete="off" name="breed" value={this.state.breed} onChange={this.handleChange} /><br></br>
        <input type="text" placeholder="Pup Size" autoComplete="off" name="size" value={this.state.size} onChange={this.handleChange} /><br></br>
        <input type="text" placeholder="Commands Known" autoComplete="off" name="commands" value={this.state.commands} onChange={this.handleChange} /><br></br>
        <input type="text" placeholder="Tricks Known" autoComplete="off" name="tricks" value={this.state.tricks} onChange={this.handleChange} /><br></br>
        <input type="submit" value="Register This Pup!" />
      </form>
    );
  }

}

export default NewDogForm;