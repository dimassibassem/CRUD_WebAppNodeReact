import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {

    const [movieName, setMovieName] = useState('');
    const [review, setReview] = useState('');

    const submitReview = () => {
        axios.post("http://localhost:3001/api/insert", {
            movieName: movieName, movieReview: review
        }).then(() => {
            alert('Successfully added')
        })
    }
    return (
        <div className="App">
            <h1>CRUD Application:</h1>
            <div className='form'>
                <label>
                    Movie Name:
                </label>
                <input type='text' name='movieName' onChange={(e) => {
                    setMovieName(e.target.value);
                }}/>
                <label>
                    Review:
                </label>
                <input type='text' name='review' onChange={(e) => {
                    setReview(e.target.value);
                }}/>
                <button onClick={submitReview}>Submit</button>
            </div>
        </div>
    );
}

export default App;
