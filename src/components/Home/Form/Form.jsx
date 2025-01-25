import "./Form.css";

function Form() {
  return (
    <div id="form-container" className="form-container" data-aos="slide-left">
      <div className="header">
        <h1>CONTACT US</h1>
        <span>info@magna.co.uk</span>
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          deleniti officia, corrupti distinctio consequatur error maiores!
          Consectetur modi autem dolores!
        </p>
      </div>
      <div className="form-section">
        <form>
          <div className="name-fields">
            <input type="text" required placeholder="First Name" />
            <input type="text" required placeholder="Last Name" />
          </div>

          <input type="email" required placeholder="Email" />
          <input type="tel" required placeholder="Phone" />
          <input type="date" required placeholder="Date of Event" />

          <div className="paragraph">
          
            <textarea
              id="paragraph"
              name="paragraph"
              rows="4"
              cols="50"
              placeholder="Type your paragraph here..."
            ></textarea>
          </div>

          <div className="submit-btn">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
