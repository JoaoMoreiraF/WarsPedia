import { peopleActionsFunctions } from '../../store/modules/people/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import ContentList from '../../components/content-list';
import { People, PeopleState } from '../../store/modules/people/types';
import { useLocation } from 'react-router-dom';
import "./styles.scss";

const { getPeopleRequest, resetPeopleRequest } = peopleActionsFunctions

export function CharactersPage() {
  const { people, page,hasResetedFilter, disableObserver, lastAction }: any = useSelector<PeopleState>((state: any) => state.people)
  const dispatch = useDispatch()
  const location = useLocation()

  const [peopleState, setPeopleState] = useState<People[]>([])
  const [currentPage, setCurrentPage] = useState<number>(0)

  const getAllPeopleRequest = useCallback((currentPageParam: number) => {
    dispatch(getPeopleRequest(currentPageParam))
  }, [currentPage])

  useEffect(() => {
    if(lastAction != 'GET_FILTERED_PEOPLE_REQUEST') {
      getAllPeopleRequest(currentPage)
    }
  }, [currentPage])
  
  useEffect(() => {
    if(hasResetedFilter) {
      getAllPeopleRequest(1)
      setCurrentPage(2) 
    }
    
  }, [hasResetedFilter])

  useEffect(() => {
    setCurrentPage(page)
  }, [])

  function resetPeople() {
    dispatch(resetPeopleRequest())
  }

  useEffect(() => {
    setPeopleState(people)
  }, [people])

  useEffect(()=> {
    const intersectionObserver = new IntersectionObserver(entries => {
      if(entries.some(entry => entry.isIntersecting)) {
        console.log('aqui')
        setCurrentPage((currentValue) => currentValue + 1)
      }
    })

    intersectionObserver.observe(document.querySelector('#sentinel') as HTMLInputElement)
    return ()=> {
      intersectionObserver.disconnect() 
      if(location.pathname !== '/personajes') {
        resetPeople()
      }
    }
  }, [disableObserver, location])

  return (
    <>
      <ContentList data={peopleState} />
      <div id='sentinel'></div>
    </>
  )
}
