import React from 'react'
import { InfoSection, Pricing } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
    return (
        <>
           <InfoSection {...homeObjOne}></InfoSection>
           <InfoSection {...homeObjTwo}></InfoSection> 
           <InfoSection {...homeObjThree}></InfoSection>
           <Pricing /> 
           <InfoSection {...homeObjFour}></InfoSection>  
        </>
    )
}

export default Home
