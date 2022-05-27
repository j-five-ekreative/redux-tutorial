import { Link } from 'react-router-dom';
import './index.css';

export const Header = () => {
  return (
    <div className='mainHeader'>
      <Link to='/'>
        <h1>Home</h1>
      </Link>

      <Link to='/songs'>
        <h2>Songs</h2>
      </Link>
    </div>
  );
};
