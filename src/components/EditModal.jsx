import {useState} from "react";
import {IoMdClose} from "react-icons/io";

const EditModal = ({setEditModal,onEdit,categ,id,title,loading}) => {
  const [name, setName] = useState(categ?.find(v=>v.id ===id).name_ru);
  const [image, setImage] = useState(null);
  
  let formData = new FormData();
  formData.append("name_ru", name);
  formData.append("name_en", name);
  formData.append("images", image);
  const sendFormData = (e) => {
    e.preventDefault();
    console.log(formData);

    onEdit(formData);
  };
  return (
   <>
    
    <div className="fixed inset-0 bg-[#A3A3A3]/20 backdrop-blur-sm  z-50 flex items-center justify-center ">
    <div className=" flex flex-col gap-7 px-6 py-7  bg-white p-5 rounded-xl shadow-2xl w-full max-w-[423px]">
      {/* Your modal content goes here */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Add a New {title || "Items"}</h2>
        <button
          onClick={() => setEditModal(false)}
          className=" w-8 h-8 flex justify-center items-center rounded-lg text-xl bg-[#FFF2E2] cursor-pointer">
          <IoMdClose />
        </button>
      </div>
      <h3 className="font-medium   text-black/30">
        {title || "Item"} Information
      </h3>
      <form
        action=""
        className="flex flex-col gap-5  relative ">
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder={`${title || "Items"} Name`}
          className="outline-indigo-200 bg-[#F4F5FA] rounded-sm p-4 text-[#ABAFB1] h-[52px]"
          onChange={(e) => setName(e.target.value)}
        />
       
        <label htmlFor="image" className="flex gap-5 items-center justify-start cursor-pointer">
          <span className="text-[#83898C]  ">Choose image:</span>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            name="image"
            className="outline-indigo-200 bg-[#F4F5FA] rounded-sm p-4 text-black/20  max-w-[200px] h-[52px] flex items-center justify-center "
            accept="image/*"
          />
        </label>
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-4 mt-10 rounded-xl text-[#5570F1] border-2 border-[#5570F1] text-xl bg-white w-full max-w-[180px] cursor-pointer"
            onClick={() => setEditModal(false)}>
            Cancel
          </button>
          {loading?<div
            className="px-4 py-4 mt-10 rounded-xl text-white text-xl bg-[#5570F1] w-full max-w-[180px] cursor-pointer text-center"
            >
            Adding...
          </div>:<button
            type="submit"
            className="px-4 py-4 mt-10 rounded-xl text-white text-xl bg-[#5570F1] w-full max-w-[180px] cursor-pointer"
            onClick={sendFormData}>
            Add
          </button>}
        </div>
      </form>
    </div>
  </div>
  </>
  );
};

export default EditModal;
