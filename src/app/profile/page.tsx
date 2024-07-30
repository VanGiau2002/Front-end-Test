'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image'

export default function ProfilePage() {
	const router = useRouter();
	const logoutTheUser = async () => {
		try {
			await axios.get('api/users/logout');
			router.push('/login');
		} catch (error: any) {
			console.log('Chúng tôi không thể đăng xuất người dùng' + error.message);
		}
	};
	return (
		<div className="mx-5">
			<div className="my-10 flex justify-end ">
				<button
					className="uppercase bg-white text-black rounded-full px-10 py-2 hover:bg-red-500 hover:text-white"
					onClick={logoutTheUser}>
					ăng xuất
				</button>
			</div>

			<h1 className="text-green-600 text-5xl text-center py-10">
			    Hồ sơ của bạn
			</h1>
		</div>
	);
}
