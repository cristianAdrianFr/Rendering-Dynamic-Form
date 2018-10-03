import React, {Component} from 'react';
import './index.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  onChangeEmail = (value) => {
    this.setState({ email: value });
  };

  onChangePassword = (value) => {
    this.setState({ password: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(data)
  };

  render() {
    const {
      email,
      password
    } = this.state;

    return (
      <div className={'login-page'}>
        <p className={'title'}>
          LOG-IN FORM
        </p>
        <form onSubmit={this.onSubmit}>
          <input type={'text'} value={email} onChange={(e) => this.onChangeEmail(e.currentTarget.value)} />
          <input type={'password'} value={password} onChange={(e) => this.onChangePassword(e.currentTarget.value)}/>
          <button onClick={this.onSubmit}><p>LOG IN</p></button>
        </form>
      </div>
    )
  }
}

export default LoginPage;