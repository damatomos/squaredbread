import React from "react";

import styles from './Header.module.css';
import useMedia from "../../hooks/useMedia";
import Menu from "./Menu/Menu.component";
import MenuMobile from "./MenuMobile/MenuMobile.component";

function Header() {
  const mobile = useMedia('(max-width: 840px)');

  const [exists, setExists] = React.useState(true);

  React.useEffect(() => {
    if (window.location.href.split('/').pop().startsWith('admin')) {
      setExists(false);
    }
  }, []);

  if (exists) return (
    <header className={styles.wrapper} >
      { mobile ? <MenuMobile/> : <Menu/> }
    </header>
  );

  return <></>;
}

export default Header;