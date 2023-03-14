import React from 'react'
import Button from './Button'

const Form = ({ fetchName, setFetchName}) => 
   (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button 
        buttonName = 'users'
        fetchName={fetchName}
        setFetchName={setFetchName}
        />
      <Button 
        buttonName = 'comments'
        fetchName={fetchName}
        setFetchName={setFetchName}
        />
      <Button 
        buttonName = 'posts'
        fetchName={fetchName}
        setFetchName={setFetchName}
        />
    </form>
  )

export default Form
