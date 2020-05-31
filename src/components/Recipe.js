import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export function Recipe(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{props.recipe["Name"]}</Card.Title>
            <Card.Text>
                {props.recipe["Description"]}
            </Card.Text>
            <Button variant="primary">Learn More</Button>
            </Card.Body>
        </Card>
    )
}


export default Recipe   