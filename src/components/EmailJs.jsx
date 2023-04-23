import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailJs = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eh5c7rh",
        "template_7elig38",
        form.current,
        "sHoYFkdfQ8DX-legz"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clears form/inputs after button is Selected
          form.current.reset();
          setAlertMessage("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setAlertMessage("There was an error sending the email. Please try again.");
        }
      );
  };
  return (
    <>
      <div className="w-full">
      <div class="mx-auto max-w-screen-md">
      <p class="mb-8 lg:mb-16 text-center text-orange-300 sm:text-xl">Thank you for taking the time to visit my portfolio website. If you have any questions, comments, or inquiries regarding my work or services, please fill out the contact form below and I will get back to you as soon as possible.</p>
      <form  ref={form} onSubmit={sendEmail} class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-emerald-400">Your email</label>
              <input type="email" id="email" name="email" class="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@domain.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-emerald-400">Subject</label>
              <input type="text" name="subject" id="subject" class="text-sm rounded-lg block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Enter subject!" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-emerald-400">Your message</label>
              <textarea id="message" name="message" rows="6" class="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Leave a message..."></textarea>
          </div>
          <div><p>{alertMessage}</p></div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-emerald-600 sm:w-fit hover:bg-emerald-500">Send message</button> 
      </form>
  </div>
      </div>
    </>
  );
};

export default EmailJs;
