import { useState } from "react";

const Contact = () => {
  const phoneNumber = "947XXXXXXXX";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    item: "",
    quantity: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name required
    if (!form.name.trim()) newErrors.name = "Name is required";

    // Phone required + 10 digits
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Item required
    if (!form.item.trim()) newErrors.item = "Item is required";

    // Quantity required + minimum 1
    if (!form.quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (Number(form.quantity) < 1) {
      newErrors.quantity = "Quantity must be at least 1";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Hello! I would like to order:\nName: ${form.name}\nPhone: ${form.phone}\nItem: ${form.item}\nQuantity: ${form.quantity}`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const handleOrderClick = () => {
    if (!validateForm()) return;
    window.open(generateWhatsAppLink(), "_blank");
    setForm({ name: "", phone: "", item: "", quantity: "" });
    setErrors({});
  };

  return (
    <section className="p-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE – Contact Info + Map */}
        <div className="space-y-6">
          <div className="space-y-2 text-stone-800">
            <p><strong>Address:</strong> 123 Main Street, Colombo</p>
            <p><strong>Email:</strong> coffee@shop.com</p>
            <p><strong>Phone:</strong> +94 145698756</p>
          </div>

          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9360543149763!2d79.8519673!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593c2c0d8b63%3A0x8e3a0d6f1e6f3c3!2sColombo!5e0!3m2!1sen!2slk!4v1710000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded shadow-lg"
            />
          </div>
        </div>

        {/* RIGHT SIDE – Order Form */}
        <div className="bg-white p-8 rounded shadow-lg space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded ${errors.phone ? "border-red-500" : ""}`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <input
            type="text"
            name="item"
            placeholder="Order Item"
            value={form.item}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded ${errors.item ? "border-red-500" : ""}`}
          />
          {errors.item && <p className="text-red-500 text-sm">{errors.item}</p>}

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={form.quantity}
            min={1}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded ${errors.quantity ? "border-red-500" : ""}`}
          />
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}

          <button
            onClick={handleOrderClick}
            className="bg-green-500 text-white px-6 py-3 rounded mt-2 w-full hover:bg-green-600 transition-colors"
          >
            Order via WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
