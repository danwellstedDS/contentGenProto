import { useNavigate, useParams } from "react-router-dom"
import { useWizardStore } from "../store/wizardStore"

const STEPS = [
  { num: 1, label: "Import" },
  { num: 2, label: "Hotels" },
  { num: 3, label: "Languages" },
  { num: 4, label: "Tone" },
  { num: 5, label: "Generate" },
  { num: 6, label: "Review" },
  { num: 7, label: "Export" },
]

interface Props {
  currentStep: number
}

export default function WizardStepIndicator({ currentStep }: Props) {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const maxReachedStep = useWizardStore((s) => s.maxReachedStep)

  return (
    <nav className="wizard-sidebar">
      {STEPS.map((step) => {
        const isActive = step.num === currentStep
        const isCompleted = step.num < currentStep || step.num <= maxReachedStep
        const isLocked = step.num > maxReachedStep

        let className = "wizard-step-item"
        if (isActive) className += " active"
        else if (isCompleted) className += " completed"
        else if (isLocked) className += " locked"

        return (
          <div
            key={step.num}
            className={className}
            onClick={() => {
              if (!isLocked && id) navigate(`/projects/${id}/wizard/${step.num}`)
            }}
          >
            <div className="wizard-step-num">
              <span>{step.num}</span>
            </div>
            <span>{step.label}</span>
          </div>
        )
      })}
    </nav>
  )
}
