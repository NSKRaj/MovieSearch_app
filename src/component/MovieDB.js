import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import "../App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Video from "./movie.mp4";

const MovieDB = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      " https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(API_SEARCH);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
    {/* <div className="myVideo">
          <video src={Video} muted autoPlay loop type="video/mp4" />
    </div> */}
      <Navbar expand="lg" className="bg-warning">
        <Container fluid>
          <Navbar.Brand href="/home">MovieDB App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/home">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchMovie}>
              <Form.Control
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="Search"
                name="query"
                value={query}
                onChange={changeHandler}
              />
              <Button variant="outline-secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h1 style={{color: 'white', textAlign:'center', marginTop:'15rem'}}>Sorry No Movies Found !...</h1>
        )}
      </div>
    </>
  );
};

export default MovieDB;
