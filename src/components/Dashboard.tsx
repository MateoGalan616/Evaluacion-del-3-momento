import React from 'react';
import { Link } from 'react-router-dom';
import { useFilmContext } from '../context/FilmContext';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { films, deleteFilm } = useFilmContext();

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <h2>Films</h2>
      <div className="film-list">
        {films.map(film => (
          <div key={film.id} className="film-item">
            <div className="film-details">
              <h3>{film.title}</h3>
              <p>{film.director}</p>
              <p>{film.time}</p>
            </div>
            <div className="film-actions">
              <Link to={`/film/${film.id}`} className="edit-button">Edit</Link>
              <button onClick={() => deleteFilm(film.id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/create" className="add-film">+</Link>
    </div>
  );
}

export default Dashboard;
