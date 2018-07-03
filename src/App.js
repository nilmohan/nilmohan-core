import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import 'bootstrap';

/*
class App extends Component {
    
    constructor() {
        super();
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
    }
    
    increment() {
        this.setState({count: this.state.count + 1});
    }
    
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to PrimeReact</h2>
            </div>
            <div className="App-intro">
              <Button label="Click" icon="pi pi-check" onClick={this.increment} />
              
              <p>Number of Clicks: {this.state.count}</p>
            </div>
          </div>
        );
    }
}

export default App;

*/



const store = configureStore();
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    } else {
        store.dispatch(logout());
renderApp();
history.push('/');
}
});
