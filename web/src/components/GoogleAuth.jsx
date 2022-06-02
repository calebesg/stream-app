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
        });
    });
  }

  renderAuthButton() {
    const { isSignedIn } = this.state;

    if (isSignedIn === null) return <div>I dont now if we are signed in!</div>;
    if (isSignedIn) return <div>I am signed in!</div>;

    return <div>I am not signed in!</div>;
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
