import { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  handleAuth = () => {
    this.state.isSignedIn ? this.auth.signOut() : this.auth.signIn();
  };

  renderAuthButton() {
    const { isSignedIn } = this.state;

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

export default GoogleAuth;
