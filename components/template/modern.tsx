import { Phone, Mail, MapPin, Linkedin, Globe, Calendar, Building } from "lucide-react"

interface ModernTemplateProps {
  cvData: any
  language: string
}

export function ModernTemplate({ cvData, language }: ModernTemplateProps) {
  return (
    <div className="flex flex-col space-y-6">
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold mb-3">{cvData.personal.name || "John Doe"}</h1>
        <p className="text-lg text-primary mb-4">
          {cvData.experiences[0]?.position || "Senior Software Engineer"}
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
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

      <div className="grid grid-cols-[2fr,1fr] gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold mb-4 text-primary border-b border-gray-200 pb-2">
              {language === "id" ? "Pengalaman Kerja" : "Work Experience"}
            </h2>
            <div className="space-y-5">
              {(cvData.experiences || []).map((exp: any, index: number) => (
                <div key={index}>
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
          <div>
            <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
              {language === "id" ? "Ringkasan" : "Summary"}
            </h2>
            <p className="text-sm leading-relaxed">
              {cvData.summary ||
                "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif."}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
              {language === "id" ? "Pendidikan" : "Education"}
            </h2>
            <div className="space-y-3">
              {(cvData.education || []).map((edu: any, index: number) => (
                <div key={index}>
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

          <div>
            <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
              {language === "id" ? "Keahlian" : "Skills"}
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-sm mb-2">Hard Skills</h3>
                <p className="text-sm leading-relaxed">
                  {cvData.skills?.hard || "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS"}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-2">Soft Skills</h3>
                <p className="text-sm leading-relaxed">
                  {cvData.skills?.soft || "Kepemimpinan, Komunikasi, Manajemen Waktu, Problem Solving"}
                </p>
              </div>
            </div>
          </div>

          {(cvData.languages || "").length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
                {language === "id" ? "Bahasa" : "Languages"}
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