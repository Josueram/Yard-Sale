import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import Account from '@pages/Account';
import CreateAccount from '@pages/CreateAccount';
import Order from '@pages/Order';
import Checkout from '@pages/Checkout';
import NotFound from "@pages/NotFound";
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/password-recovery" element={<PasswordRecovery />}/>
            <Route exact path="/send-email" element={<SendEmail />}/>
            <Route exact path="/new-password" element={<NewPassword />}/>
            <Route exact path="/account" element={<Account />}/>
            <Route exact path="/signup" element={<CreateAccount />}/>
            <Route exact path="/order" element={<Order />}/>
            <Route exact path="/checkout" element={<Checkout />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;