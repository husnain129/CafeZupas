import Image from 'next/image';
import styles from './Catering.module.css';
function Catering() {
	return (
		<div className={styles.container}>
			<Image src="/bg-remove/catering.jpeg" width={1621} height={1000} layout="responsive" />
			<div className={styles.title}>
				<h1>
					wholeosme <br />
					hosting
				</h1>
			</div>
			<div className={styles.content}>
				<p>
					Exactly what meeting and parties need <br />
					to taste and feet best.Ee make it easy{' '}
				</p>
				<div className={styles.btn}>
					<p>Catering details</p>
				</div>
				<div className={styles.line} />
			</div>
		</div>
	);
}

export default Catering;
