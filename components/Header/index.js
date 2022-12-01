import Head from 'next/head';
import Image from 'next/image';
import styles from './styles.module.css';
import logo from '../../assets/logo.svg'

export const Header = () => {

    return (
        <div className={styles.navContainer}>
            <Head>
                <title>Plotline</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <nav className={styles.nav}>
                <div className={styles.navImg}>
                    <Image src={logo}  alt='logo' className={styles.navImgContent} />
                </div>
                <div>Plotline</div>
            </nav>
        </div>
    )
}