import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';
import './Dashboard.css';

const CharacterDashboard: React.FC = () => {
  const { characters, deleteCharacter } = useCharacterContext();

  return (
    <div className="dashboard">
      <h2>Characters</h2>
      <div className="film-list">
        {characters.map(character => (
          <div key={character.id} className="film-item">
            <div className="film-details">
              <h3>{character.name}</h3>
              <p>{character.role}</p>
            </div>
            <div className="film-actions">
              <Link to={`/character/${character.id}`} className="edit-button">Edit</Link>
              <button onClick={() => deleteCharacter(character.id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/create-character" className="add-film">+</Link>
    </div>
  );
}

export default CharacterDashboard;
