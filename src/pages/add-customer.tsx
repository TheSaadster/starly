'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AddCustomerPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data, error } = await supabase.from('customers').insert([
      {
        name,
        phone,
        email,
        status: 'pending',
        // business_id: 'YOUR-BUSINESS-ID',  <-- hardcode your business ID later
      },
    ])

    if (error) {
      console.error('Error:', error.message)
      alert('Something went wrong')
    } else {
      alert('Customer added!')
      setName('')
      setPhone('')
      setEmail('')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Add Customer</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  )
}
