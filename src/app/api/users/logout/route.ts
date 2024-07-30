import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const userLogoutResponse = NextResponse.json({
			message: 'Người dùng đã đăng xuất!',
			success: true,
		});
		userLogoutResponse.cookies.set('token', '', {
			httpOnly: true,
			expires: new Date(0),  
		});

		return userLogoutResponse;
	} catch (error: any) {
		return NextResponse.json(
			{
				error: error.message,
			},
			{ status: 500 }
		);
	}
}
