import React from 'react';
import Loadable from 'react-loadable';
interface IProps {
  error: any;
  pastDelay: any;
}
const loadingComponent = ({ error, pastDelay } : IProps) => {
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    // return <div>Loading...</div>;
    return <div />;
  } else {
    return null;
  }
};
const routes = [
  {
    name: '/',
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('views/articles'),
      loading: loadingComponent,
      delay: 300,
      render: () => null
    }),
  },
];

export default routes;
