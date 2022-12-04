import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes/Routes';

function App() {
  return (
    <div className='container'>
    <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
