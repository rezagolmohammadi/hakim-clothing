import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signin.styles';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password} = this.state;
    
    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return(
      <SignInContainer>
        <SignInTitle>I have already an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} name='email' type='email' value={this.state.email} label="email" required />
          <FormInput handleChange={this.handleChange} name='password' type='password' value={this.state.password} label="password" required />
          <ButtonsBarContainer>
            <CustomButton type='submit'>Sign in </CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Signin);