import React, { useState, useMemo } from 'react';
import { Button, Link } from '@nextui-org/react';
import CartService from './CartService';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import NavBar from '../LandingPage/NavBar';
import AddressInputs from './AddressInputs';

const ShoppingCart = () => {
  // Sample data for services in the cart
  const [services, setServices] = useState([
    { id: 1, name: 'Pool Cleaning', price: 1500 },
    { id: 2, name: 'Gardening', price: 500 },
    { id: 3, name: 'Housekeeping', price: 500 },
  ]);

  const removeService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  // Calculate the total amount of the services
  const total = useMemo(() => {
    return services.reduce((acc, service) => acc + service.price, 0);
  }, [services]);

  const proceedToCheckOut = (e) => {
    e.preventDefault();
    // would handle the checkout process by stripe
    console.log('Proceeding to checkout');
  };


  if (services.length === 0) {
    return (
      <>
      <NavBar />
      <section className='bg-mmblue min-h-screen'>
        <div className='my-4 flex flex-col gap-4 items-center'>
          <p className='text-3xl font-semibold text-mmcream'>Your Service Cart is Empty</p>
          <Link href='/home' className='text-primary font-semibold text-mmcream'>
            Continue Booking
          </Link>
        </div>
      </section>
      </>
    );
  }

  return (
    <>
    <NavBar />
    <section className="bg-mmblue min-h-screen px-8">
      <div className="flex justify-between gap-8">
        <div className="w-full lg:w-2/3 xl:w-1/2">
          <Link href='/home' className='text-primary font-semibold flex items-center text-mmcream'>
            <ChevronLeftIcon className={'w-4 mr-2'} />
            Continue Booking
          </Link>
          <h2 className='text-xl font-semibold text-mmcream my-4'>Selected Services</h2>
          <div>
            {services.map(service => (
              <CartService
                key={service.id}
                service={service.name}
                price={service.price}
                onRemove={() => removeService(service.id)}
              />
            ))}
              <div className='grid grid-cols-8 gap-4 pt-2 mt-4 items-center'>
                <div className='col-span-5 px-4'>
                  <p className='font-semibold text-mmcream'>Total:</p>
                </div>
                <div className='col-span-2 text-right font-semibold text-mmcream'>
                  ${total}
                </div>
                <div className='col-span-1'></div>
              </div>
            </div>
          </div>
        <div className="w-full lg:w-1/3 xl:w-1/2 max-w-md">
          <h2 className='text-xl font-semibold text-mmcream my-4'>Check Out</h2>
          <div className='rounded-xl p-6 bg-mmsand text-mmblue'>
            <form onSubmit={proceedToCheckOut} className="flex flex-col gap-6">
              <AddressInputs />
              <Button type='submit' color='primary' fullWidth className="bg-mmblue border border-mmblue text-mmcream">Submit Payment</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);
};

export default ShoppingCart;
