import Link from 'next/link';

export default function Home() {
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<h1>

			</h1>
			<Link href="sign-up">
				<button className="bg-yellow-600 px-20 py-5 square-full font-bold text-2xl cursor-pointer hover:opacity-80">
				 Đăng ký
				</button>
			</Link>
		</div>
	);
}
