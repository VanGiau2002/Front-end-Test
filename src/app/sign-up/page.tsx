'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FaAngleLeft } from 'react-icons/fa6';

export default function SignUpPage() {
	// redirect to login page
	const router = useRouter();

	const [user, setUser] = React.useState({
		username: '',
		email: '',
		password: '',
	});

	const [buttonDisabled, setButtonDisabled] = React.useState(false);

	const [loading, setLoading] = React.useState(false);

	const onSignUp = async () => {
		try {
			setLoading(true);

			const response = await axios.post('/api/users/signup', user);
			console.log('signup okay', response.data);
			router.push('/login');
		} catch (error: any) {
			console.log('Failed to sign up the user', error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (
			user.username.length > 0 &&
			user.email.length > 0 &&
			user.password.length > 0
		) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	console.log(user);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="py-10 mb-10 text-5xl">
				{loading ? 'Đang sử lý...' : 'Đăng ký'}
				<span className="italic text-sm absolute top-50 ml-4 text-green-600">
				</span>
			</h1>

			<input
				className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				id="username"
				type="text"
				value={user.username}
				onChange={(e) => setUser({ ...user, username: e.target.value })}
				placeholder="Họ tên..."
			/>

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
				onClick={onSignUp}
				className="p-2 border border-blue-300 rounded-lg focus:outline-none focus:border-gray-600 uppercase px-40 py-3 mt-10 font-bold">
				{buttonDisabled ? 'Đăng ký' : 'đăng ký tài khoản '}
			</button>

			<Link href="/login">
				<p className="mt-10">
				        Bạn chưa có tài khoản?{' '}
					<span className="font-bold text-600 ml-2 cursor-pointer underline">
					    đăng nhập vào tài khoản
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
