import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import {Button} from 'primereact/components/button/Button';


export const LoginPage = ({ startLogin }) => (
  <div >
      <Button label="Login with Google" icon="pi pi-check" onClick={startLogin} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
