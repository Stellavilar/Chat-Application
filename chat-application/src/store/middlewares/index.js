import { applyMiddleware } from 'redux';

import loggerMW from './logger';

export default applyMiddleware (
    loggerMW,
);