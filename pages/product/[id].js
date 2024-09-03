import { getProductItem } from '@/api';
import ProductHeader from '@/components/product/ProductHeader';
import CommonLayout from '@/layouts/CommonLayout';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';

const ProductDetail = ({ goodInfo }) => {
	console.log(goodInfo);
	return (
		<div>
			<ProductHeader title="상세 정보" />
			<div>
				<Image
					src={goodInfo.imageUrl}
					width={300}
					height={200}
					alt={goodInfo.name}
				/>
			</div>
			<p>{goodInfo.name}</p>
			<p>{goodInfo.price}</p>
		</div>
	);
};

export default ProductDetail;
// props 를 전달하여서 내용을 생성함.
// 그런데, 외부 에서 props 를 전달 받지 않고,
// 스스로 props 를 전달하고
// 스스로 prosp 를 표현하는 html 태그를 생성해서 출력합니다.
// SSR 입니다. (ServerSideRedering)
// 약속된 Next.js 함수로서 반드시 pages 폴더에서만 작동됩니다.
export async function getServerSideProps(context) {
	// console.log('getServerSideProps : ', context.params.id);
	const id = context.params.id;
	const { data } = await getProductItem(id);
	// console.log(data);
	return {
		props: { goodInfo: data },
	};
}

// 개발자가 레이아웃을 공통으로 사용하고 싶어서 생성한 함수
// 실행은 _app.js 에서 실행합니다.
ProductDetail.getLayout = function getLayout(page) {
	return <CommonLayout>{page}</CommonLayout>;
};
