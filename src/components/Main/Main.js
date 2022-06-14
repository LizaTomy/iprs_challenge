import { useRef, useState, useCallback, useEffect } from "react";
import Form from "./Form";
import Wrapper from "./Wrapper";
import Content from "./Content";


const Main = (props) => {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputCity,setInputCity] = useState("");
  const [temperatureCity, setTemperatureCity] = useState();
  const [day, setDay] = useState();
  const [windCity, setWindCity] = useState();
  const [description,setDescription] = useState();
  let inputElement = useRef("");

  const onClickHandler = (e) => {
    e.preventDefault();

    let city = inputElement.current.value
      // .toString()
      // .toLowerCase()
      // .replaceAll(" ", "-");

    setInputCity(city);
    getTemp(city);
  
  };

  const getTemp = useCallback(async (city) => {
    setLoading(true);
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${city}`
    );

    const data = await response.json();
    setTemperatureCity(data.temperature);
    setWindCity(data.wind);
    setDescription(data.description)
    setLoading(false);
    setShowContent(true);
  });

  useEffect(() => {
    let today = new Date();
    let weekday = today.getUTCDay();
    console.log(weekday);

    switch (weekday) {
      case 0:
        setDay("Sunday");
        break;
      case 1:
        setDay("Monday");
        break;

      case 2:
        setDay("Tuesday");
        break;

      case 3:
        setDay("Wednesday");
        break;

      case 4:
        setDay("Thursday");
        break;

      case 5:
        setDay("Friday");
        break;

      case 6:
        setDay("Saturday");
        break;

      default:
        setDay("Not a valid day");
        break;
    }
  }, []);

  let content = <h3 className="text-center"></h3>;
  if (showContent) {
    content = 
   (
      <Content
        temperature={temperatureCity}
        wind={windCity}
        city={inputCity}
        day={day}
        description={description}
      />
    );
  }
  if (loading) {
    content = <h3 className="text-center">Loading...</h3>;
  }

  return (
    <Wrapper>
      <Form onClick={onClickHandler} ref={inputElement} />
      {content}
    </Wrapper>
    
    
  );
};

export default Main;
