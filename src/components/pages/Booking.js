import Heading from "../sections/Heading";
import ReservationForm from "../sections/ReservationForm";
import { useReducer } from "react";
import { fetchAPI } from "../../BookingAPI";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}