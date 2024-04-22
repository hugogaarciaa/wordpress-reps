import styles from './hero.module.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function Hero() {
    return (
        <div>
            <div className={styles.main}>
            <div className={styles.title} >
                <h1>Free, Simple, and Ready to Grow</h1>
                <p>Get started with a free, one-of-a-kind website. Then take it even further with powerful plans to help you grow, sell, and succeed.</p>
                <button className={styles.start}>Start with free</button>
            </div>
        </div>
        <div className={styles.submain}>
            <div className={styles.leftSide}>
            <div className={styles.subtitle}>
                <h2>
                Create it, own it, earn from it
                </h2>

        </div>
        <div className={styles.phrase}>
            <p>Don’t just create your free website—own it, with the world’s favorite open source website builder. Add professionally designed themes, lightning fast hosting, and monetization features from the start, then grow as you go.</p>
        </div>
        </div>
        <div className={styles.rightSide}>
            <Image src="/assets/image.png" alt="WordPress Logo" width={500} height={50} />
        </div>
        </div>
        </div>
       
    );
}
