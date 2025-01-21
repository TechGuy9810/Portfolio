import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { question: 'What is you STACK?', answer: 'I am Full stack developer specializing in (MERN) stack development.' },
    { question: 'Do you have any experience?', answer: 'I am fresh graduate from college. Currently I am working as a freelancer.' },
    { question: 'Where did you graduate from?', answer: 'I graduated in 2024 july, from Guru Gobind Singh Indraprasth University - (IITM Janakpuri, New Delhi). ' },
    { question: 'What is your college Degree?', answer: 'I have done Bachelors of computer applications (BCA).' },
    { question: 'Are you open to Internships or job?', answer: 'Yes, I am open to both internships or job as web developer.' },
  ];

  return (
    <div className="bg-black text-white p-8 lg:h-[93vh] md:h-[50vh] h-[85vh] flex flex-col items-center">
      <h1 className="lg:text-3xl text-2xl font-bold mb-6 tracking-wider lg:h-[10%] h-[10%] font-Monoton w-full justify-center items-center flex">
        Frequently Asked Question's
      </h1>
      <div className="lg:space-y-5 space-y-3 w-full lg:h-[90%] h-[85%]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white lg:p-8 p-5 rounded-lg cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center duration-200 ease-in-out">
              <h2 className="lg:text-lg text-md font-medium text-black">{faq.question}</h2>
              <span className="text-black text-xl">
                {open === index ? '-' : '+'}
              </span>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                open === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-800 mt-2 lg:text-md text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
