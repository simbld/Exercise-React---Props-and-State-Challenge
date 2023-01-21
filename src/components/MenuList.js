import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {/*affiche un composant MenuItem pour chaque élément du tableau et transmets toutes les propriétés de l'objet en tant que props*/}
      {foodItems.map((props, index) => (
        <MenuItem
          itemName={props.itemName}
          description={props.description}
          foodImage={props.foodImage}
          price={props.price}
          isFavorite={props.isFavorite}
        />
      ))}
    </div>
  );
}

export default MenuList;
