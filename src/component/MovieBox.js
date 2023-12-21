import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap';

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const API_IMG = "https://image.tmdb.org/t/p/w500/"
  return (
    <div className='card text-center bg-warning mb-3'>
        <div className='card-body'>
            <img className='card-img-top' src={API_IMG+poster_path} alt='poster'/>
        </div>
        <div className='card-body'>
            <button type='button' className='btn btn-secondary' onClick={handleShow}>View More</button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>        
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img className='card-img-top' style={{width:'14rem'}} src={API_IMG+poster_path} alt='poster'/>
        <h4>Movie : {title}</h4>
        <h5>IMDB : {vote_average}</h5>
        <h5>Release Date : {release_date}</h5>
        <p><b>Overview :</b> {overview}</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        
     {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={API_IMG+poster_path}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {overview}
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card> */}
    </div>
  )
}

export default MovieBox;
