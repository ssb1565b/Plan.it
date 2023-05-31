import React from 'react';
import { useRoutes } from 'react-router-dom';
import Main from '../pages/Main';
import Test from '../pages/Test';

const routeList = [
  {
    path: `/`,
    element: <Main />,
  },
  {
    path: `/test`,
    element: <Test />,
  },
];
const RenderRouter = () => {
  return useRoutes(routeList);
};

export default RenderRouter;
