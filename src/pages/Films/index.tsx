import { filmActionsFunctions } from '../../store/modules/film/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import ContentList from '../../components/content-list';
import { Film, FilmState } from '../../store/modules/film/types';

const { getFilmsRequest } = filmActionsFunctions

export function FilmsPage() {
  const { films }: any = useSelector<FilmState>((state: any) => state.film)
  const dispatch = useDispatch()

  const [filmState, setFilmState] = useState<Film[]>([])

  const getAllFilmsRequest = useCallback(() => {
    dispatch(getFilmsRequest(1))
  }, [films])

  useEffect(() => {
    getAllFilmsRequest()
  }, [])

  useEffect(() => {
    setFilmState(films)
  }, [films])

  return (
    <>
      <ContentList data={filmState} />
    </>
  )
}
