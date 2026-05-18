export interface HowToStep {
  name: string
  text: string
  url?: string
}

export interface HowToInput {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string
  estimatedCost?: { value: string; currency?: string }
}

export function createHowToSchema(input: HowToInput) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: input.name,
    description: input.description,
    step: input.steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url } : {}),
    })),
  }
  if (input.totalTime) schema.totalTime = input.totalTime
  if (input.estimatedCost) {
    schema.estimatedCost = {
      '@type': 'MonetaryAmount',
      currency: input.estimatedCost.currency ?? 'TWD',
      value: input.estimatedCost.value,
    }
  }
  return schema
}
