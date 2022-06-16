import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component {
  renderCreate = () => {
    if (!this.props.isSignedIn) return null;

    return (
      <Link
        to="/streams/new"
        className="flex gap-2 items-center text-3xl text-gray-700 hover:opacity-80 transition-all"
      >
        <ion-icon name="videocam-outline"></ion-icon>
      </Link>
    );
  };

  render() {
    return (
      <header className="w-full">
        <nav className="container mx-auto flex gap-4 justify-between items-center px-4 py-3 sm:px-0 border-b border-gray-100">
          <Link
            className="text-gray-700 text-xl font-bebas flex gap-2 items-center"
            to="/"
          >
            <span className="text-xl w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
              📺
            </span>{' '}
            STREAMY
          </Link>

          <div className="flex gap-4 items-center">
            {this.renderCreate()}
            <GoogleAuth />
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(Header);
