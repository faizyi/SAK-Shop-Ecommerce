import Link from 'next/link';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import useGetCategories from '@/app/(usersPages)/hooks/useGetCategories';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
export default function HeaderDrawer({ drawerVisible, setDrawerVisible }) {
  const {categories} = useGetCategories()
  const closeDrawer = () => setDrawerVisible(false);
  const date = new Date().getFullYear();
  return (
    <Drawer
      placement="left"
      onClose={closeDrawer}
      open={drawerVisible}
      className="lg:hidden relative z-50"
      height="100vh"
      closeIcon={
        <CloseOutlined
          style={{ 
            color: 'black', 
            fontSize: '20px',
            position: 'absolute',
            right: '16px',
            top: '16px' 
          }} 
        />
      }
      styles={{
        content: {
          backgroundColor: 'white',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        },
      }}
    >
      <div className="bg-black w-full flex items-center justify-center">
        <img
          src="/logo/logo.png"
          alt="My Store Logo"
          style={{width: "140px", height: "auto"}}
          className="absolute top-1 left-2 right-0 cursor-pointer hover:scale-105 
          transition duration-500 ease-in-out"
        />
      </div>

      <div className="flex flex-col h-full">
        <div className="flex-grow flex flex-col items-center space-y-11">
          <Link href="/" onClick={closeDrawer} 
          className="text-lg hover:underline underline-offset-4 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/shop/products" onClick={closeDrawer} 
          className="text-lg hover:underline underline-offset-4 transition duration-300 ease-in-out">
            Shop
          </Link>
          {categories?.map((category, index) => (
          <Link key={index} href={`/shop/products?category=${category}`} onClick={closeDrawer} 
          className="text-lg hover:underline underline-offset-4 transition duration-300 ease-in-out">
            {category}
          </Link> 
          ))}
          <Link href="/contact-us" onClick={closeDrawer} 
          className="text-lg hover:underline underline-offset-4 transition duration-300 ease-in-out">
            Contact us
          </Link>
        </div>
        
        <div className="border-t border-gray-300 pt-6">
          <div className="flex justify-center space-x-4 mb-4">
          <Link href="#" className="text-blue-500"><FaFacebookF className="w-6 h-6" /></Link>
            <Link href="https://wa.me/+92 3002730249" className="text-green-500">
            <FaWhatsapp className="w-6 h-6" /></Link>
          </div>
          <p className="text-center text-xs text-gray-500">
            © {date} All rights reserved.
          </p>
        </div>
      </div>
    </Drawer>
  );
}