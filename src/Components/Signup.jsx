import React, { useState } from 'react'
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter, Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { UserIcon } from '@heroicons/react/24/outline';

function Signup() {
  const [isOpen,setIsOpen] = useState(false);

  const handleOpen =()=>{
    setIsOpen(true)
  }
  const handleClose =()=>{
    setIsOpen(false)
  }

  return (
   <section>
      <div className='flex flex-wrap gap-3'>
      
        <Button variant='flat' onPress={handleOpen} className='mb-16'> 
        <UserIcon className='text-gray-500 h-4 w-4'/>
           Signup 
        </Button>
      </div>
      <Modal isOpen={isOpen} backdrop='blur' onClose={handleClose} size='4xl' placement='top'>
        <ModalContent>
          <ModalBody>
            <div className='flex flex-col md:flex-row w-full h-full md:mx-h-[90vh] overflow-x-auto md:overflow-visible '>
              {/* left side */}
              <div className='bg-[url("./LoginImg.png")] bg-no-repeat  bg-cover bg-center  flex flex-col text-white w-full md:1/3'>
              <h3 className='text-4xl mb-4 text-start font-bold'> Sign up</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam maecenas. Enim sed tortor morbi ut suspendisse. </p>

              </div>
               {/* right side */}
              <div className='w-full md:w-2/3 p-8'>
                <div>
                  <img className='w-fit mx-auto' src="./title.svg" alt="" />
                  <h3 className='tex-2xl text-[#26395C] font-bold mt-5 mb-2'> Sign up and get exploring!</h3>
                  <p className='text-md mb-3'>Already have an account? Sign In</p>
                </div>

              </div>

            </div>
          </ModalBody>
        </ModalContent>

      </Modal>

   </section>
  )
}

export default Signup
