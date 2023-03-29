
import React from 'react';

const Header = () => {
  return (
    <>
      <nav class="  bg-secondary p-2 ">
        <div class="container d-flex justify-content-between">
          <div>
            <p className='fs-4 fw-bolder text-white'>Bangla Shop</p>
          </div>
          <div className="d-flex gap-5 text-light fs-4 fw-semibold">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;