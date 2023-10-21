import React, {useState, ChangeEvent} from 'react'
import { searchPeron } from '../../mainSlice/MainSlice'
import {Link} from "react-router-dom"
import { useAppSelector, useAppDispatch } from '../../hooks/Hooks'

export const Start = () => {
    const [search, cetSearch ] = useState("")
    const dispatch = useAppDispatch()
    const {main} = useAppSelector(state => state.main)
    const handleSearch = (e : ChangeEvent<HTMLInputElement>) => {
        cetSearch( e.target.value )
    }
    return (

        <div className=' w-[80%] max-[1000px]:w-[95%] bg-white  h-[200px]'>
            <div className='flex mb-28 items-center justify-between '>
                <p className=' text-[20px] text-black'>Motion</p>
                <p className=' text-[20px] '>Пользователь</p>
                <p className=' text-[20px]'>Эрлан Жусупов</p>
            </div>
            <div className=' flex items-center justify-between '>
                <p className=' text-black text-[30px] '>Пользователи({main.length})</p>
                <div className=' w-[40%] flex items-center justify-between '>
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only  ">Search</label>
                        <div className="relative w-full ">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                onChange={handleSearch}
                            type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
                            <button 
                                onClick={() => dispatch(searchPeron(search))}
                            type="submit" className="text-white absolute right-0 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Найти</button>
                        </div>
                        <Link  to={"/add"}>
                            <button type="submit" className="text-white ml-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Добавить</button>

                        </Link>
                </div>
            </div>
        </div>
    )
}
