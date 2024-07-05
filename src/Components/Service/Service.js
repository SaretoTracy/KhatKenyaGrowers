import React from "react";
import "./Service.css";
import image4 from "/home/developer/khat/src/assets/khat4.jpeg";
import dry from "/home/developer/khat/src/assets/drykhat.jpeg";
import image3 from "/home/developer/khat/src/assets/khat3.jpeg";

const Service = () => {
	return (
		<section>
			<h2>
				Our Services
				
			</h2>
      <h4>Top Seller</h4>
			<div className="container">
				<div className="card">
					<div
						className="card-inner"
						style={{ "--clr": "#fff" }}
					>
						<div className="box">
							<div className="imgBox">
								<img
									src={image3}
									alt="Khat seedlings."
								/>
							</div>
							<div className="icon">
								<div
									className="iconBox"
								>
									<span className="material-symbols-outlined">
										arrow_outward
									</span>
								
							</div>
						</div>
						</div>
					</div>
					<div className="content">
						<h3>Khat Seedlings.</h3>
						<p>
            We offer top-quality khat seedlings, meticulously nurtured to ensure robust growth and high yield. Our seedlings are perfect for both local and international growers, providing a strong start for a successful khat cultivation.
						</p>
						<ul>
							<li
								style={{ "--clr-tag": "#d3b19a" }}
								className="branding"
							>
								Natured
							</li>
							<li
								style={{ "--clr-tag": "#70b3b1" }}
								className="packaging"
							>
								Robust Growth
							</li>
						</ul>
					</div>
				</div>
				<div className="card">
					<div
						className="card-inner"
						style={{ "--clr": "#fff" }}
					>
						<div className="box">
							<div className="imgBox">
								<img
									src={image4}
									alt="Fresh Khat"
								/>
							</div>
							<div className="icon">
								<div
									className="iconBox"
								>
									<span className="material-symbols-outlined">
										arrow_outward
									</span>
								
							</div>
						</div>
					</div>
					</div>
					<div className="content">
						<h3>Fresh Khat</h3>
						<p>
            Experience the unparalleled freshness of our premium khat leaves, harvested at the peak of their potency. Our fresh khats are carefully selected and meticulously packed to ensure maximum flavor and effectiveness. Perfect for those who value quality and tradition.
						</p>
						<ul>
							<li
								style={{ "--clr-tag": "#d3b19a" }}
								className="branding"
							>
								Fresh
							</li>
							<li
								style={{ "--clr-tag": "#d05fa2" }}
								className="marketing"
							>
								Quality
							</li>
						</ul>
					</div>
				
				</div>
				<div className="card">
					<div
						className="card-inner"
						style={{ "--clr": "#fff" }}
					>
						<div className="box">
							<div className="imgBox">
								<img
									src={dry}
									alt="Dry Khat"
								/>
							</div>
							<div className="icon">
								<div
									
									className="iconBox"
								>
									<span className="material-symbols-outlined">
										arrow_outward
									</span>
								
							</div>
						</div>
					</div>
					</div>
					<div className="content">
						<h3>Dry Khat</h3>
						<p>
							we offer meticulously dried khat leaves that preserve the natural
							potency and flavor of fresh khat. Our drying process ensures that
							each leaf retains its essential qualities, providing a convenient
							and long-lasting option for enthusiasts.{" "}
						</p>
						<ul>
							<li
								style={{ "--clr-tag": "#d3b19a" }}
								className="branding"
							>
								Preserved
							</li>
							<li
								style={{ "--clr-tag": "#70b3b1" }}
								className="packaging"
							>
								Natural
							</li>
						</ul>
					</div>
			
			</div>
			</div>
		
		</section>
	);
};

export default Service;
