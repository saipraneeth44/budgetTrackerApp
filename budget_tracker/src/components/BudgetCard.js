import { Card, ProgressBar, Stack } from "react-bootstrap";
import "./component.css";
import { Button } from "react-bootstrap";

function BudgetCard(props) {
  const { name, amount, max } = props;

  return (
    <div className="budget_card">
      <Card>
        <Card.Body
          style={
            ratio(amount, max) <= 100
              ? { backgroundColor: "rgb(247, 247, 247) " }
              : { backgroundColor: "rgb(237, 169, 169) " }
          }
        >
          <Card.Title className="budget_title">
            <div className="me-2">{name}</div>
            <div>{`$${amount} / $${max}`}</div>
          </Card.Title>
          <ProgressBar
            className="rounded-pill"
            now={ratio(amount, max)}
            variant={ratio(amount, max) <= 100 ? "primary" : "danger"}
          ></ProgressBar>
          <div className="card_button">
            <Button variant="outline-primary" onClick={handleOpen}>
              Add Expense
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default BudgetCard;

const ratio = (amount, max) => {
  return (amount / max) * 100;
};

function handleOpen() {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}
