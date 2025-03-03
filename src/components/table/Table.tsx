import { useEffect, useState } from 'react';
import axios from 'axios';
import { Employee } from '../../models/Employee';
import { ChevronDown, Search } from 'lucide-react';
import { filterData, formatPhoneNumber } from '../../utils/utils';

function Table() {
  const [data, setData] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const filteredData = filterData(data, searchTerm);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get<Employee[]>('http://localhost:3000/employees');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados: ', error);
    }
  }

  function toggleDropdown(id: number) {
    setDropdownOpen(dropdownOpen === id ? null : id);
  }

  return (
    <div className="container mx-auto min-h-screen p-4 font-roboto">
      <div className="flex flex-wrap justify-between items-center py-5 md:flex-nowrap">
        <h1 className="font-medium text-xl text-center mb-4 sm:text-left">Funcionários</h1>

        <div className="w-full md:w-1/3 relative ">
          <label htmlFor="search" className="sr-only">
            Pesquisar Funcionários
          </label>
          <input
            type="text"
            placeholder="Pesquisar"
            className="border-1 border-gray-10 rounded-md bg-white p-2 w-full "
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-10" size={17} />
        </div>
      </div>
      {/*Form Web */}
      <table className="hidden md:table min-w-full text-center">
        <thead>
          <tr className="sticky bg-blue-primary text-white text-[14px] shadow-md">
            <th className="p-4 rounded-tl-lg">FOTO</th>
            <th className="p-4">NOME</th>
            <th className="p-4">CARGO</th>
            <th className="p-4">DATA DE ADMISSÃO</th>
            <th className="p-4 rounded-tr-lg">TELEFONE</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                Funcionário não encontrado
              </td>
            </tr>
          ) : (
            filteredData.map((employee) => (
              <tr className="h-12.5 border-b-[1.5px] border-gray-10" key={employee.id}>
                <td className="flex justify-center py-2">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  />
                </td>
                <td>{employee.name}</td>
                <td>{employee.job}</td>
                <td>{new Date(employee.admission_date).toLocaleDateString()}</td>
                <td>{formatPhoneNumber(employee.phone)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/*Form Mobile */}
      <table className="min-w-full text-start md:hidden">
        <thead>
          <tr className="sticky bg-blue-primary text-white text-[14px] shadow-md">
            <th className="w-1/4 py-4 px-2 rounded-tl-lg">FOTO</th>
            <th className="w-1/2 py-4 px-2">NOME</th>
            <th className="w-1/4 py-4 px-2 rounded-tr-lg">.</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center py-4 text-gray-500">
                Funcionário não encontrado
              </td>
            </tr>
          ) : (
            filteredData.map((employee) => (
              <>
                <tr
                  key={employee.id}
                  className={`border-b-[1.5px] border-gray-10 ${
                    dropdownOpen === employee.id ? 'border-none' : ''
                  }`}>
                  <td className="flex justify-center px-2 py-2">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                    />
                  </td>
                  <td className="px-2 py-2">{employee.name}</td>
                  <td className="text-center">
                    <button
                      onClick={() => toggleDropdown(employee.id)}
                      aria-label={`Motrar mais informações de ${employee.name}`}>
                      <ChevronDown
                        className={`size-8 transition-transform duration-300 ${
                          dropdownOpen === employee.id ? 'rotate-180' : ''
                        }`}
                        color="#0500ff"
                        strokeWidth={1}
                      />
                    </button>
                  </td>
                </tr>
                {dropdownOpen === employee.id && (
                  <tr className="border-b-[1.5px] border-gray-10">
                    <td colSpan={3} className="px-4 py-7 ">
                      <p className="flex justify-between  border-dashed border-b border-gray-10">
                        <h3 className="font-medium">Cargo</h3> {employee.job}
                      </p>
                      <p className="flex justify-between border-dashed border-b border-gray-10  pt-3.5">
                        <h3 className="font-medium">Data de Admissão</h3>{' '}
                        {new Date(employee.admission_date).toLocaleDateString()}
                      </p>
                      <p className="flex justify-between border-dashed border-b border-gray-10 pt-3.5">
                        <h3 className="font-medium">Telefone</h3> {formatPhoneNumber(employee.phone)}
                      </p>
                    </td>
                  </tr>
                )}
              </>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
