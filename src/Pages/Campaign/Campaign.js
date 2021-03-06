import React, { useEffect, useState } from 'react';
import icon2 from '../../images/google.png';
import icon1 from '../../images/icon2.png';
import icon3 from '../../images/image 3.png';
import icon4 from '../../images/image 4.png';
import icon5 from '../../images/Vector (8).svg';
import icon6 from '../../images/Group (2).svg';
import doller from '../../images/doller.svg';
import location from '../../images/location.svg';
import location1 from '../../images/location-icon.svg';
import location2 from '../../images/Vector (10).svg';
import icon7 from '../../images/Vector (11).svg';
import './Campaign.css';
import ModalTable from '../Home/ModalTable/ModalTable';


const Campaign = () => {

    const [countries, setCountries] = useState([]);
    const [displayCountry, setDisplayCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleSearchCountry = event => {
        const searchText = event.target.value;
        const matchEdCountry = countries.filter(country => country.name.common.toLowerCase().includes(searchText.toLowerCase()));

        if (searchText === "") {
            setDisplayCountry([]);
        }
        else {
            setDisplayCountry(matchEdCountry);
        }

    }


    return (
        <div className="campaign-section">
            <div class="row text-start">
                <div class="col-8">
                    <div className="row ">
                        {/* left column 1 */}
                        <div className="col-6">
                            <div class="card  mb-3">
                                <div class="card-header  bg-white">Name & type</div>
                                <div class="card-body">
                                    <p class="card-title">Choose a platform</p>
                                    <p class="card-text">
                                        <img className="social-icon  img-fluid " src={icon1} alt="" />
                                        <img className="social-icon ms-2 img-fluid p-2" src={icon2} alt="" />
                                        <img className="social-icon ms-2 p-1" src={icon3} alt="" />
                                        <img className="social-icon ms-2 p-1" src={icon4} alt="" />
                                    </p>
                                    <p class="card-title">Choose campaign type</p>
                                    <p class="card-text">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Select one" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </p>
                                    <p class="card-title">Campaign name</p>
                                    <p class="card-text">
                                        <div >
                                            <input type="text" placeholder="Please type a meaningful campaign name" class="form-control rounded-pill" />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* left column 2 */}
                        <div className="col-6">
                            <div class="card text-dark mb-3">
                                <div class="card-header bg-white">Launch date & budget</div>
                                <div class="card-body">
                                    <p class="card-title">Select a date</p>
                                    <p class="card-text d-flex justify-content-between">
                                        <div class="input-group campaign-input-group-2">
                                            <input type="text" placeholder="Select one" class="form-control " />
                                            <span class="input-group-text">
                                                <img src={icon6} alt="" />
                                            </span>
                                        </div>
                                        <span type="button" className="text-primary border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">Time scheduling</span>

                                        {/* time scheduling modal */}


                                        {/* <!-- Modal --> */}
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h6 class="modal-title" id="exampleModalLabel">Time scheduling</h6>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                      <ModalTable></ModalTable>
                                                    </div>
                                                    <div class="modal-footer d-flex ">
                                                        <div>
                                                            <button type="button" class="btn btn-secondary footer-btn-1" data-bs-dismiss="modal">Close</button>
                                                        </div>
                                                        <div>
                                                            <button type="button" class="btn btn-primary footer-btn-2">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>











                                    </p>
                                    <p class="card-text d-flex">
                                        <div className="input-group-card-div me-3">
                                            <p class="card-title">Bid (CPM)</p>
                                            <div class="input-group campaign-input-group-3">
                                                <input type="text" placeholder="04" class="form-control input-3" />
                                                <span class="input-group-text span-3">
                                                    <img src={doller} alt="" />
                                                </span>
                                            </div>

                                        </div>
                                        <div className="input-group-card-div me-3">
                                            <p class="card-title">Daily budget</p>
                                            <div class="input-group campaign-input-group-3">
                                                <input type="text" placeholder="100" class="form-control input-3" />
                                                <span class="input-group-text span-3">
                                                    <img src={doller} alt="" />
                                                </span>
                                            </div>

                                        </div>
                                        <div >
                                            <p class="card-title">Total budget</p>
                                            <div class="input-group campaign-input-group-3">
                                                <input type="text" placeholder="500" class="form-control input-3" />
                                                <span class="input-group-text span-3">
                                                    <img src={doller} alt="" />
                                                </span>
                                            </div>

                                        </div>
                                    </p>
                                    <p>
                                        <input type="checkbox" id="checkbox3" /><label htmlFor="checkbox3"> Start campaign after approval</label></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* left bottom column  */}
                    <div className="col-12 platform-section">
                        <div class="card text-dark  mb-3">
                            <div class="card-header bg-white d-flex justify-content-between">
                                <span>Platforms, telco & devices</span>
                                <img className="location-icon  img-fluid pt-2" src={location} alt="" />
                            </div>
                            <div class="row card-body">
                                <div className="col-6">
                                    <p class="card-title">Ad placement type</p>
                                    <div className="d-flex">
                                        <p className="me-3">
                                            <input type="checkbox" id="checkbox1" /> <label htmlFor="checkbox1"> Site</label></p>
                                        <p>  <input type="checkbox" id="checkbox2" /> <label htmlFor="checkbox2"> App</label></p>
                                    </div>
                                    <p class="card-title my-2">Mobile operators/ISPs</p>
                                    <div class="card-text">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <p class="card-title my-2">Device type</p>
                                    <div class="card-text">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <p class="card-title my-2">Device OS</p>
                                    <p class="card-text">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </p>
                                    <p class="card-title my-2">Device brands</p>
                                    <div class="card-text device-brand-content">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <input id="radio" type="radio" /><span className="me-3"> Include</span>
                                            <input width="14px" height="14px" type="radio" /><span> Exclude</span>
                                        </div>
                                    </div>

                                    <p class="card-title my-2">Device models</p>
                                    <div class="card-text device-brand-content">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <input id="radio" type="radio" /><span className="me-3"> Include</span>
                                            <input width="14px" height="14px" type="radio" /><span> Exclude</span>
                                        </div>
                                    </div>

                                    <p class="card-title my-2">Device browsers</p>
                                    <div class="card-text ">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </div>

                                </div>


                                <div className="col-6">
                                    <p class="card-title"> IP addresses/ranges </p>
                                    <textarea className="text-area-field" placeholder="Type here IP addresses" name="" id="" cols="30" rows="10"></textarea>

                                    <p class="card-title my-2">Device cost range</p>
                                    <div class="card-text ">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </div>

                                    <p class="card-title my-2">Advanced telecom targeting</p>
                                    <div class="card-text device-brand-content">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Device connection" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>

                                        <p class="card-title my-1 ms-3">Multiple operator SIM card</p>
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Select any" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                        <p class="card-title my-1 ms-3">Mobile data consumption</p>
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Select any" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>

                                        <p class="card-title my-1 ms-3">Operator churn</p>
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Select any" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                        <p class="card-title my-2 ms-3">Operator roaming</p>
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Select any" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div class="card text-dark mb-3 me-3" style={{ backgroundColor: "#FFFADE" }}>
                            <div className="d-flex justify-content-between">
                                <h6 className="p-2">Landing & creatives</h6>
                                <div class="p-2"><span> <img src={icon7} alt="" /></span></div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* right column */}
                <div class="col-4">

                    {/* right column-1 */}
                    <div class="card text-dark mb-3 me-3">
                        <div class="card-header bg-white d-flex justify-content-between">
                            <span>Location & audiences</span>
                            <img className="location-icon  img-fluid pt-2" src={location} alt="" />
                        </div>
                        <div class="card-body">
                            <p class="card-title">Choose country</p>
                            <div class="card-text">
                                <div class="input-group campaign-input-group">


                                    {/* search country by name */}
                                    <input onChange={handleSearchCountry}
                                        type="text"
                                        placeholder="Select one"
                                        class="form-control " />

                                    <span class="input-group-text">
                                        <img src={location1} alt="" />
                                    </span>





                                </div>
                                {/* search result div  */}

                                {displayCountry.length != 0 &&

                                    <div className="search-country-result">
                                        <h6 className="mt-3 ms-3 text-primary">Check All | Uncheck All</h6>
                                        {
                                            displayCountry.map((country, index) => {

                                                return <div className="search-Item">
                                                    <div className="ms-3">
                                                        <input type="checkbox" id={index} /> <label htmlFor={index}> <span className="ms-3">{country.name.common}</span> </label>
                                                    </div>

                                                </div>

                                            })
                                        }
                                    </div>
                                }

                            </div>

                            <div className="d-flex">
                                <div className="input-group-card-div me-3">
                                    <p class="card-title">City</p>
                                    <div class="input-group campaign-input-group-3">
                                        <input type="text" placeholder="Search for city" class="form-control input-3" />
                                        <span class="input-group-text span-3">
                                            <img src={location2} alt="" />
                                        </span>
                                    </div>

                                </div>
                                <div className="input-group-card-div me-3">
                                    <p class="card-title">State/ county</p>
                                    <div class="input-group campaign-input-group-3">
                                        <input type="text" placeholder="Search for state / county" class="form-control input-3" />
                                        <span class="input-group-text span-3">
                                            <img src={location2} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="pt-3">  <input type="checkbox" id="checkbox4" /> <label htmlFor="checkbox4"> GPS only</label></p>

                            <p class="card-title my-2">Audiences</p>
                            <div class="card-text device-brand-content">
                                <p class="card-title my-2 ms-3">Audiences include</p>
                                <div className="d-flex">
                                    <div class="input-group">
                                        <input type="text" placeholder="Select any" class="form-control ms-3 rounded-pill" />

                                    </div>
                                    <div className="ms-3">
                                        <input id="radio" type="radio" /><span className="me-5"> Any (OR)</span>

                                        <input width="14px" height="14px" type="radio" /><span> All (AND)</span>
                                    </div>
                                </div>

                                <p class="card-title my-2 ms-3">Audiences exclude</p>

                                <div className="d-flex mt-2">
                                    <div class="input-group campaign-input-group">
                                        <input type="text" placeholder="Select any" class="form-control ms-3 rounded-pill" />
                                    </div>
                                    <div className="ms-3">
                                        <input id="radio" type="radio" /><span className="me-5"> Any (OR)</span>

                                        <input width="14px" height="14px" type="radio" /><span> All (AND)</span>
                                    </div>
                                </div>
                            </div>


                            <p class="card-title my-2">Demographics</p>
                            <div class="card-text device-brand-content">
                                <div className="d-flex">
                                    <div className="input-group-card-div me-3 ms-3">
                                        <p class="card-title">Age</p>
                                        <div class="input-group campaign-input-group-3">
                                            <div class="input-group campaign-input-group">
                                                <input type="text" placeholder="All" class="form-control " />
                                                <span class="input-group-text bg-white">
                                                    <img src={icon5} alt="" />
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="input-group-card-div me-3">
                                        <p class="card-title">Gender</p>
                                        <div class="input-group campaign-input-group-3">
                                            <div class="input-group campaign-input-group">
                                                <input type="text" placeholder="All" class="form-control " />
                                                <span class="input-group-text bg-white">
                                                    <img src={icon5} alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <p class="card-title mt-2">Languages</p>
                            <div class="card-text">
                                <div class="input-group campaign-input-group">
                                    <input type="text" placeholder="All" class="form-control " />
                                    <span class="input-group-text bg-white">
                                        <img src={icon5} alt="" />
                                    </span>
                                </div>
                            </div>
                            <p class="card-title mt-2"><span>SEC (socio-economic class) groups</span></p>
                            <div class="card-text">
                                <div class="input-group campaign-input-group">
                                    <input type="text" placeholder="All" class="form-control " />
                                    <span class="input-group-text bg-white">
                                        <img src={icon5} alt="" />
                                    </span>
                                </div>
                            </div>
                            <p class="card-title mt-2"><span>LSM (living standards measure) groups</span></p>
                            <div class="card-text">
                                <div class="input-group campaign-input-group">
                                    <input type="text" placeholder="All" class="form-control " />
                                    <span class="input-group-text bg-white">
                                        <img src={icon5} alt="" />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* right column-2 */}
                    <div className="col-12">
                        <div class="card text-dark mb-3 me-3">
                            <div class="card-header bg-white d-flex justify-content-between">
                                <span>Optimisations, deals & packages</span>
                                <img className="location-icon  img-fluid pt-2" src={location} alt="" />
                            </div>
                            <div class="card-body">
                                <p class="card-title my-2">Impression capping</p>
                                <div class="card-text device-brand-content">
                                    <div className="ms-3">
                                        <input type="checkbox" id="checkbox6" /> <label htmlFor="checkbox6"> Default impression capping</label>
                                    </div>


                                    <p class="card-title my-2 ms-3">Impressions</p>
                                    <div class="card-text d-flex ms-3">
                                        <div className="input-group-card-div me-3">
                                            <div class="input-group campaign-input-group-3">
                                                <input type="text" placeholder="1" class="form-control input-3" />
                                                <span class="input-group-text span-3">
                                                    <i class=" text-secondary fas fa-hashtag"></i>
                                                </span>
                                            </div>

                                        </div>
                                        <div className="input-group-card-div me-3">
                                            <div class="input-group campaign-input-group-3">
                                                <input type="text" placeholder="1" class="form-control rounded-pill" />

                                            </div>

                                        </div>
                                        <div >
                                            <div class="input-group campaign-input-group-3">
                                                <div class="input-group campaign-input-group">
                                                    <input type="text" placeholder="All" class="form-control " />
                                                    <span class="input-group-text bg-white">
                                                        <img src={icon5} alt="" />
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mx-2 text-secondary pt-1">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                        <div className="text-secondary pt-1">
                                            <i className="fas fa-minus"></i>
                                        </div>
                                    </div>
                                </div>

                                <p class="card-title mt-2">Auto-Optimisation</p>
                                <div class="card-text">
                                    <div class="input-group campaign-input-group">
                                        <input type="text" placeholder="All" class="form-control " />
                                        <span class="input-group-text bg-white">
                                            <img src={icon5} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <p class="card-title mt-2"><span>Ad exchanges</span></p>
                                <div class="card-text">
                                    <div class="input-group campaign-input-group">
                                        <input type="text" placeholder="All" class="form-control " />
                                        <span class="input-group-text bg-white">
                                            <img src={icon5} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <p class="card-title mt-2"><span>Ad placement positions</span></p>
                                <div class="card-text">
                                    <div class="input-group campaign-input-group">
                                        <input type="text" placeholder="All" class="form-control " />
                                        <span class="input-group-text bg-white">
                                            <img src={icon5} alt="" />
                                        </span>
                                    </div>
                                </div>

                                <p class="card-title my-2">Private marketplace</p>
                                <div class="card-text device-brand-content">
                                    <div class="input-group campaign-input-group">
                                        <input type="text" placeholder="All" class="form-control ms-3" />
                                        <span class="input-group-text bg-white">
                                            <img src={icon5} alt="" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <input id="radio" type="radio" /><span className="me-3"> Include</span>
                                        <input width="14px" height="14px" type="radio" /><span> Exclude</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </div >
    );
};

export default Campaign;