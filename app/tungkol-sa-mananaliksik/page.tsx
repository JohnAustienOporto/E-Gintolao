import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Image from "next/image"

export default function TungkolSaMananaliksikPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-grow pt-28 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gold-dark mb-8 text-center">Tungkol sa Mananaliksik</h1>

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-center border-b pb-4">APENDIKS K<br />CURRICULUM VITAE<br />Pansariling Tala ng Mananaliksik</h2>

              {/* AIRA JOY IBAÑEZ */}
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden border-4 border-gold-dark">
                    {/* Replace with actual Image component */}
                    <Image 
                      src="/images/mananaliksik/Aira.jpg" 
                      alt="Aira Joy Ibañez"
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-gold-dark mb-4">AIRA JOY IBAÑEZ</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <p><strong className="text-gray-700">Tirahan:</strong> Purok 2, Brgy. Magang, Daet, Camarines Norte</p>
                    <p><strong className="text-gray-700">Numero ng Telepono:</strong> 09093798300</p>
                    <p><strong className="text-gray-700">Petsa ng Kapanganakan:</strong> Oktubre 21, 2003</p>
                    <p><strong className="text-gray-700">Edad:</strong> 21</p>
                    <p><strong className="text-gray-700">Lugar ng Kapanganakan:</strong> Orani, Bataan</p>
                    <p><strong className="text-gray-700">Katayuang Sibil:</strong> Dalaga</p>
                    <p><strong className="text-gray-700">Nasyonalidad:</strong> Pilipino</p>
                    <p><strong className="text-gray-700">Lenggwahe:</strong> Filipino</p>
                    <p><strong className="text-gray-700">Email:</strong> Ibanezairajoy@gmail.com</p>
                  </div>

                  <h4 className="text-lg font-semibold mt-6 mb-2 text-gold-dark border-b pb-1">EDUKASYON</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>2022 – Kasalukuyan:</strong> Batsilyer sa Pansekondaryang Edukasyon, Medyor sa Filipino<br />
                      Camarines Norte State College</li>
                    <li><strong>2015 – 2021:</strong> Mataas na Paaralan ng Camarines Norte High School</li>
                    <li><strong>2009 – 2015:</strong> Daet Elementary School</li>
                  </ul>

                  <h4 className="text-lg font-semibold mt-6 mb-2 text-gold-dark border-b pb-1">GANTIMPALA O KARANGALAN</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>2015 – May Karangalan (With Honor), Pagtatapos sa Elementarya</li>
                  </ul>

                  <h4 className="text-lg font-semibold mt-6 mb-2 text-gold-dark border-b pb-1">PAGSASANAY, PALIHAN, AT KUMPERENSIYA NA DINALUHAN</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>2024 – SANGGATOS: Buwan ng Sining</li>
                    <li>2022 – DALUYONG: Isang Kumperensiya sa Pananaliksik tungkol sa mga bagong usbong na salita (Tagapaglahad ng Pananaliksik)</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 my-12"></div>

              {/* MANILYN B. CLORES */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden border-4 border-gold-dark">
                    {/* Replace with actual Image component */}
                    <Image 
                      src="/images/mananaliksik/Manilyn.jpg" 
                      alt="Manilyn B. Clores"
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-gold-dark mb-4">MANILYN B. CLORES</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <p><strong className="text-gray-700">Tirahan:</strong> P-2, Dahican, Jose Panganiban, Camarines Norte</p>
                    <p><strong className="text-gray-700">Numero ng Telepono:</strong> 09638477574</p>
                    <p><strong className="text-gray-700">Email:</strong> Cloresmanilyn46@gmail.com</p>
                    <p><strong className="text-gray-700">Nasyonalidad:</strong> Filipino</p>
                    <p><strong className="text-gray-700">Kasarian:</strong> Babae</p>
                    <p><strong className="text-gray-700">Kapanganakan:</strong> Nobyembre 24, 2002</p>
                    <p><strong className="text-gray-700">Edad:</strong> 22</p>
                    <p><strong className="text-gray-700">Timbang:</strong> 53</p>
                    <p><strong className="text-gray-700">Taas:</strong> 5'3</p>
                    <p><strong className="text-gray-700">Marital Status:</strong> Single</p>
                    <p><strong className="text-gray-700">Lugar ng Kapanganakan:</strong> Dahican, Jose Panganiban, Camarines Norte</p>
                  </div>

                  <h4 className="text-lg font-semibold mt-6 mb-2 text-gold-dark border-b pb-1">EDUKASYON</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Kolehiyo:</strong> Batselyer ng Edukasyon, Medyor sa Filipino<br />
                      Camarines Norte State College - Abaño Campus<br />
                      Kolehiyo ng Edukasyon, Daet Camarines Norte (2022 - kasalukuyan)</li>
                    <li><strong>Sekondarya:</strong> Larap National High School<br />
                      2016–2020 & 2020–2022</li>
                    <li><strong>Elementarya:</strong> Dahican Elementary School (2011–2016)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}