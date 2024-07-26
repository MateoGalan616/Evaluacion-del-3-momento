import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Character {
  id: number;
  name: string;
  role: string;
}

interface CharacterContextType {
  characters: Character[];
  addCharacter: (character: Character) => void;
  deleteCharacter: (id: number) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacterContext must be used within a CharacterProvider');
  }
  return context;
};

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const addCharacter = (character: Character) => {
    setCharacters([...characters, character]);
  };

  const deleteCharacter = (id: number) => {
    setCharacters(characters.filter(character => character.id !== id));
  };

  return (
    <CharacterContext.Provider value={{ characters, addCharacter, deleteCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
