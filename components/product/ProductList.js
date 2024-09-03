import { getProducts } from '@/api';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
const ProductList = () => {
	// CSR 로 내용을 채워줌.
	// Hydration (하이드레이션)
	const [goods, setGoods] = useState([]);
	const getGoods = async () => {
		try {
			const { data } = await getProducts();
			setGoods(data);
		} catch (error) {
			if (error.response) {
				// 서버가 응답을 반환했지만 상태 코드가 2xx 범위가 아닌 경우
				console.log('Response Error:', error.response.status, error.response.data);
			} else if (error.request) {
				// 요청이 만들어졌지만 응답을 받지 못한 경우
				console.log('Request Error:', error.request);
			} else {
				// 요청 설정 중에 오류가 발생한 경우
				console.log('Error:', error.message);
			}
		}
	};
	
	useEffect(() => {
		getGoods();
	}, []);
	return (
		<ul>
			{goods &&
				goods.map(item => (
					<li key={item.id} className={styles.productitem}>
						<Link href={`/product/${item.id}`}>
							<div>
								{/* <img src={item.imageUrl} alt="item.name" /> */}
								<Image
									src={item.imageUrl}
									width={300}
									height={200}
									alt={item.name}
								/>
							</div>
							<div>{item.name}</div>
						</Link>
					</li>
				))}
		</ul>
	);
};

export default ProductList;
