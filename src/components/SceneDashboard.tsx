import React from 'react';
import { Link } from 'react-router-dom';
import { useSceneContext } from '../context/SceneContext';
import './Dashboard.css';

const SceneDashboard: React.FC = () => {
  const { scenes, deleteScene } = useSceneContext();

  return (
    <div className="dashboard">
      <h2>Scenes</h2>
      <div className="film-list">
        {scenes.map(scene => (
          <div key={scene.id} className="film-item">
            <div className="film-details">
              <h3>{scene.title}</h3>
              <p>{scene.description}</p>
            </div>
            <div className="film-actions">
              <Link to={`/scene/${scene.id}`} className="edit-button">Edit</Link>
              <button onClick={() => deleteScene(scene.id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/create-scene" className="add-film">+</Link>
    </div>
  );
}

export default SceneDashboard;
