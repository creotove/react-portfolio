import React, { useState } from "react";
import CustomInput from "./CustomInput";

const HireMeForm = ({ closeModal }) => {
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState({
        name: "",
        email: "",
        message: "",

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === "email") {
            if (!validateEmail(value)) {
                e.target.setCustomValidity("Please enter a valid email address");
            } else {
                e.target.setCustomValidity("");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Form submitted successfully!')
        try {
            if (!formData.name || !formData.email || !formData.message) {
                setError({
                    name: !formData.name ? "Name is required" : "",
                    email: !formData.email ? "Email is required" : "",
                    message: !formData.message ? "Message is required" : "",
                });
                return;
            }
            if (!validateEmail(formData.email)) {
                setError({
                    email: "Please enter a valid email address",
                });
                return;
            }
            console.log(formData);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
            setError({
                name: "",
                email: "",
                message: "",
            });
            closeModal();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form>
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="mb-4">
                Thank you for your interest! Please fill out the form below to get in
                touch.
            </p>
            <div className="md:flex gap-5 w-full">
                <CustomInput
                    className="w-full"
                    onChange={handleInputChange}
                    value={formData.name}
                    label="Name"
                    name="name"
                    placeholder="Your Name"
                    error={error.name}
                    errorMessage={error.name}

                />
                <CustomInput
                    className="w-full"
                    onChange={handleInputChange}
                    value={formData.email}
                    label="Email"
                    name="email"
                    placeholder="Your Email"
                    error={error.email}
                    errorMessage={error.email}
                />
            </div>
            <CustomInput
                onChange={handleInputChange}
                value={formData.message}
                label="Message"
                name="message"
                placeholder="Enter the message"
                isTextArea={true}
                error={error.message}
                errorMessage={error.message}
            />
            <button
                className="bg-x-yellow text-2xl rounded-full text-x-gray-dark font-bold h-14 w-48 p-3"
                style={{
                    boxShadow: "5px 5px 0px 5px black",
                }}
                onClick={handleSubmit}
            >
                Send
            </button>
        </form>
    );
};

export default HireMeForm;
