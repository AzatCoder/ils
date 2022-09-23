import { Provider } from 'react-redux';
import 'antd/dist/antd.min.css';
import store from './main/store';
import Home from './main/pages/Home';


function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}


export default App;