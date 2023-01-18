import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";

const TopNavigation = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light ">
                <div class="container-fluid mx-5">
                    <a class="navbar-brand d-lg-none " href="/">
                        Electro-ware
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse fs-6" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">
                                <i class="fa-regular fa-user py-5"></i> My Account
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="/">
                                    Wishlist
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    My Cart
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    Checkout
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    login
                                </a>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <div className="mx-3">
                                <NavDropdown title="currency :USD" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">USD</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">INR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">GPB</NavDropdown.Item>
                                </NavDropdown>
                            </div>

                            <div className="ml-3">
                                <NavDropdown title="language :English " id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">French</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">German</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className=" text-start  mx-5 p-1 ">
                <Card.Img
                    style={{ height: "150px", width: "150px" }}
                    className="rounded-circle "
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qIwph8ov6iK7ldfl_lmj_HbFxsNDW0o3vA&usqp=CAU"
                />

                <button type="button" class="float-end border p-3">
                    Cart- $ 100
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-cart mx-3"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </button>

            </div>

            <Nav className="container-fluid justify-content-start px-5 bg-light py-3 fs-6">
                <Nav.Item>
                    <Nav className="px-3" href="/home">
                        HOME
                    </Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-3" href="link-1">
                        SHOP PAGE
                    </Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-3" href="link-2">
                        SINGLE PRODUCT{" "}
                    </Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-3" href="link-3">
                        CART
                    </Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-3" href="link-4">
                        CHECKOUT
                    </Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-3" href="link-5">
                        CATEGORY
                    </Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-3" href="link-6">
                        OTHERS
                    </Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-3" href="link-7">
                        CONTACT
                    </Nav>
                </Nav.Item>
            </Nav>
        </>
    );
};

export default TopNavigation;
