import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../src/img/web.png'
import Common from './Common'
export default function Home() {
    return (
        <div>
           <Common  name='Grow your business with AppLab' imgsrc={web} visit="/service" btnname="Get start" />
        </div>
    )
}
