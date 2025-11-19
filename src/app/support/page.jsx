"use client";
import { useState } from "react";

export default function Support() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  async function submit(e) {
    e.preventDefault();
    // For demo: pretend to send
    setSent(true);
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
      <p className="text-sm text-gray-600 mb-4">If you need advice ... contact our specialists.</p>
      <div className="font-medium mb-2"> <span className="text-xl text-blue-500 font-semibold">Phone Number:</span> +16573788296</div>
      <div className="font-medium mb-6"> <span className="text-xl text-blue-500 font-semibold">Email Address:</span>  sbaassistantanceinfo@gmail.com</div>

      <h3 className="text-xl font-semibold mb-2">Support Form</h3>
      <form onSubmit={submit} className="space-y-3">
        <label className="block">Subject *</label>
        <input value={subject} onChange={e=>setSubject(e.target.value)} className="w-full p-2 border border-blue-500 rounded"/>
        <label className="block">Message *</label>
        <textarea value={message} onChange={e=>setMessage(e.target.value)} rows="6" className="w-full p-2 border border-blue-500 rounded"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>

      {sent && (
        <div className="mt-4 p-4 bg-white border rounded shadow">
          <div className="text-green-700 font-semibold">Message has been sent!</div>
          <div>Thanks for sending your message! We will get back to you shortly.</div>
        </div>
      )}
    </div>
  );
}
