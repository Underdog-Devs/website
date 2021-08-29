import LandingPage from './Pages/LandingPage';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import NavBar from './Components/Navigation/index';
import styles from './CSS/App.module.css';
import Footer from './Components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faTwitter, faFacebookF);

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
