import React, { useState } from 'react';
import Timer from '../timer/Timer';
import Actions from '../actions/Actions';

import {AppContainer, PageHeading} from './StopWatchStyles';

const StopWatch = () => {
  const [counter, setCounter] = useState(0);
  return (
    <AppContainer>
        <PageHeading>Stop Watch</PageHeading>
        <Timer counter={counter}/>
        <Actions counter={counter} setCounter={setCounter}/>
    </AppContainer>
  );
}

export default StopWatch;
