import React, {Component} from 'react';
import './SearchBar.css';

const Input = ({value,placeholder,onChange})=>(
    <input className="search-bar" type="text" value={value} placeholder={placeholder} onChange={onChange} />
)

export default Input