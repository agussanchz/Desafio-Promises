import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Item({producto}) {
  return (
    <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={producto.img} />
    <Card.Body>
      <Card.Title>{producto.name}</Card.Title>
      <Card.Text>
        {producto.description}
      </Card.Text>
      <Button variant="primary">{producto.price}</Button>
    </Card.Body>
  </Card>
  )
}
