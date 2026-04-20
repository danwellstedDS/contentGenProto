import { useNavigate, useParams } from "react-router-dom"
import { useWizardStore } from "../store/wizardStore"

interface MetaStep {
  label: string
  sublabel: string
  firstStep: number
  lastStep: number
}

const META_STEPS: MetaStep[] = [
  { label: "Settings", sublabel: "Campaign setup", firstStep: 1, lastStep: 6 },
  { label: "Review", sublabel: "Review & approve", firstStep: 7, lastStep: 9 },
  { label: "Complete", sublabel: "Export content", firstStep: 10, lastStep: 10 },
]

interface Props {
  currentStep: number
}

export default function WizardMetaIndicator({ currentStep }: Props) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const maxReachedStep = useWizardStore((s) => s.maxReachedStep)
  const hotelsLoaded = useWizardStore((s) => s.hotels.length > 0)

  return (
    <div className="wizard-meta-sidebar">
      {META_STEPS.map((meta, idx) => {
        const isCompleted = currentStep > meta.lastStep
        const isActive = currentStep >= meta.firstStep && currentStep <= meta.lastStep
        const isLocked = maxReachedStep < meta.firstStep

        let stateClass = "locked"
        if (isCompleted) stateClass = "completed"
        else if (isActive) stateClass = "active"

        function handleClick() {
          if (isCompleted && id) {
            navigate(`/projects/${id}/wizard/${meta.firstStep}`)
          }
        }

        return (
          <div
            key={meta.label}
            className={`wizard-meta-item ${stateClass}`}
            onClick={handleClick}
            role={isCompleted ? "button" : undefined}
          >
            <div className={`wizard-meta-num${idx === 0 && hotelsLoaded && !isCompleted ? " wizard-meta-num--done" : ""}`}>
              {isCompleted || (idx === 0 && hotelsLoaded) ? "✓" : idx + 1}
            </div>
            <div className="wizard-meta-labels">
              <span className="wizard-meta-label">{meta.label}</span>
              <span className="wizard-meta-sublabel">{meta.sublabel}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
