import Template from '@/components/template/template';
import { FC } from 'react';
import {
  BoundStoreInput,
  BoundStoreOutput,
  PersistStoreInput,
} from './components';

//However, Redux requires your app to be wrapped in context providers; Zustand does not.
// middleware?
// https://docs.pmnd.rs/zustand/guides/testing

const ZustandPage: FC = () => {
  return (
    <Template>
      <div>
        <BoundStoreInput />
        <BoundStoreOutput />
      </div>
      <div>
        <PersistStoreInput />
      </div>
    </Template>
  );
};

export default ZustandPage;
