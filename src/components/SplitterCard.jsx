import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AmountButtons from "./common/AmountButton/AmountButtons";
import ResetButton from "./common/ResetButton/ResetButton";
import TipAmount from "./features/TipAmount";
import TotalAmount from "./features/TotalAmount";
import "../styles/splitter.css";

function Splitter() {
  const values = [5, 10, 15, 20, 25];
  const [splitTip, setSplitTip] = useState(0);
  const [splitBill, setSplitBill] = useState(0);

  const handleSplitTipChange = (newSplitTip) => {
    setSplitTip(newSplitTip);
  };

  const handleSplitBillChange = (newSplitBill) => {
    setSplitBill(newSplitBill);
  };

  const handleResetClick = () => {
    setSplitTip(0);
    setSplitBill(0);
  };

  return (
    <div className="outer-container">
      <Container className="container">
        <h6>
          SPLI
          <br />
          TTER
        </h6>
        <Row className="row align-items-center justify-content-center">
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={4}
            className="col1 d-flex flex-column"
          >
            <AmountButtons
              values={values}
              onSplitTipChange={handleSplitTipChange}
              onSplitBillChange={handleSplitBillChange}
            />
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={4}
            className="col2 d-flex flex-column"
          >
            <div>
              <TipAmount tipAmount={splitTip.toFixed(2)} />
              <TotalAmount totalAmount={splitBill.toFixed(2)} />
            </div>
            <div>
              <ResetButton onClick={handleResetClick} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Splitter;
