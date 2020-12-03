import React from "react"
import { RiServiceLine } from "react-icons/ri"

const Services = () => (
  <div className="row">
    <div className="col-12">
      <h2 className="mb-4">
        Services &nbsp;
        <span>
          <RiServiceLine style={{color: 'var(--persian-green)'}}/>
        </span>
      </h2>
    </div>
    <div className="col-12">
      <p>ATA-UK provides the following services and activities by:</p>
      <ul className="mb-4">
        <li>Organizing cultural and recreational events and activities;</li>
        <li>Organizing Uzbek/Turkmen language classes for children;</li>
        <li>
          Rewarding and celebrating achievements of Afghan-Turks in education,
          entrepreneurships, services to the community both at personal and
          community level in the UK;
        </li>
        <li>
          Providing training and seminars/workshops on healthcare, business,
          citizenship and integration matters;
        </li>
        <li>Linking and engaging Afghan-Turks with different communities;</li>
        <li>
          Raising awareness of disadvantages girls and women to education and
          empowering them learning and education;
        </li>
        <li>
          Challenging those with power to adopt policies that promote justice
          for Afghan-Turks; and
        </li>
        <li>
          Working through networks, civil society, and individual to create
          powerful voice in seeking justice.
        </li>
      </ul>
    </div>
  </div>
)

export default Services
