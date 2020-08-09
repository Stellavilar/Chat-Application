import { applyMiddleware } from 'redux';

import loggerMW from './logger';
import routeMW from './routes';
import socketMW from './webSocket';


export default applyMiddleware (
    loggerMW,
    socketMW,
    routeMW,
);