import React from 'react';

const Dog = ({dog}) => {
  return(
    <div>
      <ol>
        <li>Name: {dog.name}</li>
        <li>Breed: {dog.breed}</li>
        <li>Size: {dog.size}</li>
        <li>Known Commands: {dog.commands}</li>
        <li>Known Tricks: {dog.tricks}</li>
        <li><img src={dog.image_url} alt={"dog"}></img></li>
      </ol>
    </div>
  )
};

export default Dog;