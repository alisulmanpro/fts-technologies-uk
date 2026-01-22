import { useState } from "react";
import { Accordion } from "react-bootstrap";

const DarkWallet = () => {
  const [toggle, setToggle] = useState("collapse1");
  const setToggleValue = (value) => setToggle(value === toggle ? "" : value),
    activeToggle = (value) => (value === toggle ? "collapsed" : ""),
    expanded = (value) => (value === toggle ? true : false);
  return (
    <Accordion
      className="faq-accordian app-accordian"
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
            Whic Are The Digital Wallet Options ?
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="collapse1">
          <div className="card-body">
            <p>
              Natus error voluptatem accusantium doloremque laudantium totam rem
              aperiam, eaque ipsa quae ab illo inventore veritaquas architecto
              beatae vitae dicta explicabo voluptatem
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
            Can You Help Build Any E-Wallet Application ?
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="collapse2">
          <div className="card-body">
            <p>
              Natus error voluptatem accusantium doloremque laudantium totam rem
              aperiam, eaque ipsa quae ab illo inventore veritaquas architecto
              beatae vitae dicta explicabo voluptatem
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
            How To Gain Best Online Transctions ?
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="collapse3">
          <div className="card-body">
            <p>
              Natus error voluptatem accusantium doloremque laudantium totam rem
              aperiam, eaque ipsa quae ab illo inventore veritaquas architecto
              beatae vitae dicta explicabo voluptatem
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
            Whic Are The Digital Wallet Options ?
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="collapse4">
          <div className="card-body">
            <p>
              Natus error voluptatem accusantium doloremque laudantium totam rem
              aperiam, eaque ipsa quae ab illo inventore veritaquas architecto
              beatae vitae dicta explicabo voluptatem
            </p>
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
};
export default DarkWallet;
