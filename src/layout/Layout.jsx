import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import M from "materialize-css";
import { CustomLink } from "./CustomLink";
import { ScrollToTopButton } from "./ScrollToTopButton";

export const Layout = () => {
    const closeSidenav = () => {
        M.Sidenav.getInstance(document.querySelector(".sidenav")).close();
    };

    useEffect(() => {
        const elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems);
    }, []);

    return (
        <>
            <div className="wrapper">
                <header>
                    <nav>
                        <div className="nav-wrapper">
                            <CustomLink to="/" className="brand-logo">
                                FoodShop
                            </CustomLink>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <CustomLink to="/about">About</CustomLink>
                                </li>
                                <li>
                                    <CustomLink to="/contacts">Contacts</CustomLink>
                                </li>
                                <li>
                                    <a href="https://github.com/Kondratiuk-Andrii" target="_blank" rel="noreferrer">
                                        Repo
                                    </a>
                                </li>
                            </ul>
                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                        </div>
                    </nav>

                    <ul className="sidenav" id="mobile-demo" onClick={closeSidenav}>
                        <li>
                            <CustomLink to="/">Home</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/about">About</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/contacts">Contacts</CustomLink>
                        </li>
                        <li>
                            <a href="https://github.com/Kondratiuk-Andrii" target="_blank" rel="noreferrer">
                                Repo
                            </a>
                        </li>
                    </ul>
                </header>

                <main className="container content">
                    <Outlet />
                </main>

                <ScrollToTopButton />

                <footer className="page-footer">
                    <div className="container">
                        <div className="row grid">
                            <div className="col s6">
                                <p className="white-text">FoodShop © {new Date().getFullYear()}</p>
                            </div>
                            <div className="col s6 right-align">
                                <p className="white-text">
                                    <a
                                        className="grey-text text-lighten-3"
                                        href="https://github.com/Kondratiuk-Andrii"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ marginLeft: "auto" }}
                                    >
                                        Repo
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};
