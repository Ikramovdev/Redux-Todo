import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ACTIONS} from "../redux/actions"

const Form = () => {
    const dispatch = useDispatch()
    const [username,setUsername] = useState("")
    const [age,setAge] = useState("")
    const likedList  = useSelector(state => state.like)

    function handleSubmitBtn(e){
        e.preventDefault()
        const data = {username,age}
        dispatch({type:ACTIONS.create,payload:data})
        setUsername("")
        setAge("")
    }

    
  return (
    <form onSubmit={handleSubmitBtn} className='w-[500px] mx-auto mt-[110px] space-y-3'>
        <Input required value={username} onChange={(e) => setUsername(e.target.value)} size='large' type='text' allowClear placeholder='Enter Your Name...'/>
        <Input required value={age} onChange={(e) => setAge(e.target.value)} size='large' type='number' allowClear placeholder='Enter Your Age...'/>
        <Button className='w-full' htmlType='submit' size='large' type='primary'>Submit</Button>
        <Button type='default' size='large'>Liked:{likedList.length}</Button>
    </form>
  )
}

export default Form