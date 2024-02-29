import React from 'react'
import { Input, Button } from "@nextui-org/react";

export default function FormStepOne() {
    return (
        <div className="flex w-full flex-wrap items-end mt-10 md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="address"
                label="Pick-Up Address"
                variant='bordered'

            />
            <Input
                type="address"
                label="Delivery Address"
                variant='bordered'

            />
            <Button className="bg-[#2EBBB6] w-full md:w-auto text-white font-raleway font-semiboldnp" color="primary" variant="flat" >             Get A Quote
            </Button>
        </div>
    )
}

