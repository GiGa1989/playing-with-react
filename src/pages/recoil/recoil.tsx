import Template from '@/components/template/template';
import { FC } from 'react';
import { TestInput, TestOutput } from './components';
import { RecoilRoot } from 'recoil';
import Tabs from './tabs';
import Tab from './tab';

// Requires your app to be wrapped in context providers
// import { RecoilRoot } from 'recoil';
// <RecoilRoot> <App || RouterProvider  /> </RecoilRoot>;
//
// The data remains while browsing the site

const RecoilPage: FC = () => {
  return (
    <RecoilRoot>
      <Template>
        <Tabs>
          <Tab label="IN">
            <TestInput />
          </Tab>
          <Tab label="OUT">
            <TestOutput />
          </Tab>
        </Tabs>
      </Template>
    </RecoilRoot>
  );
};

export default RecoilPage;
