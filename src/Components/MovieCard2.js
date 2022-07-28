import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import { Rating } from '@mui/material';


const MovieCard2 = ({dataMovie}) => {
  return (
    <div>
        <Row>
        <Col>
          <Card>
            <Card.Img style={{width:'18rem',height:'370px'}} variant="top" src={dataMovie.posterUrl} />
            <Card.Body>
              <Card.Title>{dataMovie.title}</Card.Title>
              <Card.Text>
                {dataMovie.description}
              </Card.Text>
              <Rating name="read-only" value={dataMovie.rating} readOnly />
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </div>
  )
}

export default MovieCard2