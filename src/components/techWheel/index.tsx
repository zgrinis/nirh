import { useEffect, useState } from 'react';
import './techWheel.scss';
import { techs } from './techs';

let timer:NodeJS.Timeout;
const rndOrder = getRandomOrderArray(techs.length - 1);

export function TechWheel(){
    const [active,setActive] = useState(rndOrder[0]);
    const [hovered,setHovered] = useState(false);

    useEffect(()=>{
        if(hovered){
            clearTimeout(timer);
            return;
        }

        timer = setTimeout(()=>{
            clearTimeout(timer);
            let currIndex = rndOrder.indexOf(active) + 1;
            if(currIndex >= rndOrder.length ) currIndex = 0;
            setActive(rndOrder[currIndex])
        },3000)

        return () => {
            clearTimeout(timer);
        }
    },[active,hovered])
    return <div className="tech-wheel">
        <div className="tech-wheel-active">
            <div className="tech-wheel-active-content" key={active}>
                <div className="tech-wheel-heading">
                    {techs[active].name}
                </div>
                <div>
                    Skill level: <b>{techs[active].skill}</b>
                </div>
            </div>
        </div>
        <div className="tech-wheel-content">
            {techs.map(({icon,size},index)=>{
                const rotate = 360 / techs.length * index;

                return <div 
                    className="tech-wheel-item-wrap" 
                    style={{transform:`rotate(${rotate}deg) translateX(-50%)`}}
                    key={icon}
                >
                    <div className={`tech-wheel-btn-wrap${active === index? ' --active':''}`}>
                        <button
                            className={`tech-wheel-item${size ? ` --${size}`:''}`}
                            style={{transform:`rotate(-${rotate}deg)`}}
                            onClick={()=>{setActive(index)}}
                            onMouseEnter={()=>{
                                setHovered(true);
                                setActive(index);
                            }}
                            onMouseLeave={()=>{
                                setHovered(false);
                            }}
                        >
                            <i className={`icon-${icon}`}></i>
                        </button>
                    </div>
                </div>
            })}
        </div>
    </div>
}

function getRandomOrderArray(n:number) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    // Create an array of indexes from 0 to n
    const array = Array.from({ length: n + 1 }, (_, index) => index);

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
}