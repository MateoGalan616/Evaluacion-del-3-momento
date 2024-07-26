import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSceneContext } from '../context/SceneContext';
import './Form.css';

const SceneForm: React.FC = () => {
  const { addScene, scenes, updateScene } = useSceneContext();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filmId, setFilmId] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      const sceneToEdit = scenes.find(scene => scene.id === Number(id));
      if (sceneToEdit) {
        setTitle(sceneToEdit.title);
        setDescription(sceneToEdit.description);
      }
    }
  }, [id, scenes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newScene = { 
      id: id ? Number(id) : Date.now(), 
      title, 
      description, 
      filmId: filmId ?? 0 // Asegura que filmId sea un número
    };
    if (id) {
      updateScene(newScene);
    } else {
      addScene(newScene);
    }
    navigate('/scenes');
  };

  return (
    <div className="form-container">
      <h2>{id ? 'Edit Scene' : 'Create Scene'}</h2>
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
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="filmId">Film ID</label>
          <input
            type="number"
            id="filmId"
            value={filmId ?? ''}
            onChange={(e) => setFilmId(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit" className="submit-button">{id ? 'Update Scene' : 'Create Scene'}</button>
      </form>
    </div>
  );
};

export default SceneForm;
