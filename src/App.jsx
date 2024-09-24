import { sculptureList } from './data.js';
import {useState} from 'react'

export default function Gallery() {

  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Suivant
      </button>
      <h2>
        <i>{sculpture.name} </i>
        par {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} sur {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}


