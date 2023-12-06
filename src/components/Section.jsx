const sectionStyle = {
  marginBottom: '20px',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '24px',
  color: '#333',
};

const Section = ({ title, children }) => (
  <div style={sectionStyle}>
    <h2 style={titleStyle}>{title}</h2>
    {children}
  </div>
);
export default Section;
