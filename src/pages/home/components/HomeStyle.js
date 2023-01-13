import styled from "styled-components";

const HeaderH1 = styled.h1`
  color: ${(props) => props.color};
  text-align: center;
  font-size: ${(props) => props.size};
`;

const CarouselImageDiv = styled.div`
  height: 200px;
  width: 400px;
  padding: 20px;
  margin: 20px;
`;

const CarouselImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const TravelIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TravelTypeP = styled.p`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;

const ContainerDiv = styled.div`
  width: 100%;
  background: linear-gradient(#1498e4, #013874);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerDiv1 = styled.div`
  width: 80%;
`;

const FlightTypeDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const DivFlexAlign = styled.div`
  display: flex;
  align-items: flex-end;
`;

const InternationalLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const LabelSize = styled.label`
  font-size: ${(props) => props.size};
`;

const SpanTextSize = styled.span`
  font-size: ${(props) => props.size};
`;

const NewTextSpan = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  text-align: center;
  align-self: center;
  background-color: ${(props) => props.bgColor};
  width: 30px;
  border-radius: 2px;
  margin-top: ${(props) => props.marginTop};
`;

const CitizenDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 7px;
  align-items: flex-end;
`;

const CitizenP = styled.div`
  font-size: ${(props) => props.size};
`;

const TripPassengerDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 7px;
`;

const TripPassengerSelect = styled.select`
  border: none;
`;

const FlightFromToDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-right: 0.1px dotted grey;
`;

const FlightFromToInput = styled.input`
  border: none;
  width: 70%;
`;

const DepartureDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const DepartureDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const DepartureSpan = styled.span`
    color: ${props => props.color};
    font-size: ${props => props.size};
`;

const DepartureDateSpan = styled.span`
font-weight: bold; 
font-size: ${props => props.size}
`;


export const Styled = {
  HeaderH1,
  CarouselImageDiv,
  CarouselImage,
  TravelIconDiv,
  TravelTypeP,
  ContainerDiv,
  ContainerDiv1,
  FlightTypeDiv,
  DivFlexAlign,
  InternationalLabel,
  LabelSize,
  SpanTextSize,
  NewTextSpan,
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
};
