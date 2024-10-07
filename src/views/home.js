import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Extraneous Dapper Ibex</title>
        <meta property="og:title" content="Extraneous Dapper Ibex" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100 thq-link thq-body-small">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101 thq-link thq-body-small">
              #services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102 thq-link thq-body-small">
              #case-studies
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103 thq-link thq-body-small">
              #contact
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105 thq-body-large">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106 thq-body-large">Case Studies</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107 thq-body-large">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114 thq-body-small">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115 thq-body-small">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116 thq-body-large">
              Build a professional website to highlight your consulting skills
              and experience. Impress potential clients with your knowledge and
              capabilities.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117 thq-heading-1">
              Showcase Your Consulting Expertise
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118 thq-heading-2">
              Professional Site Building
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">
              Case Studies Presentation
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120 thq-heading-2">
              Client Attraction
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121 thq-body-small">
              Build a professional site to showcase consulting expertise
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Showcase Case Studies
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
              Attract Potential Clients
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get started now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Create a professional site to attract potential clients and
              highlight your consulting services.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126 thq-heading-2">
              Ready to showcase your expertise?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127 thq-heading-2">
              Consulting Expertise
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128 thq-heading-2">Case Studies</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">
              Attract Potential Clients
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130 thq-body-small">
              Showcase your consulting expertise and highlight your unique value
              proposition.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Present compelling case studies that demonstrate your successful
              projects and outcomes.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132 thq-body-small">
              Attract potential clients by showcasing your skills, experience,
              and success stories.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144 thq-heading-3">$99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145 thq-heading-3">$199/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146 thq-heading-3">$299/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148 thq-heading-3">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149 thq-body-large">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152 thq-body-large">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155 thq-body-large">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Customized consulting services
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Dedicated account manager
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Monthly progress reports
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165 thq-body-small">
              Advanced consulting solutions
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166 thq-body-small">24/7 support</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167 thq-body-small">
              Quarterly performance reviews
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Full-suite consulting package
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170 thq-body-small">
              Priority support
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171 thq-body-small">
              Bi-weekly strategy sessions
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186 thq-heading-2">
              Understand Client Needs
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187 thq-heading-2">
              Develop Tailored Solutions
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">
              Implement Strategies
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189 thq-heading-2">Deliver Results</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190 thq-body-small">
              Schedule a consultation to thoroughly understand the client&apos;s
              requirements, goals, and challenges.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191 thq-body-small">
              Create customized consulting solutions based on the client&apos;s
              needs and industry best practices.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Execute the agreed-upon strategies and solutions while keeping the
              client informed throughout the process.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193 thq-body-small">
              Present the outcomes achieved through consulting services,
              highlighting the added value and impact on the client&apos;s
              business.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194 thq-body-small">
              Consulting Experts has been a valuable partner in our growth
              journey. Their professionalism and expertise are unmatched.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195 thq-body-small">
              I highly recommend Consulting Experts to any company looking to
              elevate their performance. Their dedication to client success is
              truly commendable.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196 thq-body-small">
              The team at Consulting Experts goes above and beyond to deliver
              exceptional results. Their strategic guidance has been
              instrumental in our success.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197 thq-body-small">
              Partnering with Consulting Experts was one of the best decisions
              we made for our business. Their expertise and professionalism are
              truly top-notch.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198 thq-body-small">
              Working with the team at Consulting Experts has been a
              game-changer for our business. Their strategic insights and
              tailored solutions have helped us achieve remarkable results.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199 thq-heading-2">
              Client Testimonials
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200 thq-body-large">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202 thq-body-large">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203 thq-body-large">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204 thq-body-small">CEO, ABC Inc.</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205 thq-body-small">COO, XYZ Corp.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206 thq-body-small">CFO, LMN Co.</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207 thq-body-small">CMO, PQR Ltd.</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">
              Get in touch with us to discuss how we can help your business
              grow.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210 thq-heading-3">New York Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211 thq-heading-3">
              Los Angeles Office
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212 thq-body-large">
              123 Main Street, New York, NY 10001
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213 thq-body-large">
              456 Park Avenue, Los Angeles, CA 90012
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215 thq-body-small">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216 thq-body-small">Case Studies</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218 thq-body-small">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
