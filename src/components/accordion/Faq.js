import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Faq = ({ extraFaq }) => {
  const [toggle, setToggle] = useState("collapseOne");
  const setToggleValue = (value) => setToggle(value === toggle ? "" : value),
    activeToggle = (value) => (value === toggle ? "collapsed" : ""),
    expanded = (value) => (value === toggle ? true : false);
  return (
    <Accordion
      className="faq-accordian faq-accordian-two wow fadeInUp"
      defaultActiveKey="collapseOne"
    >
      <div className="row">
        <div className="col-lg-6">
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
                Gone Floating Labels & Green Lighthouse Scores
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"collapseOne"}>
              <div className="card-body">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accus antium doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quase
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
                Scraping Websites With Node & Puppeteer
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"collapseTwo"}>
              <div className="card-body">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accus antium doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quase
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
                Scraping Websites With Node & Puppeteer
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"collapse3"}>
              <div className="card-body">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accus antium doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quase
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
                  accus antium doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quase
                </p>
              </div>
            </Accordion.Collapse>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <Accordion.Toggle
                as={"a"}
                eventKey={"collapse10"}
                href="#collapse10"
                onClick={() => setToggleValue("collapse10")}
                aria-expanded={expanded("collapse10")}
                className={activeToggle("collapse10")}
              >
                Gone Floating Labels & Green Lighthouse Scores
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"collapse10"}>
              <div className="card-body">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accus antium doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quase
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
                Scraping Websites With Node & Puppeteer
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"collapse5"}>
              <div className="card-body">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accus antium doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quase
                </p>
              </div>
            </Accordion.Collapse>
          </div>
          <div className="card">
            <div className="card-header">
              <Accordion.Toggle
                as={"a"}
                eventKey={"collapse6"}
                href="#collapse6"
                onClick={() => setToggleValue("collapse6")}
                aria-expanded={expanded("collapse6")}
                className={activeToggle("collapse6")}
              >
                Scraping Websites With Node & Puppeteer
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"collapse6"}>
              <div className="card-body">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accus antium doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quase
                </p>
              </div>
            </Accordion.Collapse>
          </div>
          <div className="card">
            <div className="card-header">
              <Accordion.Toggle
                as={"a"}
                eventKey={"collapse7"}
                href="#collapse7"
                onClick={() => setToggleValue("collapse7")}
                aria-expanded={expanded("collapse7")}
                className={activeToggle("collapse7")}
              >
                Obscure Mobile Design Techniques That Boost UX
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"collapse7"}>
              <div className="card-body">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accus antium doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quase
                </p>
              </div>
            </Accordion.Collapse>
          </div>
        </div>
      </div>
    </Accordion>
  );
};
export default Faq;
