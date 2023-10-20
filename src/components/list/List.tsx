import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/Hooks'
import { changePerson, closeModal, deletePerson } from '../../mainSlice/MainSlice'
export const List = () => {
    const { main } = useAppSelector(state => state.main)
    const dispatch = useAppDispatch()
    return (
        <>

            <div className="w-[80%] max-[1000px]:w-[95%] mt-12  border border-gray-200 rounded-lg shadow  ">
                <div className="flex pl-[80px] pr-[200px] w-full h-[50px] items-center justify-between rounded-t-lg  bg-slate-200">

                    <div className='  flex items-center justify-between'>
                        <p className="text-[15px] font-bold leading-none text-gray-900 ">Дата регистрации</p>
                        <p className="text-[15px] ml-[100px] font-bold leading-none text-gray-900 ">ФИО</p>
                    </div>
                    <div className=' w-[30%] flex items-center justify-between'>
                        <p className="text-[15px] font-bold leading-none text-gray-900 ">Работа</p>
                        <p className="text-[15px] font-bold leading-none text-gray-900 ">Вес тела</p>
                        <p className="text-[15px] font-bold leading-none text-gray-900 ">Рост</p>
                    </div>
                </div>
                {
                    main.map(items => {
                        return <>
                            <div className=" flex items-center  py-8 ">

                                <div className=" ml-6 ">
                                    <img className="w-8 h-8 rounded-full" src={items.image} alt="Neil image" />
                                </div>
                                <div className='flex items-center justify-between pl-[25px] pr-[30px] w-full '>
                                    <div className="  w-[46%] flex items-center ">
                                        <div className=' flex items-center'>
                                            <p className="text-sm font-medium text-gray-900 truncate ">
                                                {items.date.slice(0, 22)}
                                            </p>
                                        </div>
                                        <div className=' flex items-center ml-[80px]'>
                                            <p className="text-sm font-medium text-gray-900 truncate ">
                                                {items.name}
                                            </p>

                                        </div>
                                    </div>
                                    <div className='  w-[29.5%] flex items-center justify-between '>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                            {items.job}
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                            {items.weight}
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                            {items.height}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center '>
                                    <button
                                        onClick={() => dispatch(changePerson(items))}
                                        type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Change</button>
                                    <button
                                        onClick={() => dispatch(deletePerson(items.id))}
                                        type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>

                                </div>


                            </div>
                        </>
                    })
                }
            </div>

        </>


    )
}
