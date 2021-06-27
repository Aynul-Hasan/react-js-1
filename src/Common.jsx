import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../src/img/web.png'

export default function Common(props) {
    return (
        <div>
             <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 col-10 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name
                                        }
                                     </h1>
                                     <h2 className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, accusamus!</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-outline-dark">{props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-10 order-1 order-lg-2">
                                        <img src={props.imgsrc} alt="" className="img-fluid animated "/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}