import { useStore } from "@/store/useStore";
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

export default function Signup() {
  const { setAuthDialogOpen, setIsLogin } = useStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasSpecialChar: false,
  });

  const [confirmPasswordMatch, setConfirmPasswordMatch] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Password validation rules
  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordValidation({
      minLength,
      hasUppercase,
      hasSpecialChar,
    });
  };

  // Check if passwords match
  const checkPasswordMatch = (confirmPassword: string) => {
    setConfirmPasswordMatch(
      confirmPassword === formData.password && confirmPassword.length > 0
    );
  };

  // Check if all validations are met
  useEffect(() => {
    const allPasswordValid =
      passwordValidation.minLength &&
      passwordValidation.hasUppercase &&
      passwordValidation.hasSpecialChar;
    const emailValid =
      formData.email.includes("@") && formData.email.includes(".");

    setIsFormValid(allPasswordValid && confirmPasswordMatch && emailValid);
  }, [passwordValidation, confirmPasswordMatch, formData.email]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === "password") {
      validatePassword(value);
      // Re-check confirm password match when password changes
      if (formData.confirmPassword) {
        checkPasswordMatch(formData.confirmPassword);
      }
    } else if (field === "confirmPassword") {
      checkPasswordMatch(value);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome!</h1>
        <p className="text-sm text-gray-400">Create an account to continue</p>
      </div>
      <Input
        isClearable
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onValueChange={(value) => handleInputChange("email", value)}
        startContent={
          <Icon icon="mdi:email" className="w-5 h-5 text-gray-700" />
        }
        label={<p className="text-white ml-1">Email</p>}
        labelPlacement="outside"
        className="text-white"
        classNames={{
          clearButton: "text-black",
          input: ["placeholder:text-xs", "text-black"],
        }}
      />
      <div className="flex flex-row gap-2">
        <Input
          isClearable
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onValueChange={(value) => handleInputChange("password", value)}
          startContent={
            <Icon icon="mdi:lock" className="w-5 h-5 text-gray-700" />
          }
          label={<p className="text-white ml-1">Password</p>}
          labelPlacement="outside"
          className="text-white"
          classNames={{
            clearButton: "text-black",
            input: ["placeholder:text-xs", "text-black"],
          }}
        />
        <Input
          isClearable
          type="password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onValueChange={(value) => handleInputChange("confirmPassword", value)}
          isInvalid={
            formData.confirmPassword.length > 0 && !confirmPasswordMatch
          }
          errorMessage={
            formData.confirmPassword.length > 0 && !confirmPasswordMatch
              ? "Passwords do not match"
              : ""
          }
          startContent={
            <Icon icon="mdi:lock" className="w-5 h-5 text-gray-700" />
          }
          label={<p className="text-white ml-1">Confirm Password</p>}
          labelPlacement="outside"
          className="text-white"
          classNames={{
            clearButton: "text-black",
            input: ["placeholder:text-xs", "text-black"],
          }}
        />
      </div>

      <div className="flex gap-2 w-full justify-between items-center -mt-1.5">
        <div className="flex flex-row gap-1 items-center">
          <span
            className={`text-[10px]  md:text-xs ${
              passwordValidation.minLength ? "text-green-500" : "text-gray-500"
            }`}
          >
            At least 8 Characters
          </span>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <span
            className={`text-[10px]  md:text-xs ${
              passwordValidation.hasUppercase
                ? "text-green-500"
                : "text-gray-500"
            }`}
          >
            One Uppercase Letter
          </span>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <span
            className={`text-[10px]  md:text-xs ${
              passwordValidation.hasSpecialChar
                ? "text-green-500"
                : "text-gray-500"
            }`}
          >
            One Special Character
          </span>
        </div>
      </div>

      <Button
        color="primary"
        isDisabled={!isFormValid}
        onPress={() => {
          console.log("Signup pressed");
          setAuthDialogOpen(false);
        }}
        radius="full"
        className={`text-md font-semibold ${
          !isFormValid ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Sign Up
      </Button>
      <p className="text-sm text-gray-400 flex justify-center">
        Already have an account!&nbsp;
        <span
          onClick={() => {
            setIsLogin(true);
          }}
          className="text-sm cursor-pointer hover:underline text-gray-300"
        >
          Sign in
        </span>
      </p>
    </>
  );
}
