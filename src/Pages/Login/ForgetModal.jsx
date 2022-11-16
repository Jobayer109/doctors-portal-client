import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const ForgetModal = () => {
   
  const { forget } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const handleForgetPassword = (data) => {
      console.log(data.email);
    forget(data.email)
        .then(() => {
            toast.success("Please check your email account")
           data.reset()
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h2 className="text-center font-semibold text-secondary">
            Dear user, are you sure want to reset your password ?
          </h2>
          <form onSubmit={handleSubmit(handleForgetPassword)} className="p-8">
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              className="border w-full p-2 rounded-md"
            />
            <br />
            {errors.email && <span>This field is required</span>}
            <div className="modal-action text-center">
              <input
                type="submit"
                value="Reset password"
                className="btn btn-secondary btn-sm mt-4 text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetModal;
