import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('controlled');

  return (
    <div className="App">
      <header className="app-header">
        <h1>React Form Handling Demo</h1>
        <div className="form-toggle">
          <button
            onClick={() => setCurrentForm('controlled')}
            className={currentForm === 'controlled' ? 'active' : ''}
          >
            Controlled Components
          </button>
          <button
            onClick={() => setCurrentForm('formik')}
            className={currentForm === 'formik' ? 'active' : ''}
          >
            Formik Form
          </button>
        </div>
      </header>

      <main className="main-content">
        {currentForm === 'controlled' ? <RegistrationForm /> : <FormikForm />}
      </main>
    </div>
  );
}

export default App;