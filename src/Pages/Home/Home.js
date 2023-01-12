import React from "react";
import Navbar from "../components/NavBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Grid, SvgIcon } from "@mui/material";
import { images, icons } from "../../constants";

const primary = "#1498e4";

export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1 style={{ color: primary, textAlign: "center", fontSize: 50 }}>
          Travel is easy with us
        </h1>
        <Carousel
          responsive={responsive}
          containerclassName="carousel-container"
          infinite={true}
        >
          <div style={{ height: 200, width: 380, padding: 20, margin: 20 }}>
            <img
              src={images.travel1}
              style={{objectFit: 'cover'}}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div style={{ height: 200, width: 380, padding: 20, margin: 20 }}>
            <img
              src={images.travel2}
              style={{objectFit: 'cover'}}
              width={"100%"}
              height={"100%"}
            />
          </div>

          <div style={{ height: 200, width: 380, padding: 20, margin: 20 }}>
            <img
              src={images.travel3}
              style={{objectFit: 'cover'}}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </Carousel>

        <Grid
          container
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "10px",
          }}
        >
          <Grid container xs={6}>
            <Grid item xs>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => alert('Flights button is clicked!')}
              >
                <SvgIcon
                  component={icons.FlightIcon}
                  color={"primary"}
                  sx={{ fontSize: "35px" }}
                />
                <p style={{ fontSize: "14px", color: primary }}>Flights</p>
              </div>
            </Grid>
            <Grid item xs>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => alert('Hotels button is clicked!')}
              >
                <SvgIcon
                  component={icons.ApartmentIcon}
                  color={"disabled"}
                  sx={{ fontSize: "35px" }}
                />
                <p style={{ fontSize: "14px" }}>Hotels</p>
              </div>
            </Grid>
            <Grid item xs>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => alert('Buses button is clicked!')}
              >
                <SvgIcon
                  component={icons.DirectionsBusIcon}
                  color={"disabled"}
                  sx={{ fontSize: "35px" }}
                />
                <p style={{ fontSize: "14px" }}>Buses</p>
              </div>
            </Grid>
            <Grid item xs>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => alert('Cars button is clicked!')}
              >
                <SvgIcon
                  component={icons.DirectionsCarIcon}
                  color={"disabled"}
                  sx={{ fontSize: "35px" }}
                />
                <p style={{ fontSize: "14px" }}>Cars</p>
              </div>
            </Grid>
            <Grid item xs>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => alert('Balloons button is clicked!')}
              >
                <SvgIcon
                  component={icons.WhereToVoteIcon}
                  color={"disabled"}
                  sx={{ fontSize: "35px" }}
                />
                <p style={{ fontSize: "14px" }}>Balloons</p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <div
          style={{
            width: "100%",
            background: "linear-gradient(#1498e4,#013874)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "80%" }}>
            <Grid container>
              <Grid
                container
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignitem: "center",
                }}
              >
                <Grid
                  container
                  xs={12}
                  md={10}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "5px 5px 0 0",
                    padding: '5px',
                    mt: 4,
                    borderBottom: '2px solid #1296E1'
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ borderRight: "0.1px dotted grey" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        marginBottom: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                        }}
                      >
                        <input
                          type="radio"
                          id="Domestic"
                          name="drone"
                          value="Domestic"
                          checked
                        />
                        <label for="Domestic" style={{ fontSize: 12 }}>
                          Domestic
                        </label>
                      </div>

                      <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <input
                          type="radio"
                          id="International"
                          name="drone"
                          value="International"
                        />
                        <label
                          for="International"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <span
                            style={{
                              color: "white",
                              fontSize: 8,
                              textAlign: "center",
                              alignSelf: 'center',
                              backgroundColor: '#ED6C03',
                              width: 30,
                              borderRadius: 2
                            }}
                          >
                            New!
                          </span>
                          <span style={{ fontSize: 12 }}>International</span>
                        </label>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ borderRight: "0.1px dotted grey" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        marginTop: 7,
                        alignItems: "flex-end",
                      }}
                    >
                      <div style={{ fontSize: 12 }}>Myanmar Citizens:</div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                        }}
                      >
                        <input
                          type="radio"
                          id="Yes"
                          name="yesNo"
                          value="Yes"
                          checked
                        />
                        <label for="Yes" style={{ fontSize: 12 }}>
                          Yes
                        </label>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                        }}
                      >
                        <input
                          type="radio"
                          id="No"
                          name="yesNo"
                          value="No"
                          checked
                        />
                        <label for="No" style={{ fontSize: 12 }}>
                          No
                        </label>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ borderRight: "0.1px dotted grey" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        marginTop: 7,
                        // alignItems: 'flex-end',
                      }}
                    >
                      <span style={{ fontSize: 12 }}>Trip Type:</span>
                      <select name="tripType" id="tripType" style={{border: '1px solid white'}}>
                        <option value="One Way Flight">One Way Flight</option>
                        <option value="Round Trip">Round Trip</option>
                      </select>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                  <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        marginTop: 7,
                        // alignItems: 'flex-end',
                      }}
                    >
                      <span style={{ fontSize: 12 }}>Passenger:</span>
                      <select name="passenger" id="passenger" style={{border: '1px solid white'}}>
                        <option value="1 Adult">1 Adult</option>
                      </select>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container xs={12} md={12} sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignitem: "center",
                  backgroundColor: 'white',
                  borderRadius: 3,
                  padding: '10px',
                  mb: 4,
                }}>
                <Grid item xs={12} md={4}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  borderRight: '0.1px dotted grey',
                }}><SvgIcon component={icons.FlightTakeoffIcon} sx={{ fontSize: "35px" }} color="disabled"/>
                  <input type={'text'} placeholder="From" style={{border: '1px solid white', width: '70%'}}/>
                </div>
                </Grid>
                <Grid item xs={12} md={4}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  borderRight: '0.1px dotted grey',
                }}><SvgIcon component={icons.FlightLandIcon} sx={{ fontSize: "35px" }} color="disabled"/>
                  <input type={'text'} placeholder="To" style={{border: '1px solid white', width: '70%'}}/>
                </div>
                </Grid>
                <Grid item xs={12} md={4}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                  <SvgIcon component={icons.CalendarMonthIcon} sx={{ fontSize: "35px" }} color="disabled"/>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent:'center',
                    width: '50%'
                  }}>
                    <span style={{color: 'grey', fontSize: 10}}>Departure Date</span>
                    <span style={{fontWeight: 'bold', fontSize: 14}}>Sat, 11 Jun 2022</span>
                  </div>
                  <Button variant="contained" color="warning">Search</Button>
                </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
