import React from 'react'
import Row  from '../Row/Row'
import requests from '../../../utils/requests'

const RowList = () => {
  return (
    <>
      <Row 
        title= "netflix original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
            {/* <Row 
        title= "Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
        />
            <Row 
        title= "Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={true}
        /> */}
                <Row 
        title= "Action"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
        />
                <Row 
        title= "Comedy"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
        />
                <Row 
        title= "Horror"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
        />
                     <Row 
        title= "Romance"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
        />
                     <Row 
        title= "Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
        />
                     <Row 
        title= "TV Show"
        fetchUrl={requests.fetchTvShow}
        isLargeRow={true}
        />
    </>
  )
}
export default RowList




