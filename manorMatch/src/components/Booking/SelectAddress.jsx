import { useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const SelectAddress = ({ goToPreviousPage, goToNextPage }) => {

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleClick = () => {
    if (selectedAddress !== null && selectedAddress !== 'Select Address') {
      goToNextPage();
    }
  }

  return (
    <div className="font-thin w-full flex flex-col justify-between items-center p-8 text-3xl">
      Select from saved addresses:
      <select
        onChange={(e) => setSelectedAddress(e.target.value)}
        className="text-black w-1/2 h-1/8">
        <option value='Select Address'><span className="text-xs">Select Address</span></option>
        <option value="address1">123 Main St</option>
        <option value="address2">456 Elm St</option>
        <option value="address3">789 Oak St</option>
      </select>
      <div className="flex w-full justify-between text-3xl">
        <button
          onClick={() => goToPreviousPage()}
          className="hover:scale-110 transform transition duration-200 ease-in-out"
        ><FaLongArrowAltLeft /></button>
        <button
          onClick={() => handleClick()}
          className="hover:scale-110 transform transition duration-200 ease-in-out"
        ><FaLongArrowAltRight /></button>
      </div>
    </div>
  )
}

export default SelectAddress;