import React from 'react'

const Profile = () => {
	return (
		<>
			{/* profile header */}
			<div classNameName="header">
				<div classNameName="header-content">
					<nav className="navbar navbar-expand">
						<div className="container d-block my-0">
							<div className="d-flex align-items-center justify-content-sm-between justify-content-end">
								<div className="header-left">
									<div className="nav-item d-flex align-items-center">
										<div className="d-flex header-bx">
											<select className="selectpicker">
												<option data-icon="fa-solid fa-location-dot mx-2">India</option>
												<option data-icon="fa-solid fa-location-dot mx-2">Nepal</option>
												<option data-icon="fa-solid fa-location-dot mx-2">Bangladesh</option>
												<option data-icon="fa-solid fa-location-dot mx-2">Brazil</option>
												<option data-icon="fa-solid fa-location-dot mx-2">China</option>
												<option data-icon="fa-solid fa-location-dot mx-2">Denmark</option>
												<option data-icon="fa-solid fa-location-dot mx-2">Germany</option>
												<option data-icon="fa-solid fa-location-dot mx-2">Japan</option>
												<option data-icon="fa-solid fa-location-dot mx-2">Lithuania</option>
											</select>
											<div className="input-group search-area2 ps-3" id="Serach-bar">
												<span className="input-group-text h-search"><a href="javascript:void(0)"><svg
													width="28" height="28" viewBox="0 0 28 28" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path opacity="0.3"
														d="M16.6751 19.4916C16.2195 19.036 16.2195 18.2973 16.6751 17.8417C17.1307 17.3861 17.8694 17.3861 18.325 17.8417L22.9917 22.5084C23.4473 22.964 23.4473 23.7027 22.9917 24.1583C22.5361 24.6139 21.7974 24.6139 21.3417 24.1583L16.6751 19.4916Z"
														fill="var(--primary)" />
													<path
														d="M12.8333 18.6667C16.055 18.6667 18.6666 16.055 18.6666 12.8333C18.6666 9.61168 16.055 7 12.8333 7C9.61163 7 6.99996 9.61168 6.99996 12.8333C6.99996 16.055 9.61163 18.6667 12.8333 18.6667ZM12.8333 21C8.32297 21 4.66663 17.3437 4.66663 12.8333C4.66663 8.32301 8.32297 4.66667 12.8333 4.66667C17.3436 4.66667 21 8.32301 21 12.8333C21 17.3437 17.3436 21 12.8333 21Z"
														fill="var(--primary)" />
												</svg>
												</a></span>
												<input type="text" className="form-control"
													placeholder="What do you want eat today" />
											</div>
											<div className="search-drop">	
												<div className="card tag-bx">
													<div className="card-header d-block border-0">
														<h4>Recently Searched</h4>
														<ul className="d-flex align-items-center flex-wrap">
															<li><a href="javascript:void(0);"
																className="btn btn-outline-light btn-rounded me-2">Bakery</a>
															</li>
															<li><a href="javascript:void(0);"
																className="btn btn-outline-light btn-rounded me-2">Burger</a>
															</li>
															<li><a href="javascript:void(0);"
																className="btn btn-outline-light btn-rounded me-2">Beverage</a>
															</li>
															<li><a href="javascript:void(0);"
																className="btn btn-outline-light btn-rounded me-2">Chicken</a>
															</li>
															<li><a href="javascript:void(0);"
																className="btn btn-outline-light btn-rounded mt-3 mt-xl-0">Pizza</a>
															</li>
														</ul>
													</div>
													<div className="card-body pt-0">
														<h4>popular Cuisines</h4>
														<div className="swiper mySwiper-4">
															<div className="swiper-wrapper">
																<div className="swiper-slide">
																	<div className="card mb-0">
																		<div className="card-body pb-2 pt-3">
																			<div className="text-center pop-cousin">
																				<img src="images/popular-img/pic-1.jpg"
																					alt="" />
																				<a href="javascript:void(0);">
																					<h6>Fish Burger</h6>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="swiper-slide">
																	<div className="card mb-0">
																		<div className="card-body pb-2 pt-3">
																			<div className="text-center pop-cousin">
																				<img src="images/popular-img/pic-1.jpg"
																					alt="" />
																				<a href="javascript:void(0);">
																					<h6>Fish Burger</h6>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="swiper-slide">
																	<div className="card mb-0">
																		<div className="card-body pb-2 pt-3">
																			<div className="text-center pop-cousin">
																				<img src="images/popular-img/pic-1.jpg"
																					alt="" />
																				<a href="javascript:void(0);">
																					<h6>Fish Burger</h6>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="swiper-slide">
																	<div className="card mb-0">
																		<div className="card-body pb-2 pt-3">
																			<div className="text-center pop-cousin">
																				<img src="images/popular-img/pic-1.jpg"
																					alt="" />
																				<a href="javascript:void(0);">
																					<h6>Fish Burger</h6>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="swiper-slide">
																	<div className="card mb-0">
																		<div className="card-body pb-2 pt-3">
																			<div className="text-center pop-cousin">
																				<img src="images/popular-img/pic-1.jpg"
																					alt="" />
																				<a href="javascript:void(0);">
																					<h6>Fish Burger</h6>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="swiper-slide">
																	<div className="card mb-0">
																		<div className="card-body pb-2 pt-3">
																			<div className="text-center pop-cousin">
																				<img src="images/popular-img/pic-1.jpg"
																					alt="" />
																				<a href="javascript:void(0);">
																					<h6>Fish Burger</h6>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div id="close-searchbox"></div>
											</div>
										</div>
									</div>
								</div>

								<ul className="navbar-nav header-right ">

									<li className="nav-item d-flex align-items-center">

									</li>
									<li>

										<div className="dropdown header-profile2 ">
											<a className="nav-link " href="javascript:void(0);" role="button"
												data-bs-toggle="dropdown">
												<div className="header-info2 d-flex align-items-center">
													<img src="images/banner-img/pic-1.png" alt="" />
													<div className="d-flex align-items-center sidebar-info">
														<div>
															<h6 className="font-w500 mb-0 ms-2">Joshua</h6>
														</div>
														<i className="fas fa-chevron-down"></i>
													</div>

												</div>
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="app-profile.html" className="dropdown-item ai-icon ">
													<svg xmlns="http://www.w3.org/2000/svg" className="text-primary-main" width="18"
														height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
														stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
														<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
														<circle cx="12" cy="7" r="4"></circle>
													</svg>
													<span className="ms-2">Profile</span>
												</a>
												<a href="email-inbox.html" className="dropdown-item ai-icon">
													<svg xmlns="http://www.w3.org/2000/svg" className="text-primary-main" width="18"
														height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
														stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
														<path
															d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
														</path>
														<polyline points="22,6 12,13 2,6"></polyline>
													</svg>
													<span className="ms-2">Inbox</span>
												</a>
												<a href="edit-profile.html" className="dropdown-item ai-icon">
													<svg xmlns="http://www.w3.org/2000/svg" className="text-primary-main" width="18"
														height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
														stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
													/* className="feather feather-edit" */>
														<path
															d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
														</path>
														<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
														</path>
													</svg>
													<span className="ms-2">Edit Profile</span>
												</a>
												<a href="message.html" className="dropdown-item ai-icon ">

													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect x="0" y="0" width="24" height="24" />
														<path
															d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z"
															fill="var(--primary)" />
													</g>

													<span className="ms-2">Message</span>
												</a>
												{/* <a href="notification.html" className="dropdown-item ai-icon ">
												<svg xmlns="http://www.w3.org/2000/svg"
													xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
													height="24px" viewBox="0 0 24 24" version="1.1"
													className="svg-main-icon">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect x="0" y="0" width="24" height="24" />
														<path
															d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
															fill="var(--primary)" />
														<circle fill="var(--primary)" opacity="0.3" cx="19.5" cy="17.5"
															r="2.5" />
													</g>
												</svg>
												<span className="ms-2">Notification </span>
											</a> */}
												{/* <a href="setting.html" className="dropdown-item ai-icon ">
												<svg xmlns="http://www.w3.org/2000/svg"
													xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
													height="24px" viewBox="0 0 24 24" version="1.1"
													className="svg-main-icon">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect x="0" y="0" width="24" height="24" />
														<path
															d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
															fill="var(--primary)" fill-rule="nonzero" opacity="0.3" />
														<path
															d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
															fill="var(--primary)" />
													</g>
												</svg>
												<span className="ms-2">Settings </span>
											</a> */}
												{/* <a href="page-login.html" className="dropdown-item ai-icon ms-1">
												<svg xmlns="http://www.w3.org/2000/svg" className="text-primary-main" width="18"
													height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
													stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
													<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
													<polyline points="16 17 21 12 16 7"></polyline>
													<line x1="21" y1="12" x2="9" y2="12"></line>
												</svg>
												<span className="ms-1">Logout </span>
											</a> */}
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
			{/* profile header end */}


			{/*   Sidebar start */}

			<div class="dlabnav border-right">
				<div class="dlabnav-scroll">
					<p class="menu-title style-1"> Main Menu</p>
					<ul class="metismenu" id="menu">
						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
							<i class="bi bi-grid"></i>
							<span class="nav-text">Dashboard</span>
						</a>
							<ul aria-expanded="false">
								<li><a href="index.html">Dashboard Light</a></li>
								<li><a href="index-2.html">Dashboard Dark</a></li>
								<li><a href="food-order.html">Food Order</a></li>
								<li><a href="favorite-menu.html">Favorite Menu</a></li>
								<li><a href="message.html">Message</a></li>
								<li><a href="order-history.html">Order History</a></li>
								<li><a href="notification.html">Notification</a></li>
								<li><a href="bill.html">Bill</a></li>
								<li><a href="setting.html">Setting</a></li>
							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">

							<i class="bi bi-shop-window"></i>
							<span class="nav-text">Restaurant</span>
						</a>
							<ul aria-expanded="false">
								<li><a href="dashboard.html">Dashboard</a></li>
								<li><a href="menu.html">Menu</a></li>
								<li><a href="orders.html">Orders</a></li>
								<li><a href="customer-reviews.html">Reviews</a></li>
								<li><a href="restro-setting.html">Setting</a></li>

							</ul>

						</li>
						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
							<i class="bi bi-bicycle"></i>

							<span class="nav-text">Drivers</span>
						</a>
							<ul aria-expanded="false">
								<li><a href="deliver-main.html">Dashboard</a></li>
								<li><a href="deliver-order.html">Orders</a></li>
								<li><a href="feedback.html">Feedback</a></li>
							</ul>

						</li>
						<li class="menu-title">Other</li>
						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
							<i class="bi bi-info-circle"></i>
							<span class="nav-text">Apps</span>
						</a>
							<ul aria-expanded="false">
								<li><a href="app-profile.html">Profile</a></li>
								<li><a href="post-details.html">Post Details</a></li>
								<li><a class="has-arrow" href="javascript:void(0);" aria-expanded="false">Email</a>
									<ul aria-expanded="false">
										<li><a href="email-compose.html">Compose</a></li>
										<li><a href="email-inbox.html">Inbox</a></li>
										<li><a href="email-read.html">Read</a></li>
									</ul>
								</li>
								<li><a href="app-calender.html">Calendar</a></li>
								<li><a class="has-arrow" href="javascript:void(0);" aria-expanded="false">Shop</a>
									<ul aria-expanded="false">
										<li><a href="ecom-product-grid.html">Product Grid</a></li>
										<li><a href="ecom-product-list.html">Product List</a></li>
										<li><a href="ecom-product-detail.html">Product Details</a></li>
										<li><a href="ecom-product-order.html">Order</a></li>
										<li><a href="ecom-checkout.html">Checkout</a></li>
										<li><a href="ecom-invoice.html">Invoice</a></li>
										<li><a href="ecom-customers.html">Customers</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
							<i class="bi bi-pie-chart"></i>
							<span class="nav-text">Charts</span>
						</a>
							<ul aria-expanded="false">
								<li><a href="chart-flot.html">Flot</a></li>
								<li><a href="chart-morris.html">Morris</a></li>
								<li><a href="chart-chartjs.html">Chartjs</a></li>
								<li><a href="chart-chartist.html">Chartist</a></li>
								<li><a href="chart-sparkline.html">Sparkline</a></li>
								<li><a href="chart-peity.html">Peity</a></li>
							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
							<i class="bi bi-star"></i>
							<span class="nav-text">Bootstrap</span>
						</a>
							<ul aria-expanded="false">
								<li><a href="ui-accordion.html">Accordion</a></li>
								<li><a href="ui-alert.html">Alert</a></li>
								<li><a href="ui-badge.html">Badge</a></li>
								<li><a href="ui-button.html">Button</a></li>
								<li><a href="ui-modal.html">Modal</a></li>
								<li><a href="ui-button-group.html">Button Group</a></li>
								<li><a href="ui-list-group.html">List Group</a></li>
								<li><a href="ui-card.html">Cards</a></li>
								<li><a href="ui-carousel.html">Carousel</a></li>
								<li><a href="ui-dropdown.html">Dropdown</a></li>
								<li><a href="ui-popover.html">Popover</a></li>
								<li><a href="ui-progressbar.html">Progressbar</a></li>
								<li><a href="ui-tab.html">Tab</a></li>
								<li><a href="ui-typography.html">Typography</a></li>
								<li><a href="ui-pagination.html">Pagination</a></li>
								<li><a href="ui-grid.html">Grid</a></li>

							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
							<i class="bi bi-heart"></i>
							<span class="nav-text">Plugins</span>
						</a>
							<ul aria-expanded="false">
								<li><a href="uc-select2.html">Select 2</a></li>
								<li><a href="uc-nestable.html">Nestedable</a></li>
								<li><a href="uc-noui-slider.html">Noui Slider</a></li>
								<li><a href="uc-sweetalert.html">Sweet Alert</a></li>
								<li><a href="uc-toastr.html">Toastr</a></li>
								<li><a href="map-jqvmap.html">Jqv Map</a></li>
								<li><a href="uc-lightgallery.html">Light Gallery</a></li>
							</ul>
						</li>
						<li><a href="widget-basic.html" class="" aria-expanded="false">
							<i class="bi bi-gear-wide"></i>
							<span class="nav-text">Widget</span>
						</a>
						</li>
						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
							<i class="bi bi-file-earmark-check"></i>
							<span class="nav-text">Forms</span>
						</a>
							<ul aria-expanded="false">
								<li><a href="form-element.html">Form Elements</a></li>
								<li><a href="form-wizard.html">Wizard</a></li>
								<li><a href="form-ckeditor.html">CkEditor</a></li>
								<li><a href="form-pickers.html">Pickers</a></li>
								<li><a href="form-validation.html">Form Validate</a></li>
							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
							<i class="bi bi-file-earmark-spreadsheet"></i>
							<span class="nav-text">Table</span>
						</a>
							<ul aria-expanded="false">
								<li><a href="table-bootstrap-basic.html">Bootstrap</a></li>
								<li><a href="table-datatable-basic.html">Datatable</a></li>
							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
							<i class="bi bi-file-earmark-break"></i>
							<span class="nav-text">Pages</span>
						</a>
							<ul aria-expanded="false">
								<li><a href="page-login.html">Login</a></li>
								<li><a href="page-register.html">Register</a></li>
								<li><a class="has-arrow" href="javascript:void(0);" aria-expanded="false">Error</a>
									<ul aria-expanded="false">
										<li><a href="page-error-400.html">Error 400</a></li>
										<li><a href="page-error-403.html">Error 403</a></li>
										<li><a href="page-error-404.html">Error 404</a></li>
										<li><a href="page-error-500.html">Error 500</a></li>
										<li><a href="page-error-503.html">Error 503</a></li>
									</ul>
								</li>
								<li><a href="page-lock-screen.html">Lock Screen</a></li>
								<li><a href="empty-page.html">Empty Page</a></li>
							</ul>
						</li>
					</ul>
					<div class="plus-box">
						<div class="d-flex align-items-center">
							<h5>Upgrade your Account to Get Free Voucher</h5>

						</div>
						<a href="javascript:void(0);" class="btn bg-white btn-sm">Upgrade</a>
					</div>
					<div class="copyright mt-0">
						<p><strong>Food Desk - Online Food Delivery Admin Dashboard</strong> © 2022 All Rights Reserved</p>
						<p class="fs-12">Made with <span class="heart"></span> by DexignLab</p>
					</div>
				</div>
			</div>

			{/*     Sidebar end */}



			{/*     Content body start */}

			<div class="content-body">
				<div class="container">
					<div class="row page-titles">
						<ol class="breadcrumb">
							<li class="breadcrumb-item active"><a href="javascript:void(0)">App</a></li>
							<li class="breadcrumb-item"><a href="javascript:void(0)">Profile</a></li>
						</ol>
					</div>
					{/* <!-- row --> */}
					<div class="row">
						<div class="col-lg-12">
							<div class="profile card card-body px-3 pt-3 pb-0">
								<div class="profile-head">
									<div class="photo-content">
										<div class="cover-photo rounded"></div>
									</div>
									<div class="profile-info">
										<div class="profile-photo">
											<img src="images/profile/profile.png" class="img-fluid rounded-circle" alt="" />
										</div>
										<div class="profile-details">
											<div class="profile-name px-3 pt-2">
												<h4 class="text-primary-main mb-0">Mitchell C. Shay</h4>
												<p>UX / UI Designer</p>
											</div>
											<div class="profile-email px-2 pt-2">
												<h4 class="text-muted mb-0">info@example.com</h4>
												<p>Email</p>
											</div>
											<div class="dropdown ms-auto">
												<a href="#" class="btn btn-primary light sharp" data-bs-toggle="dropdown"
													aria-expanded="true"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
														<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
															<rect x="0" y="0" width="24" height="24" />
														</g>
													</svg></a>
												<ul class="dropdown-menu dropdown-menu-end">
													<li class="dropdown-item"><i
														class="fa fa-user-circle text-primary-main me-2"></i> View profile
													</li>
													<li class="dropdown-item"><i class="fa fa-users text-primary-main me-2"></i>
														Add to friends</li>
													<li class="dropdown-item"><i class="fa fa-plus text-primary-main me-2"></i>
														Add to group</li>
													<li class="dropdown-item"><i class="fa fa-ban text-primary-main me-2"></i>
														Block</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-xl-4">
							<div class="row">
								<div class="col-xl-12">
									<div class="card">
										<div class="card-body">
											<div class="profile-statistics">
												<div class="text-center">
													<div class="row">
														<div class="col">
															<h3 class="m-b-0">150</h3><span>Follower</span>
														</div>
														<div class="col">
															<h3 class="m-b-0">140</h3><span>Place Stay</span>
														</div>
														<div class="col">
															<h3 class="m-b-0">45</h3><span>Reviews</span>
														</div>
													</div>
													<div class="mt-4">
														<a href="javascript:void(0);"
															class="btn btn-primary mb-1 me-1">Follow</a>
														<a href="javascript:void(0);" class="btn btn-primary mb-1"
															data-bs-toggle="modal" data-bs-target="#sendMessageModal">Send
															Message</a>
													</div>
												</div>
												{/* <!-- Modal --> */}
												<div class="modal fade" id="sendMessageModal">
													<div class="modal-dialog modal-dialog-centered" role="document">
														<div class="modal-content">
															<div class="modal-header">
																<h5 class="modal-title">Send Message</h5>
																<button type="button" class="btn-close"
																	data-bs-dismiss="modal"></button>
															</div>
															<div class="modal-body">
																<form class="comment-form">
																	<div class="row">
																		<div class="col-lg-6">
																			<div class="mb-3">
																				<label
																					class="text-black font-w600 form-label">Name
																					<span class="required">*</span></label>
																				<input type="text" class="form-control"
																					value="Author" name="Author"
																					placeholder="Author" />
																			</div>
																		</div>
																		<div class="col-lg-6">
																			<div class="mb-3">
																				<label
																					class="text-black font-w600 form-label">Email
																					<span class="required">*</span></label>
																				<input type="text" class="form-control"
																					value="Email" placeholder="Email"
																					name="Email" />
																			</div>
																		</div>
																		<div class="col-lg-12">
																			<div class="mb-3">
																				<label
																					class="text-black font-w600 form-label">Comment</label>
																				<textarea rows="8" class="form-control"
																					name="comment"
																					placeholder="Comment"></textarea>
																			</div>
																		</div>
																		<div class="col-lg-12">
																			<div class="mb-3 mb-0">
																				<input type="submit" value="Post Comment"
																					class="submit btn btn-primary"
																					name="submit" />
																			</div>
																		</div>
																	</div>
																</form>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-12">
									<div class="card">
										<div class="card-body">
											<div class="profile-blog">
												<h5 class="text-primary-main d-inline">Today Highlights</h5>
												<img src="images/profile/1.jpg" alt=""
													class="img-fluid mt-4 mb-4 w-100 rounded" />
												<h4><a href="post-details.html" class="text-black">Darwin Creative Agency
													Theme</a></h4>
												<p class="mb-0">A small river named Duden flows by their place and supplies
													it with the necessary regelialia. It is a paradisematic country, in
													which roasted parts of sentences fly into your mouth.</p>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-12">
									<div class="card">
										<div class="card-body">
											<div class="profile-interest">
												<h5 class="text-primary-main d-inline">Interest</h5>
												<div class="row mt-4 sp4" id="lightgallery">
													<a href="images/profile/2.jpg" data-exthumbimage="images/profile/2.jpg"
														data-src="images/profile/2.jpg"
														class="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
														<img src="images/profile/2.jpg" alt="" class="img-fluid rounded" />
													</a>
													<a href="images/profile/3.jpg" data-exthumbimage="images/profile/3.jpg"
														data-src="images/profile/3.jpg"
														class="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
														<img src="images/profile/3.jpg" alt="" class="img-fluid rounded" />
													</a>
													<a href="images/profile/4.jpg" data-exthumbimage="images/profile/4.jpg"
														data-src="images/profile/4.jpg"
														class="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
														<img src="images/profile/4.jpg" alt="" class="img-fluid rounded" />
													</a>
													<a href="images/profile/3.jpg" data-exthumbimage="images/profile/3.jpg"
														data-src="images/profile/3.jpg"
														class="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
														<img src="images/profile/3.jpg" alt="" class="img-fluid rounded" />
													</a>
													<a href="images/profile/4.jpg" data-exthumbimage="images/profile/4.jpg"
														data-src="images/profile/4.jpg"
														class="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
														<img src="images/profile/4.jpg" alt="" class="img-fluid rounded" />
													</a>
													<a href="images/profile/2.jpg" data-exthumbimage="images/profile/2.jpg"
														data-src="images/profile/2.jpg"
														class="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
														<img src="images/profile/2.jpg" alt="" class="img-fluid rounded" />
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-12">
									<div class="card">
										<div class="card-body">
											<div class="profile-news">
												<h5 class="text-primary-main d-inline">Our Latest News</h5>
												<div class="media pt-3 pb-3">
													<img src="images/profile/5.jpg" alt="image" class="me-3 rounded"
														width="75" />
													<div class="media-body">
														<h5 class="m-b-5"><a href="post-details.html"
															class="text-black">Collection of textile samples</a></h5>
														<p class="mb-0">I shared this on my fb wall a few months back, and I
															thought.</p>
													</div>
												</div>
												<div class="media pt-3 pb-3">
													<img src="images/profile/6.jpg" alt="image" class="me-3 rounded"
														width="75" />
													<div class="media-body">
														<h5 class="m-b-5"><a href="post-details.html"
															class="text-black">Collection of textile samples</a></h5>
														<p class="mb-0">I shared this on my fb wall a few months back, and I
															thought.</p>
													</div>
												</div>
												<div class="media pt-3 pb-3">
													<img src="images/profile/7.jpg" alt="image" class="me-3 rounded"
														width="75" />
													<div class="media-body">
														<h5 class="m-b-5"><a href="post-details.html"
															class="text-black">Collection of textile samples</a></h5>
														<p class="mb-0">I shared this on my fb wall a few months back, and I
															thought.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-8">
							<div class="card h-auto">
								<div class="card-body">
									<div class="profile-tab">
										<div class="custom-tab-1">
											<ul class="nav nav-tabs">
												<li class="nav-item"><a href="#my-posts" data-bs-toggle="tab"
													class="nav-link active show">Posts</a>
												</li>
												<li class="nav-item"><a href="#about-me" data-bs-toggle="tab"
													class="nav-link">About Me</a>
												</li>
												<li class="nav-item"><a href="#profile-settings" data-bs-toggle="tab"
													class="nav-link">Setting</a>
												</li>
											</ul>
											<div class="tab-content">
												<div id="my-posts" class="tab-pane fade active show">
													<div class="my-post-content pt-3">
														<div class="post-input">
															<textarea name="textarea" id="textarea" cols="30" rows="5"
																class="form-control bg-transparent"
																placeholder="Please type what you want...."></textarea>
															<a href="javascript:void(0);"
																class="btn btn-primary light me-1 px-3"
																data-bs-toggle="modal" data-bs-target="#linkModal"><i
																	class="fa fa-link m-0"></i> </a>
															{/* <!-- Modal --> */}
															<div class="modal fade" id="linkModal">
																<div class="modal-dialog modal-dialog-centered"
																	role="document">
																	<div class="modal-content">
																		<div class="modal-header">
																			<h5 class="modal-title">Social Links</h5>
																			<button type="button" class="btn-close"
																				data-bs-dismiss="modal">
																			</button>
																		</div>
																		<div class="modal-body">
																			<a class="btn-social facebook"
																				href="javascript:void(0)"><i
																					class="fab fa-facebook-f"></i></a>
																			<a class="btn-social google-plus"
																				href="javascript:void(0)"><i
																					class="fab fa-google-plus-g"></i></a>
																			<a class="btn-social linkedin"
																				href="javascript:void(0)"><i
																					class="fab fa-linkedin-in"></i></a>
																			<a class="btn-social instagram"
																				href="javascript:void(0)"><i
																					class="fab fa-instagram"></i></a>
																			<a class="btn-social twitter"
																				href="javascript:void(0)"><i
																					class="fab fa-twitter"></i></a>
																			<a class="btn-social youtube"
																				href="javascript:void(0)"><i
																					class="fab fa-youtube"></i></a>
																			<a class="btn-social whatsapp"
																				href="javascript:void(0)"><i
																					class="fab fa-whatsapp"></i></a>
																		</div>
																	</div>
																</div>
															</div>
															<a href="javascript:void(0);"
																class="btn btn-primary light me-1 px-3"
																data-bs-toggle="modal" data-bs-target="#cameraModal"><i
																	class="fa fa-camera m-0"></i> </a>
															{/* 	<!-- Modal --> */}
															<div class="modal fade" id="cameraModal">
																<div class="modal-dialog modal-dialog-centered"
																	role="document">
																	<div class="modal-content">
																		<div class="modal-header">
																			<h5 class="modal-title">Upload images</h5>
																			<button type="button" class="btn-close"
																				data-bs-dismiss="modal">
																			</button>
																		</div>
																		<div class="modal-body">
																			<div class="input-group custom_file_input mb-3">
																				<span class="input-group-text">Upload</span>
																				<div class="form-file">
																					<input type="file"
																						class="form-file-input form-control" />
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<a href="javascript:void(0);" class="btn btn-primary"
																data-bs-toggle="modal" data-bs-target="#postModal">Post</a>
															{/* 	<!-- Modal --> */}
															<div class="modal fade" id="postModal">
																<div class="modal-dialog modal-dialog-centered"
																	role="document">
																	<div class="modal-content">
																		<div class="modal-header">
																			<h5 class="modal-title">Post</h5>
																			<button type="button" class="btn-close"
																				data-bs-dismiss="modal">
																			</button>
																		</div>
																		<div class="modal-body">
																			<textarea name="textarea" id="textarea2"
																				cols="30" rows="5"
																				class="form-control bg-transparent"
																				placeholder="Please type what you want...."></textarea>
																			<a class="btn btn-primary "
																				href="javascript:void(0)">Post</a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="profile-uoloaded-post border-bottom-1 pb-5">
															<img src="images/profile/8.jpg" alt=""
																class="img-fluid w-100 rounded" />
															<a class="post-title" href="post-details.html">
																<h3 class="text-black">Collection of textile samples lay
																	spread</h3>
															</a>
															<p>A wonderful serenity has take possession of my entire soul
																like these sweet morning of spare which enjoy whole heart.A
																wonderful serenity has take possession of my entire soul
																like these sweet morning
																of spare which enjoy whole heart.</p>
															<button class="btn btn-primary me-2"><span class="me-2"><i
																class="fa fa-heart"></i></span>Like</button>
															<button class="btn btn-secondary" data-bs-toggle="modal"
																data-bs-target="#replyModal"><span class="me-2"><i
																	class="fa fa-reply"></i></span>Reply</button>
														</div>
														<div class="profile-uoloaded-post border-bottom-1 pb-5">
															<img src="images/profile/9.jpg" alt=""
																class="img-fluid w-100 rounded" />
															<a class="post-title" href="post-details.html">
																<h3 class="text-black">Collection of textile samples lay
																	spread</h3>
															</a>
															<p>A wonderful serenity has take possession of my entire soul
																like these sweet morning of spare which enjoy whole heart.A
																wonderful serenity has take possession of my entire soul
																like these sweet morning
																of spare which enjoy whole heart.</p>
															<button class="btn btn-primary me-2"><span class="me-2"><i
																class="fa fa-heart"></i></span>Like</button>
															<button class="btn btn-secondary" data-bs-toggle="modal"
																data-bs-target="#replyModal"><span class="me-2"><i
																	class="fa fa-reply"></i></span>Reply</button>
														</div>
														<div class="profile-uoloaded-post pb-3">
															<img src="images/profile/8.jpg" alt=""
																class="img-fluid w-100 rounded" />
															<a class="post-title" href="post-details.html">
																<h3 class="text-black">Collection of textile samples lay
																	spread</h3>
															</a>
															<p>A wonderful serenity has take possession of my entire soul
																like these sweet morning of spare which enjoy whole heart.A
																wonderful serenity has take possession of my entire soul
																like these sweet morning
																of spare which enjoy whole heart.</p>
															<button class="btn btn-primary me-2"><span class="me-2"><i
																class="fa fa-heart"></i></span>Like</button>
															<button class="btn btn-secondary" data-bs-toggle="modal"
																data-bs-target="#replyModal"><span class="me-2"><i
																	class="fa fa-reply"></i></span>Reply</button>
														</div>
													</div>
												</div>
												<div id="about-me" class="tab-pane fade">
													<div class="profile-about-me">
														<div class="pt-4 border-bottom-1 pb-3">
															<h4 class="text-primary-main">About Me</h4>
															<p class="mb-2">A wonderful serenity has taken possession of my
																entire soul, like these sweet mornings of spring which I
																enjoy with my whole heart. I am alone, and feel the charm of
																existence was created for the bliss of souls like mine.I am
																so happy, my dear friend, so absorbed in the exquisite sense
																of mere tranquil existence, that I neglect my talents.</p>
															<p>A collection of textile samples lay spread out on the table -
																Samsa was a travelling salesman - and above it there hung a
																picture that he had recently cut out of an illustrated
																magazine and housed in a nice, gilded frame.</p>
														</div>
													</div>
													<div class="profile-skills mb-5">
														<h4 class="text-primary-main mb-2">Skills</h4>
														<a href="javascript:void(0);"
															class="btn btn-primary light btn-xs mb-1">Admin</a>
														<a href="javascript:void(0);"
															class="btn btn-primary light btn-xs mb-1">Dashboard</a>
														<a href="javascript:void(0);"
															class="btn btn-primary light btn-xs mb-1">Photoshop</a>
														<a href="javascript:void(0);"
															class="btn btn-primary light btn-xs mb-1">Bootstrap</a>
														<a href="javascript:void(0);"
															class="btn btn-primary light btn-xs mb-1">Responsive</a>
														<a href="javascript:void(0);"
															class="btn btn-primary light btn-xs mb-1">Crypto</a>
													</div>
													<div class="profile-lang  mb-5">
														<h4 class="text-primary-main mb-2">Language</h4>
														<a href="javascript:void(0);" class="text-muted pe-3 f-s-16"><i
															class="flag-icon flag-icon-us"></i> English</a>
														<a href="javascript:void(0);" class="text-muted pe-3 f-s-16"><i
															class="flag-icon flag-icon-fr"></i> French</a>
														<a href="javascript:void(0);" class="text-muted pe-3 f-s-16"><i
															class="flag-icon flag-icon-bd"></i> Bangla</a>
													</div>
													<div class="profile-personal-info">
														<h4 class="text-primary-main mb-4">Personal Information</h4>
														<div class="row mb-2">
															<div class="col-sm-3 col-5">
																<h5 class="f-w-500">Name <span class="pull-end">:</span>
																</h5>
															</div>
															<div class="col-sm-9 col-7"><span>Mitchell C.Shay</span>
															</div>
														</div>
														<div class="row mb-2">
															<div class="col-sm-3 col-5">
																<h5 class="f-w-500">Email <span class="pull-end">:</span>
																</h5>
															</div>
															<div class="col-sm-9 col-7"><span>example@examplel.com</span>
															</div>
														</div>
														<div class="row mb-2">
															<div class="col-sm-3 col-5">
																<h5 class="f-w-500">Availability <span
																	class="pull-end">:</span></h5>
															</div>
															<div class="col-sm-9 col-7"><span>Full Time (Free Lancer)</span>
															</div>
														</div>
														<div class="row mb-2">
															<div class="col-sm-3 col-5">
																<h5 class="f-w-500">Age <span class="pull-end">:</span>
																</h5>
															</div>
															<div class="col-sm-9 col-7"><span>27</span>
															</div>
														</div>
														<div class="row mb-2">
															<div class="col-sm-3 col-5">
																<h5 class="f-w-500">Location <span class="pull-end">:</span>
																</h5>
															</div>
															<div class="col-sm-9 col-7"><span>Rosemont Avenue Melbourne,
																Florida</span>
															</div>
														</div>
														<div class="row mb-2">
															<div class="col-sm-3 col-5">
																<h5 class="f-w-500">Year Experience <span
																	class="pull-end">:</span></h5>
															</div>
															<div class="col-sm-9 col-7"><span>07 Year Experiences</span>
															</div>
														</div>
													</div>
												</div>
												<div id="profile-settings" class="tab-pane fade">
													<div class="pt-3">
														<div class="settings-form">
															<h4 class="text-primary-main">Account Setting</h4>
															<form>
																<div class="row">
																	<div class="mb-3 col-md-6">
																		<label class="form-label">Email</label>
																		<input type="email" placeholder="Email"
																			class="form-control" />
																	</div>
																	<div class="mb-3 col-md-6">
																		<label class="form-label">Password</label>
																		<input type="password" placeholder="Password"
																			class="form-control" />
																	</div>
																</div>
																<div class="mb-3">
																	<label class="form-label">Address</label>
																	<input type="text" placeholder="1234 Main St"
																		class="form-control" />
																</div>
																<div class="mb-3">
																	<label class="form-label">Address 2</label>
																	<input type="text"
																		placeholder="Apartment, studio, or floor"
																		class="form-control" />
																</div>
																<div class="row">
																	<div class="mb-3 col-md-6">
																		<label class="form-label">City</label>
																		<input type="text" class="form-control" />
																	</div>
																	<div class="mb-3 col-md-4">
																		<label class="form-label">State</label>
																		<select class="form-select"
																			aria-label="Default select example">
																			<option selected>Chooose...</option>
																			<option value="1">One</option>
																			<option value="2">Two</option>
																			<option value="3">Three</option>
																		</select>
																	</div>
																	<div class="mb-3 col-md-2">
																		<label class="form-label">Zip</label>
																		<input type="text" class="form-control" />
																	</div>
																</div>
																<div class="mb-3">
																	<div class="form-check custom-checkbox">
																		<input type="checkbox" class="form-check-input"
																			id="gridCheck" />
																		<label class="form-check-label form-label"
																			for="gridCheck"> Check me out</label>
																	</div>
																</div>
																<button class="btn btn-primary" type="submit">Sign
																	in</button>
															</form>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Modal --> */}
										<div class="modal fade" id="replyModal">
											<div class="modal-dialog modal-dialog-centered" role="document">
												<div class="modal-content">
													<div class="modal-header">
														<h5 class="modal-title">Post Reply</h5>
														<button type="button" class="btn-close"
															data-bs-dismiss="modal"></button>
													</div>
													<div class="modal-body">
														<form>
															<textarea class="form-control" rows="4">Message</textarea>
														</form>
													</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-danger"
															data-bs-dismiss="modal">close</button>
														<button type="button" class="btn btn-primary">Reply</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*    Content body end */}

			{/*  <!--**********************************
            Footer start
        ***********************************--> */}
			<div class="footer">
				<div class="copyright border-top">
					<p>Copyright © Designed by <a href="https://themeforest.net/user/dexignlabs"
						target="_blank">DexignLab</a> 2022</p>
				</div>
			</div>
			{/* <!--**********************************
            Footer end
        ***********************************--> */}


		</>
	)
}

export default Profile
