const Footer = () => {
  return (
    <footer className="bg-[#18353A] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Left Column */}
        <div>
          <p className="text-sm mb-4">
            we are not here to sell you <br />
            products, we sell value through <br />
            our expertise.
          </p>
          <div className="flex space-x-4 text-white text-xl">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold">Address:</h3>
          <p>38 Opebi Road, Ikeja, Lagos State, Nigeria.</p>

          <h3 className="font-bold mt-4">Phone:</h3>
          <p>+2349022396389</p>

          <h3 className="font-bold mt-4">Email:</h3>
          <p>contact@contentionary.com</p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Subscription */}
      <div className="text-center mt-12">
        <h4 className="text-lg font-medium mb-4">
          Subscribe to get latest updates
        </h4>
        <form className="flex justify-center flex-col sm:flex-row items-center gap-2 sm:gap-0">
          <input
            type="email"
            placeholder="Your Email address"
            className="p-3 w-72 text-gray-900 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 transition text-white px-6 py-3 rounded-r-md"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-12 border-t border-gray-600 pt-6">
        <div className="flex items-center gap-2 text-lg">
          <img src="/logo.png" alt="Contentionary Logo" className="h-6" />
          <span className="font-semibold">Contentionary</span>
        </div>
        <p className="mt-4 sm:mt-0">Powered By Contentionary</p>
      </div>
    </footer>
  );
};

export default Footer;
