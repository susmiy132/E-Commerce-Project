import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'

export default function ProductDetails() {


    return (

        <>
            <BreadCrumb />
            <div className='bg-white flex items-center justify-center shadow-2xl'>
                <div className='grid grid-cols-1 row-end-3'>
                    <img src="https://www.google.com/search?q=ladies+side+bag+design+images&oq=ladies+bag+react+&gs_lcrp=EgZjaHJvbWUqBwgBEAAY7wUyBggAEEUYOTIHCAEQABjvBTIHCAIQABjvBTIHCAMQABjvBTIHCAQQABjvBTIHCAUQABjvBdIBCTE0NDIyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#sv=CAMSZxowKg5ZbXpqSHhEeHRSZ2xtTTIOWW16akh4RHh0UmdsbU06Di1hTTQ1UTd6eG1VSTBNIAQqLwobX0NNZEFhdC1zQTkzbHNlTVAydGVfaUE0XzQ0Eg5ZbXpqSHhEeHRSZ2xtTRgAMAEYByCq14mgCEoIEAEYASABKAE" alt="" />

                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1>Description</h1>
                </div>
            </div>
        </>
    )
}
