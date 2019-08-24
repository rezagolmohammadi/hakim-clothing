import React from 'react';
import './signin.scss';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { signInWithGoogle } from '../../firebase/firebase';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password:'' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return(
      <div className='sign-in'>
        <h2>I have already an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} name='email' type='email' value={this.state.email} label="email" required />
          <FormInput handleChange={this.handleChange} name='password' type='password' value={this.state.password} label="password" required />
          <div className='buttons'>
            <CustomButton type='submit'>Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }
};

export default Signin;