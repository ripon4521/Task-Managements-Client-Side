import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routers/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<HelmetProvider>
  <QueryClientProvider client={queryClient}> 
  <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </QueryClientProvider>

</HelmetProvider>
  </React.StrictMode>,
)
