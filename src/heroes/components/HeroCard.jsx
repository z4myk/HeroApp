import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,name, biography, images
}) => {

    return (
        <>
            <div className='col animate__animated animate__fadeIn mt-5 '>
                <div className="card">
                    <div className="row no-glutters">
                        <div className="col-4">
                            <img src={images.sm}  alt={name} className="card-img" />
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{biography.fullName}</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        {biography.firstAppearance}
                                    </small>
                                </p>
                                <Link to={`/hero/${id}`}>
                                <button className="btn btn-primary">
                                More   
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
