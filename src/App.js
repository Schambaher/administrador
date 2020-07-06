import React from 'react';
import AdminUsuario from './paginas/adminUsuario'
import AdminDepartamento from './paginas/adminDepartamento'
import AdminCentroTuristico from './paginas/adminCentroTuristico'
import Login from './paginas/login'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App= () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="" component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/adminUsuario" component={AdminUsuario}/>
          <Route path="/adminDepartamento" component={AdminDepartamento}/>
          <Route path="/adminCentroTuristico" component={AdminCentroTuristico}/>
      </Router>
    </React.Fragment>
  )
}

export default App;
