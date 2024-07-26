// FilmForm.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFilmContext } from '../context/FilmContext';
import './Form.css';

const FilmForm: React.FC = () => {
  const { films, addFilm, updateFilm } = useFilmContext();
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [director, setDirector] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const film = films.find(film => film.id === id);
      if (film) {
        setTitle(film.title);
        setTime(film.time);
        setDirector(film.director);
        setImageUrl(film.imageUrl || '');
      }
    }
  }, [id, films]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFilm = { id: id || Date.now().toString(), title, time, director, imageUrl };
    if (id) {
      updateFilm(newFilm);
    } else {
      addFilm(newFilm);
    }
    navigate('/dashboard');
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === '') {
      setTime(value);
    }
  };

  return (
    <div className="form-container">
      <h2>{id ? 'Edit Film' : 'Create Film'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input 
            type="text" 
            id="time" 
            value={time} 
            onChange={handleTimeChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="director">Director</label>
          <input 
            type="text" 
            id="director" 
            value={director} 
            onChange={(e) => setDirector(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input 
            type="text" 
            id="imageUrl" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
          />
        </div>
        <button type="submit" className="submit-button">{id ? 'Update Film' : 'Create Film'}</button>
      </form>
    </div>
  );
}

export default FilmForm;
