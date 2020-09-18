import React from 'react';
import HomeApp from "./TestRoute/Home";
import AlbumApp from "./TestRoute/Album";
import { BrowserRouter, Route, Switch ,Link,NavLink} from 'react-router-dom';
import {black, red} from "color-name";

const style = {
    color: 'black',
    fontWeight: 'bold'
};

function App() {
    return (
        <div>

            {/*nav bar start*/}
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#">Router Practice</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">

                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink  activeStyle={style} exact  to="/" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={style} className="nav-link" to="/album">Album</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider">

                                    </div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            {/*navbar end*/}
            {/*<HomeApp/>*/}

            <div>
                <Switch>
                    <Route path="/" exact component={HomeApp}/>
                    <Route path="/album"  component={AlbumApp}/>
                </Switch>
            </div>

            {/*Footer start*/}
            <div className='container'>
                <footer className="blog-footer">
                    <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
                        href="https://twitter.com/mdo">@mdo</a>.</p>
                    <p>
                        <a href="#">Back to top</a>
                    </p>
                </footer>
            </div>
            {/*Footer end*/}

        </div>
);
}

export default App;
