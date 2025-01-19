import React from 'react';

const Foot = () => {
  return (
    <footer className="flex justify-center items-center py-4 bg-white">
      <div className=" text-center">
        <p>&copy; {new Date().getFullYear()} Profile-Mapper. All Rights Reserved.</p>
        <div className="footer-contact">
          <p>
            Email: <a href="mailto:prajakta.humbe4@gmail.com" className="text-blue-600 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#fdf2f8] hover:text-[#1f2937]">prajaktahumbe4@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+918208118737" className="text-blue-600 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#fdf2f8] hover:text-[#1f2937]" >+91 8208118737</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
