/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/Fibonacci-blue.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title" text-size="2rem"><strong>Conrad Maré</strong></h1>
              <div className="fog-low left">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low left">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
             Certified Web Developer - UI specialist, Web Design aimed at <strong>Clean, User friendly and most of all FUNCTIONALITY!</strong>
            </h2>
            <h4 align="center"><strong>Full Stack Developer(Enrolled Student)</strong></h4>
            <table align='center'>
            <thead>
            <ol>
              <li>
                <td>
                  <tr>
                  <h4>Curriculum:</h4>
                  </tr>
                </td>
              </li>
            </ol>
            </thead>
            <tbody>
            <ul>
              <li>
              <td>
              <tr>
                Java_OCP1/OCP(Complete)
                </tr>
                </td>
                </li>
              <li>
                <td>
                  <tr>
                JavaFx(Due)
                  </tr>
                </td>
              </li>
              <li>
                <td>
                  <tr>
                SpringBoot: -javaFramework & reactFramework(Due)
                  </tr>
                </td>
              </li>
              
            </ul>
            </tbody>
            </table>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
         <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
         <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
       
      </div>
    </>
  );
}

export default IndexHeader;
