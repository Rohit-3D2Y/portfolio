import React from "react";

const Contact = () => {
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
      <div className="mt-10 px-4">
  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
    <input
      type="text"
      placeholder="Full name"
      className="border-2 bg-slate-200 w-full rounded-xl h-12 text-center placeholder:text-gray-400 inria-sans-bold tracking-tighter px-4"
    />
    <input
      type="email"
      placeholder="Email address"
      className="border-2 bg-slate-200 w-full rounded-xl h-12 text-center placeholder:text-gray-400 inria-sans-bold tracking-tighter px-4 "
    />
  </div>

  <div className="mt-4">
    <textarea
      placeholder="Enter your message here"
      className="w-full h-40 border-2 text-center bg-slate-200 rounded-xl p-4 placeholder:text-gray-400 inria-sans-bold tracking-tighter resize-none "
    ></textarea>
  </div>

  <div className="mt-10 flex justify-center">
    <button className="bg-slate-800 text-white px-6 py-2 rounded-xl hover:bg-slate-700 transition-all duration-200 inria-sans-bold">
      Send Message
    </button>
  </div>
</div>
    <div className="py-5 text-center text-gray-500">
        <p>Copyright © 2025 Rohit Tiwari. All rights reserved.</p>
    </div>
    </div>
  );
};

export default Contact;
