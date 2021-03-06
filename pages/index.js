import Carousel from '../components/carousel/Carousel';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Catering from '../components/Main/catering/Catering';
import Fundering from '../components/Main/fundering/Fundering';
import Navbar from '../components/navbar/Navbar';
import styles from '../styles/Home.module.css';
export default function Home() {
	return (
		<div className={styles.container}>
			<Navbar />
			<Header src="/img/4.jpg" />
			<Carousel />
			<Catering />
			<Fundering />
			<Footer />
		</div>
	);
}
