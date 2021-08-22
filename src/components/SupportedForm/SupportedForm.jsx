import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SupportedForm() {

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
    let [support, setSupport] = useState('');

    // make sure the local support state got updated
    // when we click button (verify this before making
    // the user go on to the next enpoint route)
    console.log('your support is:', support);

    const goToComments = (event) => {
        // prevents page from reloading on form submit
        event.preventDefault();

        if (1 <= support <= 5) {
            // dispatch local state to global state via the
            // supportReducer in the index.js file
            dispatch({
                type: 'SUPPORTED_FORM_INPUT',
                payload: {support}
            });

            // useHistory to push us to the desired route
            history.push('/comments');
        }else if (support < 1 || support > 5) {
            alert('Please enter a number value of 1 through 5');
            return null;
        }
    }

    return (
        <>
            <h1> How well are you being supported? </h1>
            <p> Support? </p>
            <form>
                <input
                    required
                    type="number" min="1" max="5"
                    value={support}
                    onChange={(event) => setSupport(event.target.value)}
                    placeholder="Support"
                />
                <button onClick={goToComments}>NEXT</button>
            </form>
        </>
    );
}

export default SupportedForm;