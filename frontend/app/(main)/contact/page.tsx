import React from "react";

const page = () => {
  return (
    <section className="min-h-screen px-6 py-12 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch 💬</h2>
        <p className="text-gray-600 mb-10">
          Got questions, feedback, or just want to say hi?
          <br />
          We’re all ears (and buckets).
        </p>
      </div>

      <div className="max-w-2xl mx-auto p-8 rounded-2xl">
        <form action="/contact" method="POST" className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="inline-block px-6 py-3 text-white font-semibold rounded-lg bg-primary transition-all"
            >
              Send Message 🚀
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-2xl mx-auto text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Other Ways to Reach Us 📱
        </h3>
        <ul className="text-gray-600 space-y-2">
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/2349031175222"
              className="text-blue-600 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </li>
          <li>
            <strong>Telegram:</strong>{" "}
            <a
              href="https://t.me/mmiriplug"
              className="text-blue-600 hover:underline"
            >
              t.me/mmiriplug
            </a>
          </li>
        </ul>
        <p className="mt-6 text-gray-500 italic">
          Whether it’s water stress or app bugs, we’re always ready to help.
          <br />
          Don’t be shy — even if you never baff, we won’t judge. 😅
        </p>
      </div>
    </section>
  );
};

export default page;
