import React from 'react'
import student1 from '../assets/Images/Student1.png'
import student2 from '../assets/Images/Student2.png'


const selectedData = [
    {
        id: 1,
        image: student1,
        name: "Shivam Kumar",
        rank: "AIR 25",
        Designation: "District Magistrate",
        SelectionYear: "2023"
    },
    {
        id: 2,
        image: student2,
        name: "Priyansh Singh",
        rank: "AIR 50",
        Designation: "District Magistrate",
        SelectionYear: "2021"

    }, {
        id: 3,
        image: student1,
        name: "Rahul Verma",
        rank: "AIR 75",
        Designation: "Foreign Service Officer",
        SelectionYear: "2022"
    }, {
        id: 4,
        image: student2,
        name: "Amit Kumar",
        rank: "AIR 100",
        Designation: "Internal Security Officer",
        SelectionYear: "2020"
    }, {
        id: 5,
        image: student1,
        name: "Vikram Singh",
        rank: "AIR 125",
        Designation: "Income Tax Officer",
        SelectionYear: "2023"
    }

]
const SelectedStudent = () => {
    return (
        <>
            <div>
                <h1 className='text-xl md:text-3xl font-bold text-center  mt-1 md:mt-2'>Proud Achievers of Hriday IAS</h1>
                <p className='text-center text-[#7C5A4F] mt-4 text-sm md:text-base px-5'>
                    Meet our successful students who have achieved their dreams of becoming officers with the support and guidance of Hriday IAS.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-5 md:px-10 lg:px-16 py-10  rounded-xl'>
                    {selectedData.map((student) => (
                        <div key={student.id} className='h-full w-full bg-[#FFFAF3] border border-[#F1E2C7] rounded-xl transition-all duration-500 overflow-hidden hover:scale-[1.02] mb-2  shadow-sm hover:shadow-md 
                        hover:shadow-[#6B0F0F]/20'>
                            <img src={student.image} alt={student.name} className='w-full h-60 object-cover rounded-t-xl hover:scale-105 transition-all duration-700 ease-out' />
                            <div className='p-4 rounded-xl it'>
                                <h2 className='text-xl font-bold text-center text-[#7A120D]'>{student.name}</h2>
                                <p className='text-center text-[#7C5A4F] mt-2'>{student.rank}</p>
                                <p className='text-center text-[#7C5A4F] mt-2'>{student.Designation}</p>
                                <p className='text-center text-[#7C5A4F] mt-2'>Selected In:{student.SelectionYear}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SelectedStudent