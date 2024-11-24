"use client";
import { FaAlignLeft, FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import useGetCategories from "@/app/(usersPages)/hooks/useGetCategories";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderDrawer from "./drawer";
import AuthSidebar from "../userAuth/AuthSidebar";
import Cart from "../cart/cart";
export default function Header() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const {categories} = useGetCategories();
  function handleDrawerToggle() {
    setDrawerVisible((prev) => !prev);
  }
  return (
    <header className={`border-b sticky top-0 z-50 
    ${showSearch ? "" : "bg-opacity-90 backdrop-filter backdrop-blur-sm"} bg-white`}>
      {showSearch ? <HeaderSearchBar setShowSearch={setShowSearch} /> : null}
      <div className=" px-4 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="">
          <FaAlignLeft
            className="h-6 w-6 cursor-pointer text-gray-700 hover:text-primary 
              transition-transform transform hover:scale-110"
              onClick={handleDrawerToggle}
          />
        </div>
        <Link href="/" className="h-10">
          <img
            src="/logo/logo.png"
            alt="logo3"
            width={140}
            height={140}
            className="relative bottom-2 transform cursor-pointer hover:scale-105 transition 
              duration-500 ease-in-out"
          />
        </Link>
        </div>
        {/* Centered Navigation Links */}
        <nav className="hidden md:flex flex-grow justify-center space-x-6">
          <Link href="/" className="text-lg hover:underline
           underline-offset-4 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/shop/products" className="text-lg hover:underline 
          underline-offset-4 transition duration-300 ease-in-out">
            Shop
           </Link>
          {categories.map((category, index) => (
          <Link key={index} href={`/shop/products?category=${category}`} className="text-lg 
          hover:underline underline-offset-4 transition duration-300 ease-in-out">
            {category}
          </Link>
          ))}
          <Link href="/contact-us" className="text-lg hover:underline underline-offset-4 
          transition duration-300 ease-in-out">
            Contact us
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div onClick={() => setShowSearch(!showSearch)}>
            <FaSearch className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer" />
          </div>
          {/* <div onClick={() => setShowSearch(!showSearch)}>
            <FaShoppingCart onClick={()=> setShowCart(!showCart)} className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer" />
          </div> */}
          <div onClick={() => setShowForm(!showForm)}>
            <FaUserCircle className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer" />
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <HeaderDrawer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
      {showCart ? <Cart showCart={showCart} setShowCart={setShowCart} /> : null}
      {showForm ? <AuthSidebar showForm={showForm} setShowForm={setShowForm} /> : null}
    </header>
  );
}
