import { useEffect, useState } from 'react';
import {ActionsContainer, Button} from './ActionsStyles';
const Actions = ({ counter, setCounter }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    let timerId;

    useEffect(() => {
        timerId = isPlaying && setInterval(()=> {
            setCounter(counter => counter+1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [isPlaying]);

    const onPlay = () => (setIsPlaying(true));
    const onPause = () => {
        isPlaying && setIsPlaying(false);
        timerId && clearInterval(timerId);
    };
    const onStop = () => {
        isPlaying && setIsPlaying(false);
        timerId && clearInterval(timerId);
        setCounter(0);
    };
    return (
        <ActionsContainer>
            <Button onClick={onPause} disabled={!isPlaying}>Pause</Button>
            <Button onClick={onPlay}>Play</Button>
            <Button onClick={onStop} disabled={!isPlaying && counter===0}>Stop</Button>
        </ActionsContainer>
    );
};
export default Actions;