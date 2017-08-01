import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Dash from './box/provider/dash/Dash';
import LoginProvider from './box/provider/login/Login';
import LoginStudent from './box/student/login/Login';
import history from './service/router/History';

injectTapEventPlugin();

const Main = () => (
    <MuiThemeProvider>
        <BrowserRouter>
            <Router history={history}>
                <div>
                    <Route exact path='/' component={App} />
                    <Route exact path='/login/student' component={LoginStudent} />
                    <Route exact path='/login/provider' component={LoginProvider} />
                    <Route path='/provider/:way' component={Dash} />
                </div>
            </Router>
        </BrowserRouter>
    </MuiThemeProvider>
)

ReactDOM.render(<Main />, document.getElementById('root'));

registerServiceWorker();
