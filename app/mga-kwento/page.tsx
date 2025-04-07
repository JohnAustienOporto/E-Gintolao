import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ClickableImage } from "@/components/image-viewer"

export default function MgaKwentoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-28 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto content-area">
            <h1 className="text-3xl md:text-4xl font-bold text-gold-dark mb-6">Mga Kwento ng Impormants</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl mb-6">
                Ang mga sumusunod na kwento at karanasan ay mula sa mga impormant na nagbahagi ng kanilang kaalaman at
                karanasan sa pagmimina ng ginto sa Jose Panganiban.
              </p>

              <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                <ClickableImage
                  src="/placeholder.svg?height=400&width=800"
                  alt="Mga minero sa Jose Panganiban"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8 my-8">
                {[
                  {
                    name: "Mang Pedro",
                    age: 68,
                    experience: "45 taon",
                    quote:
                      "Noong araw, wala kaming mga makina. Lahat ay ginagawa sa kamay. Mas mahirap pero mas malinis ang hangin at tubig noon.",
                    story:
                      'Si Mang Pedro ay nagsimulang magmina noong siya ay 18 taong gulang. Siya ay sumunod sa mga yapak ng kanyang ama at lolo, na parehong minero rin. Sa loob ng 45 taon, siya ay nakasaksi ng maraming pagbabago sa industriya ng pagmimina sa Jose Panganiban.\n\nAyon kay Mang Pedro, noong mga unang taon ng kanyang pagmimina, lahat ay ginagawa sa kamay. Wala silang mga makina o advanced na kagamitan. Ang pagmimina ay isang pisikal na gawain na nangangailangan ng lakas at tiyaga.\n\n"Noong araw, wala kaming mga makina. Lahat ay ginagawa sa kamay. Mas mahirap pero mas malinis ang hangin at tubig noon," sabi ni Mang Pedro.\n\nSa kabila ng mga pagbabago, si Mang Pedro ay patuloy na gumagamit ng mga tradisyonal na pamamaraan ng pagmimina. Siya ay kilala sa komunidad bilang isang eksperto sa pagkilala ng mga lugar na may potensyal na deposito ng ginto.',
                    image: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Aling Maria",
                    age: 55,
                    experience: "30 taon",
                    quote: "Ang ginto ay hindi lamang mineral. Ito ay may espiritu at kailangan mong igalang ito.",
                    story:
                      'Si Aling Maria ay isang babae na minero, isang hindi karaniwang trabaho para sa mga babae sa Jose Panganiban. Siya ay nagsimulang magmina noong siya ay 25 taong gulang, matapos mamatay ang kanyang asawa sa isang aksidente sa minahan.\n\nBilang isang babae sa isang industriyang dominado ng mga lalaki, si Aling Maria ay nakaharap ng maraming hamon at diskriminasyon. Gayunpaman, sa pamamagitan ng kanyang determinasyon at kasanayan, siya ay napatunayan ang kanyang sarili at ngayon ay iginagalang sa komunidad.\n\n"Ang ginto ay hindi lamang mineral. Ito ay may espiritu at kailangan mong igalang ito," sabi ni Aling Maria.\n\nSi Aling Maria ay kilala sa kanyang malalim na kaalaman sa mga ritwal at seremonya na may kaugnayan sa pagmimina. Siya ay madalas na tinatawag upang mamuno sa mga seremonya bago magsimula ang isang bagong operasyon ng pagmimina.',
                    image: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Kuya Juan",
                    age: 42,
                    experience: "20 taon",
                    quote:
                      "Ang pagmimina ay hindi lamang tungkol sa paghahanap ng ginto. Ito ay tungkol sa paghahanap ng koneksyon sa lupa at sa ating mga ninuno.",
                    story:
                      'Si Kuya Juan ay isang minero na kilala sa kanyang pagiging mapamaraan at malikhain. Siya ay nagsimulang magmina noong siya ay 22 taong gulang, matapos magtapos ng kolehiyo.\n\nBagama\'t siya ay may edukasyon, si Kuya Juan ay pinili ang buhay ng isang minero dahil sa kanyang pagmamahal sa tradisyon at kultura ng kanyang komunidad. Siya ay naniniwala na ang pagmimina ay hindi lamang isang paraan upang kumita, kundi isang paraan upang mapanatili ang koneksyon sa lupa at sa mga ninuno.\n\n"Ang pagmimina ay hindi lamang tungkol sa paghahanap ng ginto. Ito ay tungkol sa paghahanap ng koneksyon sa lupa at sa ating mga ninuno," sabi ni Kuya Juan.\n\nSi Kuya Juan ay kilala sa kanyang pagiging mapamaraan. Siya ay gumawa ng kanyang sariling mga kagamitan at pamamaraan na nagkokombina ng tradisyonal at makabagong teknolohiya. Siya ay nagtuturo rin sa mga kabataan ng mga kasanayan at kaalaman sa pagmimina.',
                    image: "/placeholder.svg?height=100&width=100",
                  },
                ].map((informant, index) => (
                  <Card key={index} className="border-gold/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16 border-2 border-gold">
                          <AvatarImage src={informant.image} alt={informant.name} />
                          <AvatarFallback className="bg-gold-dark text-white">
                            {informant.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-semibold text-gold-dark">{informant.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {informant.age} taong gulang | {informant.experience} na karanasan sa pagmimina
                          </p>
                          <blockquote className="border-l-4 border-gold pl-4 italic my-4">
                            "{informant.quote}"
                          </blockquote>
                          <div className="text-sm text-muted-foreground whitespace-pre-line">{informant.story}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Mga Kolektibong Karanasan</h2>
              <p>
                Bukod sa mga indibidwal na kwento, ang mga sumusunod ay mga kolektibong karanasan at obserbasyon mula sa
                iba't ibang miyembro ng komunidad:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Mga Ritwal at Seremonya</h3>
              <p>
                Ayon sa mga impormant, bago magsimula ang pagmimina, may mga ritwal at seremonya na isinasagawa upang
                matiyak ang kaligtasan at tagumpay. Ito ay kinabibilangan ng paghahandog ng pagkain, inumin, o iba pang
                alay sa mga espiritu ng bundok o lupa.
              </p>
              <p className="mt-4">
                "Bago kami magsimula ng bagong operasyon, lagi kaming naghahandog ng alak, sigarilyo, at pagkain sa mga
                espiritu. Ito ay paraan ng paghingi ng pahintulot at proteksyon," sabi ng isang impormant.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Mga Pamahiin</h3>
              <p>
                May iba't ibang pamahiin ang mga minero na nagpapakita ng kanilang koneksyon sa kalikasan at sa mundo ng
                espiritu. Halimbawa, ang pagkakita ng ahas sa minahan ay maaaring ituring na palatandaan ng presensya ng
                ginto o ng espiritu na nagbabantay dito.
              </p>
              <p className="mt-4">
                "Kapag nakakita ka ng ahas sa minahan, ito ay maaaring mangahulugan na may ginto sa lugar na iyon. Pero
                kailangan mong maging maingat at igalang ang ahas, dahil ito ay maaaring isang espiritu na nagbabantay
                sa ginto," sabi ng isang impormant.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Mga Pagbabago sa Paglipas ng Panahon</h3>
              <p>
                Ayon sa mga impormant, ang industriya ng pagmimina sa Jose Panganiban ay nagbago nang malaki sa paglipas
                ng panahon. Ang mga tradisyonal na pamamaraan ay unti-unting pinapalitan ng mga makabagong teknolohiya,
                at ang mga kultural na gawain at tradisyon ay nahaharap sa banta ng pagkawala.
              </p>
              <p className="mt-4">
                "Noong araw, ang pagmimina ay isang komunal na gawain. Ang buong komunidad ay nagtutulungan. Ngayon, ito
                ay naging mas indibidwal at komersyal," sabi ng isang impormant.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Kahalagahan ng mga Kwentong Ito</h2>
              <p>Ang mga kwento at karanasan ng mga impormant ay mahalaga sa ilang kadahilanan:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Pagpreserba ng Kaalaman</strong> - Ang mga kwentong ito ay nagprepreserba ng kaalaman at
                  karanasan na maaaring mawala sa paglipas ng panahon.
                </li>
                <li>
                  <strong>Pagbibigay ng Konteksto</strong> - Ang mga kwentong ito ay nagbibigay ng konteksto at
                  kahulugan sa mga kultural na gawain, tradisyon, at wika ng mga komunidad na nagpapanning ng ginto.
                </li>
                <li>
                  <strong>Pagkilala sa Kontribusyon</strong> - Ang mga kwentong ito ay nagbibigay ng pagkilala sa
                  kontribusyon ng mga indibidwal at komunidad sa pagpreserba at pagpapayaman ng kultura at wika.
                </li>
                <li>
                  <strong>Inspirasyon</strong> - Ang mga kwentong ito ay maaaring magsilbing inspirasyon para sa mga
                  susunod na henerasyon na pahalagahan at ipagpatuloy ang mga tradisyon at kasanayan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

