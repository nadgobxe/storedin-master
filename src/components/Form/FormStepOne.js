import React, { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


export default function FormStepOne() {
    const [pickupAddress, setPickupAddress] = useState(null);
    const [deliveryAddress, setDeliveryAddress] = useState(null);


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
            <Button
                className="bg-[#2EBBB6] w-full md:w-auto text-white font-raleway font-semiboldnp"
                color="primary"
                variant="flat"
            >
                Get A Quote
            </Button>
        </div>
    );
}
