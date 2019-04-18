import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink,  } from 'react-router-dom';
import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import ('./containers/Posts'));

class App extends Component {
  state = { show: false};
  modeHandler = () => {
    this.setState(prevState => {
      return {show: !prevState.show}
    })
  }
  render() {
    return (
      <button onClick={this.modeHandler}>Toggle mode</button>
      {this.state.showPosts ? (<Suspense fallback={<div>Loading...</div>}>
                <Posts />
              </Suspense>)}
      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route 
      //     path="/posts" 
      //     render={() => (
      //         
      //         )} />
      //   </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;
