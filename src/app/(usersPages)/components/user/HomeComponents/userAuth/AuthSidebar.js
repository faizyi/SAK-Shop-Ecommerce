import React, { useState } from 'react'
import { Drawer } from 'antd'
import Login from './Login'
import Signup from './Signup'
export default function AuthSidebar({showForm, setShowForm}) {
    const closeDrawer = () => setShowForm(false)
    const [isSignup, setIsSignup] = useState(false);
    const toggleForm = () => setIsSignup(!isSignup);
  return (
    <Drawer
    title={`${isSignup ? 'Sign Up' : 'Login'}`}
    placement="right"
    onClose={closeDrawer}
    open={showForm}
    className="lg:hidden relative z-50"
    height="100vh"
    width={400}
  >
    <div className='mt-14'>
     {isSignup ? (
        <Signup toggleForm={toggleForm} />
      ) : (
        <Login toggleForm={toggleForm} />
      )}
      </div>
  </Drawer>
  )
}
