import styles from './KContent.module.css';
function KContent() {
	return (
		<div className={styles.container}>
			<p>
				<span style={{ fontWeight: 'bold' }}>Life is so greate</span> when you love the choice you make.So we
				give You more greate choice to love-house made soap,salad and sandwich, prepared daily with high
				quality,ingredients and flavour from around the world.
			</p>
			<p>
				It is food that always real, whole and healthy, prepared with cared and consideration.In other word.
				It's slow food serve fast.
			</p>
			<div className={styles.btn}>
				<p>See Our Menu</p>
			</div>
		</div>
	);
}

export default KContent;
