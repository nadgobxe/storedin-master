import React from 'react'
import { mockData } from './mockData/mockData';
import divider from '../assets/divider.svg'
import FormStepOne from '../components/Form/FormStepOne';

export default function Home() {
  return (
    <div className='px-6'>
      <h1 className="text-2xl font-bold text-left font-montserrat mb-2"
        dangerouslySetInnerHTML={{ __html: mockData.home.title }} /// Title is a string with html tags so we use dangerouslySetInnerHTML to render it
      >
      </h1>
      <div className="flex flex-row gap-4 ">
        {mockData.home.steps.map((step, index) => ( /// Map through the steps array and render each step
          <div key={`${step.title}-${index}`} className="flex flex-col">
            <p className="font-raleway text-md">{step.title}</p>
            <img src={divider} alt="divider" className='-mt-2 h-4' />
          </div>
        ))}
      </div>
      <FormStepOne />
    </div>
  )
}
