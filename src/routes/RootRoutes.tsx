import React from 'react';
import { Switch } from 'react-router-dom';
import { routes } from './routes';
import RouteWrapper from './RouteWrapper';
import { CharactersPage } from '../pages/Characters';

export default () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <RouteWrapper exact={route.exact} key={index} path={route.path} title={route.title} component={route.component} />
      )
      )}
      <RouteWrapper path="*" component={CharactersPage} />
    </Switch>
  )
}
