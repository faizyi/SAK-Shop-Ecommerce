"use client"
import { adminLogin } from '@/app/services/auth/admin'
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/app/redux/loader/loaderSlice';
import { useRouter } from 'next/navigation'

export default function useAdminLogin() {
    const router = useRouter();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        dispatch(showLoader());

        try {
            const res = await adminLogin(values);
            if (res.status === 200) {
                // Ensure that localStorage is accessed only on the client-side
                if (typeof window !== 'undefined') {
                    localStorage.setItem('admin', JSON.stringify(res.data));
                }
                alert(res.data.message);
                router.push('/admin');
            }
        } catch (error) {
            console.error("Login error:", error);
            alert('An error occurred during login. Please try again later.');
        } finally {
            // Hide the loader after the request completes (either success or failure)
            dispatch(hideLoader());
        }
    }

    const adminLogout = () => {
        // Clear localStorage on logout if it exists
        if (typeof window !== 'undefined') {
            localStorage.removeItem('admin');
        }
        router.push('/');
    }

    return {
        onFinish,
        adminLogout
    }
}
