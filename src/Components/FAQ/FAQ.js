import React from 'react';
import './FAQ.css'; // Make sure to import your CSS file

const FAQ = () => {
  return (
    <div className="faq">
      <h2 className="head">
      Khat FAQ
     </h2>
      <div className="container">
     
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="accordion" id="accordionExample">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <Card
                    id="collapseOne"
                    header="What is khat?"
                    body="Khat is a plant whose leaves are chewed for their stimulating effects."
                  />
                  <Card
                    id="collapseTwo"
                    header="How do you ensure the quality of khat?"
                    body="We cultivate khat with meticulous care and adhere to sustainable practices to ensure the highest quality."
                  />
                  <Card
                    id="collapseThree"
                    header="Is khat legal in my country?"
                    body="Check your local regulations. We comply with international laws for shipping."
                  />
                  <Card
                    id="collapse4"
                    header="What's the best way to consume khat?"
                    body="Chew the leaves slowly for a gradual release of euphoria and energy."
                  />
                </div>
                <div className="col-xl-6 col-lg-6">
                  <Card
                    id="collapse5"
                    header="How can I purchase your khat?"
                    body="Thank you for your interest in purchasing our khat. Please reach out to us through the contact form on our website, and we will respond to your inquiry within the next 24 hours."
                  />
                  <Card
                    id="collapse6"
                    header="Do you offer discreet packaging for international orders?"
                    body="Absolutely! Your khat will arrive in inconspicuous packaging for privacy."
                  />
                  <Card
                    id="collapse7"
                    header="Can I track my khat shipment?"
                    body="Yes, we provide tracking information for all orders. Stay updated on your delivery status."
                  />
                  <Card
                    id="collapse8"
                    header="How to store fresh khat properly?"
                    body="Keep it refrigerated for ultimate freshness. Avoid direct sunlight."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ id, header, body }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={`#${id}`}
            aria-expanded="false" aria-controls={id}>
            {header}
          </button>
        </h5>
      </div>
      <div id={id} className="collapse" data-parent="#accordionExample">
        <div className="card-body">
          {body}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
