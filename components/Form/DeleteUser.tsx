import Button from "../Input/Button";
import InputForm from "../Input/InputForm";

type DeleteUserProps = {
    setFormData: any,
    handleSubmit: (e: any) => void
}

const DeleteUser = ({ setFormData, handleSubmit }: DeleteUserProps) => {

    const InputOnChange = (e: any) => {
        setFormData(e.target.value);
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <InputForm id="Range" label="Row to delete" onChange={InputOnChange} />
            <Button type="submit" label="Delete" />
        </form>
    );
};

export default DeleteUser;