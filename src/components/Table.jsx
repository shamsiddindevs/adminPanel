

const Table = ({categ,setOpenModal,onDelete}) => {
  return (
    <>
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
                      onClick={() => setOpenModal(true)}>
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
    </>
  )
}

export default Table