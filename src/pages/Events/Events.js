//HOOKS
import { useForm } from "../../hooks";

// COMPONENTS
import { CreateEvent } from "../../components/CreateEvent";

// STYLES
import { Box } from "../../styles/generics";

export const Events = () => {
  const [fields, handleChange, onSubmit, validations] = useForm({
    title: "",
    description: "",
    location: "",
    date: "",
    owner_id: "",
  });

  return (
    <>
      <Box style={{ borderTop: "1px solid #838383", padding: "7rem 2rem" }}>
        <CreateEvent
          fields={fields}
          handleChange={handleChange}
          onSubmit={onSubmit}
          validations={validations}
        />
      </Box>

      <Box
        style={{ borderTop: "1px solid #838383", padding: "7rem 2rem" }}
      ></Box>
    </>
  );
};
