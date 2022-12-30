import './style.css';
import oasisx from './images/oasisx.png'
import artsDao from './images/artsDao.png'
import logo from './images/LBF-elemets-03.png'
import { useState, useMemo } from 'react';
import Select from 'react-select';
import countriesInfo from 'countries-information';



function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setcountry] = useState('');
  const [code, setCode] = useState('');

  const countries = useMemo(() => countriesInfo.getAllCountries(), [])

  const selectCountry = value => {
    setcountry(value.name)
  }
  const selectCode = value => {
    const plus = `${value.countryCallingCodes[0]}`
    setCode(plus.replace(/\s+/g, '').slice(1))
  }
  const InsertName = (e) => {
    setName(e.target.value);
  }
  const InsertEmail = (e) => {
    setEmail(e.target.value);
  }
  const InsertPhone = (e) => {
    setPhone(e.target.value);
  }
  const handleSubmit = (e) => {
    const obj = {
      name,
      email,
      country,
      phoneNumber: `${code}${phone}`
    }
    // var config = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(obj)
    // };
    // fetch(`localhost:8000/send-watsApp`, config)
    //   .then(function (response) {
    //     // The API call was successful!
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       return Promise.reject(response);
    //     }
    //   })
    //   .then(function (data) {
    //     console.log("line#1", data.status)
    //     setResponse(data.status)

    //   }).catch(function (err) {
    //     // There was an error
    //     console.log('Something went wrong.', err);
    //   });
    console.log(obj)
    e.preventDefault();

  }
  return (
    <div>

      {/* CONTACT */}
      <section id="form " className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
              <div className="section-title">
                <div className='logos'>
                <center>
                <img src={artsDao} alt="" width="30%" height="30%" />
                  <img src={oasisx} alt="" width="30%" height="30%" />
                  
                </center>
                </div>
                <h1 className="display-4 text-black fw-semibold">Non Fungible Meetup vol1</h1>
                {/* <div className="line bg-white" /> */}
                <p className="text-black">Location: &ensp; Beirut Digital District</p>
                <p className="text-black" style={{ color: 'red' }}>Date: &ensp;7/1/2023  from &ensp;11AM to 4PM</p>
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
                <div className="form-group col-lg-12">
                  <Select options={countries} onChange={selectCountry} getOptionLabel={(option) => option.name} getOptionValue={(option) => option.name} placeholder="SelectCountry" />
                </div>
                <div className="form-group col-lg-12 phone">
                  <div>
                    <Select options={countries} onChange={selectCode} getOptionLabel={(option) => option.countryCallingCodes} getOptionValue={(option) => option.countryCallingCodes} placeholder="Code" />
                  </div>
                  <div>
                    <input id="phoneNumber" type="text" value={phone} className="form-control number" placeholder="Phone Number" onChange={(e) => { InsertPhone(e) }} />
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
      {/* https://www.youtube.com/watch?v=Fa1uybpY2Fo */}
      {/* https://github.com/SA7MAN/Elixir */}

    </div>
  );
}

export default App;
