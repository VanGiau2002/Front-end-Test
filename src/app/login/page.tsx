'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FaAngleLeft } from 'react-icons/fa6';

export default function LoginPage() {
	const router = useRouter();
	const [user, setUser] = React.useState({
		email: '',
		password: '',
	});
	const [buttonDisabled, setButtonDisabled] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const onLogin = async () => {
		try {
			setLoading(true);
			const response = await axios.post('api/users/login', user);
			console.log('Login successful', response.data);
			router.push('/profile');
		} catch (error: any) {
			console.log('Login failed', error.message);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	console.log(user);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="py-10 mb-10 text-5xl">
				{loading ? "Hiện đang đăng nhập" : 'Đăng nhập tài khoản'}
			</h1>

			<input
				className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				id="email"
				type="text"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
				placeholder="Email..."
			/>

			<input
				className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				id="password"
				type="password"
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				placeholder="Mật khẩu..."
			/>

			<button
				onClick={onLogin}
				className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 uppercase px-40 py-3 mt-10 font-bold">
				Đăng nhập
			</button>
			<Link href="/sign-up">
				<p className="mt-10">
				        Bạn chưa có tài khoản?
					<span className="font-bold text-600 ml-2 cursor-pointer underline">
					    Đăng ký tài khoản ngay bây giờ
					</span>
				</p>
			</Link>
			<Link href="/">
				<p className="mt-8 opacity-50">
					<FaAngleLeft className="inline mr-1" /> Quay lại trang chủ
				</p>
			</Link>
		</div>
	);
}
