import { AiFillInstagram } from 'react-icons/ai';
import { FaPinterest, FaTwitter } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import styles from './Footer.module.css';
function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.bar}>
				<p>Question? we are here to help</p>
			</div>
			<div className={styles.img}>
				<img src="/footer/1.jpeg" alt="food" width="100%" />
			</div>
			{/* <div className={styles.f_heading}>
				<p>Nourish the good food</p>
			</div>
			<div className={styles.img}>
				<img src="/footer/3.jpeg" alt="food" width="100%" />
			</div> */}
			<div className={styles.b_bar}>
				<div className={styles.f_value}>
					<p>nutrational information</p>
					<p>catering print menu</p>
					<p>terms and conditions</p>
					<p>privacy policy</p>
					<p>email signup</p>
				</div>

				<div className={styles.icons}>
					<span className={styles.icon}>
						<GrFacebookOption size={18} />
					</span>
					<span className={styles.icon}>
						<AiFillInstagram size={18} />
					</span>
					<span className={styles.icon}>
						<FaTwitter size={18} />
					</span>
					<span className={styles.icon}>
						<FaPinterest size={18} />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
