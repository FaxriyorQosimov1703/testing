import SelectUser from "../SelectUser";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";

export default function Postmodal({toggle, isOpen, save, changeUser }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

   
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>adfhasfiashopdfiha</ModalHeader>
        <ModalBody>
          <form id={"postForm"} onSubmit={handleSubmit(save)} ref={register}>
            <input
              className="form-control"
              type="text"
              name={"title"}
              ref={register}
            />
            <SelectUser onchange={changeUser} name={"name"} />
            <textarea
              ref={register}
              className="form-control"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <button form={"postForm"} type={"submit"} className="btn btn-dark">
              Save
            </button>
            <button className="btn btn-dark">Close</button>
          </form>
        </ModalBody>
        <ModalFooter>

        <button form={"postForm"} type={"submit"} className="btn btn-dark">
              Save
            </button>
            <button className="btn btn-dark">Close</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
