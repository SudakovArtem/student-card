import React from 'react';
import {Route} from 'react-router-dom';
import StudentCard from './layouts/studentCard';
import AddForm from './layouts/addForm';

const App = () => {
  return (
    <>
      <Route path="/" exact component={StudentCard}/>
      <Route path="/form" component={AddForm}/>
    </>
  );
};

export default App;
