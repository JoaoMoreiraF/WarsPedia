import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RootRoutes from './routes/RootRoutes';
import '../src/styles/global.scss';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <RootRoutes />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
