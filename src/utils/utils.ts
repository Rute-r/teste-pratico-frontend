import { Employee } from '../models/Employee';

export function filterData(data: Employee[], searchTerm: string) {
  return data.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phone.includes(searchTerm)
  );
}

export function formatPhoneNumber(phone: string): string {
  const regex = /^(\d{2})(\d{2})(\d{5})(\d{4})$/;
  const match = phone.match(regex);

  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }

  return phone;
}
