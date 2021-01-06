import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

const Signup = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Signup
