import LOGO from "../assets/LOGO.png"
// type admin
export const airlinesType = {
    name: "",
    imgUrl: LOGO,
    created_at: new Date(),
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
    rows: "",
    columns: "",
    listChair: [],
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
// type home
export const LoginType = {
    email: "",
    password: ""
}
export const RegisterType = {
    email: "",
    phone: "",
    password: "",
    again_password: ""
}
export const searchType = {
    is_round_trip: false,
    from: "",
    to: "",
    startDate: "",
    endDate: "",
    fullname: "",
    phone: "",
    email: "",
    flight_id:"",
    seatype_id:"",
    passengerList: [
        {
            id: 1,
            title: "Người lớn",
            condition: "Từ 16 tuổi trở lên",
            listPerson: []
        },
        {
            id: 2,
            title: "Trẻ em",
            condition: "Từ 12 tuổi trở xuống",
            listPerson: []
        },
        {
            id: 3,
            title: "Em bé",
            condition: "Từ 6 tuổi trở xuống",
            listPerson: []
        }
    ]
}

export const perSon = {
    country_id: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDay: ""
}