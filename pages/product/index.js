import ProductHeader from '@/components/product/ProductHeader';
import ProductList from '@/components/product/ProductList';
import CommonLayout from '@/layouts/CommonLayout';

const ProductPage = () => {
	return (
		<div>
			<ProductHeader title="제품목록" />
			<ProductList />
		</div>
	);
};

export default ProductPage;

ProductPage.getLayout = function getLayout(page) {
	return <CommonLayout>{page}</CommonLayout>;
};
