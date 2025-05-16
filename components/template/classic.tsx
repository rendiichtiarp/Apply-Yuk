import { Phone, Mail, MapPin, Linkedin, Globe, Calendar, Building } from "lucide-react"

interface ClassicTemplateProps {
  cvData: any
  language: string
}

export function ClassicTemplate({ cvData, language }: ClassicTemplateProps) {
  return (
    <div className="flex flex-col space-y-8 text-black max-w-4xl mx-auto px-8">
      {/* Header */}
      <div className="text-center space-y-3 pb-6 border-b-2 border-black">
        <h1 className="text-3xl font-bold uppercase tracking-wider">{cvData.personal.name || "John Doe"}</h1>
        <p className="text-lg text-gray-600 mb-4">
          {cvData.experiences[0]?.position || "Senior Software Engineer"}
        </p>
        <div className="text-sm flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>{cvData.personal.email || "john.doe@example.com"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>{cvData.personal.phone || "+62 812 3456 7890"}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{cvData.personal.address || "Jakarta, Indonesia"}</span>
          </div>
          {cvData.personal.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <span>{cvData.personal.linkedin}</span>
            </div>
          )}
          {cvData.personal.website && (
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <span>{cvData.personal.website}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-[2.5fr,1.5fr] gap-8">
        <div className="space-y-8">
          {/* Experience */}
          <div>
            <h2 className="font-bold text-lg border-b-2 border-black pb-1 mb-4 uppercase tracking-wider">
              {language === "id" ? "PENGALAMAN KERJA" : "WORK EXPERIENCE"}
            </h2>
            <div className="space-y-6">
              {(cvData.experiences || []).map((exp: any, index: number) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-bold text-base">{exp.position || "Senior Software Engineer"}</div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Building className="h-3.5 w-3.5 mr-1.5" />
                        <span>
                          {exp.company || "PT Tech Solutions"}, {exp.location || "Jakarta"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      <span>{exp.startDate || "Jan 2020"} - {exp.endDate || "Present"}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed whitespace-pre-line">
                    {exp.description ||
                      "• Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB\n• Memimpin tim 5 developer dalam proyek e-commerce\n• Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Summary */}
          <div>
            <h2 className="font-bold text-lg border-b-2 border-black pb-1 mb-4 uppercase tracking-wider">
              {language === "id" ? "RINGKASAN" : "SUMMARY"}
            </h2>
            <p className="text-sm leading-relaxed">
              {cvData.summary ||
                "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif."}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-bold text-lg border-b-2 border-black pb-1 mb-4 uppercase tracking-wider">
              {language === "id" ? "PENDIDIKAN" : "EDUCATION"}
            </h2>
            <div className="space-y-4">
              {(cvData.education || []).map((edu: any, index: number) => (
                <div key={index}>
                  <div className="font-bold text-base">{edu.degree || "S1 Teknik Informatika"}</div>
                  <p className="text-sm text-gray-600">{edu.institution || "Universitas Indonesia"}</p>
                  <p className="text-sm text-gray-600">{edu.year || "2018"}</p>
                  {edu.achievements && (
                    <p className="text-sm text-gray-600 mt-1">{edu.achievements}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="font-bold text-lg border-b-2 border-black pb-1 mb-4 uppercase tracking-wider">
              {language === "id" ? "KEAHLIAN" : "SKILLS"}
            </h2>
            <div className="space-y-4">
              <div>
                <div className="font-bold mb-2 text-base">Hard Skills</div>
                <p className="text-sm leading-relaxed">
                  {cvData.skills?.hard || "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS"}
                </p>
              </div>
              <div>
                <div className="font-bold mb-2 text-base">Soft Skills</div>
                <p className="text-sm leading-relaxed">
                  {cvData.skills?.soft || "Kepemimpinan, Komunikasi, Manajemen Waktu, Problem Solving"}
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          {(cvData.languages || "").length > 0 && (
            <div>
              <h2 className="font-bold text-lg border-b-2 border-black pb-1 mb-4 uppercase tracking-wider">
                {language === "id" ? "BAHASA" : "LANGUAGES"}
              </h2>
              <p className="text-sm leading-relaxed">
                {cvData.languages || "Bahasa Indonesia (Native), English (Professional)"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Helper function untuk menghitung lama pengalaman
function calculateExperience(startDate: string): number | null {
  if (!startDate) return null
  
  const start = new Date(startDate)
  const now = new Date()
  const diffYears = now.getFullYear() - start.getFullYear()
  
  return diffYears
} 