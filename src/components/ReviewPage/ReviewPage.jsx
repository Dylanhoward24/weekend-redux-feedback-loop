import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewPage() {

    // setup our constants to allow us to use the
    // files we're importing above
    //
    // navigate to another page on click
    const history = useHistory();

    // useSelector to get global state data into
    // this specific component to be reviewed
    //
    // select the info from each reducer's state...
    // 
    // from feelingReducer
    const feelingInput = useSelector(store => store.feelingReducer);
    //
    // from understandingReducer
    const understandingInput = useSelector(store => store.understandingReducer);
    //
    // from supportedReducer
    const supportedInput = useSelector(store => store.supportedReducer);
    //
    // from commentsReducer
    const commentsInput = useSelector(store => store.commentsReducer);

    // create the function to POST all the data from our 4 previous
    // forms to the database by using axios
    const submitFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feelingInput,
                understanding: understandingInput,
                support: supportedInput,
                comments: commentsInput
            }
        }).then((response) => {
            history.push('/success');
        }).catch((error) => {
            console.log('Error submitting feedback', error);
        });
    }

    return (
        <>
            <h1> Review Your Feedback </h1>
            <p> Feelings: {feelingInput} </p>
            <p> Understanding: {understandingInput} </p>
            <p> Support: {supportedInput} </p>
            <p> Comments: {commentsInput} </p>
            <button onClick={submitFeedback}>SUBMIT</button>
        </>
    );
}

export default ReviewPage;