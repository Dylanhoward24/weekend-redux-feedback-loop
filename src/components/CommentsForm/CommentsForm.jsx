import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CommentsForm() {

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
    let [comments, setComments] = useState('');

    // make sure the local comments state got updated
    // when we click button (verify this before making
    // the user go on to the next enpoint route)
    console.log('your comments is:', comments);

    const goToReview = (event) => {
        // prevents page from reloading on form submit
        event.preventDefault();

        // dispatch local state to global state via the
        // commentsReducer in the index.js file
        dispatch({
            type: 'COMMENTS_FORM_INPUT',
            payload: {comments}
        });

        // useHistory to push us to the desired route
        history.push('/review');
    }

    return (
        <>
            <h1> Any comments you want to leave? </h1>
            <p> Comments </p>
            <form>
                <input
                    type="text"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                    placeholder="Comments"
                />
                <button onClick={goToReview}>NEXT</button>
            </form>
        </>
    );
}

export default CommentsForm;