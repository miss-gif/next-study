import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	// 컴포넌트에서 기능을 가져옴
	const getLayout = Component.getLayout ?? (page => page);
	// 화면에 그리기
	return getLayout(<Component {...pageProps} />);
}
