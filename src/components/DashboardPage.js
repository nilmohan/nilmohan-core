import React from 'react';
import {InputText} from 'primereact/components/inputtext/InputText';

const DashboardPage = () => (
  <div>
    <span className="ui-float-label">
       <InputText id="float-input" type="text" size="30" />
       <label htmlFor="float-input">Username</label>
    </span>
  </div>
);

export default DashboardPage;
