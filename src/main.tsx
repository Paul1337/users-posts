import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './domain/store/index.ts';
import LoadingProvider from './components/LoadingProvider/LoadingProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <LoadingProvider>
            <App />
        </LoadingProvider>
    </Provider>
);
