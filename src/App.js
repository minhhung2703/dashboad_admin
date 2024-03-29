import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer, Navbar, SideBar } from "./components";
import {
    Bar,
    Calendar,
    Ecommerce,
    Employees,
    Faq,
    Orders
} from "./pages";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

export default function App() {

    const { activeMenu } = useStateContext();
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div
                        className="fixed right-4 bottom-4"
                        style={{ zIndex: "1000" }}
                    >
                        <TooltipComponent
                            content="Settings"
                            position="Top"
                        >
                            <button
                                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                                type="button"
                                style={{
                                    background: "blue",
                                    borderRadius: "50%",
                                }}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <SideBar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <SideBar />
                        </div>
                    )}

                    <div className={
                        `dark:bg-main-bg bg-main-bg min-h-screen w-full 
                        ${activeMenu ? 'md:ml-72' : 'flex-2'}
                        `
                        //     `dark:bg-main-bg bg-main-bg min-h-screen w-full 
                        // ${activeMenu ? 'md:ml-72' : 'flex-2'}
                        // `
                    }>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>

                        <div>
                            <Routes>
                                {/*Dashboard*/}
                                <Route path="/" element={<Ecommerce />} />
                                <Route path="/ecommerce" element={<Ecommerce />} />

                                {/*Pages*/}
                                <Route path="/orders" element={<Orders />} />
                                <Route path="/employees" element={<Employees />} />

                                {/*App*/}
                                <Route path="/faq" element={<Faq />} />
                                <Route path="/calendar" element={<Calendar />} />

                                {/*Chart*/}
                                <Route path="/bar" element={<Bar />} />

                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}
