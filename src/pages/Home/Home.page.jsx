import React from "react";
import styles from './Home.module.css';

function Home() {

  React.useEffect(() => {

  }, []);

  return (
    <div className={`page ${styles.wrapper}`}>
      Home
    </div>
  );
}

export default Home;