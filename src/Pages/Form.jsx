import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../Form.css";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("نام الزامی است")
    .min(3, "نام باید حداقل 3 کاراکتر باشد"),
  email: yup.string().required("ایمیل الزامی است").email("ایمیل معتبر نیست"),
  phone: yup
    .string()
    .required("شماره موبایل الزامی است")
    .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد"),
});

const ValidatedForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h2>فرم ثبت‌نام</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">نام</label>
          <input id="name" type="text" {...register("name")} />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">ایمیل</label>
          <input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">شماره موبایل</label>
          <input id="phone" type="text" {...register("phone")} />
          {errors.phone && (
            <p className="error-message">{errors.phone.message}</p>
          )}
        </div>
        <button type="submit">ثبت</button>
      </form>
    </div>
  );
};

export default ValidatedForm;
