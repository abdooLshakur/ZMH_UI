import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "", 
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signupData = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      password: formData.password.trim(),
    };

    try {
      const response = await fetch("https://api.example.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 w-full">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-gradient-to-r from-gray-900 to-black text-white p-4 sm:p-6 rounded-2xl shadow-lg">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="first_name" placeholder="First Name" onChange={handleChange} required className="w-full p-3 sm:p-4 bg-gray-800 text-white border-none rounded" />
            <input name="last_name" placeholder="Last Name" onChange={handleChange} required className="w-full p-3 sm:p-4 bg-gray-800 text-white border-none rounded" />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full p-3 sm:p-4 bg-gray-800 text-white border-none rounded" />
            <input name="phone" placeholder="Phone" onChange={handleChange} required className="w-full p-3 sm:p-4 bg-gray-800 text-white border-none rounded" />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="w-full p-3 sm:p-4 bg-gray-800 text-white border-none rounded" />
            <button type="submit" className="w-full bg-white hover:bg-gray-300 text-black font-semibold py-3 sm:py-4 rounded-lg">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
