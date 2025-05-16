import { Phone, Mail, MapPin, Linkedin, Globe, Calendar, Building } from "lucide-react"

interface ProfessionalTemplateProps {
  cvData: any
  language: string
}

export function ProfessionalTemplate({ cvData, language }: ProfessionalTemplateProps) {
  return (
    <div className="flex flex-col space-y-6">
      {/* Header with Photo */}
      <div className="flex items-start gap-6 border-b border-gray-200 pb-6">
        <div className="w-32 h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border-2 border-primary/20">
          <img
            src={cvData.personal.photo || "https://images.unsplash.com/photo-1644904105846-095e45fca990?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{cvData.personal.name || "John Doe"}</h1>
          <p className="text-lg text-primary mb-4">
            {cvData.experiences[0]?.position || "Senior Software Engineer"}
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span>{cvData.personal.phone || "+62 812 3456 7890"}</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <span>{cvData.personal.email || "john.doe@example.com"}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>{cvData.personal.address || "Jakarta, Indonesia"}</span>
            </div>
            {cvData.personal.linkedin && (
              <div className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2 text-primary" />
                <span>{cvData.personal.linkedin}</span>
              </div>
            )}
            {cvData.personal.website && (
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-primary" />
                <span>{cvData.personal.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-[2fr,1fr] gap-8">
        <div className="space-y-6">
          {/* Summary */}
          <div>
            <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
              {language === "id" ? "Ringkasan Profesional" : "Professional Summary"}
            </h2>
            <p className="text-sm leading-relaxed">
              {cvData.summary ||
                "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif."}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-primary border-b border-gray-200 pb-2">
              {language === "id" ? "Pengalaman Kerja" : "Work Experience"}
            </h2>
            <div className="space-y-5">
              {(cvData.experiences || []).map((exp: any, index: number) => (
                <div key={index} className="relative pl-4 border-l-2 border-primary/20">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-base">{exp.position || "Software Engineer"}</h3>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Building className="h-3.5 w-3.5 mr-1.5" />
                        <span>
                          {exp.company || "PT Tech Solutions"}, {exp.location || "Jakarta"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      <span>{`${exp.startDate || "Jan 2020"} - ${exp.endDate || "Present"}`}</span>
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

        <div className="space-y-6">
          {/* Education */}
          <div>
            <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
              {language === "id" ? "Pendidikan" : "Education"}
            </h2>
            <div className="space-y-3">
              {(cvData.education || []).map((edu: any, index: number) => (
                <div key={index} className="relative pl-4 border-l-2 border-primary/20">
                  <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2" />
                  <h3 className="font-bold text-base">{edu.degree || "S1 Teknik Informatika"}</h3>
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
            <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
              {language === "id" ? "Keahlian" : "Skills"}
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-sm mb-2">Hard Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {(cvData.skills?.hard || "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS").split(",").map((skill: string, index: number) => (
                    <span key={index} className="px-2 py-1 bg-primary/5 rounded-md text-xs">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {(cvData.skills?.soft || "Kepemimpinan, Komunikasi, Manajemen Waktu, Problem Solving").split(",").map((skill: string, index: number) => (
                    <span key={index} className="px-2 py-1 bg-primary/5 rounded-md text-xs">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          {(cvData.languages || "").length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
                {language === "id" ? "Bahasa" : "Languages"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {(cvData.languages || "Bahasa Indonesia (Native), English (Professional)").split(",").map((lang: string, index: number) => (
                  <span key={index} className="px-2 py-1 bg-primary/5 rounded-md text-xs">
                    {lang.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 