import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import theme from 'utils/theme';
import { createBrowserHistory } from 'history';
import configureStore from 'utils/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppRoutes from 'routes';

const App = () => {
  const history = createBrowserHistory();
  const store = configureStore({}, history);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
