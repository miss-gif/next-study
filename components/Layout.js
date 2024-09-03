import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
	return (
		<div>
			<header>
				<nav>
					<ul>
						<li>
							<Link href="/">홈</Link>
						</li>
						<li>
							<Link href="/about">소개</Link>
						</li>
						<li>
							<Link href="/blog">블로그</Link>
						</li>
						<li>
							<Link href="/blog/1">블로그/1</Link>
						</li>
						<li>
							<Link href="/blog/2">블로그/2</Link>
						</li>
						<li>
							<Link href="/blog/3">블로그/3</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>{children}</main>
			<footer>하단</footer>
		</div>
	);
};

export default Layout;
