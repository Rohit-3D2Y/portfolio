import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="px-10 mt-16 py-5">
      <div>
        <h1 className="inria-sans-bold text-center md:text-left text-4xl tracking-tighter">
          Get in touch
        </h1>
        <p className="text-sm text-gray-800 text-center md:text-left mt-3">
          I’m always interested in exploring new opportunities, collaborating,
          or exchanging ideas with like-minded individuals. Feel free to book a
          call or email me if you'd like to see my portfolio deck or to discuss
          a potential project.
        </p>
      </div>

      {/* Form Start */}
      <form onSubmit={handleSubmit} className="mt-10 px-4">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-2 bg-slate-200 w-full rounded-xl h-12 text-center placeholder:text-gray-400 inria-sans-bold tracking-tighter px-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-2 bg-slate-200 w-full rounded-xl h-12 text-center placeholder:text-gray-400 inria-sans-bold tracking-tighter px-4 "
          />
        </div>

        <div className="mt-4">
          <textarea
            name="message"
            placeholder="Enter your message here"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full h-40 border-2 text-center bg-slate-200 rounded-xl p-4 placeholder:text-gray-400 inria-sans-bold tracking-tighter resize-none "
          ></textarea>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="bg-slate-800 text-white px-6 py-2 rounded-xl hover:bg-slate-700 transition-all duration-200 inria-sans-bold"
          >
            Send Message
          </button>
        </div>

        {status && (
          <p className="text-center text-sm text-green-600 mt-4">{status}</p>
        )}
      </form>

      {/* Footer */}
      <div className="py-5 text-center text-gray-500">
        <p>Copyright © 2025 Rohit Tiwari. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
