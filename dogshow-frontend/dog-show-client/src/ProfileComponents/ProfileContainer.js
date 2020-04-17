import React, { Component } from 'react';
import Dog from './Dog'
import NewDogForm from './NewDogForm'

class ProfileContainer extends Component {

  
  render() {
    console.log(this.props)

    let {username, dogs} = this.props.user
    console.log(dogs)
    let arrayOfComponents = dogs.map(dog => 
      
      {return <Dog key={dog.id} dog={dog} removeOneDog={this.props.removeOneDog}/> })



    return (
      <div>
        <h2>Welcome back, {username}! </h2>
        <h3>Here are your currently registered pups:</h3>

        <div style={{display:'flex',padding:'50px'}}>
          {arrayOfComponents}
        </div>

        <NewDogForm user={this.props.user} token={this.props.token} addOneDog={this.props.addOneDog}/>

      </div>
    );
  }

}

export default ProfileContainer;