import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';
import useThemeContext from '@theme/hooks/useThemeContext';
import Icon from '@mui/material/Icon';

const socialDetails = [
  {
    name: 'tryhackme',
    classname: 'fas fa-terminal fa-fw',
    link: 'https://tryhackme.com/p/Skthehacker',
  },
  {
    name: 'hackthebox',
    classname: 'fab fa-hackerrank fa-fw',
    link: 'https://app.hackthebox.com/profile/617382',
  },
  {
    name: 'linkedin',
    classname: 'fab fa-linkedin fa-fw',
    link: 'https://www.linkedin.com/in/sachinkumardhaka/',
  },
  {
    name: 'github',
    classname: 'fab fa-github fa-fw',
    link: 'https://github.com/s4ch',
  },
  {
    name: 'twitter',
    classname: 'fab fa-twitter fa-fw',
    link: 'https://www.twitter.com/cy5un/',
  },
  {
    name: 'keybase',
    classname: 'fab fa-keybase fa-fw',
    link: 'https://keybase.io/cy5un',
  },
  {
    name: 'mail',
    classname: 'fas fa-envelope fa-fw',
    link: 'mailto:contact@cyfun.me',
  },
];

const getHoverIconColor = (site: string): string => {
  switch (site) {
    case 'tryhackme':
      return 'crimson';
    case 'hackthebox':
        return 'green';
    case 'linkedin':
      return '#0a66c2';
    case 'github':
      return 'purple';
    case 'twitter':
    return 'blue';
    case 'keybase':
      return 'orange';
    case 'mail':
      return 'brown';
    default:
      return 'blue';
  }
};

export const Socials = () => {
  const { isDarkTheme } = useThemeContext();

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      if (node.parentNode !== undefined) {
        node.parentNode.removeChilde(node);
      }
    };
  }, []);

  return (
    <div>
      {socialDetails.map(cn => {
        return (
          <a
            href={cn.link}
            target="_blank"
            rel="noopener noreferrer"
            key={cn.classname}
          >
            <Icon
              className={cn.classname}
              sx={{
                color: isDarkTheme ? 'white' : 'black',
                fontSize: 30,
                marginTop: 1,
                marginRight: 1,
                '&:hover': {
                  color: `${getHoverIconColor(cn.name)}`,
                },
              }}
            />
          </a>
        );
      })}
    </div>
  );
};
