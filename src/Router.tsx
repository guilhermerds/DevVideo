import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subcribe";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Subscribe/>} />
            <Route path="/event" element={<Event/>} />
            {/* Recebendo um parametro dinâmico */}
            <Route path="/event/lesson/:slug" element={<Event/>} />
        </Routes>
    );
}