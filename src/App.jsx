import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import{feedProducts} from './api';
feedProducts();

function App() {
  const qqueryClient = new QueryClient();
  return (
    
    <QueryClientProvider client={qqueryClient}>
     <Home/>
    </QueryClientProvider>

  );
}

export default App;
