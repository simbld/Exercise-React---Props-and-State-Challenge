import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {/*affiche un composant MenuItem pour chaque élément du tableau et transmets toutes les propriétés de l'objet en tant que props*/}
      {foodItems.map((toto, index) => (
        <MenuItem
          itemName={toto.itemName}
          description={toto.description}
          foodImage={toto.foodImage}
          price={toto.price}
          isFavorite={toto.isFavorite}
        />
      ))}
    </div>
  );
}

export default MenuList;
