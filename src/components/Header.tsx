import { useContext } from 'react';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import { ThemeContext } from '../contexts/Theme/Theme.context';

const Header = () => {
  const { appTheme, setTheme } = useContext(ThemeContext);

  return (
    <header className="header flex items-center justify-between w-full">
      <span className="font-bold">Coditor</span>
      <span className="pr-5 cursor-pointer text-2xl" onClick={() => setTheme()}>
        {appTheme === 'dark' ? (
          <CiLight className="text-yellow-300" title="Light Mode" />
        ) : (
          <CiDark className="text-black" title="Dark mode" />
        )}
      </span>
    </header>
  );
};

export default Header;
