import './success.css';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="success-page">  
      <div className="message">
        You have successfully signed up!
      </div>
      <Link to={"/signup"} className="link">
        Back to sign up page
      </Link>
    </div>
  );
}

export default Success;
