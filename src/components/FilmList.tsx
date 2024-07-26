// src/components/FilmList.tsx
import React, { useEffect, useState } from 'react';
import { getFilms } from '../services/apiService';

const FilmList: React.FC = () => {
  const [films, setFilms] = useState<any[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getFilms();
        setFilms(data);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div>
      <h1>Film List</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <p>{film.director}</p>
            <p>{film.time}</p>
            <img src={film.imageUrl} alt={film.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
