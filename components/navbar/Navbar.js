import { FaRegUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import styles from './Navbar.module.css';
function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.list}>
				<div className={styles.order}>
					<p>Order online</p>
				</div>
				<p className={styles.search}>
					<FiSearch />
				</p>
				<p>Sign In</p>
				<p className={styles.search}>
					<FaRegUserCircle size={32} color="#555A5C" />
				</p>
			</div>
		</div>
	);
}

export default Navbar;
