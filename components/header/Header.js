import Image from 'next/image';
import styles from './Header.module.css';
function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<div className={styles.h_title}>
					<p>cafe</p>
				</div>
				<p className={styles.m_title}>zupas</p>
			</div>
			<div className={styles.list}>
				<ul className={styles.ul}>
					<li className={styles.li}>Menu</li>
					<li className={styles.li}>Location</li>
					<li className={styles.li}>our kitchen</li>
					<li className={styles.li}>catering</li>
					<li className={styles.li}>fundraisers</li>
					<li className={styles.li}>careers</li>
					<li className={styles.li}>talk to us</li>
				</ul>
			</div>
			<div className={styles.img_container}>
				<Image src="/img/4.jpg" width={1621} height={1000} priority="eager" />
				<div className={styles.img_text}>
					<p>
						Eating <br /> Greate nevel <br /> feel better
					</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
