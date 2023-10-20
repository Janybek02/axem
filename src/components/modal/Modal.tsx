import React, { ChangeEvent, useState } from 'react'
import { Link } from "react-router-dom"
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from '../../hooks/Hooks'
import {  closeModal } from '../../mainSlice/MainSlice'


interface IState {
    id: number
    name: string,
    job: string,
    weight: number,
    height: number,
    date: string,
    image: string
}
export const Modal = () => {
    const {mainIn } = useAppSelector(state => state.main)
    const [state, cetState] = useState<IState>({
        id: mainIn.id,
        name: mainIn.name,
        job: mainIn.job,
        weight: mainIn.weight,
        height: mainIn.height ,
        date: mainIn.date,
        image: mainIn.image
    })
    const dispatch = useAppDispatch()


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        cetState({ ...state, [e.target.name]: e.target.value })


    }

    const person = () => {
        let d = new Date().toUTCString();
        const date: string = `${d}`
        const newState = { ...state, date }
        dispatch(closeModal(newState))
        cetState({ ...state, name: "", job: "", weight: 0, height: 0 })
    }
    return (
        <div className=' w-full z-10 absolute h-[110vh] bg-[#c2c2c2a0] flex items-center justify-center'>
            <div className=' w-[50%] h-[400px] flex items-center justify-center bg-white'>
            <div className=' flex flex-col  justify-between w-[70%] '>
                        <div className=' flex mb-6 items-center justify-between'>
                            <p className=' text-slate-400'>
                                ФИО*
                            </p>
                            <input
                                name='name'
                                value={state.name}
                                onChange={onChange}
                                type='text' 
                            id="first_name" className="w-[370px] bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Баланчев Баланча Баланчаевич..." required />
                        </div>
                        <div className=' flex mb-6 items-center justify-between'>
                            <p className=' text-slate-400'>
                                Рaбота*
                            </p>
                            <input
                             name='job'
                             value={state.job}
                             onChange={onChange}
                            type="text" id="first_name" className="w-[370px] bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Без работный..." required />
                        </div>
                        <div className=' flex mb-6 items-center justify-between'>
                            <p className=' text-slate-400'>
                                Вес тела*
                            </p>
                            <input
                                 name='weight'
                                 value={state.weight}
                                 onChange={onChange}
                            type="text" id="first_name" className="w-[370px] bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="60" required />
                        </div>
                        <div className=' flex mb-6 items-center justify-between'>
                            <p className=' text-slate-400'>
                                Рост*
                            </p>
                            <input
                                 name='height'
                                 value={state.height}
                                 onChange={onChange}
                            type="text" id="first_name" className="w-[370px] bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="1.80" required />
                        </div>
                        <button
                        onClick={person}
                    className=' mt-[50px] flex items-center justify-center  w-full h-[56px] bg-[#3366FF]  '>
                        <p className=' font-bold text-[20px] text-white'> Добавить </p>
                        <FaCheck className='ml-[15px] tex-[30px] text-white' />
                    </button>
                    </div>
            </div>
        </div>
    )
}
