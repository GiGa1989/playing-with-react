import React, { useState, ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-buttons">
        {React.Children.map(children, (child, index) => (
          <button
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {(child as React.ReactElement).props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.map(children, (child, index) => (
          <div className={`tab-panel ${activeTab === index ? 'active' : ''}`}>
            {activeTab === index && child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
