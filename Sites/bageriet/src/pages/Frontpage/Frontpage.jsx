import React from 'react'
import { News } from '../../components/News/News'
import { Signup } from '../../components/Signup/Signup'
import { Slider } from '../../components/Slider/Slider'

export function FrontPage(){

    // Forsiden skal indeholde
    // Slider
    // Nyheds-sektion med tre billeder
    // Tilmeld nyhedsbrev
    // Nyeste bagværk

    // Returner Slider komponentet
    return (
        <>  
            <Slider/>
            <News/>
            <Signup/>
        </>
    )
}