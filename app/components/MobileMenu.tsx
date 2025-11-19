// 'use client';
// import React from 'react';

// export default function MobileMenu({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-60">
//       {/* backdrop */}
//       <div
//         className="absolute inset-0 bg-black/40"
//         onClick={onClose}
//         aria-hidden="true"
//       />

//       {/* panel */}
//       <aside className="absolute right-0 top-0 w-4/5 max-w-sm h-full bg-white shadow-lg p-6 overflow-auto">
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-3">
//             <img src="/logo.png" alt="Logo" className="h-9 w-auto" />
//             <span className="font-bold">Shop.Co</span>
//           </div>
//           <button onClick={onClose} aria-label="Close menu" className="p-2 rounded-md hover:bg-gray-100">
//             <img src="/close.svg" alt="close" className="h-5 w-5" />
//           </button>
//         </div>

//         <nav>
//           <ul className="flex flex-col gap-4">
//             <li><a href="#" className="text-base font-medium">Home</a></li>
//             <li><a href="#" className="text-base font-medium">Shop</a></li>
//             <li><a href="#" className="text-base font-medium">Collections</a></li>
//             <li><a href="#" className="text-base font-medium">Contact</a></li>
//           </ul>

//           <div className="mt-6">
//             <a href="#" className="inline-flex items-center justify-center w-full py-3 rounded-md border border-gray-200 font-medium">
//               Cart
//             </a>
//           </div>
//         </nav>

//         <div className="mt-8 text-sm text-gray-500">
//           <p>© {new Date().getFullYear()} Shop.Co</p>
//         </div>
//       </aside>
//     </div>
//   );
// }
