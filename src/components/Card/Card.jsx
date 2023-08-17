/* eslint-disable react/prop-types */
import React from 'react'
import "./Card.scss"
import {building,reactjs,redux,git,javascript,typescript,html} from "./../../assets"
const Card = ({year,month,company,Project}) => {
  return (
    <div>
            <section className="card-section">
                <div className="card">
                    <div className="flip-card">
                        <div className="flip-card__container">
                            <div className="card-front">
                                <div className="card-front__tp card-front__tp--city">
                                <img style={{width:"40px",height:"4 0px"}} src={building} alt=" "/>

                               <h6 className="card-front__heading">
                               {company}
                            </h6>
                            <p className="card-front__text-price">
                                From {month} {year}
                            </p>
                                </div>

                                <div className="card-front__bt">
                                    <p className="card-front__text-view card-front__text-view--city">
                                        View me
                                    </p>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className='framework'>
                               <img style={{width:"65px",height:"65px"}} src={reactjs}/>
                               <img style={{width:"65px",height:"65px"}} src={redux}/>

                               </div>
                               <div className='framework'>
                               <img style={{width:"65px",height:"65px"}} src={git}/>
                               <img style={{width:"65px",height:"65px"}} src={javascript}/>

                               </div>
                               <div className='framework'>
                               <img style={{width:"65px",height:"65px"}} src={html}/>
                               <img style={{width:"65px",height:"65px"}} src={typescript}/>

                               </div>
                            </div>
                        </div>
                    </div>

                    <div className="inside-page">
                        <div className="inside-page__container">
                            <h1 className="inside-page__heading inside-page__heading--city">
                                {Project}
                            </h1>
                            <p className="inside-page__text" style={{fontSize:"8px"}}>

                            </p>
                            <a href="#" className="inside-page__btn inside-page__btn--city">View Details</a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Card