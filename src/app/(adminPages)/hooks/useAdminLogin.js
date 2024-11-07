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
            dispatch(hideLoader());
            if(res.status === 200){
                localStorage.setItem('admin', JSON.stringify(res.data));
                alert(res.data.message)
                router.push('/admin')
            }
        } catch (error) {
            dispatch(hideLoader());
            console.log(error)
        } finally {
            dispatch(hideLoader());
        }
    }

    const adminLogout = () => {
        localStorage.removeItem('admin');
        router.push('/')
    }
  return {
    onFinish,
    adminLogout
  }
}
