
import { useState } from 'react';
import Sidebar from './Sidebar';

const initialProducts = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: 90.00,
        quantity: 1,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: 32.00,
        quantity: 1,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
];

export default function Cart({ showCart, setShowCart }) {
    const [products, setProducts] = useState(initialProducts);
    // const increaseQuantity = (id) => {
    //     const updatedProducts = products.map((product) => {
    //         if (product.id === id) {
    //             return { ...product, quantity: product.quantity + 1 };
    //         }
    //         return product;
    //     });
    //     setProducts(updatedProducts);
    // };

    // // Handle quantity decrease
    // const decreaseQuantity = (id) => {
    //     const updatedProducts = products.map((product) => {
    //         if (product.id === id && product.quantity > 1) {
    //             return { ...product, quantity: product.quantity - 1 };
    //         }
    //         return product;
    //     });
    //     setProducts(updatedProducts);
    // };

    // // Handle product removal
    // const removeProduct = (id) => {
    //     const updatedProducts = products.filter(product => product.id !== id);
    //     setProducts(updatedProducts);
    // };

    return (
        <Sidebar showCart={[showCart, setShowCart]}/>
    );
}
