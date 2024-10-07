import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text5 thq-heading-2">
                      Consulting Expertise
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text2 thq-body-small">
                      Showcase your consulting expertise and highlight your
                      unique value proposition.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features25-text6 thq-heading-2">
                      Case Studies
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text3 thq-body-small">
                      Present compelling case studies that demonstrate your
                      successful projects and outcomes.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features25-text4 thq-heading-2">
                      Attract Potential Clients
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text1 thq-body-small">
                      Attract potential clients by showcasing your skills,
                      experience, and success stories.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature3Description: undefined,
  feature1Description: undefined,
  feature2Description: undefined,
  feature3Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1552581234-26160f608093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzE3MDczMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Case Studies Image Alt Text',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1661417343835-1da14dde656b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzE3MDczMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Consulting Expertise Image Alt Text',
  feature1Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1690306815542-3c0e7b85e996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzE3MDczMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Attract Potential Clients Image Alt Text',
  feature2Title: undefined,
}

Features25.propTypes = {
  feature3Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features25
