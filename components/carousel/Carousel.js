import React, { useState } from 'react';
import styles from './Carousel.module.css';
const Carousel = () => {
	const [lmargin, setLmargin] = useState('0px');
	return (
		<div className={styles.container}>
			<div className={styles.slider}>
				<div className={styles.slides}>
					{/* radio button start */}
					<input type="radio" name="radio-btn" id="radio1" onClick={() => setLmargin('0')} />
					<input type="radio" name="radio-btn" id="radio2" onClick={() => setLmargin('-20%')} />
					<input type="radio" name="radio-btn" id="radio3" onClick={() => setLmargin('-40%')} />
					{/* radio button end */}

					<div className={styles.slide} style={{ marginLeft: lmargin }}>
						<img src="/bg-remove/6.jpg" style={{ width: '35%' }} />
						<div className={styles.menu}>
							<div className={styles.menu_title}>
								<p>Our sessional menu is here!</p>
								<div className={styles.line} />
							</div>
							<div>
								<h1>Summer honey</h1>
								<h1>chocolate juice</h1>
							</div>

							<div className={styles.btn}>
								<p>View Menu</p>
							</div>
						</div>
					</div>

					{/* ////////////////////// */}

					<div className={styles.slide}>
						<img src="/bg-remove/7.jpg" style={{ width: '35%' }} />
						<div className={styles.menu}>
							<div className={styles.menu_title}>
								<p>Our sessional menu is here!</p>
								<div className={styles.line} />
							</div>
							<div>
								<h1>Summer honey</h1>
								<h1>Yoghurt smoothie</h1>
							</div>

							<div className={styles.btn}>
								<p>View Menu</p>
							</div>
						</div>
					</div>
					{/* ........../////////........ */}
					<div className={styles.slide}>
						<img src="/bg-remove/8.jpg" style={{ width: '35%' }} />
						<div className={styles.menu}>
							<div className={styles.menu_title}>
								<p>Our sessional menu is here!</p>
								<div className={styles.line} />
							</div>
							<div>
								<h1>Summer honey</h1>
								<h1>fuschia lemonade</h1>
							</div>

							<div className={styles.btn}>
								<p>View Menu</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.navigation_manual}>
					<label for="radio1" className={styles.manual_btn}></label>
					<label for="radio2" className={styles.manual_btn}></label>
					<label for="radio3" className={styles.manual_btn}></label>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
