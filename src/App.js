import Navbar from './Navbar';
import Home from './Home'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
// Scribbled and notes below..

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home /> 
            </Route>
            <Route exact path="/create">
              <Create /> 
            </Route>
            <Route exact path="/blogs/:id">
            {/* As we can not hard-code it. With "Route exact path="/blogs/:id" we can route the 
                call to a particular page. */}
              <BlogDetails /> 
            </Route>
            <Route exact path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
















// import Navbar from './Navbar';
// import Home from './Home'
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Create from './Create';
// // We are importing the BrowseRouter, Route and Switch COMPONENTS

// function App() {
//   return (
//     <Router>
//       {/* Surrounding the App div by the Router means that we can use the router in the entire
//           application. */}
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Switch>
//             {/* All of our routes go inside the switch component */}
//             <Route exact path="/">
//             {/* Here, Navbar is not route-dependent. It's there in every single route. */}
//             {/* React matching works in a strange manner as it matches letterwise for input route
//                 and the present route, if even the starting letter matches, it stops searching 
//                 and renders accordingly. */}
//               <Home /> 
//             </Route>
//             <Route exact path="/create">
//               <Create /> 
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
