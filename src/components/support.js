import React from "react"
import { FaHeart } from "react-icons/fa"

import YAMLData from "../content/content.yml"

const Support = () => (
  <div className="row">
    <div className="col-12">
      <h2 className="mb-4">
        Support &nbsp;
        <span>
          <FaHeart style={{color: 'var(--persian-red)'}}/>
        </span>
      </h2>
      <p className="mb-5">
        We are open for partnerships and collaborations with different entities
        and community organisations who share our interests, values, aim and
        objectives. If you would like to support us in any way, please{" "}
        <a href={`mailto:${YAMLData.contact_email}`}>get in contact</a>.
      </p>
    </div>
  </div>
)

export default Support
