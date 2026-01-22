import { useState } from "react";
import { Accordion } from "react-bootstrap";

const HomeDev = ({ extraFaq }) => {
  const [toggle, setToggle] = useState("collapseOne");
  const setToggleValue = (value) => setToggle(value === toggle ? "" : value),
    activeToggle = (value) => (value === toggle ? "collapsed" : ""),
    expanded = (value) => (value === toggle ? true : false);
  return (
    <Accordion
      className="faq-accordian faq-accordian-one wow fadeInUp"
      defaultActiveKey="collapseOne"
    >
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as={"a"}
            eventKey={"collapseOne"}
            href="#collapseOne"
            onClick={() => setToggleValue("collapseOne")}
            aria-expanded={expanded("collapseOne")}
            className={activeToggle("collapseOne")}
          >
            Create An Engaging And Useful Chatbot
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey={"collapseOne"}>
          <div className="card-body">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accus antium doloremque laudantium totam rem aperiam, eaque ipsa
              quae abillo inventore veritatis et quase
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as={"a"}
            eventKey={"collapseTwo"}
            href="#collapseTwo"
            onClick={() => setToggleValue("collapseTwo")}
            aria-expanded={expanded("collapseTwo")}
            className={activeToggle("collapseTwo")}
          >
            Design To Developer-Friendly React Code
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey={"collapseTwo"}>
          <div className="card-body">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accus antium doloremque laudantium totam rem aperiam, eaque ipsa
              quae abillo inventore veritatis et quase
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
        <Accordion.Collapse eventKey={"collapse4"}>
          <div className="card-body">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accus antium doloremque laudantium totam rem aperiam, eaque ipsa
              quae abillo inventore veritatis et quase
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      {extraFaq && (
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
              Making Remote Work Work Useful
            </Accordion.Toggle>
          </div>
          <Accordion.Collapse eventKey={"collapse3"}>
            <div className="card-body">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accus antium doloremque laudantium totam rem aperiam, eaque ipsa
                quae abillo inventore veritatis et quase
              </p>
            </div>
          </Accordion.Collapse>
        </div>
      )}
    </Accordion>
  );
};
export default HomeDev;
