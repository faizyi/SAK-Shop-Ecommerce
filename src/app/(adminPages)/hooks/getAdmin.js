"use client"
import React, { useEffect, useState } from 'react'

export default function getAdmin() {
    const [adminData, setAdminData] = useState(null);
    useEffect(() => {
        // Check if running in the client-side
        if (typeof window !== 'undefined') {
            const storedAdmin = localStorage.getItem('admin');
            if (storedAdmin) {
                // Parse and set the data from localStorage
                setAdminData(JSON.parse(storedAdmin));
            }
        }
    }, []);
  return {
    adminData,
  }
}
