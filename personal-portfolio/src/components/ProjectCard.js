import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,githubLink,NetlifyLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}  alt="pr"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div  className="demo-btn">
       
       <a href={githubLink}> <button  className="demo">Demo</button> </a>
       <a href={NetlifyLink}> <button  className="demo">Source</button> </a>
         
          </div>
        </div>
       
        
      </div>
    </Col>
  )
}
