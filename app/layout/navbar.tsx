// Navbar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
            <div className={styles.title}>
                <Link legacyBehavior href="/">
                    <a>
                        <Image src="/logo.svg" alt="WordPress Logo" width={200} height={50} />
                    </a>
                </Link>
            </div>

                <li>
                    <Link legacyBehavior href="/about">
                        <a>Products</a>
                    </Link>
                </li>
                <li>
                    <Link  legacyBehavior href="/services">
                        <a>Features</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="/resources">
                        <a>Resources</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="/plans">
                        <a>Plans & Pricing</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.usersActions}>
                <Link legacyBehavior href="/login">
                    <a className={styles.login}>Login</a>
                </Link>
                <Link legacyBehavior href="/signup">
                    <a className={styles.getStarted}>Get Started</a>
                </Link>
            </div>
        </nav>
    );
}
