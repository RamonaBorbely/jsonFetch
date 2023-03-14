import React from 'react'

const ErrorPage = ({fetchErr}) => 
  (
    <section className='error-content'>
      <h1>Opps. An error has ocurred</h1>
      <p>{fetchErr}</p>
    </section>
  )


export default ErrorPage
