import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Form Handling Demo</h1>
      
      <h2 className="text-xl font-semibold mb-2">Controlled Component Form</h2>
      <RegistrationForm />

      <hr className="my-6" />

      <h2 className="text-xl font-semibold mb-2">Formik + Yup Form</h2>
      <FormikForm />
    </div>
  );
}
