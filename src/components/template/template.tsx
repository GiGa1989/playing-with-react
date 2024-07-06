import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/react.svg';

interface Props {
  children: ReactNode;
}

const Template: FC<Props> = ({ children }) => {
  const menu: {
    [key: string]: {
      title: string;
      links: Array<{
        url: string;
        label: string;
      }>;
    };
  } = {
    react: {
      title: 'react / react-dom',
      links: [
        {
          url: 'memo',
          label: 'Memo',
        },
        {
          url: 'memo2',
          label: 'Memo2',
        },
        {
          url: 'context',
          label: 'context',
        },
        {
          url: 'portal',
          label: 'Portal',
        },
      ],
    },
    libraries: {
      title: 'libraries',
      links: [
        {
          url: 'react-query',
          label: 'reactQuery',
        },
        {
          url: 'zustand1',
          label: 'zustand1',
        },
        {
          url: 'zustand2',
          label: 'zustand2',
        },
        {
          url: 'copyToClipboard',
          label: 'copyToClipboard',
        },
      ],
    },
  };

  return (
    <div className="template">
      <main>{children}</main>
      <footer>
        <img src={reactLogo} className="logo react" alt="React logo" />

        <ul style={{ display: 'flex' }}>
          {Object.values(menu).map((i, ii) => (
            <li key={ii}>
              {i.title}
              <ul>
                {i.links.map((j, jj) => (
                  <li key={jj}>
                    <Link to={'/' + j.url}>{j.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Template;
