import React, { useEffect } from 'react'
import { mockData } from './mockData/mockData';
import divider from '../assets/divider.svg'
import FormStepOne from '../components/Form/FormStepOne';
import TrustBox from '../components/TrustpilotWidget/TrustpilotWidget';
import workingman from '../assets/working_man.svg'

export default function Home() {



  return (
    <div className='px-6'>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-left font-montserrat mb-2"
            dangerouslySetInnerHTML={{ __html: mockData.home.title }} /// Title is a string with html tags so we use dangerouslySetInnerHTML to render it
          >
          </h1>
          <div className="flex flex-row gap-4 ">
            {mockData.home.steps.map((step, index) => ( /// Map through the steps array and render each step
              <div key={`${step.title}-${index}`} className="flex flex-col">
                <p className="font-raleway text-xs mb-1">{step.title}</p>
                <img src={divider} alt="divider" className='-mt-2 h-3' />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-wrap content-center'>
          <img src={workingman} alt="workingman" className="h-20" />
        </div>
      </div>
      <FormStepOne />
      <TrustBox className="mx-auto mt-4"
        templateId={mockData.trustpilot.templateId}
        businessUnitId={mockData.trustpilot.businessUnitId}
        locale={mockData.trustpilot.locale}
        styleHeight={mockData.trustpilot.styleHeight}
        styleWidth={mockData.trustpilot.styleWidth}
        theme={mockData.trustpilot.theme}
      />

    </div>
  )
}
