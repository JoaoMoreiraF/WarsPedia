import { CharactersPage } from '../pages/Characters';
import { FilmsPage } from '../pages/Films';
import HomePage from '../pages/Home';

export const routes = [
  {
    title: 'Home',
    component: HomePage,
    path: '/',
    exact: true
  },
  {
    title: 'Personajes',
    component: CharactersPage,
    path: '/personajes',
    exact: true
  },
  {
    title: 'Películas',
    component: FilmsPage,
    path: '/peliculas',
    exact: true
  }
]
