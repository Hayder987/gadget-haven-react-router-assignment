

const Footer = () => {
    return (
        <div className="bg-white p-4 md:p-12">
          <div className=" border-b-2 p-6">
            <h3 className="text-center text-3xl font-bold mb-3">
            Gadget Heaven
            </h3>
            <p className="text-center">
             Leading the way in cutting-edge technology and innovation.
            </p>
          </div>  
          <div className="">
            <footer className="footer grid grid-cols-2 justify-items-center md:grid-cols-3 text-black p-10">
              <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Product Support</a>
                <a className="link link-hover">Order Tracking</a>
                <a className="link link-hover">Shipping & Delivery</a>
                <a className="link link-hover">Returns</a>
              </nav>
              <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Contact</a>
              </nav>
              <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of Service</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Cookie Policy</a>
              </nav>
            </footer>
          </div>
        </div>
    );
};

export default Footer;


