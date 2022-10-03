import "./CreatePage.css";
// import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreatePage = ({ input, setInput }) => {
  const { name, host, startDate, endDate, startTime, endTime, location, img } =
    input;
  //   const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className='create-event-form height-100'>
      <form className='input-form create-event'>
        <h1 className='login-bottom-margin text-center'>Create Event</h1>

        <label htmlFor='email-input' className='label-font-size'>
          Name of Event
        </label>
        <input
          type='email'
          className='input-box'
          id='email-input'
          value={name}
          onChange={(e) => {
            setInput((prev) => ({ ...prev, name: e.target.value }));
          }}
          required
        />
        <label htmlFor='password' className='label-font-size'>
          Host name
        </label>
        <input
          type='text'
          className='input-box'
          id='password'
          value={host}
          onChange={(e) => {
            setInput((prev) => ({ ...prev, host: e.target.value }));
          }}
          required
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <label className='label-font-size'>
            Start Date:
            <DatePicker
              selected={startDate}
              onChange={(date) =>
                setInput((prev) => ({ ...prev, startDate: date }))
              }
              dateFormat='dd/MM/yyyy'
              minDate={new Date()}
              showYearDropdown
              scrollableMonthYearDropdown
              className='input-box'
            />
          </label>
          <label className='label-font-size'>
            End Date:
            <DatePicker
              selected={endDate}
              onChange={(date) =>
                setInput((prev) => ({ ...prev, endDate: date }))
              }
              dateFormat='dd/MM/yyyy'
              minDate={new Date()}
              showYearDropdown
              scrollableMonthYearDropdown
              className='input-box'
            />
          </label>
        </div>
        <label htmlFor='start-time' className='label-font-size'>
          Start Time
        </label>
        <input
          type='time'
          className='input-box'
          id='start-time'
          value={startTime}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, startTime: e.target.value }))
          }
        />
        <label htmlFor='start-time' className='label-font-size'>
          End Time
        </label>
        <input
          type='time'
          value={endTime}
          className='input-box'
          id='start-time'
          onChange={(e) =>
            setInput((prev) => ({ ...prev, endTime: e.target.value }))
          }
        />
        <label htmlFor='location' className='label-font-size'>
          Location
        </label>
        <input
          type='text'
          value={location}
          onChange={(e) => {
            setInput((prev) => ({ ...prev, location: e.target.value }));
          }}
          className='input-box'
          id='location'
        />
        <label htmlFor='Upload-Image' className='label-font-size'>
          Upload Image
        </label>
        <input type='file' id='Upload-Image' />
        {/* <Link to='/event' className='signup-page-link signup-page-link-margin'> */}
        <button
          type='submit'
          className='button login-button'
          //   onClick={(e) => {
          //     e.preventDefault();

          //     if (email != "" || password != "") {
          //       loginHandler(email, password);
          //       setInput({ email: "", password: "" });
          //     } else {
          //       setError("Fields Cannot be empty");
          //     }
          //   }}
        >
          Next
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export { CreatePage };
