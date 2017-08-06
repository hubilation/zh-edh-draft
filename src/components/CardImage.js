import React, { Component } from 'react';

const CardImage = ({imageUrl, display}) => (
   display ? <img className="card-image" src={imageUrl} /> : <div></div>
)

export default CardImage