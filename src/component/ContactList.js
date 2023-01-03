import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const contactList = useSelector(state=>state.contactList);
    console.log(contactList)
  return (
    <div>
        <SearchBox></SearchBox>
        {contactList.map((item,i)=>{
            return <ContactItem item={item}key={i}/>
        })}
    </div>
  )
}

export default ContactList