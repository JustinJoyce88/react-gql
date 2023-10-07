import React from 'react';
import { useCharacter } from '../hooks/useCharacter';
import { useParams } from 'react-router-dom';

export default function Character() {
  const { id } = useParams();
  const { loading, error, data } = useCharacter(id);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong...</div>;
  }
  return (
    <div className="Character">
      <img alt={data.character.name} src={data.character.image} width={750} height={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => (
            <div>
              <p>
                {episode.name} - <b>{episode.episode}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
