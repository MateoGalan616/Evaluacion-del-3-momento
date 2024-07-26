export interface Film {
    id: number;
    title: string;
    director: string;
    time: string;
}
interface Scene {
    id: number;
    title: string;
    description: string;
    filmId: number;  // Asegúrate de que filmId esté definido aquí
  }
  