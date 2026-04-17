import { useNavigate, useParams } from "react-router-dom"
import { Button, Flex } from "@derbysoft/neat-design"
import { LANGUAGES } from "@hotel-copy/shared"
import { useWizardStore } from "../../store/wizardStore"

export default function Step3Languages() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { selectedLanguages, setSelectedLanguages, advanceTo } = useWizardStore()

  function toggleLanguage(code: string) {
    if (selectedLanguages.includes(code)) {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== code))
    } else {
      setSelectedLanguages([...selectedLanguages, code])
    }
  }

  function handleNext() {
    advanceTo(4)
    navigate(`/projects/${id}/wizard/4`)
  }

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Select languages</h2>
        <p>Choose which languages to generate ad copy for.</p>
      </div>

      <Flex justify="space-between" align="center">
        <span className="hotel-count-badge">
          {selectedLanguages.length} of {LANGUAGES.length} selected
        </span>
        <Flex gap={8}>
          <Button onClick={() => setSelectedLanguages(LANGUAGES.map((l) => l.code as string))}>
            Select all
          </Button>
          <Button onClick={() => setSelectedLanguages([])}>Deselect all</Button>
        </Flex>
      </Flex>

      <div className="language-grid">
        {LANGUAGES.map((lang) => {
          const isSelected = selectedLanguages.includes(lang.code as string)
          return (
            <div
              key={lang.code}
              className={`language-pill ${isSelected ? "selected" : ""}`}
              onClick={() => toggleLanguage(lang.code as string)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleLanguage(lang.code as string)}
            >
              {lang.name}
            </div>
          )
        })}
      </div>

      <div className="step-nav">
        <Button onClick={() => navigate(`/projects/${id}/wizard/2`)}>← Back</Button>
        <Button type="primary" disabled={selectedLanguages.length === 0} onClick={handleNext}>
          Next: Campaign type →
        </Button>
      </div>
    </div>
  )
}
