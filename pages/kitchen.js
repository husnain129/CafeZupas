import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import KContent from '../components/Kitchen/content/KContent';
import KStory from '../components/Kitchen/story/KStory';
import Navbar from '../components/navbar/Navbar';
import styles from '../styles/Home.module.css';
export default function Kitchen() {
	return (
		<div className={styles.container}>
			<Navbar />
			<Header src="/kitchen/1.jpeg" />
			<KContent />
			<KStory />
			<Footer />
		</div>
	);
}
