import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AllProducts from "../components/allProducts";
import { Link, useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
function ProductList() {
  const [sort, setsort] = useState("Recommended");
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  const [productlength, setProductgength] = useState(0);
  useEffect(() => {
    const getProdcut = async () => {
      try {
        const response = await publicRequest.get(
          cat ? `/product?category=${cat}` : "/product"
        );
        setProduct(response.data);
        setProductgength(response.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    getProdcut();
  }, [cat]);

  const [filters, setFilters] = useState({});

  const handelefilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    console.log(filters);
  };
  const srolllocation = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [srolllocation]);
  return (
    <>
      <div className="ProductList-page-wrapper">
        <Navbar />
        <section className="section-pagetop">
          <div className="container-fluid mainhedof-productlist">
            <h2>{cat ? cat : "ALL"} BLINDS</h2>
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            {cat ? (
              <>
                <Link to="/blindlist">Blinds</Link> &nbsp; / &nbsp;
                <span>{cat}</span>
              </>
            ) : (
              <span>Blinds</span>
            )}
          </div>
        </section>

        <section className="section-content ">
          <div className="container-fluid">
            <div className="row" style={{ padding: " 0 calc(1.5rem * 0.25)" }}>
              <div className="col-md-12">
                <div className="top-filnInumber-box">
                  <div className="showing-items-box">
                    <p className="m-0">
                      <strong>Showing</strong> {productlength} Blinds
                    </p>
                  </div>
                  <div className="sort-by-box">
                    <select
                      className=""
                      onChange={(e) => setsort(e.target.value)}
                    >
                      <option value="Recommended">Sort By: Recommended</option>
                      <option value="Letest">Sort By: Latest items</option>
                      <option value="Trending">Sort By: Trending</option>
                      <option value="Popular">Sort By: Most Popular</option>
                      <option value="Cheapest">Sort By: Cheapest</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                style={{ padding: " 0 calc(1.5rem * 0.25)" }}
              >
                <div className="main-box-filter">
                  <div className="filter-group heading-filters">
                    <h6>Filters</h6>
                    <span className="clear-filter-button">
                      <Link to="/blindlist" onClick={() => setFilters({})}>
                        Clear
                      </Link>
                    </span>
                  </div>
                  <div className="filter-group">
                    <h6>Blind type</h6>
                    <div className="filter-content">
                      <ul className="list-menu">
                        <li>
                          <div
                            className={`filter-link ${
                              cat === "Wooden" ? "show" : ""
                            }`}
                          >
                            <Link to="/blindlist/Wooden">Wooden</Link>
                          </div>
                        </li>
                        <li>
                          <div
                            className={`filter-link ${
                              cat === "Roller" ? "show" : ""
                            }`}
                          >
                            <Link to="/blindlist/Roller">Roller</Link>
                          </div>
                        </li>
                        <li>
                          <div
                            className={`filter-link ${
                              cat === "Clip-on" ? "show" : ""
                            }`}
                          >
                            <Link to="/blindlist/Clip-on">Clip On</Link>
                          </div>
                        </li>
                        <li>
                          <div
                            className={`filter-link ${
                              cat === "Electric" ? "show" : ""
                            }`}
                          >
                            <Link to="/blindlist/Electric">Electric</Link>
                          </div>
                        </li>
                        <li>
                          <div
                            className={`filter-link ${
                              cat === "Roman" ? "show" : ""
                            }`}
                          >
                            <Link to="/blindlist/Roman">Roman</Link>
                          </div>
                        </li>
                        <li>
                          <div
                            className={`filter-link ${
                              cat === "Vertical" ? "show" : ""
                            }`}
                          >
                            <Link to="/blindlist/Vertical">Vertical</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="hrtage" />
                  <div className="filter-group">
                    <h6>Color</h6>
                    <div className="filter-content">
                      <ul className="list-menu">
                        <li>
                          <div
                            className={`filter-buttons ${
                              filters.color === "White" ? "show" : ""
                            }`}
                          >
                            <input
                              type="button"
                              value="White"
                              className="fbtn"
                              name="color"
                              onClick={handelefilters}
                            />
                          </div>
                        </li>
                        <li>
                          <div
                            className={`filter-buttons ${
                              filters.color === "brown" ? "show" : ""
                            }`}
                          >
                            <input
                              type="button"
                              value="brown"
                              className="fbtn"
                              name="color"
                              onClick={handelefilters}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="hrtage" />
                  <div className="filter-group">
                    <h6>Pattern</h6>
                    <div className="filter-content">
                      <ul className="list-menu">
                        <li>eople</li>
                        <li>Watches</li>
                        <li>Cinema</li>
                      </ul>
                    </div>
                  </div>
                  <hr className="hrtage" />
                  <div className="filter-group">
                    <h6>Pattern</h6>
                    <div className="filter-content">
                      <ul className="list-menu">
                        <li>eople</li>
                        <li>Watches</li>
                        <li>Cinema</li>
                      </ul>
                    </div>
                  </div>
                  <hr className="hrtage" />
                  <div className="filter-group">
                    <h6>Pattern</h6>
                    <div className="filter-content">
                      <ul className="list-menu">
                        <li>eople</li>
                        <li>Watches</li>
                        <li>Cinema</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <main className="col-md-9">
                <div className="row">
                  <AllProducts sort={sort} filters={filters} cat={cat} />
                </div>

                <nav className="mt-4 mx-auto">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <button className="page-link mianbtn">Previous</button>
                    </li>
                    <li className="page-item active">
                      <button className="page-link">1</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">2</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">3</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link mianbtn">Next</button>
                    </li>
                  </ul>
                </nav>
              </main>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ProductList;
