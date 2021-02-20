import React from 'react';

export default function Categories({ items, onClickItem }) {  

  const [activeItem, setActiveItem] = React.useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index)
  };

  return (
    <div className="categories">
      <ul>
        <li>Все</li>
        {items.map((item, i) => {
          return (
            <li
              onClick={() => onSelectItem(i)}
              className={activeItem === i ? 'active' : ''}
              key={`${item}_${i}`}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
