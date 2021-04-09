import React, {  useState } from 'react';
import Back from './Back';
import Front from './Front';
import "./styles.css";

export default function Card(props) {
    const [fliped, changeFliped] = useState(false)
    const flip = () => {
        console.log('flipping', fliped);
        
        return changeFliped(!fliped);
    }
    const { icon } = props;
    let flipedClass = fliped ? " fliped" : "";
    return (
        <div
            onClick={flip}
            className={`card bp3-card bp3-interactive ${flipedClass}`}>
            
            <Front />
            <Back icon={icon} />
        </div>
    )
}
