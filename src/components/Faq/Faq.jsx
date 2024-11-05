

const Faq = () => {
    return (
        <div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">What types of gadgets are available at Gadget Haven?</div>
              <div className="collapse-content">
                <p>Answer: We offer a wide range of gadgets including smartphones, laptops, smartwatches, and various accessories. Our goal is to provide the latest and most reliable tech products for all your needs.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Do you offer warranties on the products?</div>
              <div className="collapse-content">
                <p>Answer: Yes, we provide warranties for most of our gadgets. The warranty duration and conditions vary depending on the brand and product type. Please check each product page for specific warranty details.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Can I return or exchange a product?</div>
              <div className="collapse-content">
                <p>Answer: We accept returns and exchanges within a specified period from the date of purchase, provided the product is unused and in its original packaging. Visit our Return Policy page for detailed information.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">What payment methods do you accept?</div>
              <div className="collapse-content">
                <p>Answer: We accept major credit and debit cards, as well as popular online payment options like PayPal. You can choose your preferred payment method during checkout.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Do you offer repair services for gadgets?</div>
              <div className="collapse-content">
                <p>Answer: Currently, we do not offer repair services. However, we can assist you in finding authorized repair centers for the brands we carry.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">What if I need help choosing the right product?</div>
              <div className="collapse-content">
                <p>Answer: Our customer support team is always ready to help. Contact us through live chat, email, or phone, and we will provide expert advice to help you choose the perfect gadget.</p>
              </div>
            </div>
            
        </div>
    );
};

export default Faq;