"use client"
import DetailProduct from '@/app/components/user/DetailProduct.js/DetailProduct'
import { useParams } from 'next/navigation'
export default function page() {
    const params = useParams()
    const {productId} = params
  return (
    <DetailProduct productId={productId}/>
  )
}