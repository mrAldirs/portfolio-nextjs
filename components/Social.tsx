import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/mrAldirs' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/aldi-rosid-saputra-5077a728b',
  },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/aldirrss',
  },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: any;
  iconStyles: any;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
