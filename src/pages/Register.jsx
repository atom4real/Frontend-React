import React, { useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    navigate("/");
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsOpen(true);

    try {
      const response = await api.register(name, email, password, phone);

      console.log("Signed in successfully:", response);
    } catch (error) {
      // Handle login error
      console.error("Sign in failed:", error.message);
    }

    // Reset the form
    setEmail("");
    setPassword("");
    setName("");
    setPhone("");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Join us now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Join us
                </button>
                <Modal
                  isOpen={isOpen}
                  onRequestClose={closeModal}
                  className="flex justify-center items-center h-screen"
                >
                  <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">Successful</h2>
                      <p>Image.</p>
                      <div class="card-actions justify-end">
                        <button className="btn btn-primary" onClick={closeModal}>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
