import './style.css';
// import oasisx from './images/oasisx.png'
import artsDao from './images/artsDao.png'
import oasisxLogo from './images/Copy of OasisX-logo-03.png'
import logo from './images/LBF-elemets-03.png'
import { useState } from 'react';

// import Select from 'react-select';
// import countriesInfo from 'countries-information';



function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [country, setcountry] = useState('');
  // const [code, setCode] = useState('');
  const [response, setResponse] = useState(" ")

  // const countries = useMemo(() => countriesInfo.getAllCountries(), [])

  // const selectCountry = value => {
  //   setcountry(value.name)
  // }
  // const selectCode = value => {
  //   const plus = `${value.countryCallingCodes[0]}`
  //   setCode(plus.replace(/\s+/g, '').slice(1))
  // }
  const InsertName = (e) => {
    setName(e.target.value);
  }
  const InsertEmail = (e) => {
    setEmail(e.target.value);
  }
  // const InsertPhone = (e) => {
  //   setPhone(e.target.value);
  // }
  const handleSubmit = async (e) => {

    const obj = {
      name,
      email,
      // country,
      // phoneNumber: `${code}${phone}`
    }
    var config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    };
    e.preventDefault();
    fetch(`https://qr-code-api.oasisx.world/meetup2-send-email`, config)
      .then(function (response) {
        // The API call was successful!
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then(function (data) {
        console.log(data)
        setResponse(data.status)
        console.log(response)

      })
      .catch(function (err) {
        // There was an error
        console.log('Something went wrong.', err);
      });
    console.log(obj)


  }
  return (
    <div>

      {/* CONTACT */}
      <section id="form " className="section-padding">
        <div className="container">
          {response === "Success"
            ?
            <center>
              <div className="row sec2" data-aos="fade-down" data-aos-delay="250">
                <h1 className="display-4 text-black fw-semibold"> Thank you for registering, please check your email for instructions to claim your ticket</h1>
              </div>
            </center>
            :
            response === "sold out"
            ?
            <center>
              <div className="row sec2" data-aos="fade-down" data-aos-delay="250">
                <h1 className="display-4 text-black fw-semibold">The event has sold out, a limited number of tickets will be available at the door.</h1>
              </div>
            </center>
            :
            <div>
              <div className='row logos'>
                <center>
                  <img src={oasisxLogo} alt="" width="31%" height="31%" />
                  <img src={artsDao} alt="" width="35%" height="35%" />
                </center>
              </div>
              <div className="row">
                <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                  <div className="section-title">
                    <h1 className="display-4 fw-semibold title">Non Fungible Meetup vol2</h1>
                    <center>
                      <p className="text-black">Location <strong>:</strong> &ensp; Living Room, Mar Mikhael </p>
                      <p className="text-black date" style={{ color: 'red' }}>Date <strong>:</strong> &ensp;11/2/2023 from &ensp;1PM till 5PM</p>
                      <p className="text-black date" style={{ color: 'red' }}>Limited to 40, tickets entrance is free, pay for what you order</p>
                    </center>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center" data-aos="fade-down" data-aos-delay="250">
                <div className="col-lg-8">
                  <form onSubmit={(e) => { handleSubmit(e) }} className="row g-3 p-lg-5 p-4 bg-white theme-shadow">
                    <div className="form-group col-lg-12">
                      <input id="name" type="text" value={name} required className="form-control" placeholder="Name" onChange={(e) => { InsertName(e) }} />
                    </div>
                    <div className="form-group col-lg-12">
                      <input id="email" type="email" value={email} className="form-control" placeholder="Email Address" onChange={(e) => { InsertEmail(e) }} />
                    </div>
                    {/* <div className="form-group col-lg-12">
                    <Select options={countries} onChange={selectCountry} getOptionLabel={(option) => option.name} getOptionValue={(option) => option.name} placeholder="SelectCountry" />
                  </div> */}
                    {/* <div className="form-group col-lg-12 phone">
                    <div>
                      <Select options={countries} onChange={selectCode} getOptionLabel={(option) => option.countryCallingCodes} getOptionValue={(option) => option.countryCallingCodes} placeholder="Code" />
                    </div>
                    <div>
                      <input id="phoneNumber" type="text" value={phone} className="form-control number" placeholder="Phone Number" onChange={(e) => { InsertPhone(e) }} />
                    </div>
                  </div> */}

                    <div className="form-group col-lg-12 d-grid ">
                      <input className="btn btn-brand submit" type="submit" value="Submit" />
                    </div>
                  </form>
                  <div className="col-12 text-center" data-aos="fade-down" data-aos-delay={150}>
                  </div>
                </div>
              </div>
            </div>
          }

          {response === "Fail"
            ?
            <center>
              <div className="row justify-content-center">
                <h1 className="registered">You have already registered</h1>
              </div>
            </center>
            : null
          }


        </div>
        <center>
          <div className="logo">
            <img src={logo} alt="" width={215} height={215} />
          </div>
        </center>
      </section>
      {/* https://www.youtube.com/watch?v=Fa1uybpY2Fo */}
      {/* https://github.com/SA7MAN/Elixir */}

    </div>
  );
}

export default App;
