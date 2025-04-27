import { Link } from "react-router-dom"
import { Instagram, Facebook, Youtube } from "lucide-react"
import pic1 from "../../assets/Common/background_01.svg"
import pic2 from "../../assets/Common/footer_frame.svg"

export default function Footer() {
  return (
    <footer
      className="w-full relative text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${pic1})`,
      }}
    >
      <div className="max-w-[1440px] px-[120px] mx-auto h-full flex flex-col py-[97px] pb-[68px] ">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* SITEMAPS Section */}
          <div>
            <h2 className="text-lg font-bold mb-4 font-montserrat text-[20px]">SITEMAPS</h2>
            <nav className="flex flex-col space-y-2 font-montserrat text-[16px]">
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
              <Link to="#" className="hover:underline">
                Solutions
              </Link>
              <Link to="carrer" className="hover:underline">
                Work with Us
              </Link>
              <Link to="#" className="hover:underline">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* CONTACT Section */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-4 font-montserrat text-[20px] mt-4">CONTACT</h2>
            <div className="flex flex-col space-y-2 font-montserrat text-[16px]">
              <p>Email : contact@think41.com</p>
              <p>Location: hsr layout, Bengaluru</p>
              <div
                className="flex space-x-4 border-t border-b border-opacity-30 font-montserrat text-[16px]"
                style={{ borderColor: "rgba(26, 86, 219, 0.3)" }}
              >
                <Link to="#" aria-label="Instagram" className="py-2">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link to="#" aria-label="Twitter" className="py-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link to="#" aria-label="Facebook" className="py-2">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link to="#" aria-label="YouTube" className="py-2">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="self-start">
            <div className="bg-white mr-2 p-0 rounded-md w-12 h-12 flex items-center justify-center gap-[35px]">
              <img src={pic2} alt="Logo" />
            </div>
          </div>
        </div>

        {/* Gradient Line */}
        <div className="flex justify-center mt-[28px] mb-[31px]">
          <div
            className="w-full h-[1px]"
            style={{
              background: "linear-gradient(90deg, #FFF 0%, #7FAEE1 50.48%, #FFF 100%)",
            }}
          ></div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-auto flex flex-col md:flex-row justify-between md:items-center">
          <Link to="#" className="hover:underline font-montserrat text-[14px]">
            Terms of Use & Privacy Policy
          </Link>
          <p className="mt-2 md:mt-0 font-montserrat text-[14px]">© 2025 Think41. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

