import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import FormStep1 from './components/FormStep1';
import FormStep2 from './components/FormStep2';
import FormStep3 from './components/FormStep3';
import Welcome from './components/Welcome';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<FormStep1 />} />
          <Route path="/step2" element={<FormStep2 />} />
          <Route path="/step3" element={<FormStep3 />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
