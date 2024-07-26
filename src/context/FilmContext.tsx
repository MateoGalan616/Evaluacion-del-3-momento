import React, { createContext, useContext, useState, useEffect } from 'react';

interface Film {
  id: string;
  title: string;
  time: string;
  director: string;
  imageUrl?: string;
}

interface FilmContextProps {
  films: Film[];
  addFilm: (film: Film) => void;
  updateFilm: (film: Film) => void;
  deleteFilm: (id: string) => void;
}

const FilmContext = createContext<FilmContextProps | undefined>(undefined);

export const useFilmContext = () => {
  const context = useContext(FilmContext);
  if (!context) {
    throw new Error('useFilmContext must be used within a FilmProvider');
  }
  return context;
};

export const FilmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    const storedFilms = JSON.parse(localStorage.getItem('films') || '[]');
    setFilms(storedFilms);
  }, []);

  useEffect(() => {
    localStorage.setItem('films', JSON.stringify(films));
  }, [films]);

  const addFilm = (film: Film) => {
    setFilms([...films, film]);
  };

  const updateFilm = (updatedFilm: Film) => {
    setFilms(films.map(film => (film.id === updatedFilm.id ? updatedFilm : film)));
  };

  const deleteFilm = (id: string) => {
    setFilms(films.filter(film => film.id !== id));
  };

  return (
    <FilmContext.Provider value={{ films, addFilm, updateFilm, deleteFilm }}>
      {children}
    </FilmContext.Provider>
  );
};
