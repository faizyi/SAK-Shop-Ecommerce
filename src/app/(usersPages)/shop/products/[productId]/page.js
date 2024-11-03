"use client";
import DetailProduct from '@/app/(usersPages)/components/user/DetailProduct.js/DetailProduct';
import React from 'react';

export default function Page({ params }) {
    // Unwrap the promise using React.use()
    const unwrappedParams = React.use(params);
    const productId = unwrappedParams.productId;
    return <DetailProduct productId={productId} />;
}
