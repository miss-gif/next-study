import BlogLayout from '@/layouts/BlogLayout';
import { useRouter } from 'next/router';

const BlogDetail = () => {
	const router = useRouter();
	// console.log(router);
	const { id } = router.query;
	return <div> {id} 페이지 입니다.</div>;
};

export default BlogDetail;

BlogDetail.getLayout = function getLayout(page) {
	return <BlogLayout>{page}</BlogLayout>;
};
