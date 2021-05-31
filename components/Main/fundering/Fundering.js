import Image from 'next/image';
import styles from './Fundering.module.css';
function Fundering() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Image src="/bg-remove/fundering.jpeg" width={500} height={690} />
				<div className={styles.data}>
					<h1>
						Food <br /> for funds
					</h1>
					<p>
						We've never meet a <span style={{ fontWeight: 'bold' }}>good cause</span> <br />
						We could't cook for. See what <br />
						we can do for yours
					</p>
					<div className={styles.btn}>
						<p>Catering details</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Fundering;
