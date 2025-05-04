// // app/notifications/page.tsx or pages/notifications.tsx
// "use client"
// import React, { useState } from "react";

// const notifications = [
//   {
//     _id: "1",
//     fullName: "John Doe",
//     email: "john@example.com",
//     message: "This is a test message.",
//     phoneNumber: "123-456-7890",
//   },
//   {
//     _id: "2",
//     firstName: "Jane",
//     email: "jane@example.com",
//     message: "Another message here.",
//     phoneNumber: "987-654-3210",
//   },
// ];

// const Page = () => {
//   const [loading, setLoading] = useState(false);

//   const openModal = (id: string) => {
//     console.log("Delete notification with ID:", id);
//   };

//   return (
//     <div className="px-4 py-10 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-8 ">
//         NOTIFICATIONS
//       </h1>

//       {loading ? (
//         <div className="flex justify-center items-center h-52">
//           <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-transparent border-gray-500"></div>
//         </div>
//       ) : (
//         <div className="grid gap-6">
//           {notifications.map((e, i) => (
//             <div
//               key={i}
//               className="bg-gray-900 text-white shadow-lg border border-gray-700 p-6 rounded-lg text-center"
//             >
//               <p className="text-lg mb-2">
//                 <b className="">Name:</b>{" "}
//                 {e.fullName ? e.fullName : e.firstName}
//               </p>
//               <p className="mb-2">
//                 <b className="">Email:</b>{" "}
//                 {e.email}
//               </p>
//               <p className="mb-2">
//                 <b className="">Message:</b>{" "}
//                 {e.message}
//               </p>
//               <p className="mb-4">
//                 <b className="">Phone Number:</b>{" "}
//                 {e.phoneNumber}
//               </p>
//               <button
//                 onClick={() => openModal(e._id)}
//                 className="w-full py-2 text-lg font-bold bg-red-600 hover:bg-red-700 rounded transition playfair-display"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;
"use client";
import React, { useState } from "react";

const notifications = [
  {
    _id: "1",
    fullName: "John Doe",
    email: "john@example.com",
    message: "This is a test message.",
    phoneNumber: "123-456-7890",
  },
  {
    _id: "2",
    firstName: "Jane",
    email: "jane@example.com",
    message: "Another message here.",
    phoneNumber: "987-654-3210",
  },
];

const Page = () => {
  const [loading, setLoading] = useState(false);

  const openModal = (id: string) => {
    console.log("Delete notification with ID:", id);
  };

  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#003366]">
        Notifications
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-52">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-transparent border-gray-400"></div>
        </div>
      ) : (
        <div className="grid gap-6">
          {notifications.map((e, i) => (
            <div
              key={i}
              className="bg-[#1A1A2E] text-gray-200 shadow-lg border border-[#003366] p-6 rounded-xl transition duration-200 hover:scale-[1.02]"
            >
              <p className="text-lg mb-2">
                <b className="text-white">Name:</b>{" "}
                {e.fullName ? e.fullName : e.firstName}
              </p>
              <p className="mb-2">
                <b className="text-white">Email:</b> {e.email}
              </p>
              <p className="mb-2">
                <b className="text-white">Message:</b> {e.message}
              </p>
              <p className="mb-6">
                <b className="text-white">Phone Number:</b> {e.phoneNumber}
              </p>
              <button
                onClick={() => openModal(e._id)}
                className="w-full py-2 text-lg font-semibold bg-red-600 hover:bg-red-700 rounded-lg transition duration-150"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
