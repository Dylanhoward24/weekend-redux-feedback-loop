import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SuccessPage.css';

function SuccessPage() {

    // setup our constants to allow us to use the
    // files we're importing above
    // 
    // navigate to another page on click
    const history = useHistory();
    //
    // send local state to global state (reducer)
    const dispatch = useDispatch();

    const resetAndReturnHome = () => {
        clearFeeling();
        clearUnderstanding();
        clearSupport();
        clearComments();
        history.push('/')
    }

    // function that clears the "feeling" value
    const clearFeeling = () => {
        dispatch({
            type: 'FEELING_FORM_INPUT',
            payload: 0
        });
    }

    // function that clears the "understanding" value
    const clearUnderstanding = () => {
        dispatch({
            type: 'UNDERSTANDING_FORM_INPUT',
            payload: 0
        });
    }

    // function that clears the "support" value
    const clearSupport = () => {
        dispatch({
            type: 'SUPPORTED_FORM_INPUT',
            payload: 0
        });
    }

    // function that clears the "comments" value
    const clearComments = () => {
        dispatch({
            type: 'COMMENTS_FORM_INPUT',
            payload: ''
        });
    }

    return (
        <>
            <div className="feedbackDiv">
                <h1> Feedback! </h1>
            </div>
            <div className="thankyouDiv">
                <h1> Thank you! </h1>
                <button onClick={resetAndReturnHome}>Leave New Feedback</button>
            </div>
        </>
    )
}
export default SuccessPage;