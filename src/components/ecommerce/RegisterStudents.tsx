import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";

// Define the TypeScript interface for the table rows
// interface Student {
//   id: number; // Unique identifier for each student
//   name: string; // Product name
//   gender: string; // Number of variants (e.g., "1 Variant", "2 Variants")
//   email: string; // Category of the product
//   phoneNumber: Number; // Price of the product (as a string with currency symbol)
//   // status: string; // Status of the product
//   Address: string; // URL or path to the product image
//   // status: "Delivered" | "Pending" | "Canceled"; // Status of the product
//   city : String
// }
type Student = {
  id: number;
  name: string;
  gender: string;
  email: string;
  phoneNumber: number;
  Address: string;
  city: string;
};

// Define the table data using the interface
const tableData: Student[] = [
  {
    id: 1,
    name: "Areeba Khan",
    gender: "Female",
    email: "areeba.khan@example.com",
    phoneNumber: 923186342261,
    Address: "House 12, Street 5, Gulshan-e-Iqbal",
    city: "Karachi",
  },
  {
    id: 2,
    name: "Ali Raza",
    gender: "Male",
    email: "ali.raza@example.com",
    phoneNumber: 923186342262,
    Address: "Plot 45, Block B, DHA Phase 6",
    city: "Lahore",
  },
  {
    id: 3,
    name: "Fatima Noor",
    gender: "Female",
    email: "fatima.noor@example.com",
    phoneNumber: 923186342263,
    Address: "Apartment 9, Clifton Block 2",
    city: "Karachi",
  },
  {
    id: 4,
    name: "Usman Ahmed",
    gender: "Male",
    email: "usman.ahmed@example.com",
    phoneNumber: 923186342264,
    Address: "Sector F-11, Islamabad",
    city: "Islamabad",
  },
  {
    id: 5,
    name: "Usman Ahmed",
    gender: "Male",
    email: "usman.ahmed@example.com",
    phoneNumber: 923186342264,
    Address: "Sector F-11, Islamabad",
    city: "Islamabad",
  },
  {
    id: 6,
    name: "Usman Ahmed",
    gender: "Male",
    email: "usman.ahmed@example.com",
    phoneNumber: 923186342264,
    Address: "Sector F-11, Islamabad",
    city: "Islamabad",
  },
  {
    id: 7,
    name: "Usman Ahmed",
    gender: "Male",
    email: "usman.ahmed@example.com",
    phoneNumber: 923186342264,
    Address: "Sector F-11, Islamabad",
    city: "Islamabad",
  },
  {
    id: 8,
    name: "Usman Ahmed",
    gender: "Male",
    email: "usman.ahmed@example.com",
    phoneNumber: 923186342264,
    Address: "Sector F-11, Islamabad",
    city: "Islamabad",
  },
  {
    id: 9,
    name: "Usman Ahmed",
    gender: "Male",
    email: "usman.ahmed@example.com",
    phoneNumber: 923186342264,
    Address: "Sector F-11, Islamabad",
    city: "Islamabad",
  },
  {
    id: 10,
    name: "Usman Ahmed",
    gender: "Male",
    email: "usman.ahmed@example.com",
    phoneNumber: 923186342264,
    Address: "Sector F-11, Islamabad",
    city: "Islamabad",
  },
];

// export default function RegisterStudent() {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
//       <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h3 className=" text-2xl font-semibold text-gray-800 dark:text-white/90">
//             Registered Students
//           </h3>
//         </div>
//       </div>
//       <div className="max-w-full overflow-x-auto">
//         <Table>
//           {/* Table Header */}
//           <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
//             <TableRow>
//               <TableCell
//                 isHeader
//                 className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Name
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Gender
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 email
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 phoneNumber
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Address
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 City
//               </TableCell>
//             </TableRow>
//           </TableHeader>

//           {/* Table Body */}

//           <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
//             {tableData.map((student) => (
//               <TableRow key={student.id} className="">
//                 <TableCell className="py-3">
//                   <div className="flex items-center gap-3">
//                     <div>
//                       <Link href={`/students/${student.id}`}>
//                       <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
//                         {student.name}
//                       </p>
//                       </Link>
                      
//                       {/* <span className="text-gray-500 text-theme-xs dark:text-gray-400">
//                         {student.gender}
//                       </span> */}
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                   {student.gender}
//                 </TableCell>
//                 <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                   {student.email}
//                 </TableCell>
//                 <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                   {student.phoneNumber}
//                 </TableCell>
//                 <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                   {student.Address}
//                 </TableCell>
//                 <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                   {student.city}
//                 </TableCell>
//                 {/* <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                   <Badge
//                     size="sm"
//                     color={
//                       student.status === "Delivered"
//                         ? "success"
//                         : student.status === "Pending"
//                         ? "warning"
//                         : "error"
//                     }
//                   >
//                     {student.status}
//                   </Badge>
//                 </TableCell> */}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }
export default function RegisterStudent() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-300 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-[#0D1B2A] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-2xl font-bold text-[#003366] dark:text-white/90">
          Registered Students
        </h3>
      </div>

      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-y border-[#003366] dark:border-gray-700">
            <TableRow>
              {["Name", "Gender", "Email", "Phone Number", "Address", "City"].map((header) => (
                <TableCell
                  key={header}
                  isHeader
                  className="py-3 font-semibold text-[#003366] text-start text-sm dark:text-gray-300"
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((student) => (
              <TableRow
                key={student.id}
                className="hover:bg-gray-50 dark:hover:bg-white/5 transition"
              >
                <TableCell className="py-3">
                  <Link href={`/students/studentdetail`}>
                    <p className="font-medium text-amber-400 text-sm dark:text-white/90 hover:text-blue-600 cursor-pointer">
                      {student.name}
                    </p>
                  </Link>
                </TableCell>
                <TableCell className="py-3 text-gray-600 text-sm dark:text-gray-400">
                  {student.gender}
                </TableCell>
                <TableCell className="py-3 text-gray-600 text-sm dark:text-gray-400">
                  {student.email}
                </TableCell>
                <TableCell className="py-3 text-gray-600 text-sm dark:text-gray-400">
                  {student.phoneNumber}
                </TableCell>
                <TableCell className="py-3 text-gray-600 text-sm dark:text-gray-400">
                  {student.Address}
                </TableCell>
                <TableCell className="py-3 text-gray-600 text-sm dark:text-gray-400">
                  {student.city}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

