import "./App.css";

import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/Home";
// import Contacts from "./pages/Contacts";
import Deals from "./pages/Deals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ChatBot from "./components/ChatBot/ChatBot";

const App = () => {
  const queryCilent = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        // staleTime: 1000 * 60 * 5,
        // refetchOnWindowFocus: false,
        // retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

  return (
    <div>
      {/* <ChatBot /> */}
      <QueryClientProvider client={queryCilent}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <SideBar />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/contacts" element={<Contacts />}/> */}
              <Route path="/deals" element={<Deals />} />
              {/* <Route path="/reports" element={<Reports />}/> */}
              {/* <Route path="/calender" element={<Calendar1></Calendar1>}/> */}
              {/* <Route path="/Reports" element={<Reports />}/> */}
              {/* <Route path="/inbox" element={<Inbox />}/> */}
              {/* <Route
              path="/leads-management"
              element={<LeadManagementPage />}
            /> */}
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
