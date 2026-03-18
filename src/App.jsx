import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import FAQ from './pages/FAQ';

function App() {
    return (
        <QueryClientProvider client={queryClientInstance}>
            <Router>
                <Routes>
                    <Route element={<SiteLayout />}>
                        <Route path="/" element={<Navigate to="/Home" replace />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Rooms" element={<Rooms />} />
                        <Route path="/Gallery" element={<Gallery />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Location" element={<Location />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Booking" element={<Booking />} />
                        <Route path="/FAQ" element={<FAQ />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
            <Toaster />
        </QueryClientProvider>
    )
}

export default App