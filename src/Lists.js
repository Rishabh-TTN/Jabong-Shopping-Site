import React from 'react';
import './style.css';

export const Lists=() => {
    return (
            <ul className="lists">
                <li> <img height={400} width={300} alt="900x500" src="/src/list1.webp" /> </li>
                <li> <img height={400} width={300} alt="900x500" src="/src/list2.webp" /> </li>
                <li> <img height={400} width={300} alt="900x500" src="/src/list3.webp" /> </li>
                <li> <img height={400} width={300} alt="900x500" src="/src/list4.webp" /> </li>
            </ul>
    );
}