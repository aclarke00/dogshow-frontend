import React from 'react';

class Dog extends React.Component {

  state = {
    count: 0,
    clicked: false
  }

  handleClicks = () => {
    console.log("Jin is Stupit")
    this.setState({
        count: this.state.count + 1
    })
}

  handleDelete = () => {
    console.log(this.props.dog.id)
    this.props.removeOneDog(this.props.dog.id)
  }
  
  handleEdit = () => {
    console.log(this.state.clicked)

    this.state.clicked === false?
    this.setState({
      clicked: true
    })
    :
    this.setState({
      clicked: false
    })
  }

  render() {
    let {dog} = this.props

      return(
      <div>
        { this.state.clicked === false? 
          
        <div className="card" style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',width:'50%',padding:'50px', maxHeight:'400px'}}>
          <img src={dog.image_url} alt="Avatar" style={{width:"100%"}}/>
        <div className="container" style={{padding:'25px'}}>
          <h4><b>Name: {dog.name}</b></h4>
          <p>Breed: {dog.breed}</p>
          <p>Size: {dog.size}</p>
          <p>Commands Known: {dog.commands}</p>
          <p>Tricks Known: {dog.tricks}</p>
          
          <button onClick={this.handleDelete}>Delete this Pup</button>
          <button onClick={this.handleEdit}>Edit this Pup</button>

                <p>Vote for this Pup</p>
                <p>{dog.name}</p>
                <button onClick={this.handleClicks}>Vote!</button>
                <p>{this.state.count} Votes</p>
                
                
            </div>





              </div>
          // </div>  
          
          :

          <form style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',width:'50%',padding:'50px', maxHeight:'400px'}}>
              <p>Did your pup learn a new command?: <input type="text"/></p>
              <p>Did your pup learn a new trick? <input type="text"/> </p>
              <button type="submit" onClick={this.handleEdit}>Submit</button>


          </form>
          
        }
        </div>
      )    
    }
};

export default Dog;

     /* <ol>
        <li>Name: {dog.name}</li>
        <li>Breed: {dog.breed}</li>
        <li>Size: {dog.size}</li>
        <li>Known Commands: {dog.commands}</li>
        <li>Known Tricks: {dog.tricks}</li>
        <li><img src={dog.image_url} alt={"dog"}></img></li>
      </ol> */