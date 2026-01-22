import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { Fragment } from "react/jsx-runtime";
import Head from "next/head";
import Cards from "../src/components/Cards";
import { Col, Container, Row } from "react-bootstrap";

const Service1 = () => {
  const courseData = [
    {
      title: "Advanced Web Development",
      description: "Build scalable, high-performance web applications using advanced Python-based development techniques.",
      duration: "8-12 weeks",
      thumbnail: "https://res.cloudinary.com/doetqiwsa/image/upload/v1768736536/cab2a3ea-4f44-43d9-a12f-393dfd4c0fad_ppqozi.jpg",
    },
    {
      title: "Machine Learning",
      description: "Learn to build intelligent models using data-driven machine learning with Python.",
      duration: "8-12 weeks",
      thumbnail: "https://res.cloudinary.com/doetqiwsa/image/upload/v1768736654/download_fryylp.jpg",
    },
    {
      title: "AI in DevOp",
      description: "AI streamlines DevOps by predicting infrastructure failures and automating complex deployment workflows.",
      duration: "8-12 weeks",
      thumbnail: "https://res.cloudinary.com/doetqiwsa/image/upload/v1769081747/download_u78erl.jpg",
    },
  ];
  return (
    <Fragment>
      <Head>
        <title>
          FTS | Learning Hub
        </title>
      </Head>
      <Layout>
        <PageBanner pageName={"Learning Hub"} />
        {/*====== End Service Section ======*/}
        <section style={{ padding: "2rem 0" }}>
          <div>
            <h1 className="text-3xl font-bold text-center text-uppercase">innovate ai uk</h1>
            <p className="text-blue-500 underline text-center">
              <Link href={'https://www.innovate-ai.co.uk/'}>https://www.innovate-ai.co.uk/</Link>
            </p>
          </div>
          <Container fluid="md" className="p-5">
            <Row className="justify-content-center">
              {courseData.map((course, index) => (
                <Col
                  key={index}
                  md={4}
                  className="d-flex justify-content-center mb-4"
                >
                  <Cards
                    title={course.title}
                    description={course.description}
                    image={course.thumbnail}
                  />
                </Col>
              ))}
            </Row>
          </Container>

        </section>
        <section>
          {/*====== <Card /> ======*/}
        </section>
        {/*====== Start Newsletter Section ======*/}
      </Layout>
    </Fragment>
  );
};
export default Service1;
