import BlogLayout from '@/layouts/BlogLayout';

const First = () => {
	return <div>첫 내용</div>;
};

export default First;

First.getLayout = function getLayout(page) {
	return <BlogLayout>{page}</BlogLayout>;
};
