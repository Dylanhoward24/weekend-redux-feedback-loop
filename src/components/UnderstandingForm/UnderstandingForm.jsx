import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UnderstandingForm() {

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
    let [understanding, setUnderstanding] = useState('');

    // make sure the local understanding state got updated
    // when we click button (verify this before making
    // the user go on to the next enpoint route)
    console.log('your understanding is:', understanding);

    const goToSupport = (event) => {
        // prevents page from reloading on form submit
        event.preventDefault();

        if (1 <= understanding <= 5) {
            // dispatch local state to global state via the
            // understandingReducer in the index.js file
            dispatch({
                type: 'UNDERSTANDING_FORM_INPUT',
                payload: {understanding}
            });

            // useHistory to push us to the desired route
            // history.push('/understanding');
        }else if (understanding < 1 || understanding > 5) {
            alert('Please enter a number value of 1 through 5');
            return null;
        }
    }

    return (
        <>
            <h1> How well are you understanding the content? </h1>
            <p> Understanding? </p>
            <form>
                <input
                    required
                    type="number" min="1" max="5"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}
                    placeholder="Understanding"
                />
                <button onClick={goToSupport}>NEXT</button>
            </form>
        </>
    );
}

export default UnderstandingForm;