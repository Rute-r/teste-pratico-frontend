import { useEffect, useState } from 'react';
import axios from 'axios';
import { Employee } from '../../models/Employee';
import { Search } from 'lucide-react';
import { filterData, formatPhoneNumber } from '../../utils/utils';

function Table() {
  const [data, setData] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = filterData(data, searchTerm);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Employee[]>('http://localhost:3000/employees');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados: ', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto min-h-screen p-4 font-roboto">
      <div className="flex justify-between items-center py-5">
        <h1 className="font-medium text-xl">Funcionários</h1>
        <div className="relative">
          <label htmlFor="search" className="sr-only">
            Pesquisar Funcionários
          </label>
          <input
            type="text"
            placeholder="Pesquisar"
            className="border-1 border-gray-10 rounded-md bg-white p-2 w-71"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-10" size={17} />
        </div>
      </div>

      <table className="min-w-full text-center">
        <thead>
          <tr className="sticky bg-blue-primary text-white text-[16px] shadow-md">
            <th className="p-4 rounded-tl-lg">FOTO</th>
            <th className="p-4">NOME</th>
            <th className="p-4">CARGO</th>
            <th className="p-4">DATA DE ADMISSÃO</th>
            <th className="p-4 rounded-tr-lg">TELEFONE</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {filteredData.map((employee) => (
            <tr className="h-12.5 border-b-[1.5px] border-gray-10" key={employee.id}>
              <td className="flex justify-center py-2">
                <img src={employee.image} alt={employee.name} className="w-8.5 h-8.5 rounded-full" />
              </td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{new Date(employee.admission_date).toLocaleDateString()}</td>
              <td>{formatPhoneNumber(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
