import React from 'react';

export default function PurchaseRequest() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Purchase Request</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="border p-2 w-full" />
        <input type="text" placeholder="Phone Number" className="border p-2 w-full" />
        <textarea placeholder="Your request details..." className="border p-2 w-full" rows="4"></textarea>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          Submit Request
        </button>
      </form>
    </div>
  );
}
