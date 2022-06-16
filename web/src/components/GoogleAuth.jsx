import { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '84568278393-ipruaabsp7jo9qnr6ajv8hgc9pbr41re.apps.googleusercontent.com',
          scope: 'email',
          plugin_name: 'streamy',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  handleAuth = () => {
    this.props.isSignedIn ? this.auth.signOut() : this.auth.signIn();
  };

  renderAuthButton() {
    const { isSignedIn } = this.props;

    if (isSignedIn === null) return null;

    return (
      <button
        onClick={this.handleAuth}
        className={`bg-transparent border rounded-full h-9 px-4 flex items-center gap-2 text-sm border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-all }`}
      >
        <ion-icon name="logo-google"></ion-icon>
        {isSignedIn ? 'Sign Out' : 'Sign In'}
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
