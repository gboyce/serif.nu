import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/reducers';
import persistState from 'redux-localstorage';

import { initialCalendar } from './reducers/helpers';

const config = {
    slicer: (paths) => (
        (state) => ({
            calendar: {
                currentCalendar: initialCalendar.currentCalendar,
                sections: state.calendar.sections,
                components: state.calendar.components,
                hover: initialCalendar.hover,
                eventOpen: initialCalendar.eventOpen,
                selectedEvents: initialCalendar.eventOpen
            },
            firstVisit: state.firstVisit
        })
    )
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunkMiddleware),
        persistState(['calendar', 'firstVisit'], config)
    )
);

export default store;
