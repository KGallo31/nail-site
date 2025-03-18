export default function Booking() {
    return (
      <div className="booking">
        <h1>Book an Appointment</h1>
        <div className="price-list">
          <h2>Our Services</h2>
          <ul>
            <li>
              <span className="service">Manicure</span>
              <span className="price">$30</span>
            </li>
            <li>
              <span className="service">Pedicure</span>
              <span className="price">$40</span>
            </li>
            <li>
              <span className="service">Gel Polish</span>
              <span className="price">$35</span>
            </li>
            <li>
              <span className="service">Nail Art</span>
              <span className="price">$15+</span>
            </li>
          </ul>
        </div>
        <div className="booking-form">
          <h2>Request an Appointment</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date:</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service:</label>
              <select id="service" name="service" required>
                <option value="">Select a service</option>
                <option value="manicure">Manicure</option>
                <option value="pedicure">Pedicure</option>
                <option value="gel-polish">Gel Polish</option>
                <option value="nail-art">Nail Art</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">
              Request Booking
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  