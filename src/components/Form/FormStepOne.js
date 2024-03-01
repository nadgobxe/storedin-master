import React, { useState, useEffect } from 'react';
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';


export default function FormStepOne() {
    const [pickupAddress, setPickupAddress] = useState(null);
    const [deliveryAddress, setDeliveryAddress] = useState();
    const [showSelectDelivery, setShowSelectDelivery] = useState(false);

    function findPostalCode(query) {
        const apiKey = 'uJ8qNXP3RGTWXkNJItNvWA1MqLww2NZA'; // Be cautious with API keys in frontend code
        const url = `https://api.os.uk/search/places/v1/find?query=${encodeURIComponent(query)}&key=${apiKey}`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Processing the data to extract postal codes
                const postalCodes = data.results.map(result => {
                    // Depending on the structure of the API response, this path might need adjustment
                    return result.DPA.ADDRESS;
                });
                setDeliveryAddress(postalCodes);
                console.log(postalCodes);
            })
            .catch(error => {
                console.error('Error fetching postal code:', error);
            });
    }

    const handlePostCode = (e) => { 
        e.preventDefault();
        if (e.target.value.length > 3) {
            findPostalCode(e.target.value);
        }
        
    }


    const handleSelectAddress = (value) => {
        setPickupAddress(value);
    }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/booking'); // Use navigate to redirect
    }

    return (
        <div className="flex w-full flex-wrap items-end mt-10 md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input className="font-raleway font-bold " type="address" value={pickupAddress} onChange={handlePostCode} variant="flat"
      placeholder="Enter your Postcode" />
            {deliveryAddress ? (
                <Select placeholder="Select your Address" onSelect={handleSelectAddress} className="w-full font-bold md:w-auto font-raleway next-ui-input bg-white rounded-md">
                    {deliveryAddress &&
                        deliveryAddress.map((address, index) => (
                            <SelectItem className="w-full md:w-auto font-raleway font-bold next-ui-input bg-white rounded-md"
                                key={index}
                                value={address}
                            >{address} 
                            </SelectItem>
                        ))}
                </Select>
            ) : null}

            <Button
                className="bg-[#2EBBB6] w-full md:w-auto text-white font-raleway font-semiboldnp"
                color="primary"
                variant="flat"
                onClick={handleClick}
            >
                Get A Quote
            </Button>
        </div>
    );
}
