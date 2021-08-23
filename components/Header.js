import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center ">
      <div>
          <h1 className="">Shopping Cart</h1>
      </div>
      <div>
          Cart{' '}
          {props.countCartItems ? (
            <button className="btn btn-primary">{props.countCartItems}</button>
          ) : (
            ''
          )}
        {' '}
         
      </div>
    </header>
  );
}
