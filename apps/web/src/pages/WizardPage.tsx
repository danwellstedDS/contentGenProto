import { useEffect, useRef, useState } from "react"
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { useWizardStore } from "../store/wizardStore"
import { projectsApi, hotelsApi, generationApi } from "../services/api"
import { analytics } from "../lib/analytics"
import AppShell from "../components/AppShell"
import WizardMetaIndicator from "../components/WizardMetaIndicator"
import Step1Import from "./wizard/Step1Import"
import Step2Hotels from "./wizard/Step2Hotels"
import Step3Languages from "./wizard/Step3Languages"
import Step4CampaignType from "./wizard/Step4CampaignType"
import Step5ContextFork from "./wizard/Step5ContextFork"
import Step6ContextPrompt from "./wizard/Step6ContextPrompt"
import Step7Generating from "./wizard/Step7Generating"
import Step8Review from "./wizard/Step8Review"
import Step9SpotCheck from "./wizard/Step9SpotCheck"
import Step10Complete from "./wizard/Step10Complete"

/** Derive which wizard step to land on based on project status. */
function targetStepForStatus(
  status: string,
  hasHotels: boolean,
  hasCampaignType: boolean
): number {
  switch (status) {
    case "GENERATING": return 7
    case "IN_REVIEW":  return 8
    case "COMPLETE":   return 10
    default:
      // DRAFT — infer furthest reachable step
      if (!hasHotels)       return 1
      if (!hasCampaignType) return 2
      return 5 // Hotels + campaign type set → context fork
  }
}

export default function WizardPage() {
  const { id, step } = useParams<{ id: string; step: string }>()
  const navigate = useNavigate()
  const store = useWizardStore()
  const currentStep = parseInt(step ?? "1", 10)

  const [hydrating, setHydrating] = useState(true)
  const hydratedForId = useRef<string | null>(null)

  // Hydrate store from API when the project ID changes.
  // This runs once per project, not on every step navigation.
  useEffect(() => {
    if (!id || hydratedForId.current === id) return

    setHydrating(true)
    store.reset()

    ;(async () => {
      try {
        const [project, hotels] = await Promise.all([
          projectsApi.get(id),
          hotelsApi.listForProject(id),
        ])

        store.setHotels(hotels)

        if (project.campaignType) {
          store.setCampaignType(project.campaignType as "PPC" | "PMAX")
        }

        const target = targetStepForStatus(
          project.status,
          hotels.length > 0,
          !!project.campaignType
        )

        // For statuses that have a generation, load it
        if (project.status === "GENERATING" || project.status === "IN_REVIEW" || project.status === "COMPLETE") {
          try {
            const gen = await generationApi.latest(id)
            store.setGenerationId(gen.id)
            store.setGenerationStatus(gen.status as "PENDING" | "RUNNING" | "COMPLETE" | "FAILED")
            if (gen.languages?.length) {
              store.setSelectedLanguages(gen.languages)
            }
            if (gen.campaignContext) {
              store.setCampaignContext(gen.campaignContext)
            }
            if (gen.name) {
              store.setGenerationName(gen.name)
            }
            if (gen.approvedHotelCodes?.length) {
              gen.approvedHotelCodes.forEach((code: string) => store.approveHotel(code))
              store.setRecipeModalDismissed(true)
            }
            if (project.status === "IN_REVIEW" || project.status === "COMPLETE") {
              const assets = await generationApi.assets(id, gen.id)
              store.setAssets(assets)
            }
          } catch {
            // No generation yet — fall back to default step
          }
        }

        store.advanceTo(target)
        hydratedForId.current = id

        // Navigate to target step if we're on the wrong one
        if (currentStep !== target) {
          navigate(`/projects/${id}/wizard/${target}`, { replace: true })
        }
      } finally {
        setHydrating(false)
      }
    })()
  }, [id])

  // Keep advanceTo in sync with manual step navigation and track step views
  useEffect(() => {
    if (!hydrating) {
      store.advanceTo(currentStep)
      if (id) {
        analytics.track("wizard_step_viewed", { step: currentStep, projectId: id })
      }
    }
  }, [currentStep, hydrating])

  function renderStep() {
    switch (currentStep) {
      case 1:  return <Step1Import />
      case 2:  return <Step2Hotels />
      case 3:  return <Step3Languages />
      case 4:  return <Step4CampaignType />
      case 5:  return <Step5ContextFork />
      case 6:  return <Step6ContextPrompt />
      case 7:  return <Step7Generating />
      case 8:  return <Step8Review />
      case 9:  return <Step9SpotCheck />
      case 10: return <Step10Complete />
      default: return <Navigate to={`/projects/${id}/wizard/1`} replace />
    }
  }

  return (
    <AppShell activeNav="campaign">
      <div className="wizard-body">
        <WizardMetaIndicator currentStep={hydrating ? 1 : currentStep} />
        <main className="wizard-content">
          {hydrating ? (
            <div className="wizard-step">
              <div className="step-heading">
                <h2>Loading project…</h2>
              </div>
            </div>
          ) : (
            renderStep()
          )}
        </main>
      </div>
    </AppShell>
  )
}
