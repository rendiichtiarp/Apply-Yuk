import { ModernTemplate } from './modern'
import { ProfessionalTemplate } from './professional'
import { ClassicTemplate } from './classic'

export interface CVTemplateProps {
  cvData: any
  language: string
}

// Template mapping untuk memudahkan penggunaan
export const templates = {
  modern: ModernTemplate,
  professional: ProfessionalTemplate,
  classic: ClassicTemplate,
} as const

// Re-export template components
export { ModernTemplate } from './modern'
export { ProfessionalTemplate } from './professional'
export { ClassicTemplate } from './classic'

// Type untuk template yang tersedia
export type TemplateType = keyof typeof templates 