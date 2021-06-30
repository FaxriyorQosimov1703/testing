import {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import Posts from './PAGES/Posts/Posts';
import Todos from './PAGES/Todos/Todos';
import Users from './PAGES/Users/Users';
import OnePostPages from './PAGES/Posts/OnePostPages'


function App() {
    return (
        <div className="container mt-3">
            <Link to="/posts"><button className="btn btn-dark">Posts</button></Link>
            <Link to="/todos"><button className="btn btn-dark mx-2">Todos</button></Link>
            <Link to="/users"><button className="btn btn-dark">Users</button></Link>
            <hr/>
            <Switch>
            <Route path={'/posts/:id'} component={OnePostPages} />
            <Route path={'/posts'} component={Posts} />
            <Route path={'/todos'} component={Todos} />
            <Route path={'/users'} component={Users} />
            </Switch>
        </div>
    )
}

export default App
