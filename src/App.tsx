import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import FilmForm from './components/FilmForm';
import SceneForm from './components/SceneForm';
import CharacterForm from './components/CharacterForm';
import SceneDashboard from './components/SceneDashboard';
import CharacterDashboard from './components/CharacterDashboard';
import NavigationBar from './components/NavigationBar';
import { FilmProvider } from './context/FilmContext';
import { SceneProvider } from './context/SceneContext';
import { CharacterProvider } from './context/CharacterContext';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="main-content">
        <FilmProvider>
          <SceneProvider>
            <CharacterProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create" element={<FilmForm />} />
                <Route path="/film/:id" element={<FilmForm />} />
                <Route path="/scenes" element={<SceneDashboard />} />
                <Route path="/create-scene" element={<SceneForm />} />
                <Route path="/scene/:id" element={<SceneForm />} />
                <Route path="/characters" element={<CharacterDashboard />} />
                <Route path="/create-character" element={<CharacterForm />} />
                <Route path="/character/:id" element={<CharacterForm />} />
              </Routes>
            </CharacterProvider>
          </SceneProvider>
        </FilmProvider>
      </div>
    </Router>
  );
}

export default App;
