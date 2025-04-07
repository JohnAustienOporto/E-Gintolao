import { ClickableImage } from "@/components/image-viewer";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";

export default function DokumentasyonPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-28 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto content-area">
            <h1 className="text-3xl md:text-4xl font-bold text-gold-dark mb-6">Dokumentasyon</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl mb-6">
                Ang E-Gintolao ay isang proyekto ng dokumentasyon na naglalayong mapreserba at maipasa sa susunod na
                henerasyon ang mayamang kultura at wika ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban,
                Camarines Norte.
              </p>

              {/* Main Documentation Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <ClickableImage
                    src="/images/dokumentasyon-1.jpg"
                    alt="Dokumentasyon ng kultura ng pagmimina"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <ClickableImage
                    src="/images/dokumentasyon-2.jpg"
                    alt="Proseso ng pagmimina ng ginto"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Layunin ng Proyekto</h2>
              <p>Ang pangunahing layunin ng proyektong ito ay ang:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Dokumentasyon ng mga wika, salita, at terminolohiya na ginagamit ng mga komunidad na nagpapanning ng
                  ginto
                </li>
                <li>Pagpreserba ng mga kultural na gawain, tradisyon, at ritwal na may kaugnayan sa pagmimina</li>
                <li>Pagtatala ng mga kasanayan, pamamaraan, at kagamitan na ginagamit sa pagmimina</li>
                <li>Pagbibigay ng platform para sa mga kwento at karanasan ng mga minero</li>
                <li>Pagbibigay-kaalaman sa publiko tungkol sa mayamang kultura at wika ng mga komunidad na ito</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Metodolohiya</h2>
              <p>
                Ang proyektong ito ay gumamit ng iba't ibang pamamaraan upang makolekta ang mga datos at impormasyon:
              </p>

              {/* Interview Section with 4 Images */}
              {/* Pakikipanayam Section */}
              <section className="my-8">
                <h3 className="text-xl font-semibold mb-4">Pakikipanayam sa mga Mangkakabod</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="relative h-48 w-full rounded-lg overflow-hidden">
                      <ClickableImage
                        src={`/images/panayam-${num}.jpg`} 
                        alt={`Pakikipanayam sa mga minero ${num}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <p>
                  Ang pakikipanayam sa mga minero at mangkakabod ay isinagawa upang direktang makuha ang kanilang mga kaalaman at karanasan sa pagmimina ng ginto.
                </p>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-8">
                {[
                  {
                    method: "Obserbasyon",
                    description:
                      "Ang direktang obserbasyon ng mga gawain, ritwal, at proseso ng pagmimina ay nagbibigay ng malalim na pag-unawa sa kultura at kasanayan ng mga komunidad.",
                  },
                  {
                    method: "Dokumentasyon ng Audio at Visual",
                    description:
                      "Ang pagrekord ng audio at pagkuha ng mga larawan at video ay nagbibigay ng mayamang dokumentasyon ng wika, kultura, at kasanayan ng mga komunidad.",
                  },
                  {
                    method: "Pagsusuri ng Literatura",
                    description:
                      "Ang pagsusuri ng mga umiiral na literatura, dokumento, at pag-aaral tungkol sa pagmimina ng ginto sa Jose Panganiban ay nagbibigay ng konteksto at background sa proyekto.",
                  },
                  {
                    method: "Balidasyon",
                    description:
                      "Ang mga nakalap na datos ay binalidasyon sa pamamagitan ng mga eksperto at lokal na awtoridad.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-gold/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gold-dark mb-2">{item.method}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Balidasyon Section */}
              <section className="my-8">
                <h3 className="text-xl font-semibold mb-4">Mga Balidasyon</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tourism Officer Validation */}
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <ClickableImage
                      src="/images/balidasyon-tourism.jpg"
                      alt="Balidasyon mula sa Tourism Officer"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                      <p className="text-sm">
                        Balidasyon mula sa Tourism Officer ng Jose Panganiban,<br />
                        G. Narciso "Tres" Panganiban
                      </p>
                    </div>
                  </div>

                  {/* Filipino Teacher Validation */}
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <ClickableImage
                      src="/images/balidasyon-filipino.jpg"
                      alt="Balidasyon mula sa Guro sa Filipino"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                      <p className="text-sm">
                        Balidasyon mula sa Dalubguro sa Filipino,<br />
                        Gng. Rozel Abaiz Genova
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Mga Nakolektang Datos</h2>
              <p>Ang proyektong ito ay nakakolekta ng iba't ibang uri ng datos at impormasyon:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Leksikon ng mga Salita at Terminolohiya</strong> - Isang komprehensibong listahan ng mga
                  salita at terminolohiya na ginagamit ng mga komunidad na nagpapanning ng ginto, kasama ang kanilang
                  kahulugan at paggamit.
                </li>
                <li>
                  <strong>Audio Recordings</strong> - Mga recording ng mga salita, ekspresyon, kwento, at kanta na may
                  kaugnayan sa pagmimina.
                </li>
                <li>
                  <strong>Visual Documentation</strong> - Mga larawan at video ng mga gawain, ritwal, kagamitan, at
                  proseso ng pagmimina.
                </li>
                <li>
                  <strong>Mga Kwento at Karanasan</strong> - Mga personal na kwento at karanasan ng mga minero at
                  miyembro ng komunidad.
                </li>
                <li>
                  <strong>Mga Kultural na Gawain at Tradisyon</strong> - Dokumentasyon ng mga ritwal, seremonya, at
                  tradisyon na may kaugnayan sa pagmimina.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Kahalagahan ng Proyekto</h2>
              <p>Ang proyektong ito ay mahalaga sa ilang kadahilanan:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Pagpreserba ng Kultura</strong> - Ito ay tumutulong sa pagpreserba ng mayamang kultura at
                  tradisyon ng mga komunidad na nagpapanning ng ginto, na maaaring mawala dahil sa modernisasyon at iba
                  pang salik.
                </li>
                <li>
                  <strong>Dokumentasyon ng Wika</strong> - Ito ay nagdodokumento ng mga salita, terminolohiya, at
                  ekspresyon na natatangi sa mga komunidad na ito, na nagpapayaman sa ating pag-unawa sa linggwistikong
                  dibersidad ng Pilipinas.
                </li>
                <li>
                  <strong>Edukasyon</strong> - Ito ay nagbibigay ng mahalagang mapagkukunan para sa mga mag-aaral,
                  mananaliksik, at publiko na interesado sa kultura, wika, at kasaysayan ng mga komunidad na
                  nagpapanning ng ginto.
                </li>
                <li>
                  <strong>Pagkilala sa Kontribusyon</strong> - Ito ay nagbibigay ng pagkilala sa mahalagang kontribusyon
                  ng mga komunidad na nagpapanning ng ginto sa ekonomiya, kultura, at kasaysayan ng Pilipinas.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Sanggunian</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Delos Reyes, R. B. (2017, November). Register ng Pagmimina sa Chavacano: Isang Analisis. JPAIR Multidisciplinary Research. https://www.researchgate.net/publication/326824311_Register_Ng_Pagmimina_Sa_Chavacano_Isang_Analisis
                </li>
                <li>
                  Angela Irish Reyes Alday. (n.d.). Proposed Title(Pagsasalin). Scribd. https://www.scribd.com/document/441545418/Proposed-Title-Pagsasalin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

