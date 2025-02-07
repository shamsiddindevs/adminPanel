import {useState} from "react";
import {IoMdClose} from "react-icons/io";

const EditModal = ({setEditModal,onEdit,categ,id}) => {
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
    <div className="fixed top-0 left-0 w-full h-full bg-black/75 z-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded shadow-md w-full max-w-md">
        {/* Your modal content goes here */}
        <form
          action=""
          className="flex flex-col gap-5 p-2 relative ">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            className="border border-gray-500 p-2"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="image">
            Image:{" "}
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              name="image"
              className="border w-[200px]"
              accept="image/*"
            />
          </label>

          <button
            type="submit"
            className="border p-2"
            onClick={sendFormData}>
            Submit
          </button>
          <button
            onClick={() => setEditModal(false)}
            className="absolute top-0 right-0  bg-gray-200 p-2">
            <IoMdClose />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
