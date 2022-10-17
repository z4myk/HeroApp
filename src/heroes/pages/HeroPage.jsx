import React, {useMemo} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useHeroes } from '../hooks/useHeroes';
export const HeroPage = () => {

    const {heroId} = useParams();
    const { getHeroById } = useHeroes();
    const hero = getHeroById(parseInt( heroId ))
    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img  src={hero.images.lg} alt={hero.name} className="img-thumbnail"/>
            </div>
            <div className="col-8">
                <h3>
                    {hero.name}
                </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b> Alter Ego: </b>
                        {hero.biography.alterEgos}
                    </li>
                    <li className="list-group-item">
                        <b> Publisher: </b>
                        {hero.biography.publisher}
                    </li>
                    <li className="list-group-item">
                        <b> first appareance ego: </b>
                        {hero.biography.firstAppearance}
                    </li>
                    <li className='list-group-item'>
                    <b>Alias : </b>
                    {hero.biography.aliases}
                </li>
                <li className='list-group-item'>
                    <b>Connections : </b>
                    {hero.connections.groupAffiliation}
                </li>
                </ul>
                <p>{hero.characters}</p>
                <button className="btn btn-primary w-100" onClick={onNavigateBack}>Volver</button>
            </div>
        </div>
    )
}
