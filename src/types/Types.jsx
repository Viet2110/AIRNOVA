import LOGO from "../assets/LOGO.png"
import { cities, countries } from "../utils/data"

export const airlinesType = {
    name: "",
    imgUrl: LOGO,
    created_at: new Date()
}
export const airportType = {
    name: "",
    country_id: "",
    city_id: "",
    created_at: new Date()
}
export const aircraftsType = {
    name: "",
    airline_id: "",
    airport_id: "",
    created_at: new Date(),
    status: ""
}
export const serviceDetailType = {
    name: "",
    status: true,
    imgUrl: LOGO,
    created_at: new Date()
}
export const serviceAirlineType = {
    name: "",
    price: "",
    airline_id: "",
    list_service_id: [],
}
export const seatTypesType = {
    name: "",
    imgUrl: LOGO,
    price: "",
    created_at: new Date()
}
export const flightType = {
    airline_id: "",
    aircraft_id: "",
    from_airport: "",
    to_airport: "",
    departure_time: "",
    arrival_time: "",
    is_round_trip: false,
    discount: "",
    created_at: new Date(),
}