import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./book";

export function saveToLocalStorage(key, value) {
    localStorage.setItem(key,value);
}

export function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}


export function BookingForm({ availableTimes, dispatch }) {
    const [isSubmitAllowed, setIsSubmitAllowed] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guest: '',
        occassion: ''
    });

    const navigate = useNavigate();


    const submitForm  = (e) => {
        e.preventDefault();
        if (formData.date === '' || formData.time === '' || formData.guest === '' || formData.occassion === '') {
            setIsValid(false);
            return;
        }

        const allowFormSubmit = submitAPI(formData);
        if (allowFormSubmit) {
            const value = formData.date+' '+formData.time;
            const key ='booking';
            saveToLocalStorage(key, value);
            navigate("/booking-confirmation");
        }
    }

    const updateForm = (e) => {
        const { name,value } = e.target;
        setFormData((prevstate) => ({
            ...prevstate,
            [name]:value
        }));

        if (name === "date") {
            dispatch({ type: 'update_time', date: e.target.value });
        }
    };

    return (
        <div>
        {!isValid && (<p style={{ fontWeight: 'bold', textAlign: 'center',color: 'red' }}>Please Fix Below Errors</p>) }
            <form onSubmit={submitForm } style={{ display: "grid", maxWidth: "200px", gap: "20px", background: 'yellow', padding: '8px', border: '1px solid white', borderRadius: '12px', margin: 'auto' }}>
                <label htmlFor="res-date">Choose date</label>
                <input aria-label="date" name="date" value={formData.date} onChange={updateForm} type="date" id="res-date" />
                {!formData.date && <p style={{ color: 'red', margin: '0px' }}>Please Enter Date</p>}
                <label htmlFor="res-time">Choose time</label>
                <select aria-label="time"  value={formData.time} onChange={updateForm} name="time" id="res-time">
                    <option value="">Select</option>
                    { Array.isArray(availableTimes) && availableTimes.map((time, index) => (
                        <option key={index}>{time}</option>
                    ))}
                </select>

                {!formData.time && <p style={{ color: 'red', margin: '0px' }}>Please Enter Time</p>}
                <label htmlFor="guests">Number of guests</label>
                <input aria-label="guest" name="guest" value={formData.guest} onChange={updateForm} type="number" placeholder="1" min="1" max="10" id="guests" />

                {!formData.guest && <p style={{ color: 'red', margin: '0px' }}>Please Enter Guest</p>}
                <label htmlFor="occasion">Occasion</label>
                <select aria-label="occassion"  value={formData.occassion} name="occassion" onChange={updateForm} id="occasion">
                    <option value="">Select</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                {!formData.occassion && <p style={{ color: 'red', margin: '0px' }}>Please Enter Occassion</p>}    

                <button aria-label="Submit Submit"  disabled={isSubmitAllowed} style={{ background: 'white', border: '1px solid gray', borderRadius: '8px' }} type="submit">Make Your reservation</button>
            </form>
        </div>
    );
}
