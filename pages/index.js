import styles from '../styles/Home.module.css';
import { Header, Main } from '../components'
import SpeakerProvider from '../contexts/SpeakerContext/SpeakerContextProvider';


const Home = () => {

  return (
    <div>
      <Header />
      <SpeakerProvider>
        <Main />
      </SpeakerProvider>
    </div>
  )
}

export default Home;