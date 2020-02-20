import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsId from './components/views/TablesEventsId/TablesEventsId';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderId from './components/views/WaiterId/WaiterId';
import WaiterOrderNew from './components/views/WaiterNew/WaiterNew';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Dashboard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables`}
            component={Tables}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/booking/:id`}
            component={TablesBookingId}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/booking/new`}
            component={TablesBookingNew}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/events/:id`}
            component={TablesEventsId}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/events/new`}
            component={TablesEventsNew}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/waiter`}
            component={Waiter}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/waiter/new`}
            component={WaiterOrderId}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/waiter/:id`}
            component={WaiterOrderNew}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/kitchen`}
            component={Kitchen}
          />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
