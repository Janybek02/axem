import React from 'react'
import { Start } from '../start/Start'; 
import { List } from '../list/List';
import { useAppSelector } from '../../hooks/Hooks';
import { Modal } from '../modal/Modal';

export const Home = () => {
  const {modal} = useAppSelector(state => state.main)
  return (
    <>
        {
          modal ? <Modal/> : ""
        }
        <Start/>
        <List/>

    </>
  )
}
