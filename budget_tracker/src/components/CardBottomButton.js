import { Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "@mui/material/TextField";

function CardBottomButton(props) {
  const { amount } = props;
  const [totalAmount, settotalAmount] = useState(amount);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(totalAmount);

  return (
    <>
      <Button variant="outline-primary" onClick={handleOpen}>
        Add Expense
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal_card">
          <Typography className="expense_input">
            <TextField
              id="outlined-basic"
              label="Enter Amount"
              variant="outlined"
            />
          </Typography>
          <div>
            <Button variant="outline-primary">Add Expense</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
export default CardBottomButton;
