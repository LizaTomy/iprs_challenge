import { useRef, useState, useCallback, useEffect } from "react";
import Form from "./Form";
import Wrapper from "./Wrapper";
import Content from "./Content";

const Main = (props) => {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputCity, setInputCity] = useState("");
  const [temperatureCity, setTemperatureCity] = useState();
  const [day, setDay] = useState();
  const [windCity, setWindCity] = useState();
  const [description, setDescription] = useState();
  const [error, setError] = useState(false)

  const URL = 'https://goweather.herokuapp.com'
  let inputElement = useRef("");


  const onClickHandler = (e) => {
    e.preventDefault();
    let city = inputElement.current.value
    setInputCity(city);
    getTemp(city);
  };

  const getTemp = useCallback(async (city) => {
    setLoading(true);
    const response = await fetch(
      URL + `/weather/${city}`
    );
    //check the response code and then show error message
    if (response.status !== 200) {
      setError(true)
    }
    const data = await response.json();
    if (data.description === '') {
      setError(true)
    }
    setTemperatureCity(data.temperature);
    setWindCity(data.wind);
    setDescription(data.description)
    setLoading(false);
    setShowContent(true);
  });

  useEffect(() => {
    let today = new Date();
    let weekday = today.getUTCDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setDay(days[weekday])
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
       { error && <h3 className="text-center text-danger"> Enter a valid City </h3>}
       {content}
    </Wrapper>
     );
};

export default Main;
