import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="text-blue-500 text-4xl text-center pt-12 mt-8">
        TRANSPORTATION WEBSITE
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-20 sm:w-full">
        <button className="inline-flex items-center text-yellow-200 bg-black border-5 py-3 px-5 focus:outline-red rounded-xl text-xl mt-4 md:mr-12 md:mt-0">
          BOOK YOUR APPOINTMENTS
        </button>
        <button className="inline-flex items-center text-yellow-200 bg-black border-3 py-3 px-5 focus:outline-red rounded-xl text-xl mt-4 md:mt-0">
          SEE YOUR APPOINTMENTS
        </button>
      </div>
      <div className="justify-center item-center flex mt-24 mb-24">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29482.03095178117!2d75.91771223816296!3d22.532160915198823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIIT%20Indore!5e0!3m2!1sen!2sin!4v1711796655995!5m2!1sen!2sin"
          width="500"
          height="450"
          style={{ border: '0' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      <Footer />
    </div>
  );
}
