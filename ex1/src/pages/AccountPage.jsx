// src/pages/AccountPage.jsx
import React, { useState } from "react";
import { Container, ProgressBar, Button } from "react-bootstrap";
import AboutForm from "../components/Account/AboutForm";
import AccountForm from "../components/Account/AccountForm";
import AddressForm from "../components/Account/AddressForm";

export default function AccountPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const progress = step === 1 ? 33 : step === 2 ? 67 : 100;

  const validateStep = () => {
    let err = {};
    if (step === 1) {
      if (!data.firstName) err.firstName = "First name is required";
      if (!data.lastName) err.lastName = "Last name is required";
      if (!data.email) err.email = "Email is required";
      if (!data.phone) err.phone = "Phone is required";
      if (!data.age) err.age = "Age is required";
    } else if (step === 2) {
      if (!data.username) err.username = "Username required";
      if (!data.password) err.password = "Password required";
      if (data.password !== data.confirmPassword) err.confirmPassword = "Passwords do not match";
      if (!data.secretQuestion) err.secretQuestion = "Secret question required";
      if (!data.secretAnswer) err.secretAnswer = "Answer required";
    } else if (step === 3) {
      if (!data.street) err.street = "Street required";
      if (!data.city) err.city = "City required";
      if (!data.country) err.country = "Country required";
      if (!data.zip) err.zip = "Zip required";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onNext = () => {
    if (validateStep()) setStep(step + 1);
  };
  const onPrev = () => setStep(Math.max(1, step - 1));
  const onFinish = () => {
    if (validateStep()) {
      // hoàn tất — hiện demo thông báo, không cần xử lý backend
      alert("Profile created (demo). Check data in console.");
      console.log("Profile data:", data);
      setStep(1);
      setData({});
      setErrors({});
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-3">Build Your Profile</h2>
      <ProgressBar now={progress} label={`${progress}%`} className="mb-3" />

      {step === 1 && <AboutForm data={data} setData={setData} errors={errors} />}
      {step === 2 && <AccountForm data={data} setData={setData} errors={errors} />}
      {step === 3 && <AddressForm data={data} setData={setData} errors={errors} />}

      <div className="d-flex justify-content-between mt-3">
        <Button variant="secondary" disabled={step === 1} onClick={onPrev}>
          Previous
        </Button>
        {step < 3 ? (
          <Button onClick={onNext}>Next</Button>
        ) : (
          <Button variant="success" onClick={onFinish}>Finish</Button>
        )}
      </div>
    </Container>
  );
}
