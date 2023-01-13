import React from "react";
import Navbar from "../components/NavBar";
import { Button, Grid, SvgIcon } from "@mui/material";
import { icons, myColor, sizes } from "../../constants";
import {
  Styled
} from "./components/HomeStyle";
import { HomeCarousel } from "./components";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Styled.HeaderH1 color={myColor.primary} size={sizes.largeTitle}>
          Travel is easy with us
        </Styled.HeaderH1>

        <HomeCarousel />

        {/* Travel Type */}
        <Grid
          container
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container xs={6}>
            <Grid item xs>
              <Styled.TravelIconDiv
                onClick={() => alert("Flights button is clicked!")}
              >
                <SvgIcon
                  component={icons.FlightIcon}
                  color={"primary"}
                  sx={{ fontSize: sizes.iconSize }}
                />
                <Styled.TravelTypeP size={sizes.h5} color={myColor.primary}>
                  Flights
                </Styled.TravelTypeP>
              </Styled.TravelIconDiv>
            </Grid>
            <Grid item xs>
              <Styled.TravelIconDiv onClick={() => alert("Hotels button is clicked!")}>
                <SvgIcon
                  component={icons.ApartmentIcon}
                  color={"disabled"}
                  sx={{ fontSize: sizes.iconSize }}
                />
                <Styled.TravelTypeP size={sizes.h5}>Hotels</Styled.TravelTypeP>
              </Styled.TravelIconDiv>
            </Grid>
            <Grid item xs>
              <Styled.TravelIconDiv onClick={() => alert("Buses button is clicked!")}>
                <SvgIcon
                  component={icons.DirectionsBusIcon}
                  color={"disabled"}
                  sx={{ fontSize: sizes.iconSize }}
                />
                <Styled.TravelTypeP size={sizes.h5}>Buses</Styled.TravelTypeP>
              </Styled.TravelIconDiv>
            </Grid>
            <Grid item xs>
              <Styled.TravelIconDiv onClick={() => alert("Cars button is clicked!")}>
                <SvgIcon
                  component={icons.DirectionsCarIcon}
                  color={"disabled"}
                  sx={{ fontSize: sizes.iconSize }}
                />
                <Styled.TravelTypeP size={sizes.h5}>Cars</Styled.TravelTypeP>
              </Styled.TravelIconDiv>
            </Grid>
            <Grid item xs>
              <Styled.TravelIconDiv
                onClick={() => alert("Balloons button is clicked!")}
              >
                <SvgIcon
                  component={icons.WhereToVoteIcon}
                  color={"disabled"}
                  sx={{ fontSize: sizes.iconSize }}
                />
                <Styled.TravelTypeP size={sizes.h5}>Balloons</Styled.TravelTypeP>
              </Styled.TravelIconDiv>
            </Grid>
          </Grid>
        </Grid>
        {/* Travel Type */}

        {/* Flight From To Departure */}
        <Styled.ContainerDiv>
          <Styled.ContainerDiv1>
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
                    padding: "5px",
                    mt: 4,
                    borderBottom: "2px solid #1296E1",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ borderRight: "0.1px dotted grey" }}
                  >
                    <Styled.FlightTypeDiv>
                      <Styled.DivFlexAlign>
                        <input
                          type="radio"
                          id="Domestic"
                          name="drone"
                          value="Domestic"
                          checked
                        />
                        <Styled.LabelSize for="Domestic" size={sizes.h6}>
                          Domestic
                        </Styled.LabelSize>
                      </Styled.DivFlexAlign>

                      <Styled.DivFlexAlign>
                        <input
                          type="radio"
                          id="International"
                          name="drone"
                          value="International"
                        />
                        <Styled.InternationalLabel for="International">
                          <Styled.NewTextSpan
                            color={myColor.white}
                            size={sizes.h8}
                            bgColor={myColor.orange}
                          >
                            New!
                          </Styled.NewTextSpan>
                          <Styled.SpanTextSize size={sizes.h6}>
                            International
                          </Styled.SpanTextSize>
                        </Styled.InternationalLabel>
                      </Styled.DivFlexAlign>
                    </Styled.FlightTypeDiv>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ borderRight: "0.1px dotted grey" }}
                  >
                    <Styled.CitizenDiv>
                      <Styled.CitizenP size={sizes.h6}>Myanmar Citizens:</Styled.CitizenP>
                      <Styled.DivFlexAlign>
                        <input
                          type="radio"
                          id="Yes"
                          name="yesNo"
                          value="Yes"
                          checked
                        />
                        <Styled.LabelSize for="Yes" size={sizes.h6}>
                          Yes
                        </Styled.LabelSize>
                      </Styled.DivFlexAlign>

                      <Styled.DivFlexAlign>
                        <input
                          type="radio"
                          id="No"
                          name="yesNo"
                          value="No"
                          checked
                        />
                        <Styled.LabelSize for="No" size={sizes.h6}>
                          No
                        </Styled.LabelSize>
                      </Styled.DivFlexAlign>
                    </Styled.CitizenDiv>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ borderRight: "0.1px dotted grey" }}
                  >
                    <Styled.TripPassengerDiv>
                      <Styled.SpanTextSize size={sizes.h6}>Trip Type:</Styled.SpanTextSize>
                      <Styled.TripPassengerSelect name="tripType" id="tripType">
                        <option value="One Way Flight">One Way Flight</option>
                        <option value="Round Trip">Round Trip</option>
                      </Styled.TripPassengerSelect>
                    </Styled.TripPassengerDiv>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Styled.TripPassengerDiv>
                      <Styled.SpanTextSize size={sizes.h6}>Passenger:</Styled.SpanTextSize>
                      <Styled.TripPassengerSelect name="passenger" id="passenger">
                        <option value="1 Adult">1 Adult</option>
                      </Styled.TripPassengerSelect>
                    </Styled.TripPassengerDiv>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignitem: "center",
                  backgroundColor: "white",
                  borderRadius: 3,
                  padding: "10px",
                  mb: 4,
                }}
              >
                <Grid item xs={12} md={4}>
                  <Styled.FlightFromToDiv>
                    <SvgIcon
                      component={icons.FlightTakeoffIcon}
                      sx={{ fontSize: sizes.iconSize }}
                      color="disabled"
                    />
                    <Styled.FlightFromToInput type={"text"} placeholder="From" />
                  </Styled.FlightFromToDiv>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Styled.FlightFromToDiv>
                    <SvgIcon
                      component={icons.FlightLandIcon}
                      sx={{ fontSize: sizes.iconSize }}
                      color="disabled"
                    />
                    <Styled.FlightFromToInput type={"text"} placeholder="To" />
                  </Styled.FlightFromToDiv>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Styled.DepartureDiv>
                    <SvgIcon
                      component={icons.CalendarMonthIcon}
                      sx={{ fontSize: sizes.iconSize }}
                      color="disabled"
                    />
                    <Styled.DepartureDiv1>
                      <Styled.DepartureSpan color={myColor.grey} size={sizes.h7}>
                        Departure Date
                      </Styled.DepartureSpan>
                      <Styled.DepartureDateSpan size={sizes.h5}>
                        Sat, 11 Jun 2022
                      </Styled.DepartureDateSpan>
                    </Styled.DepartureDiv1>
                    <Button variant="contained" color="warning">
                      Search
                    </Button>
                  </Styled.DepartureDiv>
                </Grid>
              </Grid>
            </Grid>
          </Styled.ContainerDiv1>
        </Styled.ContainerDiv>
        {/* Flight From To Departure */}
      </div>
    </div>
  );
}
