import React from "react";
import Banner from "../../components/Banner/Banner.component";
import styles from './Home.module.css';

function Home() {

  React.useEffect(() => {

  }, []);

  return (
    <div className={`page ${styles.wrapper}`}>
      <Banner/>
    </div>
  );
}

export default Home;