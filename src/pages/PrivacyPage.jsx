import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen font-serif">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-[#542018]">
          Terms of Use
        </h1>

        <p>
          Please read these terms of use carefully before using this website. If
          you do not agree to this Terms of Use you may not use this Website. By
          using this Website, you signify your explicit assent to this Terms of
          Use as well as the Website’s Privacy Policy (which is hereby
          incorporated by reference herein). These Terms of Use sets out the
          legally binding terms of services available on the Website as well as
          at the terms of use of this Website. These Terms of Use along with the
          Privacy Policy extends to both users, who visit the Website but do not
          transact business on the Website (Users / Guests) as well as users who
          are registered with by the Website to transact business on the Website
          (Members). The Company reserves the right to modify or terminate any
          portion of the Website or the Services offered by the Company for any
          reason, without notice and without liability to you or any third
          party. You are responsible for regularly reviewing these Terms of Use
          so that you will be apprised of changes, if any. Nothing in these
          Terms of Use should be construed to confer any rights to third party
          beneficiaries.
        </p>

        <h2 className="text-2xl font-semibold text-[#542018]">Definitions</h2>
        <p>
          Jewellery means the jewellery that is predesigned or jewellery set
          with diamonds and/ or gemstones that are available for sale on our
          website. Please note that all Jewellery is sold on as is basis. Mounts
          are defined as designs that hold a diamond(s)/ gemstone(s) in place,
          which may or may not have diamonds/ gemstones. Members can select
          Mounts and diamonds separately to create customized Jewellery. Loose
          Diamonds are individual diamonds that can be bought without being set
          on Mounts.
        </p>

        <h2 className="text-2xl font-semibold text-[#542018]">
          Description of Services
        </h2>
        <p>
        This Website provides access to pricing, news and other information services related to diamonds, precious gems and jewellery. Certain Services available on this Website are for the use of Members only. Please note that some of the terms under these Terms of Use, differ for purchases for personal consumption and for investment purposes. This Website offers services for Members who wish to view diamonds/ jewellery for personal consumption, inclusive of, customized and readymade Jewellery. The Website displays diamonds and gemstones that are specifically recommended for the purpose of investment. Some items may appear slightly larger or smaller than actual size due to screen defaults and photography techniques. Sometimes the items may be represented larger than the actual size in order to clearly show details or smaller than the actual size in order to show the entire item. The Company shall not be liable for any legal action on this account.
        </p>

        {/* Repeat same pattern: h2 for each major heading like Order, Product Availability, etc. */}
        {/* h3 can be used for subpoints like Refunds, Cancellation Policy, Shipping & Delivery */}

        <h2 className="text-2xl font-semibold text-[#542018]">Order</h2>
        <p>
        Retail Purchase Any Member who wishes to purchase an item from the Website can choose from the selection of Jewellery available on the Website and call us or visit us at the store to place an order. The Member will receive the form for ordering via email/ fax/ courier based on their convenience. The Members shall also provide any other mandatory information required under law like Permanent Account Number (PAN) and/or GST number at the time of purchase. Orders, are normally considered complete only after the payment has been received by us. In the event the bank rejects to honour any payment transaction made by a Member towards an order, Sethi jewellers shall have the right to refuse to ship the order to the Member without any liability whatsoever.

        </p>

        <h2 className="text-2xl font-semibold text-[#542018]">
          Product Availability
        </h2>
        <p>
         Sethi jewellers may not own any of the diamonds and other products listed on the Website. In such cases, we only order the products listed on the Website from third party traders and merchants after the confirmation of the order by the Member and deliver the same to the Member. In such a scenario, there is a possibility that the item ordered by the Member might have been traded since the listing on the Website might not be available at that point of time. In the event the diamond(s) get(s) traded in the market before making the payment/ sealing the order, we will call the Member and suggest an alternate diamond. In case the Member chooses a new diamond, we shall confirm the new order. If the cost of the new selection is more expensive than the previous one, the Member shall have to pay the differential amount. If the cost of the new selection is less expensive than the previous one, we shall refund the excess amount to the Member in the manner specified below in this Terms of Use. Pricing Diamond prices vary from one category of diamonds to another and seller to seller where numerous factors like reputation of the sellers, brand value, design of the Jewellery etc. have an impact on the price of the diamond. The demand and supply of diamonds in the market can also affect the price of the diamonds. The prices stated on the Website may be substantially higher or lower than the actual prices in the retail markets. All pricing information available on the Website must be used as a general guideline for diamond prices. While this Website is designed to provide most accurate information, the information about the diamonds does not provide an appraisal or guarantee of value, nor does it give suggestions or recommendation of any sort for buying or selling diamonds. Infrequently, data may be inaccurately displayed on the Website due to system errors. Sethi jewellers reserves the right to correct any and all errors when they do occur and the Company does not honour inaccurate or erroneous prices. The prices on the Website are also subject to change without notice. For any order the price is the prevailing price on the day the order is confirmed. If you have any questions, please do not hesitate to contact us.

        </p>

        <h3 className="text-xl font-semibold text-[#542018]">Advance/ Part Payment</h3>
        <p>
        Sethi jewellers may, at its sole discretion, request the Member to pay a percentage of the value of the transaction as an advance at the time of placing the order. The balance payment for the order shall be paid by the Member at the time of delivery of the product. Failure to pay the balance amount at the time of the delivery of the product shall be treated as a cancellation of the order. Any advance amount paid by the Member at the time of placing the order shall not be refunded by us to the Member in the event of cancellation of the order for any reason whatsoever. We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization of any transaction, on account of the Cardholder having exceeded their pre-set limit.


        </p>


        <h3 className="text-xl font-semibold text-[#542018]">
        Refunds
        </h3>
        <p>
        Any refunds due by Sethi jewellers to the Member for non-availability of diamonds or for selection of alternate diamonds shall be made in the following manner: Credit card: The credit card account of the Member will be re-credited with the refund amount by us. 

        The refund amount will be credited to the Member’s account within the time span stipulated by the bank which has issued the credit card; or Cheque or wire transfer: The refund amount shall be deposited into the bank account of the Member by us within seven (10) business days after the receipt of request for refund by the Member; or Cash or demand draft: If the Member has made an over the counter purchase by paying cash or demand draft, Sethi jewellers shall pay the refund amount to the Member through cash or demand draft within seven (10) business days after the receipt of the payment by us.

        </p>

        <h3 className="text-xl font-semibold text-[#542018]">
          Cancellation Policy
        </h3>
        <p>
        Once an order is placed and payment is made, it won’t be possible to accommodate for any kind of cancellation request. However, we can evaluate genuine cancellation requests on a case to case basis, basis the sole discretion of management at Sethi Jewellers. 

        Please note, due to fluctuating price of metals, cancellation policy is strictly not applicable for customised ornaments/ bullion metals/ coins

        </p>

        <h3 className="text-xl font-semibold text-[#542018]">
          Shipping & Delivery
        </h3>
        <p>
          At the time of placing the order, the Member shall state the full name of the recipient as stated in his/ her (receipient’s) government approved photo identification. At the point of delivery the recipient shall collect the product, by furnishing any one of the following government approved photo identification card: Ration Card ( should be issued in the name of the Member/ recipient ); Drivers License; Permanent Account Number (PAN) card; Voters Identification card; or Passport. Delivery shall be made by the Company/ courier agent only after the photo and name of the recipient is verified and confirmed by them. To ensure safe and secure delivery of the package the details of the government photo identification will be noted. The recipient of the package must cooperate with the courier agent by providing required and valid copies of his/ her government approved photo identification. In case the Member wants any other person to receive the delivery on his behalf he/ she needs to specify details of the same at the point of ordering. All items shall be delivered directly to such person and under any circumstances whatsoever, the Member cannot change the recipient details after the order is processed. The Member has the option to change the shipping address, before the product is actually shipped. All shipping charges and other local charges shall be borne by the Company if minimum order value is ordered by customer. Recipient accepting delivery should carefully examine the package delivered and shall not accept deliveries where the packaging has been tampered with. The recipient receiving the delivery also has the option to open the package and check its contents prior to accepting the delivery or signing the delivery receipt. They shall not accept deliveries, where they find that the box is empty or the contents are damaged or the contents are not in accordance to the order placed. The recipient, upon signing the delivery receipt, acknowledges the receipt of the product in terms of the order placed with the Company. The Company is not liable to the Customer/ recipient for any refund/ replacement, under any circumstance, for any subsequent complaints with respect to such deliveries If the recipient is not available at the time of delivery, the Company/ courier agent shall try and deliver the item thrice before returning the same to us. All costs for re-shipment and handling in the case of non-delivery to the Member shall be chargeable to the Member. Guarantee for delivery made by the Company is subject to terms and conditions of the courier company. Any inconsistency/ errors in name or address will result in non delivery of the product.


        </p>

        {/* Continue with all other sections exactly as you provided,
            but structured with <h2> and <h3> where relevant. */}


        <h2 className="text-2xl font-semibold text-[#542018]">
        Diamonds
        </h2>
        <p>
        All Loose Diamonds (both investment and retail) and diamonds that are set in Jewellery will be accompanied by individual certificates. Buyers are requested to produce these certificates at the time of return. 
        </p>


        <h2 className="text-2xl font-semibold text-[#542018]">
        Jewellery/ Mounts
        </h2>
        <p>
        The diamonds in the Jewellery/ Mounts will not be individually certified unless expressly mentioned at the point of placing the order. The entire Jewellery will be certified either by an independent third party certifying authority or by Sethi jewellers depending on the value of the Jewellery.
        </p>

        <h2 className="text-2xl font-semibold text-[#542018]">
        RESIZING & REPAIRS
        </h2>
        <p>
        If you want to resize your ring, the company will resize it free of cost except in certain cases where the resizing is not possible. If the resized ring costs more than the existing ring, the incremental cost shall be borne by the customer. If the resized ring costs less than the existing ring, the differential amount shall be refunded to the customer. In case of a refund, the payment of the same shall be made within 20 days of dispatch of the resized product. If for some reasons, your product needs to be repaired, the company shall repair/ replace the product for charges which would be determined by the company on a case to case basis. Shipping charges under Repairs & Resizing policy shall be borne by the customer. This feature is not available for international orders (orders that will be shipped abroad from India).
        </p>




        <h2 className="text-2xl font-semibold text-[#542018]">
          Terms & Conditions of use of the website
        </h2>
        <p>
          BY USING THIS WEBSITE YOU REPRESENT AND WARRANT THAT: You are 18 years of age or older and that your use of the Website and/ or Services shall not violate any applicable law or regulation. All registration information you submit is truthful and accurate and that you agree to maintain the accuracy of such information. Your membership is solely for your personal and non-commercial use. Any use of this Website or its content other than for personal purposes is prohibited. Your personal and non-commercial use of this Website shall be subjected to the following restriction (i) you may not modify any content of the Website, including but not limited to, any public display, description, performance, sale, rental, pricing of the product; (ii) you may not decompile, reverse engineer, or disassemble the content, or (c) remove any copyright, trademark registration, or other proprietary notices from the content. You further agree not to access or use this Website in any manner that may be harmful to the operation of this Website or its content You will not (a) use any product or service available on the Website and/ Services for commercial purposes of any kind, or (b) advertise or sell any products, services or otherwise (whether or not for profit), or solicit others (including, without limitation, solicitations for contributions or donations) or use any public forum for commercial purposes of any kind, or (c) use the Website and/ or Services in any way that is unlawful, or harms Sethi jewellers or any other person or entity, as determined in the our sole discretion. In the event you want to advertise your product contact You will not post, submit, upload, distribute, or otherwise transmit or make available any software or other computer files that contain a virus or other harmful component, or otherwise impair or damage the Website and/ or Services or any connected network, or otherwise interfere with any person or entity’s use or enjoyment of the Website and/ or Services You will not engage in any form of antisocial, disrupting, or destructive acts, including flaming, spamming, flooding, trolling, phishing and griefing as those terms are commonly understood and used on the Internet. You will not delete or modify any content of the Website and/ or Services, including but not limited to, legal notices, disclaimers or proprietary notices such as copyright or trademark symbols, logos, that you do not own or have express permission to modify. We cannot and will not assure that other users are or will be complying with the foregoing rules or any other provisions of this Terms of Use, and, as between you and Sethi jewellers, you hereby assume all risk of harm or injury resulting from any such lack of compliance. All information, content and material contained in the Website and/ or Services are Sethi jewellers’ copyrighted property. All trademarks, services marks, trade names, and trade dress are proprietary to Sethi jewellers. No information, content or material from the Website and/ or Services may be copied, reproduced, republished, uploaded, posted, transmitted or distributed in any way without our consent express written permission You acknowledge that when you access a link that leaves the Website, the site you will enter into is not controlled by us and different terms of use and privacy policy may apply. By accessing links to other sites, you acknowledge that we are not responsible for those sites. Sethi jewellers reserves the right to disable links from third-party sites to the Website, although we are under no obligation to do so.

        </p>

        <h2 className="text-2xl font-semibold text-[#542018]">
          YOU EXPRESSLY UNDERSTAND AND AGREE THAT
        </h2>
        <p>
          The information, content and materials on this website and/ or services are provided on an as is and as available basis. Sethi jewellers and all its affiliates, officers, employees, agents, partners and licensors disclaim all warranties of any kind, either express or implied, including but not limited to, implied warranties on Sethi jewellers, fitness for a particular purpose and non-infringement. we make all reasonable efforts to display the products listed for sale on its web site(s) as accurately as possible. However, we cannot guarantee that your monitor’s display of any product color, texture or detail will be accurate. We do not warrant that product descriptions or other content are accurate, complete, reliable current or error free. Any material downloaded or otherwise obtained through the website and/ or services are accessed at your own risk, and you will be solely responsible for any damage or loss of data that results from such download to your computer system. You hereby indemnify, defend, and hold Sethi jewellers, our distributors, agents, representatives and other authorized users, and each of the foregoing entities’ respective resellers, distributors, service providers and suppliers, and all of the foregoing entities’ respective officers, directors, owners, employees, agents, representatives, harmless from and against any and all losses, damages, liabilities and costs arising from your use of the website. You expressly understand that under no circumstances, including, but not limited to, negligence, shall the company be liable to you or any other person or entity for any direct, indirect, incidental, special, or consequential damages, including, but not limited to damages for loss of profits, goodwill, use, data or other intangible losses, resulting from circumstances, including but not limited to: (i) the use or the inability to use the website and/ or services; or (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into through or from the website and/ or services or (iii) unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third party on the website and/ or services; or (v) any other matter relating to the website and/ or services. We or any of the foregoing entities’ respective resellers, distributors, service providers and suppliers be relieved of all its responsibilities, if any, in the event of failure of performance resulting directly or indirectly from an act of force majeure or causes beyond the company’s reasonable control including, without limitation, acts of god, war, equipment and technical failures, electrical power failures or fluctuations, strikes, labour disputes, riots, civil disturbances, shortages of labour or materials, natural disasters, orders of domestic or foreign courts or tribunals, non-performance of third parties, or any reasons beyond the reasonable control of the company or any of the foregoing entities’ respective resellers, distributors, service providers and suppliers. you further acknowledge and agree that neither the company nor any of the foregoing entities’ respective resellers, distributors, service providers and suppliers are responsible or liable for (a) any incompatibility between the website and/ or services and any other website, service, software or hardware or (b) any delays or failures you may experience with any transmissions or transactions relating to the website in an accurate or timely manner. Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations of may not apply to you. Each paragraph, clause, sub-clause and provision of this terms of use shall be severable from each other and if for any reason any paragraph, clause, sub-clause or provision is invalid or unenforceable, such invalidity or enforceability shall not prejudice or in any way affect the validity or enforceability of any other paragraph, clause, sub-clause or provision, which shall be read and construed so as to give thereto, the full effect thereof, subject only to any contrary provision of the law to the effect that where this provision of this terms of use or any paragraph, clause, sub-clause or provision hereof would be but for the provisions of this paragraph read and construed as being void or ineffective it shall nevertheless be a valid terms of use, paragraph, clause, sub-clause or provision, as the case may be, to the full extent to which it is not contrary to any provision of the law. Those who access the website and/ or services do so, on their own initiative and are responsible for compliance with all applicable laws including, but not limited to, any applicable local laws. These terms of use is governed by the laws of india. Any action, suit, or other legal proceeding, which is commenced to resolve any matter arising under or relating to this letter, shall be subject to the jurisdiction of the courts. All the contents on the website, of any manner, whatsoever, is Copyrighted work is protected under Indian Copyright Act, 1957. The unauthorized reproduction and distribution of our Copyrighted Work via the internet without our express permission constitute copyright infringement under the Copyright Act, 1957. Your act of infringement of our Copyrighted copyright and proprietary right makes you liable for action in law that includes prosecution under the Code of Civil Procedure, 1908 and Code of Criminal Procedure, 1973 In the event of breach of the terms and conditions of these terms of use by the user, the user shall be promptly liable to indemnify Sethi jewellers for all the costs, losses and damages caused to us as a result of such a breach. Further in the event of your breach of this terms of use, you agree that Sethi jewellers will be irreparably harmed and will not have an adequate remedy in money or damages. We therefore, shall be entitled in such event to obtain an injunction against such a breach from any court of competent jurisdiction immediately upon request. We right to obtain such relief shall not limit its right to obtain other remedies. Any failure of Sethi jewellers to exercise or enforce any right or provision of these terms of use shall not operate as a waiver of such right or provision. I HAVE READ THE TERMS OF USE AND AGREE TO ALL OF THE PROVISIONS CONTAINED ABOVE.

        </p>

        <p className="font-bold mt-6">
          I HAVE READ THE TERMS OF USE AND AGREE TO ALL OF THE PROVISIONS
          CONTAINED ABOVE.
        </p>
      </main>
      <Footer />
    </div>
  );
}
