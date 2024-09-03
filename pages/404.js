import CommonLayout from '@/layouts/CommonLayout';

const NotFoudPage = () => {
	return <div>주소가 잘못되었습니다.</div>;
};

export default NotFoudPage;

NotFoudPage.getLayout = function getLayout(page) {
	return <CommonLayout>{page}</CommonLayout>;
};
