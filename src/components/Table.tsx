import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Modal from "./Modal";
import PdfDocument from "./PdfDocument";

import { deleteData } from "../store/storeData/action";

import { api } from "../service/api";

import { pdf } from "@react-pdf/renderer";

import { FaEdit, FaFilePdf, FaTrashAlt } from "react-icons/fa";

interface Data {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: string;
}

const Table = ({ data }: { data: Data[] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const edit = async (id: string) => {
    try {
      const response = await api.get(`vacation-plans/${id}`);

      if (response.status === 200) {
        navigate("/form", { state: { data: response.data } });
      }
    } catch (error) {
      console.error(`Error fetching vacation plans: ${error}`);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const response = await api.delete(`vacation-plans/${id}`);

      if (response.status === 200 || response.status === 201) {
        dispatch(deleteData(id));
      }
    } catch (error) {
      console.error(`Error posting vacation plans: ${error}`);
    }
  };

  const handleDelete = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    if (selectedId) {
      deleteItem(selectedId);
    }
    setModalOpen(false);
  };

  const generatePdf = (data: Data) => {
    const doc = <PdfDocument data={data} />;
    const asPdf = pdf(doc);

    asPdf.updateContainer(doc);
    asPdf.toBlob().then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `${data.title}.pdf`;
      link.click();

      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="m-4 flex flex-col">
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
      />

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "Title",
                    "Description",
                    "Date",
                    "Location",
                    "Participants",
                    "Options",
                  ].map((header, idx) => (
                    <th
                      key={idx}
                      scope="col"
                      className="px-6 py-3 text-left text-sm sm:text-base font-light text-gray-700 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((itens) => (
                  <tr key={itens.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base font-thin text-gray-500">
                      {itens.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base font-thin text-gray-500">
                      {itens.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base font-thin text-gray-500">
                      {itens.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base font-thin text-gray-500">
                      {itens.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base font-thin text-gray-500">
                      {itens.participants}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => edit(itens.id)}
                      >
                        <FaEdit color="#435d7d" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900 ml-4"
                        onClick={() => handleDelete(itens.id)}
                      >
                        <FaTrashAlt color="#db7093" />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-900 ml-4"
                        onClick={() => generatePdf(itens)}
                      >
                        <FaFilePdf color="#db7093" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
