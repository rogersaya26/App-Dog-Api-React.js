import React from 'react'
import Spinner from './Spinner'

const Card = ({dog, Loading, updateDog}) => {

if(Loading) return <h1>Loading...{<Spinner />}</h1>

  return (
    <div className='card bounce' onClick={() => updateDog(dog.breed.id)} >
      <img src={dog.image} alt='dog' />
      <p>{dog.breed.name}</p>
    </div>
  )
}

export default Card
