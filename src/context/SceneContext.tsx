import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Scene {
  id: number;
  title: string;
  description: string;
}

interface SceneContextType {
  scenes: Scene[];
  addScene: (scene: Scene) => void;
  deleteScene: (id: number) => void;
  updateScene: (scene: Scene) => void; // Asegúrate de incluir este método
}

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export const useSceneContext = () => {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error('useSceneContext must be used within a SceneProvider');
  }
  return context;
};

export const SceneProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [scenes, setScenes] = useState<Scene[]>([]);

  const addScene = (scene: Scene) => {
    setScenes([...scenes, scene]);
  };

  const deleteScene = (id: number) => {
    setScenes(scenes.filter(scene => scene.id !== id));
  };

  const updateScene = (updatedScene: Scene) => {
    setScenes(scenes.map(scene => (scene.id === updatedScene.id ? updatedScene : scene)));
  };

  return (
    <SceneContext.Provider value={{ scenes, addScene, deleteScene, updateScene }}>
      {children}
    </SceneContext.Provider>
  );
};
