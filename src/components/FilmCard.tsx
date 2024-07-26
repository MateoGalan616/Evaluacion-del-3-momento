import React from 'react';
import { Link } from 'react-router-dom';
import { useFilmContext } from '../context/FilmContext';
import './FilmCard.css';

interface FilmCardProps {
  film: {
    id: string;
    title: string;
    time: string;
    director: string;
    imageUrl?: string;
  };
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const { deleteFilm } = useFilmContext();

  return (
    <div className="film-card">
      {film.imageUrl && <img src={film.imageUrl} alt={film.title} className="film-image" />}
      <h3>{film.title}</h3>
      <p>{film.director}</p>
      <p>{film.time}</p>
      <Link to={`/edit/${film.id}`} className="edit-button">Edit</Link>
      <button onClick={() => deleteFilm(film.id)} className="delete-button">Delete</button>
    </div>
  );
}

export default FilmCard;
