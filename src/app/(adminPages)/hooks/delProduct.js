import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "@/redux/product/productSlice";
import { delProduct } from "@/app/services/products/product";
export default function delProductHook(updateFilteredProducts) {
    const dispatch = useDispatch();
    const { isProducts } = useSelector((state) => state.product);
    const handleDeleteClick = async (product) => {  
        const res = await delProduct(product._id);
        if(res.status === 200){
            // const cache = await caches.open('product-cache');
            // await cache.delete("/getProducts");
            const updatedProducts = isProducts.filter((p) => p._id !== product._id);
            dispatch(setProducts(updatedProducts));
            updateFilteredProducts(updatedProducts);
        }
    }
  return {
    handleDeleteClick
  }
}
