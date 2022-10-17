import React from 'react'
import {useFetch} from '../hooks/useFetch';
import { HeroesContext } from './HeroesContext';
export const HeroesProvider = ({children}) => {

    const {data, isLoading} = useFetch('https://akabab.github.io/superhero-api/api/all.json')

     const getHeroById = (id) => {
        return data?.find(hero=> hero.id === id);
    }

    const getHeroesByPublishers = (publisher) => {
        publisher = publisher.toLowerCase().trim()
        if(publisher.length === 0) return [];
      
        return data?.filter( hero => {
            return hero.biography?.publisher?.toLowerCase().includes(publisher)
            }
        )
    }       

        const getPublishers = () => {
            const publishers = data?.map(hero => hero.biography.publisher)
                .filter((value, index, self) => self.indexOf(value) === index && value != null)
            return publishers
        }

        const getHeroByName = (name='') =>{
            name = name.toLowerCase().trim()
            if (name.length===0) return []
            return data?.filter(
                hero => hero.name.toLowerCase().includes(name)
            )
        }
        
        const state = {
            data,
            isLoading,
        }

        const actions = {
            getHeroById,
            getHeroesByPublishers,
            getPublishers,
            getHeroByName,
        }

    return (
      <HeroesContext.Provider value={{state, actions}}>
          {children}
      </HeroesContext.Provider>
    )
}
