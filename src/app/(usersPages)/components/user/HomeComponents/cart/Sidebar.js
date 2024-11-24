import React from 'react'
import { Drawer } from 'antd';
export default function Sidebar({ showCart, setShowCart, products }) {
  const closeDrawer = () => setShowCart(false);
  return (
    <Drawer
      title="Shopping cart"
      placement="right"
      onClose={closeDrawer}
      open={showCart}
      className="relative z-50"
    >
      <div className="flex h-full flex-col">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {products.map((product) => (
            <li key={product.id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <div>
                      {/* <p className="ml-4">${(product.price).toFixed(2)}</p> */}
                      <p className="ml-4">${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <div className="flex items-center">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <p className="mx-2 text-gray-500">Qty {product.quantity}</p>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex">
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  )
}
