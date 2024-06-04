import { Container, Row, Col } from "react-bootstrap";
import AmountButtons from "./common/AmountButton/AmountButtons";
import ResetButton from "./common/ResetButton/ResetButton";
import TipAmount from "./features/TipAmount";
import TotalAmount from "./features/TotalAmount";
import "../styles/splitter.css";
import useSplitter from "../zustand-store/useSplitterStore";

function Splitter() {
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
            <AmountButtons />
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
              <TipAmount />
              <TotalAmount />
            </div>
            <div>
              <ResetButton />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Splitter;
