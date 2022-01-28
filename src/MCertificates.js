const MCertificates = ({ certificates }) => {
  return (
    <div className="about experience-sec">
      <h2 className="title2">CERTIFICATES & ACHIEVEMENTS</h2>
      {certificates.map((cer) => (
        <div className="box">
          <div className="year_company">
            <h5>{cer.company_Name}</h5>
          </div>
          <h4>
            <a href={cer.link}>{cer.title}</a>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default MCertificates;
