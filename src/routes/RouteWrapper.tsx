import React from 'react';
import { Route, RouteProps, useLocation, useHistory } from 'react-router-dom';
import Layout from '../components/layout';

interface PrivateRouteProps extends RouteProps {
  component: any
  exact?: boolean
  key?: number
  path: string
  title?: string
}

const RouteWrapper = ({ exact, component: Component, ...rest }: PrivateRouteProps) => {
  const location = useLocation()
  const history = useHistory()

  if (location.pathname === '/') {
    history.push('/personajes')
    return null
  }
  return (
    <Layout {...rest}>
      <Route {...rest}>
        <Component {...rest} />
      </Route>
    </Layout>
  )
}

export default RouteWrapper
