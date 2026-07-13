import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='container p-5 mb-5'>
      <div className="row text-center">
        <p className='mt-5'>404</p>
        <h1>Kiaan couldn’t find that page</h1>
        <p>
          We couldn't find the page you were looking for. Visit{' '}
          <Link to="/">home</Link>.
        </p>
      </div>
    </div>
  );
}

export default NotFound;