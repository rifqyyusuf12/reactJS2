import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

const Input = ({ type, name, label, value, error, onChange }) => {
    return ( 
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
            value={value}
            onChange={onChange}
            type={type}
            name={name}
            id={name}
            className="form-control" />
        {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;