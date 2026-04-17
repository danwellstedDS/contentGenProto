import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Flex, Tag } from "@derbysoft/neat-design"
import type { Color } from "@derbysoft/neat-design/es/Tag/Tag"
import { hotelsApi } from "../../services/api"
import { useWizardStore } from "../../store/wizardStore"

export default function Step2Hotels() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { hotels, selectedHotelCodes, setHotels, toggleHotel, selectAllHotels, deselectAllHotels, advanceTo } = useWizardStore()

  useEffect(() => {
    if (hotels.length === 0 && id) {
      hotelsApi.list(id).then(setHotels)
    }
  }, [id])

  const selectedCount = selectedHotelCodes.size

  function handleNext() {
    advanceTo(3)
    navigate(`/projects/${id}/wizard/3`)
  }

  if (hotels.length === 0) {
    return (
      <div className="wizard-step">
        <p style={{ color: "#888" }}>Loading hotels…</p>
      </div>
    )
  }

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Select hotels</h2>
        <p>Choose which hotels to include in this generation.</p>
      </div>

      <Flex justify="space-between" align="center">
        <span className="hotel-count-badge">
          {selectedCount} of {hotels.length} selected
        </span>
        <Flex gap={8}>
          <Button onClick={selectAllHotels}>Select all</Button>
          <Button onClick={deselectAllHotels}>Deselect all</Button>
        </Flex>
      </Flex>

      <div className="hotel-list">
        {hotels.map((hotel) => {
          const isSelected = selectedHotelCodes.has(hotel.hotelCode)
          return (
            <div
              key={hotel.hotelCode}
              className={`hotel-row ${isSelected ? "selected" : "deselected"}`}
              onClick={() => toggleHotel(hotel.hotelCode)}
            >
              <Flex vertical gap={2}>
                <span className="hotel-row-name">{hotel.hotelName}</span>
                <span className="hotel-row-meta">{hotel.hotelCode} · {hotel.city}, {hotel.country}</span>
              </Flex>
              <div className="hotel-row-right">
                {hotel.chain && <Tag color={"neutral" as Color}>{hotel.chain}</Tag>}
                <div style={{
                  width: 20, height: 20, borderRadius: "50%",
                  background: isSelected ? "#00b2a9" : "#fff",
                  border: `2px solid ${isSelected ? "#00b2a9" : "#d0d5dd"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "all 0.15s"
                }}>
                  {isSelected && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="step-nav">
        <Button onClick={() => navigate(`/projects/${id}/wizard/1`)}>← Back</Button>
        <Button type="primary" disabled={selectedCount === 0} onClick={handleNext}>
          Next: Languages →
        </Button>
      </div>
    </div>
  )
}
