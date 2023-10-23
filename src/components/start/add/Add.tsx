import React, { ChangeEvent, useState } from 'react'
import { Link } from "react-router-dom"
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { useAppDispatch } from '../../../hooks/Hooks'
import { addPerson } from '../../../mainSlice/MainSlice'
import { url } from 'inspector'
interface IState {
    id: number
    name: string,
    job: string,
    weight: number,
    height: number,
    date: string,
    image?: string | any
}


export const Add = () => {
    const [state, cetState] = useState<IState>({
        id: 0,
        name: "",
        job: "",
        weight: 0,
        height: 0,
        date: "",
        image: undefined
    })
    const [file, cetFile] = useState<ArrayBuffer | string | null>("")
    const dispatch = useAppDispatch()

    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        cetFile(fileReader.result)
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        cetState({ ...state, [e.target.name]: e.target.value })
    }
    const fileChange = (e: ChangeEvent<any>) => {
        fileReader.readAsDataURL(e.target.files[0])
    }
    const bg = file ? `url("${file}")` : " rgb(241 245 249 / var(--tw-bg-opacity))"
    const person = () => {
        let d = new Date().toUTCString();
        state.image = file
        const date: string = `${d}`
        const newState = { ...state, date, }
        dispatch(addPerson(newState))
        cetState({ ...state, name: "", job: "", weight: 0, height: 0 })
    }
    return (
        <div className=' w-[80%] max-[1000px]:w-[95%]'>
            <div className=' mb-[30px] flex items-center '>
                <Link to={"/"}><FaArrowLeft className=' text-[25px]' /></Link>
                <p className=' ml-5 text-[30px]  font-bold  text-blck '>Добавить нового пользователя</p>
            </div>
            <div className=' flex items-center w-full   flex-wrap-reverse  justify-between '>
                <div className=' w-[50%] max-[1131px]:w-[450px] '>
                    <div className=' '>
                        <div className=' flex mb-3  items-center justify-between'>
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
                        <div className=' flex mb-3 items-center justify-between'>
                            <p className=' text-slate-400'>
                                Рaбота*
                            </p>
                            <input
                                name='job'
                                value={state.job}
                                onChange={onChange}
                                type="text" id="first_name" className="w-[370px] bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Без работный..." required />
                        </div>
                        <div className=' flex mb-3 items-center justify-between'>
                            <p className=' text-slate-400'>
                                Вес тела*
                            </p>
                            <input
                                name='weight'
                                value={state.weight}
                                onChange={onChange}
                                type="text" id="first_name" className="w-[370px] bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="60" required />
                        </div>
                        <div className=' flex mb-3 items-center justify-between'>
                            <p className=' text-slate-400'>
                                Рост*
                            </p>
                            <input
                                name='height'
                                value={state.height}
                                onChange={onChange}
                                type="text" id="first_name" className="w-[370px] bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="1.80" required />
                        </div>
                    </div>
                    <Link to={"/"}>
                        <button
                            onClick={person}
                            className=' mt-[50px] flex items-center justify-center  w-full h-[56px] bg-[#3366FF]  '>
                            <p className=' font-bold text-[20px] text-white'> Добавить </p>
                            <FaCheck className='ml-[15px] tex-[30px] text-white' />
                        </button>
                    </Link>
                </div>
                <div
                    style={ {  background: bg , backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}
                className="w-[30%] max-[1000px]:w-[250px] shadow-lg shadow-slate-600 bg-slate-100 h-80 ">
                    {
                        file ?  "" : <input
                        onChange={fileChange}
                        accept=".jpg, .jpeg, .png"
                        multiple
                        type='file' />
                    }
                   
                </div>
            </div>
        </div>
    )
}
