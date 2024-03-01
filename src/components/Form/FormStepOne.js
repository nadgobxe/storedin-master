import React, { useState, useEffect } from 'react';
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


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


    const handlePlaceSelect = (address, inputType) => {
        if (inputType === 'pick-up') {
            setPickupAddress(address);
        } else if (inputType === 'delivery') {
            setDeliveryAddress(address);
        }
    };

    return (
        <div className="flex w-full flex-wrap items-end mt-10 md:flex-nowrap mb-6 md:mb-0 gap-4">
            <GooglePlacesAutocomplete 
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                selectProps={{
                    value: pickupAddress,
                    onChange: (address) => handlePlaceSelect(address, 'pick-up'),
                    placeholder: 'Pick-Up Address',
                    className: "w-full md:w-auto text-black font-raleway font-semibold next-ui-input bg-white rounded-md"
                }}
            />
        
            {console.log(deliveryAddress)}
            <Button
                className="bg-[#2EBBB6] w-full md:w-auto text-white font-raleway font-semiboldnp"
                color="primary"
                variant="flat"
            >
                Get A Quote
            </Button>

            <Input onChange={handlePostCode}/>
            {deliveryAddress ? <Select placeholder="Delivery Address">
            {deliveryAddress && deliveryAddress.map((address, index) => (
                // Code inside the map function
         
                    <SelectItem key={index} value={address} label={address} className='text-black'/>
                 
            ))}
              </Select> :
              null}  
        </div>
    );
}
