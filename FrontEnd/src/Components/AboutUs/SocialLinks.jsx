import { aboutSocialLinks } from '../../data/socialLinks';

function SocialLinks() {
  return (
    <ul className='SocialLinks'>
      {aboutSocialLinks.map(link => (
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
