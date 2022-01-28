const MProfile = ({ projects }) => {
  return (
    <div className="about profile-sec">
      <h2 className="title2">Profile</h2>
      <p>
        {
          "Dedicated and Enthusiastic sophomore who has the knowledge of smorgasbord domains with Internship experience in Web Development and Data Analytics. Strong interpersonal and communication skills. Seeking an entry-level opportunity where I can utilize my skills and enhance learning in the field of work."
        }
      </p>
      <br />
      <br />
      <h2 className="title2">PERSONAL PROJECTS</h2>
      {projects.map((proj) => (
        <div>
          <h4>{proj.projectName}</h4>
          <p>{proj.projectDesc}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default MProfile;
