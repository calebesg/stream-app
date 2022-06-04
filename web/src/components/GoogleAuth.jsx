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
        className={`bg-transparent border rounded-md px-3 py-1 flex items-center gap-2 hover:border-white hover:text-white transition-all ${
          isSignedIn
            ? 'border-gray-200 text-gray-200'
            : 'border-gray-400 text-gray-400'
        }`}
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
  console.log(state);
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
