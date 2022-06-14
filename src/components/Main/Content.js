import './Content_styles.css';

const Content = (props) => {
  return (
    <main className="text-center">
      <div className="">
        <h4>
          <img src="https://img.icons8.com/ios/64/000000/calendar.png" alt="day"/>
          Day:
        </h4>
        <h3>{props.day}</h3>
      </div>

      <div className="">
        <h4>
          <img src="https://img.icons8.com/glyph-neue/64/000000/temperature.png" alt="temperature"/>
          Temperature:
        </h4>
        <h3>{props.temperature}</h3>
      </div>

      <div className="">
        <h4>
          <img src="https://img.icons8.com/wired/64/000000/city.png" alt="city"/>
          City:
        </h4>
        <h3>{props.city}</h3>
      </div>

      <div className="">
        <h4>
          <img src="https://img.icons8.com/glyph-neue/64/000000/wind.png" alt="wind"/>
          Wind:
        </h4>
        <h3>{props.wind}</h3>
      </div>

      <div className="">
        <h4>
           Current Climate:
        </h4>
        <h3>{props.description}</h3>
      </div>

    </main>
  );
};

export default Content;