'use client';

import React, { useState } from 'react';
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiClock,
    FiSend,
    FiCheckCircle
} from 'react-icons/fi';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Server action বা API call-এর ফ্রন্টএন্ড সিমুলেশন
        await new Promise((resolve) => setTimeout(resolve, 800));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-base-200/50 min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Header Section */}
                <section className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="badge badge-primary badge-outline font-semibold px-4 py-3 uppercase tracking-wider text-xs">
                        Get In Touch
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-base-content tracking-tight">
                        We’d Love to Hear From You
                    </h1>
                    <p className="text-base-content/70 text-sm sm:text-base">
                        Have questions about your order, products, or need support for Hero Kidz? Drop us a line and our team will get back to you within 24 hours.
                    </p>
                </section>

                {/* Main Section: Details & Form */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Contact Information (5 Cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-base-100 p-6 sm:p-8 rounded-2xl shadow-sm border border-base-300 space-y-6">
                            <h2 className="text-xl font-bold text-base-content border-b border-base-200 pb-4">
                                Contact Details
                            </h2>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                        <FiMapPin className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-base-content">Our Office</h3>
                                        <p className="text-sm text-base-content/70 mt-0.5">
                                            House 12, Road 5, Block C, Gulshan-1, Dhaka, Bangladesh
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                        <FiMail className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-base-content">Email Us</h3>
                                        <p className="text-sm text-base-content/70 mt-0.5">
                                            support@herokidz.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                        <FiPhone className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-base-content">Call Us</h3>
                                        <p className="text-sm text-base-content/70 mt-0.5">
                                            +880 1700-000000
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                        <FiClock className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-base-content">Working Hours</h3>
                                        <p className="text-sm text-base-content/70 mt-0.5">
                                            Sat – Thu: 9:00 AM – 8:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 p-5 rounded-2xl">
                            <h3 className="font-bold text-primary text-sm mb-1">Customer Support Notice</h3>
                            <p className="text-xs text-base-content/70 leading-relaxed">
                                Urgent delivery updates বা Order cancellation-এর জন্য আমাদের ফোনে সরাসরি যোগাযোগ করার পরামর্শ দেওয়া হচ্ছে।
                            </p>
                        </div>
                    </div>

                    {/* Form Section (7 Cols) */}
                    <div className="lg:col-span-7 bg-base-100 p-6 sm:p-8 rounded-2xl shadow-sm border border-base-300">
                        <h2 className="text-xl font-bold text-base-content mb-6">
                            Send Us a Message
                        </h2>

                        {submitted ? (
                            <div className="p-6 bg-success/10 border border-success/20 rounded-xl text-center space-y-3">
                                <FiCheckCircle className="text-4xl text-success mx-auto" />
                                <h3 className="font-bold text-lg text-success">Message Sent Successfully!</h3>
                                <p className="text-sm text-base-content/70">
                                    আপনার মেসেজটি আমরা পেয়েছি। খুব শীঘ্রই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে।
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="btn btn-sm btn-outline btn-success mt-2"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend font-medium">Your Name *</legend>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="e.g. Md. Ridoy"
                                            className="input input-bordered w-full focus:input-primary"
                                        />
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend font-medium">Email Address *</legend>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="e.g. name@example.com"
                                            className="input input-bordered w-full focus:input-primary"
                                        />
                                    </fieldset>
                                </div>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Subject *</legend>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        className="input input-bordered w-full focus:input-primary"
                                    />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Message *</legend>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your query here..."
                                        className="textarea textarea-bordered w-full focus:textarea-primary text-base"
                                    />
                                </fieldset>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full sm:w-auto px-8 font-semibold flex items-center justify-center gap-2 mt-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="loading loading-spinner loading-xs"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                </div>

                {/* Embedded Map */}
                <div className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300">
                    <iframe
                        title="Hero Kidz Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.066228399342!2d90.4125!3d23.7806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzUwLjIiTiA5MMK0MjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1600000000000!5m2!1sen!2sbd"
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}