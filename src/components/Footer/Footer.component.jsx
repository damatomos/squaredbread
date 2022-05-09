import React from "react";

import styles from './Footer.module.css';

// Images
import FaceSVG from '../../assets/sn_facebook.svg?component';
import InstaSVG from '../../assets/sn_instagram.svg?component';
import TwitSVG from '../../assets/sn_twitter.svg?component';

function Footer({refresh}) {

  const [exists, setExists] = React.useState(true);

  React.useEffect(() => {
    if (window.location.href.split('/').pop().startsWith('admin')) {
      setExists(false);
    }
  }, [refresh]);


  if (exists) {
    return (
      <footer className={styles.wrapper}>
        <div className={styles.socialnetworks}>
          <a href="https://www.facebook.com/" target="_blank">
            <FaceSVG/>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <InstaSVG/>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <TwitSVG/>
          </a>
        </div>
        <h4 className={styles.copyright}>SquaredBread - Todos os direitos reservados - 2021</h4>
      </footer>
    );
  }

  return <></>;
}

export default Footer;