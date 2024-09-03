import BlogLayout from '@/layouts/BlogLayout';

const Blog = () => {
	return <div>Blog 첫페이지 입니다.</div>;
};

export default Blog;
Blog.getLayout = function getLayout(page) {
	return <BlogLayout>{page}</BlogLayout>;
};
