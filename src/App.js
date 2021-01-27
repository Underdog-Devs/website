// import Body from './Parts/Body';
import LandingPage from './Pages/LandingPage/landingPage';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import NavBar from './Parts/NavBar';
import styles from './CSS/App.module.css';
import Footer from './Parts/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faTwitter, faFacebookF);

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <header className={styles.appHeader}>
        <LandingPage />
      </header>
      <Footer />
    </div>
  );
}

export default App;
