import Link from 'next/link';
import React from 'react';
import styles from './CommonLayout.module.css';

const CommonLayout = ({ children }) => {
	return (
		<div className={styles.wrap}>
			<header className={styles.header}>
				<h1>일반 레이아웃 </h1>
				<nav>
					<ul>
						<li>
							<Link href="/">홈</Link>
						</li>
						<li>
							<Link href="/about">소개</Link>
						</li>
						<li>
							<Link href="/product">제품</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main>{children}</main>

			<footer>하단</footer>
		</div>
	);
};

export default CommonLayout;
