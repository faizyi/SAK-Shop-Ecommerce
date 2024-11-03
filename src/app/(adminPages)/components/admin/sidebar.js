"use client"
import Link from "next/link";
import { FaPlus, FaList, FaSignOutAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { hideSidebar } from "@/app/redux/openSidebar/OSSlice";
const AdminSidebar = () => {
    // const dispatch = useDispatch();
    // const {isOpenSidebar} = useSelector((state) => state.sidebar);
    // const { theme, bg, color } = useSelector((state) => state.mode);
    const pathname = usePathname();
    return (
        <aside className={`
         fixed top-0 left-0 h-screen z-40 w-64 pt-20 p-5 transition-transform border-r border-gray-200 bg-slate-950 dark:border-gray-700`}>
            <div className={`dark:bg-slate-950`}>
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link href="/admin/addproduct" className={`${pathname === "/addproduct" ? "bg-gray-100 dark:bg-gray-700" : ""}
                        flex items-center p-2 text-gray-900 rounded-lg dark:text-white
                        hover:bg-gray-100 dark:hover:bg-gray-700`}>
                            <FaPlus className="w-5 h-5" />
                            <span 
                            // onClick={() => dispatch(hideSidebar())}
                             className="ms-3">Add Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/productslist" className={`${pathname === "/productslist" ? "bg-gray-100 dark:bg-gray-700" : ""}
                        flex items-center p-2 text-gray-900 rounded-lg dark:text-white
                        hover:bg-gray-100 dark:hover:bg-gray-700
                        `}>
                        <FaList className="w-5 h-5" />
                            <span 
                            // onClick={() => dispatch(hideSidebar())} 
                            className="ms-3">Products List</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/productslist" className={`
                        flex items-center p-2 text-gray-900 rounded-lg dark:text-white
                        hover:bg-gray-100 dark:hover:bg-gray-700
                        `}>
                            <FaSignOutAlt className="w-5 h-5" />
                            <span className="ms-3">Logout</span>
                        </Link>
                    </li>,
                </ul>
            </div>
        </aside>
    );
};

export default AdminSidebar;
