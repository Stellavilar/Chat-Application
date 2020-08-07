import { applyMiddleware } from 'redux';

import loggerMW from './logger';
import routeMW from './routes';

export default applyMiddleware (
    loggerMW,
    routeMW,
);