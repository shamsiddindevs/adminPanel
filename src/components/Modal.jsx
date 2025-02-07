import { IoMdClose } from "react-icons/io"

const Modal = ({setOpenModal}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/75 z-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded shadow-md w-full max-w-md">
              {/* Your modal content goes here */}
                  <form action="" className="flex flex-col gap-5 p-2 relative ">
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name" className="border border-gray-500 p-2" />
                      <label htmlFor="image">Image: <input type="file" id="image" name="image"  className="border w-[200px]"/></label>
                      
                      <button type="submit" className="border p-2">Submit</button>
                      <button onClick={()=>setOpenModal(false)} className="absolute top-0 right-0  bg-gray-200 p-2"><IoMdClose /></button>
                  </form>
                 
            </div>
        </div>
  )
}

export default Modal
