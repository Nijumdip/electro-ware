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
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">
                                    My Account
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">
                                    Wishlist
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" href="/">
                                    My Cart
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" href="/">
                                    Checkout
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" href="/">
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

                            <div className="mx-3">
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

            <div className="text-start mx-5 p-1 ">
                <Card.Img
                    style={{ height: "150px", width: "150px" }}
                    className="rounded-circle "
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qIwph8ov6iK7ldfl_lmj_HbFxsNDW0o3vA&usqp=CAU"
                />
            </div>

            <Nav className="justify-content-start mx-5" activeKey="/home">
               
                <Nav.Item>
                    <Nav className="px-4" href="/home">HOME</Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-4" href="link-1">SHOP PAGE</Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-4" href="link-2">Single product</Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-4" href="disabled">Cart</Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-4" href="disabled">Checkout</Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-4" href="disabled">Category</Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-4" href="disabled">Others</Nav>
                </Nav.Item>
                <Nav.Item>
                    <Nav className="px-4" href="disabled">Contact</Nav>
                </Nav.Item>            
            </Nav>
        </>
    );
};

export default TopNavigation;
