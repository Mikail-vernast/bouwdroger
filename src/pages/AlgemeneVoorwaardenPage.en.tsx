import { CONTACT } from "@/lib/site";

/**
 * De Engelse tekst van de algemene voorwaarden: een getrouwe vertaling (Brits
 * Engels) van de Nederlandse in `AlgemeneVoorwaardenPage.tsx`, artikel voor
 * artikel en kop voor kop. Niets toegevoegd, niets geschrapt — ook de schikking
 * dat bij tegenstrijdigheid de Nederlandse tekst leidend is (art. 2) staat er.
 *
 * Termen: Huurder → "Hirer", Huurmaterieel → "Rental Equipment", Dagwaarde →
 * "Current Value". Een aparte term voor de verhuurder is er niet nodig: de
 * Nederlandse tekst noemt overal Vernast bij naam.
 *
 * Staat in een eigen bestand omdat het samen met de Nederlandse tekst ruim
 * 900 regels juridische JSX zou zijn. Wijzig je de Nederlandse tekst, pas deze
 * dan mee aan en laat ze door een jurist nalezen.
 */
const VoorwaardenEn = () => (
  <>
    {/* ================= LEGAL ================= */}
    <section className="legal">
      <div className="wrap">
        <nav className="lnav" aria-label="Articles">
          <div className="lt">All articles</div>
          <a href="#art1"><i>Art. 1</i> Definitions</a>
          <a href="#art2"><i>Art. 2</i> Validity and application</a>
          <a href="#art3"><i>Art. 3</i> Formation of the agreement</a>
          <a href="#art4"><i>Art. 4</i> Composition and obligations</a>
          <a href="#art4a"><i>Art. 4A</i> Bespoke construction drying</a>
          <a href="#art5"><i>Art. 5</i> Hire period and termination</a>
          <a href="#art6"><i>Art. 6</i> Delivery and collection</a>
          <a href="#art7"><i>Art. 7</i> Inspection and defects</a>
          <a href="#art8"><i>Art. 8</i> Return and risk</a>
          <a href="#art9"><i>Art. 9</i> Guidelines for the Hirer</a>
          <a href="#art10"><i>Art. 10</i> Pricing and changes</a>
          <a href="#art11"><i>Art. 11</i> Damage, loss and liability</a>
          <a href="#art12"><i>Art. 12</i> Transport</a>
          <a href="#art13"><i>Art. 13</i> Liability of Vernast</a>
          <a href="#art14"><i>Art. 14</i> Reservation and cancellation</a>
          <a href="#art15"><i>Art. 15</i> Invoicing and payment</a>
          <a href="#art16"><i>Art. 16</i> Force majeure</a>
          <a href="#art17"><i>Art. 17</i> Deposit</a>
          <a href="#art18"><i>Art. 18</i> Information and IP rights</a>
          <a href="#art19"><i>Art. 19</i> Insurance and risk cover</a>
          <a href="#art20"><i>Art. 20</i> Privacy policy</a>
          <a href="#art21"><i>Art. 21</i> Final provisions and jurisdiction</a>
        </nav>

        <div className="lcol">
          <p className="meta">Last updated: August 2026</p>

          <article id="art1">
            <h2><em>Definitions</em>Article 1 – Definitions</h2>
            <p>In these General Terms and Conditions of Hire of Vernast, the following capitalised terms have the meanings set out below:</p>
            <dl>
              <dt>Offer</dt><dd>A proposal by Vernast to conclude an Agreement, which shows that Vernast intends to be bound by it upon acceptance.</dd>
              <dt>GDPR</dt><dd>The General Data Protection Regulation, as adopted by the EU in Regulation (EU) 2016/679.</dd>
              <dt>Annexes</dt><dd>Specific supplementary terms that apply to certain hire categories within Vernast.</dd>
              <dt>Vernast</dt><dd>The legal entity with which the Agreement is concluded, namely VRNST.</dd>
              <dt>Current Value</dt><dd>The replacement value less depreciation due to ageing or wear and tear.</dd>
              <dt>Defects</dt><dd>Faults in the Rental Equipment, attributable to Vernast, which already existed before delivery to the Hirer and which affect its functionality.</dd>
              <dt>Information</dt><dd>All documentation, such as manuals and instructions, provided by Vernast or available on the website.</dd>
              <dt>Hirer</dt><dd>Any natural or legal person who enters into an Agreement with Vernast, including representatives.</dd>
              <dt>Rental Equipment</dt><dd>All goods offered for hire by Vernast, including accessories and replacement parts.</dd>
              <dt>Quote</dt><dd>A written proposal from Vernast to the Hirer to enter into an Agreement.</dd>
              <dt>Total Amount</dt><dd>The full amount owed by the Hirer under the Agreement.</dd>
              <dt>Agreement</dt><dd>The contractual arrangement between Vernast and the Hirer to which these terms apply.</dd>
              <dt>Parties</dt><dd>Vernast and the Hirer together.</dd>
              <dt>In Writing</dt><dd>In physical form or electronically by e-mail, provided it is sent by authorised representatives of Vernast or (depending on the context) the Hirer.</dd>
              <dt>Terms of Hire</dt><dd>These General Terms and Conditions of Vernast.</dd>
              <dt>Working Day</dt><dd>Monday to Friday from 07.00 to 21.00, and Saturday from 09.00 to 13.00.</dd>
            </dl>
          </article>

          <article id="art2">
            <h2><em>Article 2</em>Validity and Application</h2>
            <h3>General Application</h3>
            <p>These Terms of Hire apply to every Offer, Quote and Agreement between the Parties. This includes implied or express renewals, follow-up orders or repeat agreements, unless the Parties have agreed otherwise In Writing.</p>
            <h3>Application of Annexes</h3>
            <p>Where specific hire terms apply from certain departments of Vernast, such as for the hire of specialist Rental Equipment, the relevant Annexes apply in addition to the Terms of Hire. For example, when hiring a particular item, the applicable Annex is valid in addition to the standard Terms of Hire.</p>
            <h3>Changes and Additions</h3>
            <p>Any deviations from or additions to the Agreement, the Terms of Hire or the Annexes are valid only if expressly confirmed In Writing by Vernast. If Vernast permits such deviations, this has no effect on future agreements.</p>
            <h3>Exclusion of the Hirer&apos;s Terms</h3>
            <p>The Hirer acknowledges that its own general terms and conditions do not apply to the Agreement. References to the Hirer&apos;s general terms and conditions are regarded as standard references without legal consequences in the relationship between the Parties.</p>
            <h3>Precedence of the Agreement</h3>
            <p>In the event of any conflict between the Terms of Hire and/or Annexes and the Agreement, the content of the Agreement prevails.</p>
            <h3>Language Versions</h3>
            <p>In the event of any conflict between the Dutch version of the Terms of Hire and/or Annexes and translations thereof, the Dutch text prevails.</p>
            <h3>Vernast&apos;s Right to Amend</h3>
            <p>Vernast reserves the right to amend or supplement these Terms of Hire and Annexes. Amendments also apply to existing Agreements, provided this has been agreed In Writing between the Parties or the Hirer has not objected within 30 days of written notification of the amendments.</p>
          </article>

          <article id="art3">
            <h2><em>Article 3</em>Formation of the Agreement</h2>
            <h3>Offers by the Hirer</h3>
            <p>Requests for hire by the Hirer are regarded as binding proposals to enter into an Agreement. An Agreement is deemed to be concluded upon written confirmation by Vernast of the Hirer&apos;s hire request.</p>
            <h3>Acceptance of a Quote or Offer</h3>
            <p>An Agreement is also formed when the Hirer accepts a Quote or Offer from Vernast, unless Vernast withdraws the Quote or Offer within no more than three Working Days of acceptance by the Hirer.</p>
            <h3>Electronic Signature at Branches</h3>
            <p>Agreements concluded at Vernast&apos;s branches are signed electronically. The Agreement takes effect as soon as the Hirer signs it electronically. Prior to signing, the Hirer can consult, download and save the Terms of Hire and any supplementary plans via Vernast&apos;s website. The electronically signed Agreement, including the Terms of Hire and any supplementary documents, is sent to the e-mail address provided by the Hirer immediately after signing.</p>
            <h3>Commencement of Performance</h3>
            <p>Notwithstanding the above, an Agreement is always deemed to have been concluded at the moment Vernast begins performing the Agreement.</p>
          </article>

          <article id="art4">
            <h2><em>Article 4</em>Composition and Obligations of the Agreement</h2>
            <h3>Definition of the Agreement</h3>
            <p>The content and scope of Vernast&apos;s obligations are determined by the accepted Quote, the Agreement itself, the Terms of Hire, relevant Annexes and all arrangements recorded In Writing. In the event of discrepancies between the Quote and the Agreement, the Agreement prevails.</p>
            <h3>Permissible Deviations</h3>
            <p>Vernast may make minor, non-essential changes to the Agreement, provided these changes do not relate to the essential requirements communicated In Writing by the Hirer before the Agreement was concluded. These changes may not materially alter Vernast&apos;s performance. This includes making available comparable Rental Equipment in terms of quality and performance.</p>
            <h3>Hirer&apos;s Right to Terminate</h3>
            <p>If the Hirer can demonstrate that the Rental Equipment deviates significantly from the Agreement or from the Information provided by Vernast, such that performance would be unreasonable, the Hirer is entitled to terminate the Agreement. In that case, however, Vernast is not obliged to pay any form of compensation.</p>
            <h3>Engagement of Third Parties by Vernast</h3>
            <p>Vernast reserves the right, in order to fulfil its obligations under the Agreement, to hire similar Rental Equipment or personnel through a third party.</p>
            <h3>Restart Costs for Service Visits</h3>
            <p>If Vernast has to attend on site to restart the installation, costs will be charged depending on the scope and complexity of the task, including any travel costs, with a minimum of €125.00 excl. VAT. These costs apply if the need to restart was caused by circumstances unrelated to the functionality or quality of the hired equipment, such as acts or omissions of the Hirer or external factors. These costs are invoiced separately and are independent of the standard hire charges.</p>
          </article>

          <article id="art4a">
            <h2><em>Article 4A</em>Bespoke Construction Drying Service</h2>
            <h3>Reservation and On-site Inspection</h3>
            <p>When you reserve our construction drying service, Vernast guarantees an expert and tailored approach. This process begins with a detailed on-site inspection by one of our qualified experts. Based on this inspection, personalised advice is issued for your specific construction drying needs.</p>
            <h3>Installation after Advice</h3>
            <p>We always arrive on site fully equipped so that, immediately after giving our advice, we can proceed with the installation of the required rental equipment. This ensures an efficient and fast service. However, if the customer, after receiving our advice and drawing up the order form, decides to agree on a different time for the installation, we can offer this flexibility.</p>
            <h3>Building Inspection and Advice Procedure</h3>
            <p>Should you, after receiving our tailored advice, decide not to proceed with the proposed construction drying, certain costs are payable. These comprise the transport costs and any costs related to the inspection. These costs apply unless otherwise agreed in your contract. This arrangement ensures that we can continue to provide our customers with a professional, high-quality service.</p>
          </article>

          <article id="art5">
            <h2><em>Article 5</em>Hire Period and Termination</h2>
            <h3>Commencement of the Hire Period</h3>
            <p>The hire period begins on the agreed start date, or at the moment Vernast makes the Rental Equipment available or delivers it, whichever occurs first.</p>
            <h3>End of the Hire Period</h3>
            <p>The hire period ends on the agreed end date, or at the moment that:</p>
            <ol type="a">
              <li>The Rental Equipment has been returned by the Hirer and a confirmation of receipt has been issued by Vernast.</li>
              <li>The Rental Equipment is collected by Vernast, in accordance with the conditions in the off-hire notice. If the agreed hire term has expired and Vernast is unable to collect the Rental Equipment in time, the Hirer is expected to have the Rental Equipment ready for collection and to make no further use of it from that moment. If, after expiry of the hire term, the Rental Equipment is nevertheless used and this is detected, additional costs will be charged to the Hirer.</li>
            </ol>
            <h3>Open-ended Agreements</h3>
            <p>If no specific end date has been agreed, the Agreement ends on the date stated in the off-hire notice.</p>
            <h3>Off-hire Procedure</h3>
            <p>The Hirer must off-hire the Rental Equipment by e-mail, stating the following information: contact details, contract number, description of the Rental Equipment, desired end date, collection location, contact person and instructions for the driver.</p>
            <h3>Partial Off-hire</h3>
            <p>Where several items are hired, the Hirer may give a partial off-hire notice. Any additional costs arising from this are borne by the Hirer. The Agreement remains valid for the remaining Rental Equipment until the official end date.</p>
            <h3>Minimum Notice Period</h3>
            <p>There must be at least one Working Day between the off-hire notice and the desired end date. The desired end date may not be earlier than the originally agreed end date, unless otherwise agreed In Writing.</p>
            <h3>Default on Failure to Return</h3>
            <p>If the Rental Equipment has not been returned or properly made available on the agreed date, the Hirer is immediately in default, unless a report of theft has been filed.</p>
            <h3>Uncollected Rental Equipment</h3>
            <p>If the Hirer fails to collect the Rental Equipment, the (payment) obligations continue to apply.</p>
            <h3>Early Termination</h3>
            <p>Early off-hire or return of the Rental Equipment does not release the Hirer from the obligation to pay until the end of the agreed hire period, unless otherwise agreed In Writing.</p>
            <h3>Interruptions to the Hire Period</h3>
            <p>The hire period is not interrupted by (frost) downtime, weekends or public and bank holidays, unless otherwise agreed In Writing.</p>
          </article>

          <article id="art6">
            <h2><em>Article 6</em>Collection and Delivery of Rental Equipment, Transfer of Risk and Delivery Details</h2>
            <h3>Duty to Collect and Responsibility for Delivery</h3>
            <p>Unless otherwise agreed, the Hirer collects the Rental Equipment from a Vernast location, or Vernast delivers the Rental Equipment to an agreed location.</p>
            <h3>Identification and Delivery Confirmation</h3>
            <p>On collection, the Hirer or its representative must provide identification. The final delivery date and time are confirmed by means of a Google Calendar invitation. An SMS is sent approximately 30 minutes before arrival.</p>
            <h3>Delivery Times and Communication</h3>
            <p>The selected delivery date is indicative. Vernast aims to deliver within 72 hours. On the day of delivery, the expected time of arrival is communicated, taking external factors into account.</p>
            <h3>Installation and Moisture Reading</h3>
            <p>During installation, Vernast carries out a detailed moisture reading, the results of which are recorded on the order/delivery note. Photographs of these readings are available on request.</p>
            <h3>Technical Support</h3>
            <p>Expert technicians provide advice on the drying process. For complex questions, our building team can be reached by e-mail.</p>
            <h3>Delivery Note/Order Form and Collection Procedure</h3>
            <p>On both delivery and collection, a delivery note/order form is drawn up, which must be signed by the Hirer or its representative. The final collection date and time are likewise confirmed by means of a Google Calendar invitation.</p>
            <h3>Transfer of Risk</h3>
            <p>Risk passes to the Hirer at the moment of handover on collection, or on delivery at the agreed location.</p>
            <h3>Deviations from Delivery Times</h3>
            <p>If the delivery time is exceeded, the Hirer is requested to inform Vernast in writing and in detail. Vernast will endeavour to deliver within 48 hours after all. If delivery has still not taken place after this period, the Hirer is entitled to terminate the Agreement.</p>
            <h3>Partial Delivery and Accessibility</h3>
            <p>Vernast may opt for partial delivery or wait until the complete order is ready. The Hirer must ensure that the delivery location is accessible. Additional costs due to inaccessibility or the absence of an authorised person are borne by the Hirer.</p>
          </article>

          <article id="art7">
            <h2><em>Article 7</em>Inspection, Defects and Notifications by the Hirer</h2>
            <h3>Initial Inspection and Notification</h3>
            <p>Immediately upon receipt, the Hirer must check the Rental Equipment for visible Defects. Any Defects must be noted on the delivery note or reported to Vernast In Writing and in detail within 24 hours of receipt. The Rental Equipment is presumed to have been delivered in good condition and in accordance with the Agreement, unless otherwise indicated on the delivery note or reported within the stated period.</p>
            <h3>Defects During the Hire Period</h3>
            <p>If a Defect comes to light during the hire period, the Hirer must inform Vernast of it In Writing and in specific terms within 48 hours of discovery. Vernast will endeavour to remedy the Defect within a reasonable period or to supply replacement Rental Equipment.</p>
            <h3>Lapse of the Right to Claim</h3>
            <p>The Hirer&apos;s right to bring claims against Vernast on the basis of Defects lapses if:</p>
            <ol>
              <li>The Defect was not reported within the stated periods or in the prescribed manner.</li>
              <li>The Hirer does not cooperate sufficiently with the investigation of the complaint, or does not enable Vernast to repair or replace the Defect.</li>
              <li>The Rental Equipment has been used or maintained incorrectly or under unsuitable conditions.</li>
              <li>The Hirer has carried out, or had carried out, repairs or modifications without the prior written consent of Vernast.</li>
              <li>The Rental Equipment was put into use, or its use was continued, after the Defects were discovered.</li>
            </ol>
          </article>

          <article id="art8">
            <h2><em>Article 8</em>Return of Rental Equipment and Transfer of Risk</h2>
            <h3>Conditions for Return</h3>
            <p>The Hirer is obliged to return the Rental Equipment to Vernast clean, in good order and in the same condition as when received, allowing for normal wear and tear, including all keys, Information and accessories.</p>
            <h3>Collection by Vernast</h3>
            <p>If it has been agreed that Vernast will collect the Rental Equipment, this is expected to take place on the agreed or notified off-hire date, usually between 08.00 and 20.00.</p>
            <h3>Accessibility and Availability on Collection</h3>
            <p>The Hirer ensures that the Rental Equipment is ready for transport at the agreed location and is easily accessible. If these conditions are not met, Vernast may still decide to take the Rental Equipment away, with any additional costs for the Hirer.</p>
            <h3>Hirer&apos;s Responsibility until Collection</h3>
            <p>Until the moment of collection by Vernast, but no longer than two full Working Days after the end of the hire period, the Hirer is responsible for the Rental Equipment and liable for any fines, damage or loss.</p>
            <h3>Return at the Agreed Location</h3>
            <p>If the Hirer collects the Rental Equipment itself, it must be returned on the end date to the agreed location or, failing that, to the location where it was collected, unless Vernast has indicated otherwise in writing. This is only possible during the opening hours of the branch concerned.</p>
            <h3>Inspection after Return</h3>
            <p>After return, the Rental Equipment is inspected by Vernast or a third party. Collection does not count as such an inspection. If the Hirer wishes to be present at the inspection, this must be indicated when entering into the Agreement.</p>
            <h3>Soiling, Packaging and Assessment of Damage</h3>
            <p>If soiling, contamination or incorrect packaging is found without the Hirer being present, the findings are binding and the costs are passed on to the Hirer. In the event of damage, the Hirer is informed in writing and given a period in which to obtain a counter-assessment. After this period, repair or replacement costs are charged on.</p>
          </article>

          <article id="art9">
            <h2><em>Article 9</em>Responsibilities and Guidelines for the Hirer</h2>
            <h3>Rules of Use</h3>
            <p>The Hirer and anyone who uses the Rental Equipment on behalf of or under the responsibility of the Hirer must comply with the following guidelines:</p>
            <ul>
              <li>Use of the Rental Equipment is restricted to Belgium or the Netherlands, unless otherwise agreed In Writing.</li>
              <li>The Rental Equipment may only be used by persons holding the required qualifications, certificates and permits.</li>
              <li>Use must be in accordance with applicable (inter)national laws and regulations.</li>
              <li>The Hirer is responsible for obtaining and maintaining the permits and approvals required for the use of the Rental Equipment.</li>
              <li>Modifications to the Rental Equipment are not permitted, except for what is customary in normal use.</li>
            </ul>
            <h3>Maintenance and Repairs</h3>
            <ul>
              <li>The Hirer must carry out Daily Maintenance. Damage resulting from incorrect or insufficient maintenance is borne by the Hirer.</li>
              <li>Repairs may only be carried out by Vernast, unless they concern minor repairs. If maintenance is required, it is carried out by Vernast and the costs are passed on to the Hirer.</li>
            </ul>
            <h3>Taxes and Fines</h3>
            <p>The Hirer is responsible for paying all taxes, fines and related administrative costs arising from the use of the Rental Equipment during the hire period.</p>
            <h3>Sub-hire and Making Available to Third Parties</h3>
            <p>The Hirer is not permitted to sub-hire the Rental Equipment or make it available to third parties without the express written consent of Vernast.</p>
            <h3>Access to Rental Equipment</h3>
            <p>The Hirer must at all times give Vernast and designated persons access to the Rental Equipment and indemnify Vernast against claims by third parties.</p>
            <h3>Instructions to Staff</h3>
            <p>Vernast&apos;s staff are not obliged to follow instructions from the Hirer or to carry out work under the Hirer&apos;s supervision.</p>
            <h3>Attachment and Bankruptcy</h3>
            <p>In the event of attachment, a moratorium on payments or bankruptcy, the Hirer must immediately inform the parties involved of Vernast&apos;s rights and disclose the Agreement to them.</p>
            <h3>Duty to Notify of Attachment</h3>
            <p>The Hirer must inform Vernast immediately In Writing of any attachment of or claims on the Rental Equipment and provide a copy of the attachment documents.</p>
          </article>

          <article id="art10">
            <h2><em>Article 10</em>Pricing and Changes</h2>
            <h3>Conditional Prices</h3>
            <p>Unless otherwise agreed In Writing, the prices stated by Vernast are subject to change. These changes may be based on factors such as inflation, market developments, changes in the cost of materials or fuels, or changes in laws and regulations.</p>
            <h3>Price Changes after the Agreement</h3>
            <p>The prices agreed in the Agreement apply specifically to the agreed services. Vernast reserves the right to increase prices in the event of additional work, cost increases related to the performance of the Agreement (such as changes in transport costs, import duties, taxes, wages, social security charges and exchange rates) or as a result of changes in legislation.</p>
            <h3>Daily and Weekly Rates</h3>
            <p>The daily rates, as stated on Vernast&apos;s website, are based on a hire period of no more than 24 hours, and weekly rates on a period of no more than 168 hours. Different rates apply to Rental Equipment with an hour meter: a daily rate for no more than 8 operating hours and a weekly rate for no more than 40 operating hours. If these limits are exceeded, an additional surcharge applies.</p>
            <h3>Weekend Rates</h3>
            <p>The price for weekend hire (from Friday to Monday) is based on no more than 72 hours of hire, with Sunday not being charged.</p>
            <h3>Long Hire Periods</h3>
            <p>For hire periods longer than four weeks, prices are available on request.</p>
            <h3>Exclusions from Hire Prices</h3>
            <p>The stated hire prices exclude (mandatory) accessories, maintenance, consumables, fuel, oil, transport, loading and unloading, environmental levies, cleaning and any surcharges for damage waiver and fire/theft schemes.</p>
          </article>

          <article id="art11">
            <h2><em>Article 11</em>Damage, loss and liability of the Hirer</h2>
            <h3>Reporting Damage</h3>
            <p>The Hirer must report any damage to the Rental Equipment sustained during the period of responsibility to Vernast In Writing immediately upon discovery, and in any event within 24 hours.</p>
            <h3>Theft or Loss</h3>
            <p>In the event of theft or loss of the Rental Equipment, the Hirer must report this to Vernast within 24 hours of discovery and file a report with the police, including all relevant details of the stolen Rental Equipment. A copy of the police report must be handed to Vernast.</p>
            <h3>Consequences of Failure to Report</h3>
            <p>Failure to file a report or to produce the police report is regarded as misappropriation and results in the loss of any insurance cover or waiver schemes.</p>
            <h3>End Date of the Agreement in the Event of Theft</h3>
            <p>The date of the presumed theft, as stated in the police report, is regarded as the end date of the Agreement for the stolen Rental Equipment. The Agreement remains in force for other hired Rental Equipment.</p>
            <h3>Financial Responsibility for Damage or Loss</h3>
            <p>In the event of theft or total loss of the Rental Equipment, the Hirer is obliged to compensate the Current Value. If repair is possible, the Hirer must bear the repair costs.</p>
            <h3>Set-off on Recovery of Missing Equipment</h3>
            <p>If missing Rental Equipment is later recovered and returned, the Hirer owes hire up to the date of return, less the Current Value of the returned Rental Equipment.</p>
            <h3>Assessment of Damage and Repair Costs</h3>
            <p>The extent of the damage and the costs of repair and cleaning are determined by Vernast or by an expert appointed by it.</p>
            <h3>Insurance and Liability</h3>
            <p>Vernast confirms that liability insurance has been taken out for objects that are subject to compulsory insurance by law. Nevertheless, the Hirer is responsible for:</p>
            <ul>
              <li>Damage not covered by the insurance because of statutory exclusions.</li>
              <li>Damage caused under the influence of alcohol or drugs.</li>
              <li>The excess under the policy.</li>
              <li>Damage to pipes and cables, or consequential damage arising from it.</li>
              <li>Fines and costs related to the use of unregistered work equipment on public roads.</li>
              <li>Damage outside traffic (operational risk) and under other statutory exclusions.</li>
            </ul>
          </article>

          <article id="art12">
            <h2><em>Article 12</em>Transport</h2>
            <h3>Risk where the Hirer Arranges its Own Transport</h3>
            <p>Where the Hirer arranges the transport, the risk of loss of or damage to the Rental Equipment lies with the Hirer. The Hirer must package the Rental Equipment adequately and load/unload it in accordance with the nature of the equipment and the mode of transport.</p>
            <h3>Use of Vernast Staff</h3>
            <p>If Vernast staff assist with loading/unloading or coupling at the Hirer&apos;s request, this is done at the Hirer&apos;s risk.</p>
          </article>

          <article id="art13">
            <h2><em>Article 13</em>Liability of Vernast</h2>
            <h3>Limited Liability</h3>
            <p>Vernast&apos;s liability is limited to direct damage to property and persons caused by demonstrable Defects in the Rental Equipment or by wilful misconduct or deliberate recklessness on the part of Vernast. Liability for indirect damage, such as the hire of replacement items, loss of turnover and damage due to delay, is expressly excluded.</p>
            <h3>Maximum Liability</h3>
            <p>Except in the case of personal injury or intentionally caused damage, the maximum amount for which Vernast can be liable is limited to the Order Amount or the value of one instalment invoice in the case of long-term hire, unless the insurer pays out a higher amount.</p>
            <h3>Indemnification by the Hirer</h3>
            <p>The Hirer indemnifies Vernast against claims by third parties relating to the Rental Equipment.</p>
            <h3>Limitation of Liability Claims</h3>
            <p>Vernast&apos;s liability lapses twelve months after the date on which the damage occurred.</p>
            <h3>Set-off of Claims</h3>
            <p>Vernast may set off any claims of the Hirer against claims on companies affiliated with the Hirer.</p>
          </article>

          <article id="art14">
            <h2><em>Article 14</em>Reservation and cancellation</h2>
            <h3>Reservation Process</h3>
            <p>A binding Agreement is formed when the Hirer reserves Rental Equipment.</p>
            <h3>Failure to Collect</h3>
            <p>If the Hirer does not collect the reserved Rental Equipment at the agreed time, the full hire price is payable.</p>
            <h3>Cancellation Charges for Collection</h3>
            <p>In the event of cancellation before the Rental Equipment is made available, the following cancellation charges apply:</p>
            <ul>
              <li>60% of the net Order Amount for cancellation between 59 and 30 days before the agreed date.</li>
              <li>70% of the net Order Amount for cancellation between 29 and 10 days before the agreed date.</li>
              <li>80% of the net Order Amount for cancellation after the 10th day before the agreed date.</li>
            </ul>
            <h3>Failure to Accept Delivery</h3>
            <p>If the customer opts for delivery of the Rental Equipment and the delivery cannot take place for reasons attributable to the customer (such as inaccessibility of the delivery location, absence of an authorised person, or failure to meet other agreed delivery conditions), the Hirer is liable for the full hire price and any additional costs such as extra transport costs.</p>
            <h3>Responsibility and Costs in the Event of Failed Delivery</h3>
            <p>The Hirer is responsible for creating suitable conditions for successful delivery. If Vernast is unable to deliver the Rental Equipment due to the Hirer, all associated costs, including second delivery attempts or extra transport costs, are borne by the Hirer.</p>
          </article>

          <article id="art15">
            <h2><em>Article 15</em>Invoicing, Payment and Consequences of Default</h2>
            <h3>Invoicing Process</h3>
            <p>Invoicing by Vernast is on the basis of payment in advance. Invoices may, at Vernast&apos;s discretion, be sent by post or electronically to the Hirer&apos;s e-mail address known to Vernast.</p>
            <h3>Credit Limitation and Security</h3>
            <p>Vernast reserves the right to charge a credit limitation surcharge and/or to require other security from the Hirer.</p>
            <h3>Payment Terms</h3>
            <p>Payments must be made as specified in the Quote, the Agreement or on Vernast&apos;s invoice, without any deduction or set-off. Unless otherwise stated, payments must be made within 14 days of the invoice date. Vernast&apos;s records serve as evidence of services rendered and payments due, unless the Hirer provides evidence to the contrary.</p>
            <h3>Default and Consequences</h3>
            <p>If payment is not made within the stated period, the Hirer is in default by operation of law. A final period of at least 14 days is granted for payment. If payment is not forthcoming, statutory interest and (extrajudicial) collection costs are payable.</p>
            <h3>Costs upon Notice of Default</h3>
            <p>The Hirer is responsible for all actual costs incurred by Vernast in collecting and securing its rights, including judicial and extrajudicial collection costs, damages and interest.</p>
            <h3>Collection Costs</h3>
            <p>Judicial and extrajudicial collection costs include the costs of debt collection agencies, lawyers and bailiffs. These costs are set at a minimum of 15% of the total amount owed, with a minimum of €350.</p>
            <h3>Allocation of Payments</h3>
            <p>Payments by the Hirer are applied first to interest and costs, and then to the oldest outstanding invoices. If the payment term is exceeded, discounts lapse and Vernast may claim the full hire price.</p>
            <h3>Bankruptcy and Attachment</h3>
            <p>In the event of a bankruptcy petition, (provisional) moratorium on payments, transfer of business, cessation of business or attachment of the Hirer&apos;s assets, the Hirer is in default. Vernast may then terminate the Agreement in whole or in part without notice of default or judicial intervention.</p>
            <h3>Rights upon Termination</h3>
            <p>In the event of termination by Vernast, or the possibility thereof, Vernast is entitled to compensation and its other rights are preserved. The Hirer is not entitled to compensation in the event of such termination.</p>
            <h3>Restriction on Interim Termination</h3>
            <p>Interim termination of the Agreement by the Hirer is not possible without the express written consent of Vernast.</p>
          </article>

          <article id="art16">
            <h2><em>Article 16</em>Force Majeure</h2>
            <h3>Suspension in the Event of Force Majeure</h3>
            <p>If Vernast is unable to fulfil its obligations towards the Hirer due to force majeure, performance of the Agreement is suspended for as long as the force majeure situation continues, up to a maximum of two months. After this period, both Parties are entitled to terminate the Agreement in whole or in part In Writing.</p>
            <h3>Exclusion of Compensation</h3>
            <p>Vernast is not liable to pay compensation to the Hirer if the failure to fulfil obligations is due to force majeure.</p>
            <h3>Definition of Force Majeure</h3>
            <p>Force majeure comprises all circumstances beyond Vernast&apos;s control that make performance of the Agreement unreasonable, including strikes, war, natural disasters, epidemics, shortages of raw materials, transport obstructions, extreme weather, fire, machine breakdowns, supplier problems and government measures.</p>
          </article>

          <article id="art17">
            <h2><em>Article 17</em>Deposit</h2>
            <h3>Deposit Requirement</h3>
            <p>Unless otherwise agreed In Writing, the Hirer owes a deposit determined by Vernast, to be paid before the Rental Equipment is made available. The amount is determined on the basis of the hire period and the value of the Rental Equipment.</p>
            <h3>Purpose of the Deposit</h3>
            <p>The deposit does not serve as an advance payment on the hire price or as a waiver payment for risks such as damage, theft or misappropriation.</p>
            <h3>Consequences of Non-payment of the Deposit</h3>
            <p>If the deposit is not paid on time, Vernast may terminate the Agreement unilaterally, while retaining the right to compensation.</p>
            <h3>Refund and Set-off</h3>
            <p>On termination of the Agreement, Vernast may set off any amounts owed against the deposit. Refund takes place once it has been established that the Hirer has fulfilled all its obligations.</p>
          </article>

          <article id="art18">
            <h2><em>Article 18</em>Information and intellectual Property Rights</h2>
            <h3>Accuracy of Information</h3>
            <p>Vernast strives for the correctness and completeness of the Information, but gives no guarantee in this respect and is not liable for inaccuracies in information from third parties, such as manufacturers.</p>
            <h3>Intellectual Property Rights</h3>
            <p>The intellectual property rights in the Information remain with the original rights holders. Without the express written consent of Vernast, it may not be copied or provided to third parties and must be returned on request.</p>
            <h3>Use of Brand Names and Logos</h3>
            <p>Brand names, trade names and logos of Vernast on the Rental Equipment may not be concealed, damaged or removed by the Hirer.</p>
            <h3>Use of the Brand for Commercial Purposes</h3>
            <p>The Hirer is prohibited from using Vernast&apos;s brand name, trade name or logo for its own commercial purposes without prior written consent.</p>
          </article>

          <article id="art19">
            <h2><em>Article 19</em>Insurance and Risk Cover</h2>
            <h3>Responsibility for Damage and Disappearance</h3>
            <p>In accordance with Article 11, the Hirer is liable for damage to or loss of the Rental Equipment during the hire period. The Hirer can limit this liability by entering into one or both of the following schemes, depending on the specific Agreement.</p>
            <h3>Applicability of Waiver Schemes</h3>
            <p>Not all Rental Equipment is eligible for waiver schemes. Where waiver schemes are available, they are usually compulsory. These schemes limit Vernast&apos;s right of recourse for damage to the specified excess.</p>
            <h3>Details of the Schemes</h3>
            <p>For specific details and rates of the schemes, Vernast refers to its ‘Terms of the Damage Waiver and Fire/Theft Scheme’, available at every branch and online.</p>
            <h3>Damage Waiver Scheme</h3>
            <p>This scheme limits Vernast&apos;s right of recourse for damage to the Rental Equipment, with the exception of damage caused by fire, theft, improper use, wilful intent or negligence. The surcharge amounts to 10% of the hire price (unless otherwise agreed), with an excess depending on the replacement value of the equipment.</p>
            <h3>Fire/Theft Scheme</h3>
            <p>This scheme is specific to certain Hirers and limits Vernast&apos;s right of recourse for damage caused by fire or theft, excluding damage caused by wilful intent or recklessness and certain other exceptions. The surcharge is a percentage of the hire amount, with an excess depending on the replacement value.</p>
            <h3>Requirements for Own Insurance</h3>
            <p>If the Hirer takes out its own insurance for the Rental Equipment, Vernast must be included as beneficiary or a confirmation of cover must be provided. Excesses and limitations of cover do not affect the Hirer&apos;s liability.</p>
            <h3>Rights under CAR Insurance</h3>
            <p>Where the Hirer has CAR insurance, the Hirer declares that Vernast, as co-insured, may derive rights from this insurance. Any excesses are borne by the Hirer.</p>
          </article>

          <article id="art20">
            <h2><em>Article 20</em>Privacy Policy</h2>
            <h3>Use of Personal Data</h3>
            <p>The Hirer agrees that Vernast uses personal data for entering into and performing the Agreement, collecting payments, preventing fraud and complying with legal obligations.</p>
            <h3>Compliance with the GDPR</h3>
            <p>Both Parties will comply with their obligations under the GDPR. Vernast&apos;s privacy policy is available on the website and may change from time to time. Questions or requests regarding privacy can be sent to <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
            <h3>Warranties Regarding Personal Data</h3>
            <p>Both Parties warrant that the personal data shared is correct, not excessive and lawful, and does not infringe the rights of third parties.</p>
            <h3>Hirer&apos;s Duty to Inform</h3>
            <p>If Vernast considers this necessary for the performance of the Agreement, the Hirer must inform Vernast In Writing of how it complies with its GDPR obligations.</p>
            <h3>Geolocation and Trackers</h3>
            <p>Rental Equipment may be fitted with geolocation systems or trackers for theft prevention and fraud control. Location data is not accessible to third parties, but may be used by Vernast in the event of theft or fraud.</p>
          </article>

          <article id="art21">
            <h2><em>Article 21</em>Final Provisions and Jurisdiction</h2>
            <h3>Disputes and Applicable Law</h3>
            <p>Disputes arising from the Agreement will be heard by the competent court in Antwerp under Belgian law, unless Vernast decides otherwise.</p>
            <h3>Summoning the Hirer</h3>
            <p>Vernast reserves the right to summon the Hirer in the judicial district where Vernast has its office.</p>
            <h3>Derogation for Certain Hirers</h3>
            <p>For disputes with certain Hirers, the competent court is the one that, under general law, has jurisdiction to hear the dispute.</p>
          </article>
        </div>
      </div>
    </section>
  </>
);

export default VoorwaardenEn;
