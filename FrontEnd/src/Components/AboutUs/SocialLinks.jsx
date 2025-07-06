import React from 'react';
import Linkedin  from '../../assets/Socials/linkedin.svg';
import X from '../../assets/Socials/x.svg' 
import GitHub from '../../assets/Socials/github.svg'
import Instagram from '../../assets/Socials/instagram.svg'


function SocialLinks() {
  const socialLinks = [
    { name: 'Linkedin', icon:  `${Linkedin}`, url: '#' },
    { name: 'Twitter/X', icon:  `${X}`, url: '#' },
    { name: 'Github', icon:  `${GitHub}`, url: '#' },
    { name: 'Instagram', icon:  `${Instagram}`, url: '#' }
  ];

  return (
    <ul className='SocialLinks'>
      {socialLinks.map(link => (
        <li key={link.name}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={`${link.name} icon`} width={'40px'} height={'40px'} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;