import {useContext} from 'react'
import {HeroesContext} from '../context/HeroesContext';

export const useHeroes = () => {
    const{
        state: {data, isLoading,},
        actions: {getHeroById,getHeroByName,getHeroesByPublishers,getPublishers},
    } = useContext(HeroesContext)


    return {data, isLoading, getHeroById, getHeroesByPublishers, getPublishers, getHeroByName}
}
