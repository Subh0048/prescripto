import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { X, Check } from "lucide-react";

function Allapointments() {
  function RowAction({ id, data, setData }) {
    const handleAction = (decision) => {
      if (decision == "remove") {
        const newd = data.filter((info) => {
         
          return info?.id !== id;
        });
       
        setData((prev) => prev.filter((info) => info.id !== parseInt(id)));
      }
    };

    return (
      <div className="flex gap-2">
        <button onClick={() => handleAction("remove")}>
          <X size={15} />
        </button>
        <button onClick={() => handleAction("add")}>
          <Check size={15} />
        </button>
      </div>
    );
  }

  const columnHelper = createColumnHelper();
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      enableColumnFilter: true,
    },
    {
      header: "Patient",
      accessorKey: "patient",
      enableColumnFilter: true,
    },
    {
      header: "Department",
      accessorKey: "department",
      enableColumnFilter: true,
    },
    {
      header: "Date & Time",
      accessorKey: "dateTime",
      enableColumnFilter: true,
    },
    {
      header: "Doctor",
      accessorKey: "doctor",
      enableColumnFilter: true,
    },
    {
      header: "Fee",
      accessorKey: "fee",
      enableColumnFilter: true,
    },

    columnHelper.display({
      id: "actions",
      cell: ({ row }) => (
        <RowAction id={row.original.id} data={data} setData={setData} />
      ),
      accessorKey: "action",
    }),
  ];

  const appointments = [
    {
      id: 1,
      patient: "John Doe ",
      department: "Cardiology",
      dateTime: "2025-01-10 10:30 AM",
      doctor: "Dr. Smith",
      fee: 500,
      action: "View",
    },
    {
      id: 2,
      patient: "Emily Clark",
      department: "Neurology",
      dateTime: "2025-01-11 11:00 AM",
      doctor: "Dr. Johnson",
      fee: 600,
      action: "View",
    },
    {
      id: 3,
      patient: "Michael Brown",
      department: "Orthopedics",
      dateTime: "2025-01-12 09:45 AM",
      doctor: "Dr. Williams",
      fee: 450,
      action: "View",
    },
    {
      id: 4,
      patient: "Sophia Wilson",
      department: "Dermatology",
      dateTime: "2025-01-13 01:15 PM",
      doctor: "Dr. Taylor",
      fee: 300,
      action: "View",
    },
    {
      id: 5,
      patient: "James Miller",
      department: "ENT",
      dateTime: "2025-01-14 02:30 PM",
      doctor: "Dr. Anderson",
      fee: 350,
      action: "View",
    },
    {
      id: 6,
      patient: "Olivia Davis",
      department: "Cardiology",
      dateTime: "2025-01-15 10:00 AM",
      doctor: "Dr. Smith",
      fee: 500,
      action: "View",
    },
    {
      id: 7,
      patient: "Liam Martinez",
      department: "Neurology",
      dateTime: "2025-01-16 11:30 AM",
      doctor: "Dr. Johnson",
      fee: 600,
      action: "View",
    },
    {
      id: 8,
      patient: "Ava Garcia",
      department: "Dermatology",
      dateTime: "2025-01-17 12:00 PM",
      doctor: "Dr. Taylor",
      fee: 300,
      action: "View",
    },
    {
      id: 9,
      patient: "Ethan Rodriguez",
      department: "Orthopedics",
      dateTime: "2025-01-18 09:00 AM",
      doctor: "Dr. Williams",
      fee: 450,
      action: "View",
    },
    {
      id: 10,
      patient: "Isabella Hernandez",
      department: "Cardiology",
      dateTime: "2025-01-19 03:00 PM",
      doctor: "Dr. Smith",
      fee: 500,
      action: "View",
    },
    {
      id: 11,
      patient: "Mason Lopez",
      department: "ENT",
      dateTime: "2025-01-20 10:45 AM",
      doctor: "Dr. Anderson",
      fee: 350,
      action: "View",
    },
    {
      id: 12,
      patient: "Mia Gonzalez",
      department: "Neurology",
      dateTime: "2025-01-21 11:20 AM",
      doctor: "Dr. Johnson",
      fee: 600,
      action: "View",
    },
    {
      id: 13,
      patient: "Noah Wilson",
      department: "Orthopedics",
      dateTime: "2025-01-22 02:10 PM",
      doctor: "Dr. Williams",
      fee: 450,
      action: "View",
    },
    {
      id: 14,
      patient: "Charlotte Perez",
      department: "Dermatology",
      dateTime: "2025-01-23 01:40 PM",
      doctor: "Dr. Taylor",
      fee: 300,
      action: "View",
    },
    {
      id: 15,
      patient: "Logan Sanchez",
      department: "Cardiology",
      dateTime: "2025-01-24 12:30 PM",
      doctor: "Dr. Smith",
      fee: 500,
      action: "View",
    },
    {
      id: 16,
      patient: "Amelia Rivera",
      department: "ENT",
      dateTime: "2025-01-25 10:15 AM",
      doctor: "Dr. Anderson",
      fee: 350,
      action: "View",
    },
    {
      id: 17,
      patient: "Lucas Murphy",
      department: "Dermatology",
      dateTime: "2025-01-26 11:50 AM",
      doctor: "Dr. Taylor",
      fee: 300,
      action: "View",
    },
    {
      id: 18,
      patient: "Harper Reyes",
      department: "Neurology",
      dateTime: "2025-01-27 01:30 PM",
      doctor: "Dr. Johnson",
      fee: 600,
      action: "View",
    },
    {
      id: 19,
      patient: "Elijah Torres",
      department: "Orthopedics",
      dateTime: "2025-01-28 09:20 AM",
      doctor: "Dr. Williams",
      fee: 450,
      action: "View",
    },
    {
      id: 20,
      patient: "Ella Peterson",
      department: "Cardiology",
      dateTime: "2025-01-29 03:45 PM",
      doctor: "Dr. Smith",
      fee: 500,
      action: "View",
    },
    // ... add until 50
  ];

  const [data, setData] = useState(appointments);
  const [columnFilters, setColumnFilters] = useState([]);

  const [ , setSearchdata] = useState("");
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

 

  return (
    <div className="h-full bg-gray-200">
      <p className="p-5 text-xl font-semibold text-gray-800 ">
        All appointment
      </p>
      <div className="mx-5 overflow-scroll bg-white border border-gray-400 rounded max-w-fit h-[70vh] max-h-fit">
        <thead className="text-gray-700 bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left border-b border-gray-400"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getCanFilter() ? (
                    <input
                      className="text-xs max-w-[80px]"
                      value={header.column.getFilterValue() ?? ""}
                      onChange={(e) =>
                        header.column.setFilterValue(e.target.value)
                      }
                      placeholder={`Search here`}
                    />
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-4 py-2 border-b border-gray-400"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}

export default Allapointments;
