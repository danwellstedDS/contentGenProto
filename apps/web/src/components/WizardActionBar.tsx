import type { ReactNode } from "react"

interface WizardActionBarProps {
  /** Omit to hide the Back button entirely */
  onBack?: () => void
  backDisabled?: boolean
  /** Middle slot — selection count, brand breakdown, etc. Updated via aria-live */
  summary?: ReactNode
  /** Slot between summary and spacer — e.g. Select all / Deselect all */
  extra?: ReactNode
  primaryLabel: string
  onPrimary: () => void
  primaryDisabled?: boolean
  /** Shown as tooltip on the primary button when disabled */
  primaryTooltip?: string
  primaryLoading?: boolean
}

export default function WizardActionBar({
  onBack,
  backDisabled,
  summary,
  extra,
  primaryLabel,
  onPrimary,
  primaryDisabled,
  primaryTooltip,
  primaryLoading,
}: WizardActionBarProps) {
  return (
    <div className="wizard-action-bar" role="region" aria-label="Step navigation">
      {onBack && (
        <button
          className="wab-back"
          onClick={onBack}
          disabled={backDisabled}
        >
          ← Back
        </button>
      )}

      {summary && (
        <div className="wab-summary" aria-live="polite">
          {summary}
        </div>
      )}

      {extra && (
        <div className="wab-extra">{extra}</div>
      )}

      <div className="wab-spacer" />

      <button
        className={`wab-primary${primaryDisabled ? " wab-primary--disabled" : ""}`}
        onClick={!primaryDisabled && !primaryLoading ? onPrimary : undefined}
        disabled={primaryDisabled || primaryLoading}
        aria-disabled={primaryDisabled || primaryLoading}
        title={primaryDisabled ? primaryTooltip : undefined}
      >
        {primaryLoading ? "Starting…" : primaryLabel}
      </button>
    </div>
  )
}
