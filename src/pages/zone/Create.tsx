import TextInput from "../../components/TextInput";
import { useForm, SubmitHandler } from "react-hook-form";
import useApi from "../../hooks/useApi";

interface ZoneFormInputs {
  name: string;
}

const Create: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ZoneFormInputs>();
  const { callApi } = useApi();

  const onSubmit: SubmitHandler<ZoneFormInputs> = async (formData) => {
    try {
      const { data: result, error: apiError } = await callApi("/zone/create", "POST", formData);
      if (apiError) {
        console.error("API Error:", apiError);
      } else {
        console.log("Success:", result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
   <div className="mx-auto max-w-[700px]">
     <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Create Zone
            </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6.5">
              <TextInput
                label="Name"
                id="zone_name"
                name="name"
                register={register}
                errors={errors.name}
                placeholder="Enter zone name"
              />
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Create;
