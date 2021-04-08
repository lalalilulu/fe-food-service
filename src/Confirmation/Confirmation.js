import React from 'react';
import {Toast} from 'react-bootstrap';

export function Confirmation() {
    return(
        <Toast>
            <Toast.Header>
                <strong className="mr-auto">Your order is preparing</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>
                Your delicious dishes will be with you in 55 minutes!
            </Toast.Body>
        </Toast>
    )
}
