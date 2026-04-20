import { useNavigate, useParams } from "react-router-dom"
import { LANGUAGES } from "@hotel-copy/shared"
import { useWizardStore } from "../../store/wizardStore"
import WizardActionBar from "../../components/WizardActionBar"

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

      <WizardActionBar
        onBack={() => navigate(`/projects/${id}/wizard/2`)}
        summary={
          <span className="wab-summary-primary">
            {selectedLanguages.length} of {LANGUAGES.length} language{selectedLanguages.length !== 1 ? "s" : ""} selected
          </span>
        }
        extra={
          <>
            <button className="wab-text-btn" onClick={() => setSelectedLanguages(LANGUAGES.map((l) => l.code as string))}>
              Select all
            </button>
            <button className="wab-text-btn" onClick={() => setSelectedLanguages([])}>
              Deselect all
            </button>
          </>
        }
        primaryLabel="Next: Campaign type →"
        onPrimary={handleNext}
        primaryDisabled={selectedLanguages.length === 0}
        primaryTooltip="Select at least one language to continue"
      />
    </div>
  )
}
