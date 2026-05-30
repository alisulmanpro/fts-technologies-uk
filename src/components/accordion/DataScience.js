import { useState } from "react";
import { Accordion } from "react-bootstrap";

const DataScience = () => {
  const [toggle, setToggle] = useState("collapse1");
  const setToggleValue = (value) => setToggle(value === toggle ? "" : value),
    activeToggle = (value) => (value === toggle ? "collapsed" : ""),
    expanded = (value) => (value === toggle ? true : false);
  return (
    <Accordion
      className="faq-accordian accordian-default"
      defaultActiveKey="collapse1"
    >
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as={"a"}
            eventKey={"collapse1"}
            href="#collapse1"
            onClick={() => setToggleValue("collapse1")}
            aria-expanded={expanded("collapse1")}
            className={activeToggle("collapse1")}
          >
            How Much Your Product Price?
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="collapse1">
          <div className="card-body">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as={"a"}
            eventKey={"collapse2"}
            href="#collapse2"
            onClick={() => setToggleValue("collapse2")}
            aria-expanded={expanded("collapse2")}
            className={activeToggle("collapse2")}
          >
            Do you improve your product continuously?
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="collapse2">
          <div className="card-body">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as={"a"}
            eventKey={"collapse3"}
            href="#collapse3"
            onClick={() => setToggleValue("collapse3")}
            aria-expanded={expanded("collapse3")}
            className={activeToggle("collapse3")}
          >
            How Much Your Product Price?
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="collapse3">
          <div className="card-body">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as={"a"}
            eventKey={"collapse4"}
            href="#collapse4"
            onClick={() => setToggleValue("collapse4")}
            aria-expanded={expanded("collapse4")}
            className={activeToggle("collapse4")}
          >
            Obscure Mobile Design Techniques That Boost UX
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="collapse4">
          <div className="card-body">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as={"a"}
            eventKey={"collapse5"}
            href="#collapse5"
            onClick={() => setToggleValue("collapse5")}
            aria-expanded={expanded("collapse5")}
            className={activeToggle("collapse5")}
          >
            Do you improve your product continuously?
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="collapse5">
          <div className="card-body">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which
            </p>
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
};
export default DataScience;
