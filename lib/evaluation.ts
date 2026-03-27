/**
 * DR MAGfield Conversion Evaluation Rubric
 * Self-Evaluation Loop for Mobile/PWA Bounce Rate Optimization
 *
 * Scores each UI variant on 10 conversion signals
 * Scores 0-10 per signal, weighted composite
 */

export type EvaluationResult = {
  variant: string
  timestamp: string
  signals: SignalScores
  composite: number
  verdict: 'ADOPT' | 'ITERATE' | 'REJECT'
  topSignal: string
  worstSignal: string
  recommendation: string
}

export type SignalScores = {
  // Mobile-specific signals
  aboveTheFoldClarity: number      // [5s rule] Can user understand value in 5s on mobile?
  ctaVisibility: number            // Is primary CTA above fold, thumb-accessible?
  scrollMotivation: number         // Does below-fold content compel continued scroll?
  loadSpeedPerception: number      // Does page feel fast (<3s to interactive)?
  trustCredentials: number         // KRPM location, Arie Ong, testimonials visible?

  // DR MAGfield-specific signals
  painSolutionMatch: number        // Does hero directly address golfer pain?
  technologyDifferentiation: number // Is 旋磁疗法 vs PEMF clear in <10s?
  bookingFriction: number          // WhatsApp/phone — is it frictionless?

  // Engagement signals
  visualHierarchy: number          // Gold accent, dark section rhythm — clear flow?
  emotionalResonance: number       // "Turn Pain into Pure Performance" — does it land?
}

export const DEFAULT_SIGNALS: SignalScores = {
  aboveTheFoldClarity: 0,
  ctaVisibility: 0,
  scrollMotivation: 0,
  loadSpeedPerception: 0,
  trustCredentials: 0,
  painSolutionMatch: 0,
  technologyDifferentiation: 0,
  bookingFriction: 0,
  visualHierarchy: 0,
  emotionalResonance: 0,
}

export const WEIGHTS: Record<keyof SignalScores, number> = {
  aboveTheFoldClarity: 0.20,    // Highest weight — if unclear, nothing else matters
  ctaVisibility: 0.15,          // CTA must be visible and reachable
  painSolutionMatch: 0.15,       // Core value prop for golfers
  bookingFriction: 0.12,         // Booking path must be effortless
  scrollMotivation: 0.10,        // Below-fold engagement
  trustCredentials: 0.08,        // KRPM credibility
  technologyDifferentiation: 0.08, // Competitive positioning
  visualHierarchy: 0.07,         // UX flow quality
  loadSpeedPerception: 0.03,     // PWA handles this well
  emotionalResonance: 0.02,      // Bonus — hard to measure in iteration
}

export function evaluateVariant(
  variantName: string,
  signals: Partial<SignalScores>
): EvaluationResult {
  const fullSignals = { ...DEFAULT_SIGNALS, ...signals } as SignalScores

  // Compute composite
  let composite = 0
  for (const [key, weight] of Object.entries(WEIGHTS)) {
    composite += (fullSignals[key as keyof SignalScores] ?? 0) * weight
  }
  composite = Math.round(composite * 100) / 100

  // Find top and worst signals
  const entries = Object.entries(fullSignals) as [keyof SignalScores, number][]
  const top = entries.reduce((a, b) => (b[1] > a[1] ? b : a))
  const worst = entries.reduce((a, b) => (b[1] < a[1] ? b : a))

  // Determine verdict
  let verdict: EvaluationResult['verdict']
  if (composite >= 7.5) verdict = 'ADOPT'
  else if (composite >= 5.5) verdict = 'ITERATE'
  else verdict = 'REJECT'

  const recommendation = VERDICT_RECOMMENDATIONS[verdict](fullSignals, composite)

  return {
    variant: variantName,
    timestamp: new Date().toISOString(),
    signals: fullSignals,
    composite,
    verdict,
    topSignal: top[0],
    worstSignal: worst[0],
    recommendation,
  }
}

const VERDICT_RECOMMENDATIONS: Record<
  EvaluationResult['verdict'],
  (s: SignalScores, c: number) => string
> = {
  ADOPT: () =>
    'High-converting variant. Deploy to 100% traffic. Monitor bounce rate for 48h.',
  ITERATE: (s, c) =>
    `Moderate conversion. Fix lowest signals first. Focus on: ${findWorst3(s).join(', ')}. Retest in next iteration.`,
  REJECT: (s, c) =>
    `Low conversion (${c}/10). Major structural issues. Redesign from scratch or A/B test against control.`,
}

function findWorst3(s: SignalScores): string[] {
  return (Object.entries(s) as [keyof SignalScores, number][])
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .map(([k]) => k)
}

// Iteration log for the PEEL loop
export type IterationEntry = {
  iteration: number
  variant: string
  result: EvaluationResult
  changes: string[]
  timestamp: string
}

export function formatRubricReport(results: EvaluationResult[]): string {
  const lines = [
    '══════════════════════════════════════════════',
    '  DR MAGfield Conversion Evaluation Report',
    '══════════════════════════════════════════════',
    '',
  ]
  for (const r of results) {
    lines.push(`[${r.variant}] composite=${r.composite}/10  verdict=${r.verdict}`)
    lines.push(`  top signal:   ${r.topSignal} (${r.signals[r.topSignal as keyof SignalScores]})`)
    lines.push(`  worst signal: ${r.worstSignal} (${r.signals[r.worstSignal as keyof SignalScores]})`)
    lines.push(`  recommendation: ${r.recommendation}`)
    lines.push('')
  }
  return lines.join('\n')
}
