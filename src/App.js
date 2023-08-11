import NavBar from './components/nav-bar/nav-bar.component';
import Home from './components/home/home.component';
import About from './components/about/about.component';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
   <Fragment>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
   </Fragment>
  );
}
export default App;
