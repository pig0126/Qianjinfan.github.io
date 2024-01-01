import { Col, Container} from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
        <Col size={20} sm={6} md={10}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                </div>
            </div>
        </Col>
    </Container>
  )
}