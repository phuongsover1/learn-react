import { Fragment } from 'react';
import styles from './Layout.module.css';
import MainNaviGation from './MainNavigation';

const Layout = props => {
  return (
    <Fragment>
      <MainNaviGation />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
