import { searchProduct } from '@/app/services/products/product'
import React, { useState } from 'react'

export default function useSearchProduct() {
    const [value, setValue] = useState('')
    const [serachData, setSerachData] = useState([])
    const handleSearch = async (e)=>{
        const searchValue = e.target.value
        setValue(searchValue)
        if(searchValue.toLowerCase()){
            try {
                const res = await searchProduct(searchValue.toLowerCase());
                setSerachData(res.data.products) 
            } catch (error) {
                console.log(error) 
            }
        }else setSerachData([])
    }
  return {
    value,
    setValue,
    handleSearch,
    serachData
  }
}
