import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const FetchData = () => {
    const[records,setRecords] = useState([]);
    useEffect(()=>{
        fetch('http://20.244.56.144.test/companies/AMZ/categories/Laptop//products?top=10&minPrice=1&maxPrice')
    })
  return (
    <div>
    
    </div>
  );
}

export default FetchData;
