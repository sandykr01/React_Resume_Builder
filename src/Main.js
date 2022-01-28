import MProfile from "./MProfile";
import MExperience from "./MExperience";
import MSkills from "./MSkills";
import MInterest from "./MInterest";
import MCertificates from "./MCertificates";

const Main = ({ Data }) => {
  const { projects, expDetails, skills, certificates, interests } = Data;
  return (
    <div className="right_Side">
      <MProfile projects={projects} />
      <MExperience expDetails={expDetails} />
      <MSkills skills={skills} />
      <MCertificates certificates={certificates} />
      <MInterest interests={interests} />
    </div>
  );
};

export default Main;
