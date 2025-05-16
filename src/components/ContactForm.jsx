const ContactForm = () => (
  <form className="space-y-4">
    <input
      type="text"
      placeholder="Name"
      className="border w-full p-2 rounded"
    />
    <input
      type="email"
      placeholder="Email"
      className="border w-full p-2 rounded"
    />
    <input
      type="text"
      placeholder="Subject"
      className="border w-full p-2 rounded"
    />
    <textarea
      placeholder="Input Text"
      className="border w-full p-2 rounded h-24"
    ></textarea>

    <button
      type="submit"
      className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded"
    >
      Send
    </button>
  </form>
);

export default ContactForm;
