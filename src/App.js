import './style.css';
import flyImage from './images/fly.jpeg'
import logo from './images/LBF-elemets-03.png'
import { useState, useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import countriesInfo from 'countries-information';



function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [value, setValue] = useState('');
  const [response, setResponse] = useState(' ');
  console.log(response)

  const options = useMemo(() => countryList().getData(), [])
  const changeHandler = value => {
    setValue(value)
  }
  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  }
  const handleSubmit = (e) => {
    console.log(name)
    console.log(email)
    const phoneNumber = `${countriesInfo.getCountryInfoByCode(`${value.value}`).countryCallingCodes[0].slice(1)}` + `${phone}`
    console.log(phoneNumber)
    const obj = {
      name,
      email,
      phoneNumber
    }
    var config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    };
    fetch(`localhost:8000/send-watsApp`, config)
      .then(function (response) {
        // The API call was successful!
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then(function (data) {
        console.log("line#1", data.status)
        setResponse(data.status)

      }).catch(function (err) {
        // There was an error
        console.log('Something went wrong.', err);
      });
    e.preventDefault();

  }
  return (
    <>
      <center>
        <div>
          <img src={flyImage} alt="" width={200} height={200} />
        </div>
      </center>
      {/* CONTACT */}
      <section id="form" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
              <div className="section-title">
                <h1 className="display-4 text-black fw-semibold"> </h1>
                <div className="line bg-white" />
                <p className="text-black">Simply enter your details below to receive your exclusive minting link and claim your raffle entry.</p>
                <p className="text-black" style={{ color: 'red' }}>971 entries will only be available.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center" data-aos="fade-down" data-aos-delay="250">
            <div className="col-lg-8">
              <form onSubmit={(e) => { handleSubmit(e) }} className="row g-3 p-lg-5 p-4 bg-white theme-shadow">
                <div className="form-group col-lg-12">
                  <input id="name" type="text" value={name} required className="form-control" placeholder="Name" onChange={(e) => { handleChangeName(e) }} />
                </div>
                <div className="form-group col-lg-12">
                  <input id="email" type="email" value={email} className="form-control" placeholder="Email Address" onChange={(e) => { handleChangeEmail(e) }} />
                </div>
                <div className="form-group col-lg-12 grid-container">
                  <div>
                    <Select options={options} value={value} onChange={changeHandler} class='code' />
                  </div>
                  <div>
                    <input id="phoneNumber" type="text" value={phone} className="form-control" placeholder="Phone Number" onChange={(e) => { handleChangePhone(e) }} />
                  </div>
                </div>
                <div className="form-group col-lg-12 d-grid ">
                  <input className="btn btn-brand submit" type="submit" value="Submit" />
                </div>
              </form>
              <div className="col-12 text-center" data-aos="fade-down" data-aos-delay={150}>
              </div>
            </div>
          </div>
        </div>
        <center>
          <div className="logo">
            <img src={logo} alt="" width={400} height={400} />
          </div>
        </center>
      </section>
      <section id="submitted" className="sec2">
        <h1>Your form has been Sumbitted</h1>
      </section>
      <center>
        <section id="Exist" className="sec3">
          <h1>You have already registered</h1>
        </section>
      </center>
      <footer>
      </footer>
      {/* https://www.youtube.com/watch?v=Fa1uybpY2Fo */}
      {/* https://github.com/SA7MAN/Elixir */}

    </>
  );
}

export default App;
