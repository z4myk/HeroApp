
import React from 'react'

export const Pagination = ({page, increment, decrement, lastPage}) => {
    const prevPage = () => {
        if(page>1){
            decrement()
        }
    }

    const nextPage = () => {
        if(page<lastPage){
            increment()
        }
    }
    

    return (
    <>
        <div className="container d-flex m-4 justify-content-center animate__animated animate__lightSpeedInRight">
            <button className='col-3 btn btn-primary' onClick={prevPage} colorScheme='green'> &lt;</button>
            
                <b className="m-2  text-danger"  >Page <span className='text-danger' >{page} of {lastPage}</span></b>
                <button className='col-3 btn btn-primary' onClick={nextPage} colorScheme='green'> &gt;</button>
        </div>
    </>
    )
}