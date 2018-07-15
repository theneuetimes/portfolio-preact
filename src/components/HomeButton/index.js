import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import './index.css';

class Arrow extends Component {
  render() {
    return (
      <svg viewBox="0 0 31.49 31.49">
        <path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z"></path>
      </svg>
    );
  }
}

class HomeButton extends Component {
  render() {
    return (
      <Link to="/" className="btn-home">
        <Arrow />
      </Link>
    );
  }
}

export default HomeButton;
