import React, { ReactNode } from 'react';

interface TabProps {
  children: ReactNode;
  label: string;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Tab;
