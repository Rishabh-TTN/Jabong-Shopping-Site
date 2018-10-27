import React from 'react';
import './style.css';

export const ItemsLists=() => {
    return (
        <div>
            <p className='light'><img src="/src/Light-strip.gif"/> </p>
        <ul className="items">
            <li> <img height={400} width={300} alt="900x500" src="/src/item1.webp" /> </li>
            <li> <img height={400} width={300} alt="900x500" src="/src/item2.webp" /> </li>
            <li> <img height={400} width={300} alt="900x500" src="/src/item3.webp" /> </li>
            <li> <img height={400} width={300} alt="900x500" src="/src/item4.webp" /> </li>
            <li> <img height={400} width={300} alt="900x500" src="/src/item5.webp" /> </li>
            <li> <img height={400} width={300} alt="900x500" src="/src/item6.webp" /> </li>
            <li> <img height={400} width={300} alt="900x500" src="/src/item7.webp" /> </li>
            <li> <img height={400} width={300} alt="900x500" src="/src/item8.webp" /> </li>
        </ul>
            <p className='light'><img src="/src/Light-strip.gif"/> </p>
            <ul className="items">
                <li> <img height={400} width={400} alt="900x500" src="/src/Home decor.webp" /> </li>
                <li> <img height={400} width={400} alt="900x500" src="/src/Eye makeup.webp" /> </li>
                <li> <img height={400} width={400} alt="900x500" src="/src/Danglers.webp" /> </li>
                <li> <img height={400} width={400} alt="900x500" src="/src/Metallic.webp" /> </li>
                <li> <img height={400} width={400} alt="900x500" src="/src/Stilettos.webp" /> </li>
                <li> <img height={400} width={400} alt="900x500" src="/src/Kitchen.webp" /> </li>
            </ul>
            <img className="image" height={100} src="/src/Head.webp" />
            <img className="image" height={600} src="/src/Festive.webp"/>
            <img className="image" height={100} src="/src/ICICI.webp"/>
        </div>
    );
}