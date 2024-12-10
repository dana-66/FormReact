import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      about
    );
    // Add your form submission logic here
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep1 = () => (
    <>
      <h2>Personal Information</h2>
      <label htmlFor="firstname">First Name*</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter First Name"
        required
      />
      <label htmlFor="lastname">Last Name*</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter Last Name"
        required
      />
      <label htmlFor="email">Enter Email*</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />
      <label htmlFor="tel">Contact*</label>
      <input
        type="tel"
        name="contact"
        id="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Enter Mobile number"
        required
      />
      <button 
        type="button" 
        onClick={nextStep}
        disabled={!firstName || !lastName || !email || !contact}
      >
        Next
      </button>
    </>
  );

  const renderStep2 = () => (
    <>
      <h2>Additional Details</h2>
      <label htmlFor="gender">Gender*</label>
      <div className="radio-group">
        <input
          type="radio"
          name="gender"
          value="male"
          id="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          id="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          id="other"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </div>

      <label htmlFor="lang">Your best Subject</label>
      <div className="checkbox-group">
        <input
          type="checkbox"
          name="lang"
          id="english"
          checked={subjects.english}
          onChange={() => handleSubjectChange("english")}
        />
        English
        <input
          type="checkbox"
          name="lang"
          id="maths"
          checked={subjects.maths}
          onChange={() => handleSubjectChange("maths")}
        />
        Maths
        <input
          type="checkbox"
          name="lang"
          id="physics"
          checked={subjects.physics}
          onChange={() => handleSubjectChange("physics")}
        />
        Physics
      </div>
      <div className="button-group">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <h2>Final Details</h2>
      <label htmlFor="file">Upload Resume*</label>
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => setResume(e.target.files[0])}
        required
      />
      <label htmlFor="url">Enter URL*</label>
      <input
        type="url"
        name="url"
        id="url"
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter url"
        required
      />
      <label htmlFor="about">About</label>
      <textarea
        name="about"
        id="about"
        cols="30"
        rows="10"
        onChange={(e) => setAbout(e.target.value)}
        placeholder="About yourself"
        required
      ></textarea>
      <div className="button-group">
        <button type="button" onClick={prevStep}>Back</button>
        <button 
          type="submit" 
          onClick={handleSubmit}
          disabled={!resume || !url || !about}
        >
          Submit
        </button>
      </div>
    </>
  );

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </form>
      </fieldset>
    </div>
  );
}

export default App;
