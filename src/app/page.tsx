'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import LPTestimonial from '@/components/LPTestimonial'
import LPOffers from '@/components/LPOffers'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  const router = useRouter()
  
  const benefits = [
    {
      icon: '🏠',
      title: 'Privatunterricht zuhause oder online',
      description: 'Flexible Nachhilfe in der ganzen Schweiz und Umgebung'
    },
    {
      icon: '👥',
      title: 'Für alle Altersgruppen',
      description: 'Von der Primarschule bis zur Universität'
    },
    {
      icon: '🎯',
      title: 'Nachhaltige Erfolge feiern',
      description: 'Langfristige Verbesserung und echte Lernerfolge'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Auf "Jetzt Nachhilfe-Lehrer finden" klicken',
      description: 'Beantworten Sie online einige kurze Fragen um potentielle Nachhilfe-Lehrer in der Schweiz zu identifizieren.'
    },
    {
      number: 2,
      title: 'Strategiegespräch führen',
      description: 'Zusammen mit einem Lernstrategen erstellen Sie einen Plan, um im Rahmen ihres Budgets die gewünschten Ergebnisse zu erzielen.'
    },
    {
      number: 3,
      title: 'Lektionen starten. Erfolge feiern',
      description: 'Nach einer unverbindlichen Probelektion setzt unser Team den Plan um und verbessert die akademischen Fähigkeiten und das Selbstvertrauen des Schülers.'
    }
  ]

  const testimonials = [
    {
      name: 'Familie Kessler aus Bern',
      text: 'Dank Notenmeister hat unser Sohn wieder Freude am Lernen gefunden. Die 3-Phasen-Methodik hat wirklich funktioniert - aus der Abwärtsspirale wurde eine Erfolgsspirale. Wir können Notenmeister nur weiterempfehlen.',
      rating: 5
    },
    {
      name: 'Familie Rietmann aus Zürich',
      text: 'Die 6-Schritte-Methode von Notenmeister hat unserer Tochter geholfen, ihre Lernblockaden zu überwinden. Sie ist jetzt selbstbewusster und ihre Noten haben sich deutlich verbessert.',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '📚',
      title: 'Lerncoaching',
      description: 'Unsere Lerncoaches gehen auf die individuellen Baustellen ihrer Schüler ein. Hier steht ganzheitliches Lerncoaching im Vordergrund. Ziel ist es, dem Schüler das Lernen beizubringen.'
    },
    {
      icon: '🎓',
      title: 'Gymi-Vorbereitung',
      description: 'Unsere Gymi-Spezialisten bereiten ihre Schüler im Einzelunterricht optimal auf die Gymi-Prüfung vor. Dabei gehen wir auf Ihre Wünsche ein und unterstützen in allen Bereichen.'
    },
    {
      icon: '📐',
      title: 'Fachspezifische Nachhilfe',
      description: 'Unsere Fachspezialisten helfen ihren Schülern dort, wo diese am meisten Mühe haben. Der Fokus liegt auf spezifischen fachlichen Baustellen.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <LPHero
        title={
          <>
            <span className="inline-block">Ihre persönliche</span>{' '}
            <span className="inline-block">
              <AnimatedText text="Auswahl an Nachhilfe-Lehrern" />
            </span>
          </>
        }
        subtitle="Beantworten Sie ein paar Fragen und erhalten Sie sofort passende Lehrer-Vorschläge aus Ihrer Region."
        buttonText="Jetzt Nachhilfe-Lehrer finden"
        imageSrc="/images/Beratungsgespräch_im_modernen_Büro_20250318_192326.jpg"
        imageAlt="Professionelle Beratung - Expertin erklärt Lernkonzept im modernen Büro"
      />

      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section - Die 3-Phasen-Abwärtsspirale */}
      <LPSection
        title="Die gefährliche 3-Phasen-Abwärtsspirale"
        content="Viele Schüler geraten in einen Teufelskreis aus schlechten Noten, sinkendem Selbstvertrauen und weiteren Misserfolgen."
        bulletPoints={[
          'Phase 1: Erste schlechte Noten entstehen - oft unbemerkt',
          'Phase 2: Selbstvertrauen sinkt, Motivation geht verloren',
          'Phase 3: Lernblockaden entstehen, Abwärtsspirale verstärkt sich',
          'Resultat: Potenzial wird nicht ausgeschöpft, Zukunft gefährdet'
        ]}
        buttonText="Jetzt Nachhilfe-Lehrer finden"
        imageSrc="/images/Tochter_5_Klasse_Alleine_stark-frustriert.jpg"
        imageAlt="Frustrierte Schülerin alleine am Tisch - Die Abwärtsspirale des Lernfrustss"
        imagePosition="left"
        backgroundColor="gray"
      />

      {/* Solution Section - Custom Layout mit 6-Schritte-Methodik */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title, Subtitle, Button */}
            <div className="space-y-6">
              <p className="text-[#059669] font-semibold uppercase tracking-wide text-sm">
                Die Notenmeister-Lösung
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Unsere bewährte 6-Schritte-Methodik
              </h2>
              <p className="text-lg text-gray-600">
                Mit über 7&apos;000 erfolgreichen Lehrern schweizweit haben wir eine Methodik entwickelt, die aus der Abwärtsspirale eine Erfolgsspirale macht.
              </p>
              <button 
                onClick={() => router.push('/lehrer-finden')}
                className="bg-[#059669] text-white px-8 py-4 rounded-lg hover:bg-[#047857] transition-colors font-semibold shadow-lg cursor-pointer"
              >
                Jetzt Nachhilfe-Lehrer finden
              </button>
            </div>

            {/* Right Column - 6 Schritte Visualisierung */}
            <div className="relative">
              {/* Background Graphic - Erfolgsspirale */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M200 50 Q300 100 350 200 Q300 300 200 350 Q100 300 50 200 Q100 100 200 50" 
                        stroke="#059669" strokeWidth="3" fill="none" strokeDasharray="8 4" />
                  <path d="M200 80 Q280 120 320 200 Q280 280 200 320 Q120 280 80 200 Q120 120 200 80" 
                        stroke="#059669" strokeWidth="2" fill="none" strokeDasharray="6 3" />
                  <circle cx="200" cy="80" r="8" fill="#059669" />
                  <circle cx="320" cy="200" r="8" fill="#059669" />
                  <circle cx="200" cy="320" r="8" fill="#059669" />
                  <text x="200" y="200" textAnchor="middle" fill="#059669" fontSize="16" fontWeight="bold">↗</text>
                </svg>
              </div>

              {/* 6 Schritte Card */}
              <div className="relative bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-xl border border-green-100">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-sm font-medium text-gray-800">Lerntyp-Analyse</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-sm font-medium text-gray-800">Massgeschneiderte Lernstrategie</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-sm font-medium text-gray-800">Selbstvertrauen aufbauen</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <p className="text-sm font-medium text-gray-800">Lernblockaden lösen</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <p className="text-sm font-medium text-gray-800">Nachhaltige Lerntechniken</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                    <p className="text-sm font-medium text-gray-800">Autonomes Lernen erreichen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <LPSection
        title="Erfolgsgeschichten sprechen für sich"
        content="Aus der Abwärtsspirale wird eine Erfolgsspirale - sehen Sie selbst, wie Notenmeister das Leben von Schülern und Familien verändert hat."
        buttonText="Jetzt Nachhilfe-Lehrer finden"
        imageSrc="/images/Gemeinsames_Lernen_am_Küchentisch_20250318_192448_Mutter_Tochter.jpg"
        imageAlt="Mutter und Tochter lernen erfolgreich gemeinsam am Küchentisch"
        imagePosition="right"
        backgroundColor="white"
      />

      {/* 3 Steps */}
      <LPSteps
        title="In 3 einfachen Schritten zu besseren Noten"
        steps={steps}
        ctaText="Jetzt Nachhilfe-Lehrer finden"
      />

      {/* Testimonials */}
      <LPTestimonial
        title="Erfolgsgeschichten aus der ganzen Schweiz"
        testimonials={testimonials}
      />

      {/* Offers */}
      <LPOffers
        title="Unsere Angebote in der ganzen Schweiz"
        offers={offers}
      />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Durchbrechen Sie den Teufelskreis - Jetzt!
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 text-left">
              <p>
                Über 15&apos;000 Schüler und Studenten haben bereits mit Notenmeister den Weg aus der 3-Phasen-Abwärtsspirale gefunden. Unsere bewährte 6-Schritte-Methodik verwandelt Lernfrust in Lernerfolg und macht aus schwachen Schülern selbstbewusste Lerner.
              </p>
              
              <p>
                Mit über 7&apos;000 qualifizierten Lehrern in der ganzen Schweiz finden wir für jeden Schüler den passenden Nachhilfelehrer. Ob zuhause oder online - wir bringen den Erfolg direkt zu Ihnen.
              </p>
              
              <p>
                Warten Sie nicht, bis es zu spät ist. Je früher Sie handeln, desto schneller können wir die Abwärtsspirale stoppen und eine Erfolgsspirale in Gang setzen.
              </p>
            </div>
            
            <button 
              onClick={() => router.push('/lehrer-finden')}
              className="bg-[#059669] text-white px-8 py-4 rounded-lg hover:bg-[#047857] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Jetzt Nachhilfe-Lehrer finden
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
