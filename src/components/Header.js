import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import 'bootstrap';

export const Header = ({ startLogout }) => (
  <div className="header">

    <button className="button button--link" onClick={startLogout}>Logout</button>
    <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
