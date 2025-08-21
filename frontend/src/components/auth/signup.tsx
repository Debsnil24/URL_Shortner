import { useStore } from "@/store/useStore";
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Signup() {
  const { setAuthDialogOpen, setIsLogin } = useStore();

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
        startContent={
          <Icon icon="mdi:email" className="w-5 h-5 text-gray-700" />
        }
        label={<p className="text-white ml-1">Email</p>}
        labelPlacement="outside"
        className="text-white"
        classNames={{
          clearButton: "text-black",
          input: ["placeholder:text-xs"],
        }}
      />
      <div className="flex flex-row gap-2">
        <Input
          isClearable
          type="password"
          placeholder="Enter your password"
          startContent={
            <Icon icon="mdi:lock" className="w-5 h-5 text-gray-700" />
          }
          label={<p className="text-white ml-1">Password</p>}
          labelPlacement="outside"
          className="text-white"
          classNames={{
            clearButton: "text-black",
            input: ["placeholder:text-xs"],
          }}
        />
        <Input
          isClearable
          type="password"
          placeholder="Confirm your password"
          startContent={
            <Icon icon="mdi:lock" className="w-5 h-5 text-gray-700" />
          }
          label={<p className="text-white ml-1">Confirm Password</p>}
          labelPlacement="outside"
          className="text-white"
          classNames={{
            clearButton: "text-black",
            input: ["placeholder:text-xs"],
          }}
        />
      </div>

      <div className="flex gap-2 w-full justify-between items-center">
        <div className="flex flex-row gap-1 items-center">
          <span className="text-xs text-gray-600">
            At least 8 Characters
          </span>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <span className="text-xs text-gray-500">
            One Uppercase Letter
          </span>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <span className="text-xs text-gray-500">
            One Special Character
          </span>
        </div>
      </div>
      <Button
        color="primary"
        onPress={() => {
          console.log("Login pressed");
          setAuthDialogOpen(false);
        }}
        radius="full"
        className="text-md font-semibold"
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
