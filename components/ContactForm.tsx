'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      action="https://formsubmit.co/hello@lawsonsenterprises.com"
      method="POST"
      className="space-y-6"
    >
      {/* Hidden fields for FormSubmit configuration */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://lawsonsenterprises.com/contact?success=true" />
      <input type="hidden" name="_subject" value="New contact form submission" />

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-dark font-medium mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
          placeholder="Your name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-dark font-medium mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-dark font-medium mb-2"
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formState.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
          placeholder="How can we help?"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-dark font-medium mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formState.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
          placeholder="Tell us more about your enquiry..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-all duration-300 hover:scale-105 shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
}
