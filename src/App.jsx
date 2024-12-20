import { useState } from 'react';
export default function App() {
  const [mode, setMode] = useState('');
  const [usage, setUsage] = useState('');
  const [experience, setExperience] = useState('');
  const [comments, setComments] = useState('');
  const [formData, setForm] = useState(false);
  const [checked, setChecked] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    if (mode && usage && experience && checked) {
      setForm(true);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>Transportation Preference Form</h2>
        <label htmlFor="modeSelect">Preferred Mode of Transportation:</label>
        <select
          required
          id="modeSelect"
          onChange={(event) => setMode(event.target.value)}
        >
          <option value="">Select</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Bicycle">Bicycle</option>
          <option value="Walk">Walk</option>
        </select>
        <br />
        <br />
        <label htmlFor="usageSelect">Frequency of Usage:</label>
        <select
          required
          id="usageSelect"
          onChange={(event) => setUsage(event.target.value)}
        >
          <option value="">Select</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        <br />
        <br />
        <label htmlFor="commentsInput">Comments(if any):</label>
        <br />
        <textarea
          id="commentsInput"
          cols="40"
          rows="6"
          onChange={(event) => setComments(event.target.value)}
        ></textarea>
        <br />
        <br />
        <label htmlFor="">Experience level:</label>
        <br />
        <input
          type="radio"
          value="Beginner"
          name="experience"
          onChange={(event) => setExperience(event.target.value)}
        />{' '}
        Beginner
        <br />
        <input
          type="radio"
          value="Intermediate"
          name="experience"
          onChange={(event) => setExperience(event.target.value)}
        />{' '}
        Intermediate
        <br />
        <input
          type="radio"
          value="Advanced"
          name="experience"
          onChange={(event) => setExperience(event.target.value)}
        />{' '}
        Advanced
        <br />
        <br />
        <input type="checkbox" onChange={() => setChecked(!checked)} /> I agree
        to the terms and conditions.
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h2>Submitted Details:</h2>
          <p>Preferred mode of transportation : {mode}</p>
          <p>Frequency of usage : {usage}</p>
          <p>Comments: {comments ? `${comments}` : 'none'}</p>
          <p>Experience Level: {experience}</p>
        </div>
      )}
    </>
  );
}
