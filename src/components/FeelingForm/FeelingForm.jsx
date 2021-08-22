import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './FeelingForm.css';

function FeelingForm() {

    // setup our constants to allow us to use the
    // files we're importing above
    // 
    // navigate to another page on click
    const history = useHistory();
    //
    // send local state to global state (reducer)
    const dispatch = useDispatch();

    // setup our local state to store the value
    // of the input field for "feelings" which
    // will be sent to global state later
    let [feeling, setFeeling] = useState('');

    // make sure the local feeling state got updated
    // when we click button (verify this before making
    // the user go on to the next enpoint route)
    console.log('your feeling is:', feeling);

    const goToUnderstanding = (event) => {
        // prevents page from reloading on form submit
        event.preventDefault();

        if (1 <= feeling <= 5) {
            // dispatch local state to global state via the
            // feelingReducer in the index.js file
            dispatch({
                type: 'FEELING_FORM_INPUT',
                payload: feeling
            });

            // useHistory to push us to the desired route
            history.push('/understanding');
        }else if (feeling < 1 || feeling > 5) {
            alert('Please enter a number value of 1 through 5');
        }
    }

    return (
        <>
            <h1> How are you feeling today? </h1>
            <p> Feeling? </p>
            <form>
                <input id="feelingInput"
                    required
                    type="number" min="1" max="5"
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                    placeholder="Feeling"
                />
                <button onClick={goToUnderstanding}>NEXT</button>
            </form>
        </>
    );
}

export default FeelingForm;