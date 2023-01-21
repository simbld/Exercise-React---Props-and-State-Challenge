import React, { useState } from 'react';

export default function MenuItem(props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const [likeCount, setLikeCount] = useState(props.likeCount || 0);
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
    setLikeCount(isFavorite ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={props.foodImage} alt={props.itemName} />
        </div>
        <div className="itemDescription">
          <h3>{props.itemName}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="rightContainer">
        <div>{props.price} EUR</div>
        <div className="like-container">
          <div
            id="favorite"
            onClick={handleClickFavorite}
            className={isFavorite ? 'isFavorite' : 'notFavorite'}
          />
          <span className="like-count">{likeCount}</span>
        </div>
      </div>
    </div>
  );
}
