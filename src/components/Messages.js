import React from 'react'
import Message from './Message';

export default function Messages() {
  return (
    <div className='h-[calc(100%-125px)] overflow-auto dark:bg-slate-900 bg-slate-100 p-2 sm:p-4'>
       <Message />
       <Message />
    </div>
  )
}
