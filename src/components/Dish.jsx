import React from 'react';
import './Style.css';

function Dish(props) {
  return (
    <article className='container'>
      <div className='titleImage'>
        <h2>{props.title}</h2>
        <img src={props.image} alt='plat' />
      </div>
      <div className='reciep'>
        <h3>Recette:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          in natus est aperiam voluptate voluptatum totam consectetur libero
          impedit sunt, rem amet veniam, magnam minus dolorum quae nulla ducimus
          repudiandae? Lorem ipsum dolor
        </p>
      </div>
    </article>
  );
}
export default Dish;
