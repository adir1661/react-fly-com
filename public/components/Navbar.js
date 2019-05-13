import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="left">
          <a href="index.html" className="brand">
            <img src="assets/img/logo.png" alt />
          </a>
        </div>
        <div className="right">
          <div className="primary-nav has-mega-menu">
            <ul className="navigation">
              <li className="active has-child">
                <a href="#nav-homepages">Home</a>
                <div className="wrapper">
                  <div id="nav-homepages" className="nav-wrapper">
                    <ul>
                      <li>
                        <a href="index-map-version-1.html">
                          Map Full Screen Sidebar Results
                        </a>
                      </li>
                      <li>
                        <a href="index-map-version-2.html">
                          Map Horizontal Form
                        </a>
                      </li>
                      <li>
                        <a href="index-map-version-3.html">
                          Map Full Screen Form in Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="index-map-version-4.html">Map Form Under</a>
                      </li>
                      <li>
                        <a href="index-map-version-5.html">Map Sidebar Grid</a>
                      </li>
                      <li>
                        <a href="index-map-version-6.html">
                          Map Full Screen Collapse Form
                        </a>
                      </li>
                      <li>
                        <a href="index-hero-version-1.html">
                          Hero One Input Form
                        </a>
                      </li>
                      <li>
                        <a href="index-hero-version-2.html">
                          Hero Multiple Inputs
                        </a>
                      </li>
                      <li>
                        <a href="index-hero-version-3.html">Hero Form Under</a>
                      </li>
                      <li>
                        <a href="index-hero-version-4.html">
                          Hero Full Screen Slider
                        </a>
                      </li>
                      <li>
                        <a href="index-hero-version-5.html">
                          Hero Coupon Slider
                        </a>
                      </li>
                      <li>
                        <a href="index-hero-version-6.html">
                          Hero Interactive Slider
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-child">
                <a href="#nav-listing">Listing</a>
                <div className="wrapper">
                  <div id="nav-listing" className="nav-wrapper">
                    <ul>
                      <li className="has-child">
                        <a href="#nav-grid-listing">Grid Listing</a>
                        <div id="nav-grid-listing" className="nav-wrapper">
                          <ul>
                            <li>
                              <a href="listing-grid-right-sidebar.html">
                                With Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="listing-grid-left-sidebar.html">
                                With Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="listing-grid-full-width.html">
                                Full Width
                              </a>
                            </li>
                            <li>
                              <a href="listing-grid-different-widths.html">
                                Different Widths
                              </a>
                            </li>
                            <li>
                              <a href="listing-grid-3-items.html">
                                3 Items in Row
                              </a>
                            </li>
                            <li>
                              <a href="listing-grid-4-items.html">
                                4 Items in Row
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <a href="#nav-row-listing">Row Listing</a>
                        <div id="nav-row-listing" className="nav-wrapper">
                          <ul>
                            <li>
                              <a href="listing-row-right-sidebar.html">
                                Row Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="listing-row-left-sidebar.html">
                                Row Left Sidebar
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mega-menu-parent has-child">
                <a href="#nav-pages">Pages</a>
                <div className="wrapper">
                  <div className="mega-menu">
                    <div className="nav-wrapper" id="nav-pages">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-3 col-sm-3">
                            <h4 className="heading">General</h4>
                            <ul>
                              <li>
                                <a href="faq.html">Faq</a>
                              </li>
                              <li>
                                <a href="pricing.html">Pricing</a>
                              </li>
                              <li>
                                <a href="submit.html">Submit Listing</a>
                              </li>
                              <li>
                                <a href="detail.html">Listing Detail</a>
                              </li>
                              <li>
                                <a href="detail-2.html">Listing Detail v2</a>
                              </li>
                              <li>
                                <a href="agents-listing.html">Agents Listing</a>
                              </li>
                              <li>
                                <a href="agent-detail.html">Agent Detail</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-sm-3">
                            <h4 className="heading">User</h4>
                            <ul>
                              <li>
                                <a href="profile.html">Profile Edit</a>
                              </li>
                              <li>
                                <a href="sign-in.html">Sign In</a>
                              </li>
                              <li>
                                <a href="register.html">Register</a>
                              </li>
                              <li>
                                <a href="reset-password.html">Reset Password</a>
                              </li>
                              <li>
                                <a href="my-listings.html">My Listings</a>
                              </li>
                              <li>
                                <a href="edit-listing.html">Edit Listing</a>
                              </li>
                              <li>
                                <a href="reviews.html">Reviews</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-sm-3">
                            <h4 className="heading">Other</h4>
                            <ul>
                              <li>
                                <a href="elements.html">
                                  Elements / Shortcodes
                                </a>
                              </li>
                              <li>
                                <a href="404.html">404 Error Page</a>
                              </li>
                              <li>
                                <a href="sticky-footer.html">Sticky Footer</a>
                              </li>
                              <li>
                                <a href="terms-and-conditions.html">
                                  Terms & Conditions
                                </a>
                              </li>
                              <li>
                                <a href="grid-system.html">Grid System</a>
                              </li>
                              <li>
                                <a href="how-it-works.html">How it Works</a>
                              </li>
                              <li>
                                <a href="rtl.html">RTL Support</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-sm-3">
                            <div className="image center overlay">
                              <div className="vertical-aligned-elements">
                                <div className="element">
                                  <a
                                    href="#"
                                    className="btn btn-default btn-framed"
                                  >
                                    Submit Your Listing
                                  </a>
                                </div>
                              </div>
                              <div className="bg-transfer">
                                <img src="assets/img/items/10.jpg" alt />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="has-child">
                <a href="#nav-locations">Locations</a>
                <div className="wrapper">
                  <div id="nav-locations" className="nav-wrapper">
                    <ul>
                      <li className="has-child">
                        <a href="#nav-locations-new-york">New York</a>
                        <div
                          className="nav-wrapper"
                          id="nav-locations-new-york"
                        >
                          <ul>
                            <li className="has-child">
                              <a href="#nav-4">Manhattan</a>
                              <div className="nav-wrapper" id="nav-4">
                                <ul>
                                  <li>
                                    <a href="#">1</a>
                                  </li>
                                  <li>
                                    <a href="#">2</a>
                                  </li>
                                  <li>
                                    <a href="#">3</a>
                                  </li>
                                  <li>
                                    <a href="#">4</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href="#">Brooklyn</a>
                            </li>
                            <li>
                              <a href="#">Staten Island</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <a href="#nav-5">London</a>
                        <div className="nav-wrapper" id="nav-5">
                          <ul>
                            <li>
                              <a href="#">Abbey Wood</a>
                            </li>
                            <li>
                              <a href="#">Bayswater</a>
                            </li>
                            <li>
                              <a href="#">Forestdale</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <a href="#nav-6">Paris</a>
                        <div className="nav-wrapper" id="nav-6">
                          <ul>
                            <li>
                              <a href="#">Louvre</a>
                            </li>
                            <li>
                              <a href="#">Bourse</a>
                            </li>
                            <li>
                              <a href="#">Marais</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="secondary-nav">
            <a
              href="#"
              data-modal-external-file="modal_sign_in.php"
              data-target="modal-sign-in"
            >
              Sign In
            </a>
            <a
              href="#"
              className="promoted"
              data-modal-external-file="modal_register.php"
              data-target="modal-register"
            >
              Register
            </a>
          </div>
          <a
            href="#"
            className="btn btn-primary btn-small btn-rounded icon shadow add-listing"
            data-modal-external-file="modal_submit.php"
            data-target="modal-submit"
          >
            <i className="fa fa-plus" />
            <span>Add listing</span>
          </a>
          <div className="nav-btn">
            <i />
            <i />
            <i />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
