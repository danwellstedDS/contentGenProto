import { useNavigate, useParams } from "react-router-dom"
import { Input, Flex } from "@derbysoft/neat-design"
import { useWizardStore } from "../../store/wizardStore"
import WizardActionBar from "../../components/WizardActionBar"

export default function Step1Import() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { generationName, setGenerationName, advanceTo } = useWizardStore()

  function handleNext() {
    advanceTo(2)
    navigate(`/projects/${id}/wizard/2`)
  }

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Name this run</h2>
        <p>Give this generation a name so you can identify it later. You can change it at any time.</p>
      </div>

      <Flex vertical gap={4} style={{ maxWidth: 480 }}>
        <label className="form-label">Generation name (optional)</label>
        <Input
          value={generationName}
          onChange={(e) => setGenerationName(e.target.value)}
          placeholder="e.g. Q2 2026 Summer Campaign"
          onPressEnter={handleNext}
          autoFocus
        />
      </Flex>

      <WizardActionBar
        primaryLabel="Next: Select hotels →"
        onPrimary={handleNext}
      />
    </div>
  )
}
