import Star from "./Star"
import { useState } from "react"
import PropTypes from "prop-types"

const containerStyle = {
  backgroundColor: "#250202ff",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  fontSize: "24px",
}

const starContainerStyle = {
  display: "flex",
}

const StarRating = ({
  maxRating = 3,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating)
  const [tempRating, setTempRating] = useState(0)

  const texyConainer = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  }

  const handleRating = (rate) => {
    setRating(rate)
    onSetRating(rate)
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onClick={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(rating)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={texyConainer}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  )
}

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
}

export default StarRating
