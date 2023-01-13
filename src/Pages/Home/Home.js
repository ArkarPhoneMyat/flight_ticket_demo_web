import React from "react";
import Navbar from "../components/NavBar";
import { Button, Grid, SvgIcon } from "@mui/material";
import { icons, myColor, sizes } from "../../constants";
import {
  HeaderH1,
  TravelIconDiv,
  TravelTypeP,
  ContainerDiv,
  ContainerDiv1,
  FlightTypeDiv,
  LabelSize,
  DivFlexAlign,
  InternationalLabel,
  NewTextSpan,
  SpanTextSize,
  CitizenDiv,
  CitizenP,
  TripPassengerDiv,
  TripPassengerSelect,
  FlightFromToDiv,
  FlightFromToInput,
  DepartureDiv,
  DepartureDiv1,
  DepartureSpan,
  DepartureDateSpan,
} from "./components/HomeStyle";
import { HomeCarousel } from "./components";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <HeaderH1 color={myColor.primary} size={sizes.largeTitle}>
          Travel is easy with us
        </HeaderH1>

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
              <TravelIconDiv
                onClick={() => alert("Flights button is clicked!")}
              >
                <SvgIcon
                  component={icons.FlightIcon}
                  color={"primary"}
                  sx={{ fontSize: sizes.iconSize }}
                />
                <TravelTypeP size={sizes.h5} color={myColor.primary}>
                  Flights
                </TravelTypeP>
              </TravelIconDiv>
            </Grid>
            <Grid item xs>
              <TravelIconDiv onClick={() => alert("Hotels button is clicked!")}>
                <SvgIcon
                  component={icons.ApartmentIcon}
                  color={"disabled"}
                  sx={{ fontSize: sizes.iconSize }}
                />
                <TravelTypeP size={sizes.h5}>Hotels</TravelTypeP>
              </TravelIconDiv>
            </Grid>
            <Grid item xs>
              <TravelIconDiv onClick={() => alert("Buses button is clicked!")}>
                <SvgIcon
                  component={icons.DirectionsBusIcon}
                  color={"disabled"}
                  sx={{ fontSize: sizes.iconSize }}
                />
                <TravelTypeP size={sizes.h5}>Buses</TravelTypeP>
              </TravelIconDiv>
            </Grid>
            <Grid item xs>
              <TravelIconDiv onClick={() => alert("Cars button is clicked!")}>
                <SvgIcon
                  component={icons.DirectionsCarIcon}
                  color={"disabled"}
                  sx={{ fontSize: sizes.iconSize }}
                />
                <TravelTypeP size={sizes.h5}>Cars</TravelTypeP>
              </TravelIconDiv>
            </Grid>
            <Grid item xs>
              <TravelIconDiv
                onClick={() => alert("Balloons button is clicked!")}
              >
                <SvgIcon
                  component={icons.WhereToVoteIcon}
                  color={"disabled"}
                  sx={{ fontSize: sizes.iconSize }}
                />
                <TravelTypeP size={sizes.h5}>Balloons</TravelTypeP>
              </TravelIconDiv>
            </Grid>
          </Grid>
        </Grid>
        {/* Travel Type */}

        {/* Flight From To Departure */}
        <ContainerDiv>
          <ContainerDiv1>
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
                    <FlightTypeDiv>
                      <DivFlexAlign>
                        <input
                          type="radio"
                          id="Domestic"
                          name="drone"
                          value="Domestic"
                          checked
                        />
                        <LabelSize for="Domestic" size={sizes.h6}>
                          Domestic
                        </LabelSize>
                      </DivFlexAlign>

                      <DivFlexAlign>
                        <input
                          type="radio"
                          id="International"
                          name="drone"
                          value="International"
                        />
                        <InternationalLabel for="International">
                          <NewTextSpan
                            color={myColor.white}
                            size={sizes.h8}
                            bgColor={myColor.orange}
                          >
                            New!
                          </NewTextSpan>
                          <SpanTextSize size={sizes.h6}>
                            International
                          </SpanTextSize>
                        </InternationalLabel>
                      </DivFlexAlign>
                    </FlightTypeDiv>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ borderRight: "0.1px dotted grey" }}
                  >
                    <CitizenDiv>
                      <CitizenP size={sizes.h6}>Myanmar Citizens:</CitizenP>
                      <DivFlexAlign>
                        <input
                          type="radio"
                          id="Yes"
                          name="yesNo"
                          value="Yes"
                          checked
                        />
                        <LabelSize for="Yes" size={sizes.h6}>
                          Yes
                        </LabelSize>
                      </DivFlexAlign>

                      <DivFlexAlign>
                        <input
                          type="radio"
                          id="No"
                          name="yesNo"
                          value="No"
                          checked
                        />
                        <LabelSize for="No" size={sizes.h6}>
                          No
                        </LabelSize>
                      </DivFlexAlign>
                    </CitizenDiv>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ borderRight: "0.1px dotted grey" }}
                  >
                    <TripPassengerDiv>
                      <SpanTextSize size={sizes.h6}>Trip Type:</SpanTextSize>
                      <TripPassengerSelect name="tripType" id="tripType">
                        <option value="One Way Flight">One Way Flight</option>
                        <option value="Round Trip">Round Trip</option>
                      </TripPassengerSelect>
                    </TripPassengerDiv>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TripPassengerDiv>
                      <SpanTextSize size={sizes.h6}>Passenger:</SpanTextSize>
                      <TripPassengerSelect name="passenger" id="passenger">
                        <option value="1 Adult">1 Adult</option>
                      </TripPassengerSelect>
                    </TripPassengerDiv>
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
                  <FlightFromToDiv>
                    <SvgIcon
                      component={icons.FlightTakeoffIcon}
                      sx={{ fontSize: sizes.iconSize }}
                      color="disabled"
                    />
                    <FlightFromToInput type={"text"} placeholder="From" />
                  </FlightFromToDiv>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FlightFromToDiv>
                    <SvgIcon
                      component={icons.FlightLandIcon}
                      sx={{ fontSize: sizes.iconSize }}
                      color="disabled"
                    />
                    <FlightFromToInput type={"text"} placeholder="To" />
                  </FlightFromToDiv>
                </Grid>
                <Grid item xs={12} md={4}>
                  <DepartureDiv>
                    <SvgIcon
                      component={icons.CalendarMonthIcon}
                      sx={{ fontSize: sizes.iconSize }}
                      color="disabled"
                    />
                    <DepartureDiv1>
                      <DepartureSpan color={myColor.grey} size={sizes.h7}>
                        Departure Date
                      </DepartureSpan>
                      <DepartureDateSpan size={sizes.h5}>
                        Sat, 11 Jun 2022
                      </DepartureDateSpan>
                    </DepartureDiv1>
                    <Button variant="contained" color="warning">
                      Search
                    </Button>
                  </DepartureDiv>
                </Grid>
              </Grid>
            </Grid>
          </ContainerDiv1>
        </ContainerDiv>
        {/* Flight From To Departure */}
      </div>
    </div>
  );
}
