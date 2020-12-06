import React from "react"
import { Link } from "gatsby"

import { FaHeart } from "react-icons/fa"

const Support = () => (
  <div className="row">
    <div className="col-12">
      <h2 className="mb-4">
        Support &nbsp;
        <span>
          <FaHeart style={{ color: "var(--persian-red)" }} />
        </span>
      </h2>
      <p className="mb-5">
        We are open for partnerships and collaborations with different entities
        and community organisations who share our interests, values, aim and
        objectives. If you would like to support us in any way, please
        <Link to="/contact"> get in contact</Link>.
      </p>
    </div>
  </div>
)

export default Support
