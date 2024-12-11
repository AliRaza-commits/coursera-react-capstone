import React, { useReducer, useEffect } from 'react';
import { BookingForm } from './BookingForm';
import { fetchAPI } from './book';

export const initializeTimes  = async () => {
    const times = fetchAPI(new Date());
     return times;
};

export const updateTimes =  (state, action) => {

    if (action.type === 'update_time') {
            const times = fetchAPI(new Date(action.date));
            return times;
    }
    return state ||  ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
};



export function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes, initializeTimes);

    return (
        <div style={{ minHeight: '60vh' }}>
            <h1 style={{ textAlign: 'center' }}>Book Now</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}
