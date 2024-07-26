import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';
import './Form.css';

const CharacterForm: React.FC = () => {
  const { addCharacter, characters } = useCharacterContext();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedCharacters = localStorage.getItem('characters');
    if (storedCharacters) {
      const parsedCharacters = JSON.parse(storedCharacters);
      const characterToEdit = parsedCharacters.find((character: any) => character.id === Number(id));
      if (characterToEdit) {
        setName(characterToEdit.name);
        setRole(characterToEdit.role);
      }
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCharacter = { id: id ? Number(id) : Date.now(), name, role };
    const updatedCharacters = [...characters, newCharacter];
    addCharacter(newCharacter);
    localStorage.setItem('characters', JSON.stringify(updatedCharacters));
    navigate('/characters');
  };

  return (
    <div className="form-container">
      <h2>{id ? 'Edit Character' : 'Create Character'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">{id ? 'Update Character' : 'Create Character'}</button>
      </form>
    </div>
  );
};

export default CharacterForm;
