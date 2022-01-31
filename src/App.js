import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [movieName, setMovieName] = useState('');
    const [review, setReview] = useState('');
    const [movieReviewList, setMovieReviewList] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/api/get").then((response) => {
            setMovieReviewList(response.data)
        })
    },[])

    const deleteReview = (movie) => {
        axios.delete(`http://localhost:3001/api/delete/${movie}`)
    }
    const submitReview = () => {
        axios.post("http://localhost:3001/api/insert", {
            movieName: movieName, movieReview: review
        });

        setMovieReviewList([...movieReviewList, {movieName: movieName, movieReview: review}]);

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
                {movieReviewList.map((item) => {
                    return (<div className="card">

                        <h1> MovieName: {item.movieName}</h1>
                        <p>MovieReview: {item.movieReview}</p>
                        <button onClick={() => {
                            deleteReview(item.movieName);
                        }}>Delete
                        </button>
                        <input id='updateInput' type='text'/>
                        <button>Update</button>

                    </div>)
                })}
            </div>
        </div>
    );
}

export default App;
