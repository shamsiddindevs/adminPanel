import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Modal from "../components/Modal";
import { CiCirclePlus } from "react-icons/ci";
import EditModal from "../components/EditModal";

const Category = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  const [categ, setCateg] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const[id, setId] = useState(null);
  const[loading,setLoading] = useState(false)

  //read
  const f = () =>
    fetch(`https://realauto.limsa.uz/api/${"categories"}`)
      .then((res) => res.json())
      .then((data) => setCateg(data?.data));

  useEffect(() => {
    f();
  }, []);
  console.log(categ);

  //delete
  const onDelete = (id) => {
    fetch(`https://realauto.limsa.uz/api/${"categories"}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          
          f();
        } else {
          toast.error(data.message);
          
        }
      })
      .catch((error) => toast.error(error.message));
      
  };

  //create
  const onCreate = (data) => {
    setLoading(true)

    fetch(`https://realauto.limsa.uz/api/${"categories"}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
      body: data,
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        toast.success(data.message);
        f();
        setOpenModal(false);
      } else {
        toast.error(data.message);
        
      }
    })
    .catch((error) => toast.error(error.message))
    .finally(()=>{setLoading(false)});
  }

  //update
  const onEdit = (data) => {
    setLoading(true)
    fetch(`https://realauto.limsa.uz/api/${"categories"}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,  
      },
      body: data ,
    })
     .then((res) => res.json())
     .then((data) => {
        if (data.success) {
          toast.success(data.message);
          f();
          setEditModal(false);
         
        } else {
          toast.error(data.message);
        }
      })
     .catch((error) => toast.error(error.message))
     .finally(()=>{ setLoading(false);
      
     });
  }
    

  return (
    <div className="flex-1 flex flex-col   h-full overflow-auto p-5">
      {/* Your dashboard content goes here */}
      <div className="flex justify-between items-center mb-5">
        <h2 className=" text-lg font-medium text-[#45464E]">Category</h2>
        <button
          className="bg-[#5570F1] hover:opacity-80 text-white  py-2 px-4 rounded-[12px] flex gap-4 items-center"
          onClick={() => setOpenModal(true)}>
          <span className="text-[24px]">
            <CiCirclePlus />
          </span>{" "}
          <span>Add Category</span>
        </button>
      </div>
      <div className="relative flex flex-col w-full flex-1   text-gray-700  shadow-md bg-white rounded-md p-5">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Image
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Created Date
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  {" "}
                  Action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {categ?.map((v) => (
              <tr key={v.id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {v.name_ru}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <img
                      src={`https://realauto.limsa.uz/api/uploads/images/${v.image_src}`}
                      className="w-10 h-10 object-cover"
                      alt={v.name_en}
                    />
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {v?.created_at.slice(0, 10)}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <p className="flex gap-2">
                    <a
                      href="#"
                      className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 "
                      onClick={() => {setEditModal(true); setId(v?.id)}}>
                      Edit
                    </a>
                    <a
                      href="#"
                      className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      onClick={() => onDelete(v.id)}>
                      Delete
                    </a>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} title = {"Category"} loading={loading} onCreate ={onCreate} />}
      {editModal && <EditModal setEditModal={setEditModal} title = {"Category"} loading={loading} onEdit ={onEdit} categ= {categ} id={id} />}
    </div>
  );
};

export default Category;
