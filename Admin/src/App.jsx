import React from 'react'
import Navbar from './components/Navbar'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import StyledTanStackTable from './pages/Appointments'
const queryClient = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <Navbar />

    </QueryClientProvider>




  )
}

export default App
