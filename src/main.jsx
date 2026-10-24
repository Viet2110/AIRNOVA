import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AirlineProvider from './contexts/AirlineProvider.jsx'
import AirportProvider from './contexts/AirportProvider.jsx'
import AircraftProvider from './contexts/AircraftProvider.jsx'
import Service_DetailProvider from './contexts/Service_DetailProvider copy.jsx'
import Service_AirlineProvider from './contexts/Service_AirlineProvider.jsx'
import SeatTypeProvider from './contexts/SeatTypeProvider.jsx'
import FlightProvider from './contexts/FlightProvider.jsx'
import AccountProvider from './contexts/AccountProvider.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import BookingProvider from './contexts/BookingProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BookingProvider>
        <AuthProvider>
          <AccountProvider>
            <FlightProvider>
              <SeatTypeProvider>
                <Service_AirlineProvider>
                  <Service_DetailProvider>
                    <AircraftProvider>
                      <AirportProvider>
                        <AirlineProvider>
                          <App />
                        </AirlineProvider>
                      </AirportProvider>
                    </AircraftProvider>
                  </Service_DetailProvider>
                </Service_AirlineProvider>
              </SeatTypeProvider>
            </FlightProvider>
          </AccountProvider>
        </AuthProvider>
      </BookingProvider>
    </BrowserRouter>
  </StrictMode>,
)
