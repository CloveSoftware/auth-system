import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <React.StrictMode>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <RouterProvider router={router} />
          </div>

        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
