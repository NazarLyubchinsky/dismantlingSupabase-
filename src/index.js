import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Provider } from 'react-redux';
// import { store } from './features/store';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from './supabaseClient';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<SessionContextProvider supabaseClient={supabase}>
			<App />
		</SessionContextProvider>
	</BrowserRouter>
	// <Provider store={store}>
	// </Provider>
);
