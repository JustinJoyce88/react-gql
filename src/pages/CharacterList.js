import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  const { loading, error, data } = useCharacters();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong...</div>;
  }
  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => (
        <Link to={`/${character.id}`}>
          <img alt={character.name} src={character.image} />
          <h2>{character.name}</h2>
        </Link>
      ))}
    </div>
  );
}
