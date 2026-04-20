import { useParams, useNavigate } from "react-router-dom"
import { Tag } from "@derbysoft/neat-design"
import { useWizardStore } from "../../store/wizardStore"
import WizardActionBar from "../../components/WizardActionBar"

export default function Step4CampaignType() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { campaignType, setCampaignType } = useWizardStore()

  function selectPPC() {
    setCampaignType("PPC")
    navigate(`/projects/${id}/wizard/5`)
  }

  function handleNext() {
    if (campaignType) navigate(`/projects/${id}/wizard/5`)
  }

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Campaign type</h2>
        <p>Choose how this content will be used. You can change this later.</p>
      </div>

      <div className="option-cards">
        <div
          className={`option-card ${campaignType === "PPC" ? "option-card-selected" : ""}`}
          onClick={selectPPC}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && selectPPC()}
        >
          <div className="option-card-header">
            <span className="option-card-title">PPC — Pay Per Click</span>
          </div>
          <p className="option-card-desc">
            Generate headlines, descriptions, and long headlines optimised for Google Ads and
            Microsoft Advertising. Best for performance-based search campaigns.
          </p>
        </div>

        <div className="option-card option-card-disabled">
          <div className="option-card-header">
            <span className="option-card-title">PMax — Performance Max</span>
            <Tag color="neutral">Coming soon</Tag>
          </div>
          <p className="option-card-desc">
            Multi-format asset generation across all Google channels. Supports images, video,
            and text assets in a single campaign.
          </p>
        </div>
      </div>

      <WizardActionBar
        onBack={() => navigate(`/projects/${id}/wizard/3`)}
        summary={
          campaignType
            ? <span className="wab-summary-primary">{campaignType} selected</span>
            : <span className="wab-summary-hint">Select a campaign type to continue.</span>
        }
        primaryLabel="Next: Context →"
        onPrimary={handleNext}
        primaryDisabled={!campaignType}
        primaryTooltip="Select a campaign type to continue"
      />
    </div>
  )
}
