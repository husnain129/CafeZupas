import styles from './KStory.module.css';
function KStory() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.line} />
				<div className={styles.heading}>
					<p>Our story</p>
				</div>
				<div className={styles.line} />
			</div>
			<div className={styles.s_heading}>
				<p>Of Elevated Eating</p>
			</div>
			<div className={styles.img_container}>
				<div style={{ flex: 1 }}>
					{/* <Image src=/"/kitchen/chef2.jpeg" width={560} height={800} /> */}
					<img src="/kitchen/chef2.jpeg" width="100%" />
				</div>
				<div className={styles.img_content}>
					<p>
						In 2004, two friends with a passion for exploring and eating opened the first Cafe Zupas in
						Provo,Utlah. Today, more than 50 restaurants across eight state follow the same recipe for
						success: real meals,crafted from scratch, the way you would at home (if you had a lot more time
						than your hands).
					</p>
				</div>
			</div>
			{/* <div className={styles.view}>
                <div className={styles.br}>
                <div>
                    <p>Real Food in Full View</p>
                    <p>Our re</p>
                    <p></p>
                </div>
            </div> */}
		</div>
	);
}

export default KStory;
