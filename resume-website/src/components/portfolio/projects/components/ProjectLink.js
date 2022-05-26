const ProjectLink = (props) => {
    return (
      <span>
        &nbsp;
        <a href={props.to} target="_blank" className="regularLink">
          {props.children}
        </a>
        &nbsp;
      </span>
    );
  };

export default ProjectLink;