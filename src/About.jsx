import React from 'react'
import Common from './Common'
import service from '../src/img/service.png'


export default function About() {
    return (
        <div>
            <Common name='Welcome to About  page' imgsrc={service} visit="/contact" btnname="Conact us" />
        </div>
    )
}
