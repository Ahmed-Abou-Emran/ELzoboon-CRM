import React from "react";
import { get, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { createCard } from "../../services/apiCards";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Spinner from "../../UI/Spinner";
import {
  ModalContainer,
  ModalContent,
  Form,
  Label,
  TextArea,
  Button,
  Header,
  ModalActionContainer,
  SelectMenu,
} from "./AddDealForm.styles";
import { formatDate } from "../../utils/helpers";

const AddDealForm = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { reset, register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const contactFormRef = React.useRef();

  const getDealStatus = (column_id) => {
    if (column_id === 0) {
      return "Prospecting";
    } else if (column_id === 1) {
      return "Negotiation";
    } else if (column_id === 2) {
      return "Closed-Won";
    } else if (column_id === 3) {
      return "Closed-Lost";
    }
  };

  const sendEmail = ({ assigned_to, deal, column_id, date }) => {
    const templateParams = {
      to_name: assigned_to,
      message: `Deal Details:
      Deal Name: ${deal}
      Deal Status: ${getDealStatus(column_id)}
      Deal Date: ${formatDate(date)}
`,
    };

    emailjs
      .send(
        "service_t83htme",
        "template_66a8n3p",
        templateParams,
        "N6J9zDCBQFT1zmFt1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            toast.success("Email sent to Employees");
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const employees = [
    "Ahmed Ali",
    "Ahmed Ashraf",
    "Kareem Amr",
    "Abdelrahman Mahmoud",
  ];

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const queryClient = useQueryClient();
  const {
    mutate,
    error,
    isLoading: isAdding,
    isSuccess,
  } = useMutation({
    mutationFn: createCard,
    onSuccess: () => queryClient.invalidateQueries("cards"),
  });

  const onSubmitHandler = (data) => {
    const newDeal = { ...data, column_id: 0, date: new Date() };
    console.log(newDeal);
    mutate(newDeal);
    if (error) {
      toast.error("Something went wrong");
      return;
    }
    if (isSuccess) {
      toast.success("Deal added successfully");
    }
    handleCloseModal();
    sendEmail(newDeal);
    reset();
  };

  console.log({ isAdding: isAdding });

  return (
    <div>
      <ModalActionContainer>
        <Button onClick={handleOpenModal}>Add Deal</Button>
      </ModalActionContainer>
      <ModalContainer show={showModal}>
        <ModalContent>
          <Header color="#1565c0">
            Adding a new Deal
            {/* {editingDeal ? "Editing a Deal" : "Adding a new Deal"} */}
          </Header>
          {isAdding && <Spinner />}
          {!isAdding && (
            <Form onSubmit={handleSubmit(onSubmitHandler)}>
              <Label>Deal</Label>
              <TextArea
                {...register("deal", { required: true })}
                placeholder="add deal details"
              />
              <Label>Assign to</Label>
              <SelectMenu {...register("assigned_to")}>
                {employees.map((employee) => (
                  <option value={employee}>{employee}</option>
                ))}
              </SelectMenu>
              <div className="actions">
                <Button
                  color="#e74c3c"
                  hoverColor="#f3867a"
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
                <Button type="submit" disabled={isAdding}>
                  Add Deal
                  {/* {editingDeal ? "Save Changes" : "Add Deal"} */}
                </Button>
              </div>
            </Form>
          )}{" "}
        </ModalContent>
      </ModalContainer>
    </div>
  );
};

export default AddDealForm;
