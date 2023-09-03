import React, { useEffect, useState } from 'react';
import { TimerContainer, CountDisplayer, Label, SeparateDiv } from './TimerStyles';

const Seperator = () => {
    return (<SeparateDiv> : </SeparateDiv>)
}
const Timer = ({ counter }) => {
    const [timer, setTimer] = useState({h:0, m:0, s:0});
    
    const deriveTime = (counter) => {
        const h = Math.floor(counter/3600);
        const m = Math.floor((counter-(h*3600))/60);
        const s = Math.floor((counter-(m*60)));
        setTimer({h, m , s})
    }

    useEffect(()=> {
        deriveTime(counter);
    }, [counter]);

    const displayNum = (n) => (n<10 ? `0${n}`: n);
    
    const { h, m, s } = timer;
    return (
        <TimerContainer>
            <div>
                <CountDisplayer>{displayNum(h)}</CountDisplayer>
                <Label>Hours</Label>
            </div>
            <Seperator />
            <div>
                <CountDisplayer>{displayNum(m)}</CountDisplayer>
                <Label>Minutes</Label>
            </div>
            <Seperator />
            <div>
                <CountDisplayer>{displayNum(s)}</CountDisplayer>
                <Label>Seconds</Label>
            </div>
        </TimerContainer>
    );
};
export default Timer;