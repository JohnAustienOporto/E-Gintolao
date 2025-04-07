// Define the structure for search results
export interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

// Define the structure for instant answers
export interface InstantAnswer {
  keywords: string[]
  title: string
  content: string
  url: string
}

// Define the structure for term details
export interface TermDetail {
  title: string
  definition: string
  longDefinition: string
  category: string
  relatedTerms: string[]
  examples: string[]
  image: string
  hasAudio: boolean
}

// Comprehensive list of all site content for search
export const siteContent: SearchResult[] = [
  // Main pages
  {
    title: "Mga Pagkakakilanlan",
    description:
      "Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay may iba't ibang pagkakakilanlan na nabuo sa loob ng maraming taon.",
    url: "/pagkakakilanlan",
    category: "Kultura",
  },
  {
    title: "Gawi",
    description:
      "Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay may mayayamang tradisyon at gawi na nagpapakita ng kanilang natatanging kultura.",
    url: "/gawi",
    category: "Kultura",
  },
  {
    title: "Paniniwala",
    description:
      "Ang mga paniniwala ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay nagpapakita ng kanilang malalim na koneksyon sa kalikasan at sa mundo ng espiritu.",
    url: "/paniniwala",
    category: "Kultura",
  },
  {
    title: "Pamamaraan",
    description:
      "Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay gumagamit ng iba't ibang pamamaraan sa paghahanap, pagkuha, at pagproseso ng ginto.",
    url: "/pamamaraan",
    category: "Teknikal",
  },
  {
    title: "Kagamitan",
    description:
      "Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay gumagamit ng iba't ibang kagamitan para sa paghahanap, pagkuha, at pagproseso ng ginto.",
    url: "/kagamitan",
    category: "Teknikal",
  },
  {
    title: "Proseso",
    description:
      "Ang proseso ng pagmimina at pagproseso ng ginto sa Jose Panganiban ay kinabibilangan ng ilang hakbang, mula sa paghahanap ng potensyal na lugar hanggang sa paglilinis at pagbebenta ng ginto.",
    url: "/proseso",
    category: "Teknikal",
  },
  {
    title: "Mga Wika",
    description:
      "Ang mga komunidad na nagpapanning ng ginto sa Jose Panganiban ay may sariling bokabularyo at terminolohiya na ginagamit sa kanilang pang-araw-araw na gawain.",
    url: "/mga-wika",
    category: "Wika",
  },
  {
    title: "Mga Kwento ng Impormants",
    description:
      "Ang mga sumusunod na kwento at karanasan ay mula sa mga impormant na nagbahagi ng kanilang kaalaman at karanasan sa pagmimina ng ginto sa Jose Panganiban.",
    url: "/mga-kwento",
    category: "Kwento",
  },
  {
    title: "Dokumentasyon",
    description:
      "Ang E-Gintolao ay isang proyekto ng dokumentasyon na naglalayong mapreserba at maipasa sa susunod na henerasyon ang mayamang kultura at wika ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban, Camarines Norte.",
    url: "/dokumentasyon",
    category: "Proyekto",
  },
  {
    title: "Tungkol sa Mananaliksik",
    description:
      "Ang E-Gintolao ay isang proyekto ng isang grupo ng mga mananaliksik na naglalayong mapreserba at maipasa sa susunod na henerasyon ang mayamang kultura at wika ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban, Camarines Norte.",
    url: "/tungkol-sa-mananaliksik",
    category: "Proyekto",
  },
  {
    title: "Mga Larong Pang-edukasyon",
    description:
      "Subukan ang iba't ibang interactive na aktibidad upang mas maunawaan ang kultura at wika ng mga komunidad na nagpapanning ng ginto sa Jose Panganiban.",
    url: "/interactive",
    category: "Mga Laro",
  },

  // Mining Terminology
  {
    title: "Abon",
    description: "Ito ay lalagyan ng ginto.",
    url: "/mga-wika/term/abon",
    category: "Terminolohiya",
  },
  {
    title: "Alay",
    description: "Ito ay maaring puting manok o baboy at ito ay ginagawa tuwing Martes o Biyernes ng gabi.",
    url: "/mga-wika/term/alay",
    category: "Terminolohiya",
  },
  {
    title: "Alpombra",
    description: "Inilalagay sa ilalim ng kahon upang magsilbing pansapin at pansala ng ginto.",
    url: "/mga-wika/term/alpombra",
    category: "Terminolohiya",
  },
  {
    title: "Apad",
    description: "Isang uri ng bato.",
    url: "/mga-wika/term/apad",
    category: "Terminolohiya",
  },
  {
    title: "Asoge",
    description: "Tumutulong sa pagbuo ng amalgam sa ginto.",
    url: "/mga-wika/term/asoge",
    category: "Terminolohiya",
  },
  {
    title: "Baral",
    description: "Tali na may maliliit na kahoy. Ito ang ginagamit para hilahin ang lupa na galing sa ilalim ng butas.",
    url: "/mga-wika/term/baral",
    category: "Terminolohiya",
  },
  {
    title: "Barena",
    description:
      "Ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita upang mabasag ang mga batong malapit sa bita.",
    url: "/mga-wika/term/barena",
    category: "Terminolohiya",
  },
  {
    title: "Barenador",
    description: "Mga tao na nagbubutas sa bita ng tunnel para sa pagkabitan o paglagyan ng dinamita.",
    url: "/mga-wika/term/barenador",
    category: "Terminolohiya",
  },
  {
    title: "Bareta/Barita",
    description: "Mahabang bakal na patulis ang dulo at lapad; ginagamit panghukay upang makagawa ng butas.",
    url: "/mga-wika/term/bareta",
    category: "Terminolohiya",
  },
  {
    title: "Bao/Bau",
    description:
      "May dalawang uwi ito, isa ay kahoy at isa ay bakal. Ang bau na ito ay ginagamit ng mga magkakabod sa ilalim ng butas para pangkalay ng lupa para ang kanilang mga kamay ay hindi masugatan.",
    url: "/mga-wika/term/bao",
    category: "Terminolohiya",
  },
  {
    title: "Bita",
    description: "Isang linya sa apad na siyang sinususugan para makakita ng ginto.",
    url: "/mga-wika/term/bita",
    category: "Terminolohiya",
  },
  {
    title: "Blower",
    description: "Ito ay nagbibigay at nagsisilbing hangin ng mga tao sa ilalim upang hindi malason.",
    url: "/mga-wika/term/blower",
    category: "Terminolohiya",
  },
  {
    title: "Bomber",
    description: "Mga taong nagpapasabog ng dinamita sa ilalim ng tunnel.",
    url: "/mga-wika/term/bomber",
    category: "Terminolohiya",
  },
  {
    title: "Boraks",
    description: "Pulbos na ginagamit para hindi maghiwa-hiwalay ang ginto kapag niluluto.",
    url: "/mga-wika/term/boraks",
    category: "Terminolohiya",
  },
  {
    title: "Bosero",
    description: "Taong sumusisid sa ilalim ng butas para maghukay upang mapalalim ang butas.",
    url: "/mga-wika/term/bosero",
    category: "Terminolohiya",
  },
  {
    title: "Bulmilan",
    description: "Makina na ginagamit na pandurog sa mga bato na mayroong ginto.",
    url: "/mga-wika/term/bulmilan",
    category: "Terminolohiya",
  },
  {
    title: "Butas",
    description: "Malalim na hukay na kinukuhaan ng ginto o sakada sa ilalim ng lupa.",
    url: "/mga-wika/term/butas",
    category: "Terminolohiya",
  },
  {
    title: "Compressor",
    description:
      "Makina na ginagamit sa pagsisid ng mga bosero. Ito ang pinagkukuhaan nila ng hangin para nakakahinga sila sa ilalim ng tubig.",
    url: "/mga-wika/term/compressor",
    category: "Terminolohiya",
  },
  {
    title: "Drum",
    description:
      "Dalawang bilok na bakal, dito sinasalang ang mga bato o sakada na galing sa butas para gawing pinong buhangin.",
    url: "/mga-wika/term/drum",
    category: "Terminolohiya",
  },
  {
    title: "Garagad",
    description: "Isang suporta sa paghila ng lubid mula sa ilalim para mapagaan ang trabaho ng magkakabud.",
    url: "/mga-wika/term/garagad",
    category: "Terminolohiya",
  },
  {
    title: "Ginto",
    description:
      "Tumutukoy sa isang mahalagang mineral na kinukuha mula sa lupa sa pamamagitan ng iba't ibang pamamaraan ng pagmimina.",
    url: "/mga-wika/term/ginto",
    category: "Terminolohiya",
  },
  {
    title: "Ispat",
    description: "Nagsisilbing liwanag na ginagamit sa loob ng tunnel o tinatawag sa Ingles na 'flashlight'.",
    url: "/mga-wika/term/ispat",
    category: "Terminolohiya",
  },
  {
    title: "Kabod",
    description: "Ang pagmimina o proseso ng paghukay ng lupa at pagkuha ng yamang mineral partikular ang ginto.",
    url: "/mga-wika/term/kabod",
    category: "Terminolohiya",
  },
  {
    title: "Kabudan",
    description: "Lugar kung saan nagkakabud ang mga minero para makakuha ng ginto.",
    url: "/mga-wika/term/kabudan",
    category: "Terminolohiya",
  },
  {
    title: "Kahon",
    description:
      "Ginagamit pangkuha ng ginto. Ito ay tinawag na kahon dahil sa hugis at itsura nito na parang isang kahon. Ito ay salaan ng mga ginto at dito binubuhos ang pinong buhangin habang sa ilalim nito ay may mga barani na nagsasalo sa ginto.",
    url: "/mga-wika/term/kahon",
    category: "Terminolohiya",
  },
  {
    title: "Kalalawan",
    description: "Ang tawag sa lagayan ng ginto na nakukuha sa kabudan, dito iniipon para hindi kumalat ito.",
    url: "/mga-wika/term/kalalawan",
    category: "Terminolohiya",
  },
  {
    title: "Kawali",
    description: "Ginagamit na kasangkapan upang durugin ang ginto at asoge upang maghalo ito.",
    url: "/mga-wika/term/kawali",
    category: "Terminolohiya",
  },
  {
    title: "Laput",
    description:
      "Ito ay tinunaw na putik para ibuhos sa butas. Ito ang nag sisilbing patibay sa mga singit singit sa butas para hindi ito bumagsak.",
    url: "/mga-wika/term/laput",
    category: "Terminolohiya",
  },
  {
    title: "Lasduk",
    description:
      "Ito ang nilalagyan ng sakada mula sa ilalim ng butas pataas sa patnawan ng sakada. Ito ay sako na may may bilog na bakal sa harapan.",
    url: "/mga-wika/term/lasduk",
    category: "Terminolohiya",
  },
  {
    title: "Mangkakabod",
    description: "Taong naghuhukay ng lupa at kumukuha ng yamang mineral.",
    url: "/mga-wika/term/mangkakabod",
    category: "Terminolohiya",
  },
  {
    title: "Maso",
    description: "Isang bakal na ginagamit na pamukpok sa mowel at pangdurog sa mga malalaking bato.",
    url: "/mga-wika/term/maso",
    category: "Terminolohiya",
  },
  {
    title: "Mowel",
    description: "Isang bakal na patulis na ginagamit na pantipak sa mga apad.",
    url: "/mga-wika/term/mowel",
    category: "Terminolohiya",
  },
  {
    title: "Mucker",
    description: "Taong naglalabas ng sakada mula sa pinutukan na bita sa ilalim ng tunnel.",
    url: "/mga-wika/term/mucker",
    category: "Terminolohiya",
  },
  {
    title: "Pabirik",
    description:
      "Isang uri ng maliit na kagamitan na ginagamit sa pagkuha ng mga mineral, partikular na sa pagproseso ng ginto.",
    url: "/mga-wika/term/pabirik",
    category: "Terminolohiya",
  },
  {
    title: "Pala",
    description: "Isang kagamitan na ginagamit upang hukayin o maglipat ng lupa.",
    url: "/mga-wika/term/pala",
    category: "Terminolohiya",
  },
  {
    title: "Palayok",
    description: "Isang maliliit na palayok at dito niluluto ang ginto na may kasamang asoge.",
    url: "/mga-wika/term/palayok",
    category: "Terminolohiya",
  },
  {
    title: "Pirates",
    description: "Tinatawag na pirating ginto. Mga kulay puti na ani mo ay ginto na nakadikit sa bato.",
    url: "/mga-wika/term/pirates",
    category: "Terminolohiya",
  },
  {
    title: "Putok",
    description:
      "Pampasabog sa mga bato ito rin ay tinatawag na 'bigas-bigas'. Pangbungkal ng maramihang bato at lupa.",
    url: "/mga-wika/term/putok",
    category: "Terminolohiya",
  },
  {
    title: "Rad",
    description: "Mga solid na mahabang bakal, ito ay sinasama sa pagsalang ng mga bato para mabilis ma durog.",
    url: "/mga-wika/term/rad",
    category: "Terminolohiya",
  },
  {
    title: "Ragmilan",
    description:
      "Lugar kung saan dito nag sasalang ng mga sakada o ng mga bato para ma kuha ang ginto na nakapadikit dito.",
    url: "/mga-wika/term/ragmilan",
    category: "Terminolohiya",
  },
  {
    title: "Tagger operator",
    description: "Sila ang nagpapagana ng tagger hoist upang maitaas lahat ng sakada mula sa ilalim ng tunnel.",
    url: "/mga-wika/term/tagger-operator",
    category: "Terminolohiya",
  },
  {
    title: "Water pump",
    description: "Ginagamit pang limas kapag malalim ang tubig.",
    url: "/mga-wika/term/water-pump",
    category: "Terminolohiya",
  },

  // Mining processes
  {
    title: "Pagpapanning",
    description:
      "Isang simpleng pamamaraan ng pagkuha ng ginto mula sa buhangin o lupa gamit ang isang kawali o batya.",
    url: "/pamamaraan?process=pagpapanning",
    category: "Pamamaraan",
  },
  {
    title: "Chemical Processing",
    description:
      "Isang pamamaraan na gumagamit ng mga kemikal, tulad ng mercury o cyanide, upang mahiwalay ang ginto mula sa iba pang materyales.",
    url: "/pamamaraan?process=chemical",
    category: "Pamamaraan",
  },
  {
    title: "Paggamit ng Sluice Box",
    description: "Isang pamamaraan na gumagamit ng sluice box upang mahiwalay ang ginto mula sa lupa o buhangin.",
    url: "/pamamaraan?process=sluice",
    category: "Pamamaraan",
  },
  {
    title: "Paggamit ng Metal Detector",
    description:
      "Isang pamamaraan na gumagamit ng metal detector upang mahanap ang mga lugar na may potensyal na deposito ng ginto.",
    url: "/pamamaraan?process=detector",
    category: "Pamamaraan",
  },
  {
    title: "Paggamit ng Dredge",
    description: "Isang pamamaraan na gumagamit ng dredge upang makuha ang lupa o buhangin mula sa ilalim ng tubig.",
    url: "/pamamaraan?process=dredge",
    category: "Pamamaraan",
  },

  // Beliefs and traditions
  {
    title: "Mga Bantay ng Ginto",
    description: "Ang paniniwala na may mga espiritu o nilalang na nagbabantay sa mga deposito ng ginto.",
    url: "/paniniwala?belief=bantay",
    category: "Paniniwala",
  },
  {
    title: "Paghahandog sa mga Espiritu",
    description:
      "Bago magsimula ang pagmimina, ang mga minero ay naghahandog ng pagkain, inumin, o iba pang alay sa mga espiritu ng bundok o lupa.",
    url: "/paniniwala?ritual=paghahandog",
    category: "Ritwal",
  },
  {
    title: "Pagpili ng Araw at Oras",
    description:
      "May paniniwala ang mga minero na may mga partikular na araw at oras na mas maswerte para sa pagmimina.",
    url: "/paniniwala?belief=araw",
    category: "Paniniwala",
  },
  {
    title: "Bawal Magmura",
    description:
      "Ang pagmumura o pagsasalita ng masasamang salita sa loob ng minahan ay itinuturing na bawal dahil maaari itong magalit sa mga espiritu.",
    url: "/paniniwala?belief=bawal-magmura",
    category: "Paniniwala",
  },
  {
    title: "Bawal ang Babae",
    description:
      "Sa ilang komunidad, may paniniwala na ang pagpasok ng babae sa minahan ay maaaring magdulot ng kamalasan o mawala ang ginto.",
    url: "/paniniwala?belief=bawal-babae",
    category: "Paniniwala",
  },
  {
    title: "Pagkakita ng Ahas",
    description:
      "Ang pagkakita ng ahas sa minahan ay maaaring ituring na palatandaan ng presensya ng ginto o ng espiritu na nagbabantay dito.",
    url: "/paniniwala?belief=ahas",
    category: "Paniniwala",
  },
  {
    title: "Panaginip",
    description:
      "Ang mga panaginip ay itinuturing na mahalagang palatandaan. Ang panaginip tungkol sa tubig o ilog ay maaaring mangahulugan ng pagkakaroon ng ginto.",
    url: "/paniniwala?belief=panaginip",
    category: "Paniniwala",
  },

  // Cultural identities
  {
    title: "Mga Abantero",
    description: "Sila ang mga nangunguna sa paghahanap ng ginto at nagtatakda ng direksyon ng pagmimina.",
    url: "/pagkakakilanlan?group=abantero",
    category: "Pagkakakilanlan",
  },
  {
    title: "Mga Birador",
    description: "Sila ang mga eksperto sa paggamit ng mga kagamitan para sa pagkuha ng ginto mula sa lupa o bato.",
    url: "/pagkakakilanlan?group=birador",
    category: "Pagkakakilanlan",
  },
  {
    title: "Mga Timbero",
    description: "Sila ang mga responsable sa pagtitimbang at pagtatasa ng halaga ng nakuhang ginto.",
    url: "/pagkakakilanlan?group=timbero",
    category: "Pagkakakilanlan",
  },

  // Tools and equipment
  {
    title: "Batya o Kawali",
    description: "Isang mababaw na lalagyan na ginagamit sa pagpapanning ng ginto.",
    url: "/kagamitan?tool=batya",
    category: "Kagamitan",
  },
  {
    title: "Sluice Box",
    description:
      "Isang kahon na may mga hadlang o riffle sa ilalim na ginagamit upang mahiwalay ang ginto mula sa lupa o buhangin.",
    url: "/kagamitan?tool=sluice",
    category: "Kagamitan",
  },
  {
    title: "Pickaxe at Shovel",
    description: "Mga simpleng kagamitan na ginagamit sa pagkuha ng lupa o bato.",
    url: "/kagamitan?tool=pickaxe",
    category: "Kagamitan",
  },
  {
    title: "Metal Detector",
    description:
      "Isang elektronikong kagamitan na nagbibigay ng signal kapag may nadetektang metal, kabilang ang ginto.",
    url: "/kagamitan?tool=detector",
    category: "Kagamitan",
  },
  {
    title: "Dulang",
    description: "Isang tradisyonal na kagamitan na ginagamit sa paghuhugas ng ginto.",
    url: "/kagamitan?tool=dulang",
    category: "Kagamitan",
  },
  {
    title: "Bato-balani",
    description:
      "Ang bato-balani o magnet ay ginagamit upang matanggal ang mga bakal o iron particles mula sa nakuhang materyales.",
    url: "/kagamitan?tool=bato-balani",
    category: "Kagamitan",
  },
  {
    title: "Dredge",
    description: "Isang kagamitan na gumagamit ng suction upang makuha ang lupa o buhangin mula sa ilalim ng tubig.",
    url: "/kagamitan?tool=dredge",
    category: "Kagamitan",
  },
  {
    title: "Crusher",
    description:
      "Isang makina na ginagamit upang durugin ang malalaking bato upang mas madaling makuha ang ginto mula rito.",
    url: "/kagamitan?tool=crusher",
    category: "Kagamitan",
  },
  {
    title: "Centrifuge",
    description:
      "Isang kagamitan na gumagamit ng centrifugal force upang mahiwalay ang ginto mula sa iba pang materyales.",
    url: "/kagamitan?tool=centrifuge",
    category: "Kagamitan",
  },
  {
    title: "Gold Melting Furnace",
    description: "Isang kagamitan na ginagamit upang tunawin ang ginto at ihulma ito sa mga bar o iba pang anyo.",
    url: "/kagamitan?tool=furnace",
    category: "Kagamitan",
  },

  // Mining processes steps
  {
    title: "Paghahanap ng Lugar",
    description: "Ang unang hakbang ay ang paghahanap ng lugar na may potensyal na deposito ng ginto.",
    url: "/proseso?step=paghahanap",
    category: "Proseso",
  },
  {
    title: "Paghahanda ng Lugar",
    description: "Kapag nahanap na ang potensyal na lugar, ito ay inihahanda para sa pagmimina.",
    url: "/proseso?step=paghahanda",
    category: "Proseso",
  },
  {
    title: "Pagkuha ng Materyales",
    description: "Ang susunod na hakbang ay ang pagkuha ng lupa, buhangin, o bato na pinaghihinalaang may ginto.",
    url: "/proseso?step=pagkuha",
    category: "Proseso",
  },
  {
    title: "Paghihiwalay ng Ginto",
    description: "Ang nakuhang materyales ay ipoproseso upang mahiwalay ang ginto mula sa iba pang materyales.",
    url: "/proseso?step=paghihiwalay",
    category: "Proseso",
  },
  {
    title: "Paglilinis at Pagpino",
    description: "Ang nahiwalay na ginto ay lilinisin at papinuhin upang matanggal ang mga natitirang impurities.",
    url: "/proseso?step=paglilinis",
    category: "Proseso",
  },
  {
    title: "Pagbebenta o Paggamit",
    description:
      "Ang huling hakbang ay ang pagbebenta ng ginto sa mga buyer o paggamit nito para sa paggawa ng mga alahas o iba pang produkto.",
    url: "/proseso?step=pagbebenta",
    category: "Proseso",
  },

  // Interactive learning activities
  {
    title: "Terminology Quiz",
    description: "Subukan ang iyong kaalaman sa mga terminolohiya ng pagmimina sa pamamagitan ng quiz na ito.",
    url: "/interactive?activity=quiz",
    category: "Mga Laro",
  },
  {
    title: "Mining Crossword",
    description: "Sagutan ang crossword puzzle na may mga salita at termino na ginagamit sa pagmimina.",
    url: "/interactive?activity=crossword",
    category: "Mga Laro",
  },
  {
    title: "Tools Matching Game",
    description: "Itugma ang bawat kagamitan sa tamang paglalarawan sa matching game na ito.",
    url: "/interactive?activity=matching",
    category: "Mga Laro",
  },
  {
    title: "Mining Timeline",
    description:
      "Tuklasin ang kasaysayan ng pagmimina sa Jose Panganiban sa pamamagitan ng interactive timeline na ito.",
    url: "/interactive?activity=timeline",
    category: "Mga Laro",
  },

  // Informant stories
  {
    title: "Kwento ni Mang Pedro",
    description:
      "Si Mang Pedro ay nagsimulang magmina noong siya ay 18 taong gulang. Siya ay sumunod sa mga yapak ng kanyang ama at lolo, na parehong minero rin.",
    url: "/mga-kwento?informant=pedro",
    category: "Kwento",
  },
  {
    title: "Kwento ni Aling Maria",
    description:
      "Si Aling Maria ay isang babae na minero, isang hindi karaniwang trabaho para sa mga babae sa Jose Panganiban.",
    url: "/mga-kwento?informant=maria",
    category: "Kwento",
  },
  {
    title: "Kwento ni Kuya Juan",
    description: "Si Kuya Juan ay isang minero na kilala sa kanyang pagiging mapamaraan at malikhain.",
    url: "/mga-kwento?informant=juan",
    category: "Kwento",
  },

  // Additional terms from the table
  {
    title: "Abantero",
    description: "Sila ang mga nangunguna sa paghahanap ng ginto at nagtatakda ng direksyon ng pagmimina.",
    url: "/mga-wika/term/abantero",
    category: "Terminolohiya",
  },
  {
    title: "Birador",
    description: "Sila ang mga eksperto sa paggamit ng mga kagamitan para sa pagkuha ng ginto mula sa lupa o bato.",
    url: "/mga-wika/term/birador",
    category: "Terminolohiya",
  },
  {
    title: "Timbero",
    description: "Sila ang mga responsable sa pagtitimbang at pagtatasa ng halaga ng nakuhang ginto.",
    url: "/mga-wika/term/timbero",
    category: "Terminolohiya",
  },
  {
    title: "Amalgam",
    description: "Ang pinaghalong ginto at asoge sa proseso ng pagproseso ng ginto.",
    url: "/mga-wika/term/amalgam",
    category: "Terminolohiya",
  },
  {
    title: "Bantay-Bundok",
    description: "Ang espiritu o nilalang na pinaniniwalaan na nagbabantay sa bundok.",
    url: "/mga-wika/term/bantay-bundok",
    category: "Paniniwala",
  },
  {
    title: "Engkanto",
    description: "Isang uri ng espiritu o supernatural being na pinaniniwalaan na naninirahan sa bundok.",
    url: "/mga-wika/term/engkanto",
    category: "Paniniwala",
  },
  {
    title: "Hilot",
    description: "Ang traditional healer na tumutulong sa mga minero.",
    url: "/mga-wika/term/hilot",
    category: "Trabaho",
  },
]

// Instant answers for common queries
export const instantAnswers: InstantAnswer[] = [
  {
    keywords: ["alay", "offering", "ritual"],
    title: "Alay - Ritwal sa Pagmimina",
    content:
      "Ang Alay ay isang ritwal na ginagawa ng mga minero tuwing Martes o Biyernes ng gabi. Ito ay maaaring puting manok o baboy na iniaalay sa mga espiritu ng bundok o lupa upang humingi ng pahintulot at proteksyon.",
    url: "/mga-wika/term/alay",
  },
  {
    keywords: ["ginto", "gold", "mineral"],
    title: "Ginto - Mahalagang Mineral",
    content:
      "Ang ginto ay isang mahalagang mineral na kinukuha mula sa lupa sa pamamagitan ng iba't ibang pamamaraan ng pagmimina. Sa Jose Panganiban, ito ay may espirituwal na kahulugan at hindi lamang isang materyal na kayamanan.",
    url: "/mga-wika/term/ginto",
  },
  {
    keywords: ["pagpapanning", "panning", "traditional"],
    title: "Pagpapanning - Tradisyonal na Pamamaraan",
    content:
      "Ang pagpapanning ay isang simpleng pamamaraan ng pagkuha ng ginto mula sa buhangin o lupa gamit ang isang kawali o batya. Ito ay isa sa mga pinakalumang pamamaraan ng pagmimina ng ginto.",
    url: "/pamamaraan?process=pagpapanning",
  },
  {
    keywords: ["barena", "tool", "drill"],
    title: "Barena - Kagamitan sa Pagmimina",
    content:
      "Ang barena ay ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita upang mabasag ang mga batong malapit sa bita. Ito ay mahalagang kagamitan sa proseso ng pagmimina.",
    url: "/mga-wika/term/barena",
  },
  {
    keywords: ["bantay", "guardian", "spirit"],
    title: "Mga Bantay ng Ginto - Paniniwala",
    content:
      "Ang mga bantay ng ginto ay mga espiritu o nilalang na naniniwala ang mga minero na nagbabantay sa mga deposito ng ginto. Ayon sa paniniwala, kailangan silang igalang at hingan ng pahintulot bago magsimula ng pagmimina.",
    url: "/paniniwala?belief=bantay",
  },
  {
    keywords: ["asoge", "mercury", "chemical"],
    title: "Asoge - Kemikal sa Pagproseso ng Ginto",
    content:
      "Ang asoge o mercury ay isang kemikal na tumutulong sa pagbuo ng amalgam sa ginto. Ito ay ginagamit upang mahiwalay ang ginto mula sa iba pang materyales, ngunit ito ay nakakalason at mapanganib sa kalusugan at kapaligiran kung hindi maayos na gagamitin.",
    url: "/mga-wika/term/asoge",
  },
  {
    keywords: ["alpombra", "mat", "filter"],
    title: "Alpombra - Pansala ng Ginto",
    content:
      "Ang alpombra ay inilalagay sa ilalim ng kahon upang magsilbing pansapin at pansala ng ginto. Ito ay tumutulong sa paghihiwalay ng ginto mula sa iba pang materyales tulad ng buhangin at bato.",
    url: "/mga-wika/term/alpombra",
  },
  {
    keywords: ["kabod", "mining", "process"],
    title: "Kabod - Proseso ng Pagmimina",
    content:
      "Ang kabod ay tumutukoy sa proseso ng pagmimina o paghukay ng lupa at pagkuha ng yamang mineral, partikular ang ginto. Ito ay isang komprehensibong termino na sumasaklaw sa lahat ng aspeto ng pagmimina.",
    url: "/mga-wika/term/kabod",
  },
  {
    keywords: ["ritwal", "ritual", "ceremony"],
    title: "Mga Ritwal sa Pagmimina",
    content:
      "Ang mga ritwal sa pagmimina ay mga seremonya o gawain na isinasagawa bago, habang, o pagkatapos ng pagmimina. Ito ay ginagawa upang humingi ng pahintulot, proteksyon, o pasasalamat sa mga espiritu ng bundok o lupa.",
    url: "/paniniwala?ritual=paghahandog",
  },
  {
    keywords: ["kagamitan", "tools", "equipment"],
    title: "Mga Kagamitan sa Pagmimina",
    content:
      "Ang mga kagamitan sa pagmimina ay mga tools o equipment na ginagamit sa paghahanap, pagkuha, at pagproseso ng ginto. Kabilang dito ang barena, pala, kahon, batya, at marami pang iba.",
    url: "/kagamitan",
  },
  {
    keywords: ["butas", "tunnel", "hole"],
    title: "Butas - Tunnel sa Pagmimina",
    content:
      "Ang butas ay tumutukoy sa malalim na hukay o tunnel na kinukuhaan ng ginto o sakada sa ilalim ng lupa. Ito ay isang mahalagang bahagi ng underground mining sa Jose Panganiban.",
    url: "/mga-wika/term/butas",
  },
  {
    keywords: ["bosero", "diver", "underwater"],
    title: "Bosero - Underwater Miner",
    content:
      "Ang bosero ay taong sumusisid sa ilalim ng butas para maghukay upang mapalalim ang butas. Sila ay gumagamit ng compressor para makahinga sa ilalim ng tubig habang nagtatrabaho.",
    url: "/mga-wika/term/bosero",
  },
  {
    keywords: ["abantero", "leader", "guide"],
    title: "Abantero - Lider ng Pagmimina",
    content:
      "Ang mga abantero ay sila ang mga nangunguna sa paghahanap ng ginto at nagtatakda ng direksyon ng pagmimina. Sila ay may malalim na kaalaman sa pagkilala ng mga lugar na may potensyal na deposito ng ginto.",
    url: "/pagkakakilanlan?group=abantero",
  },
  {
    keywords: ["timbero", "weigher", "assessor"],
    title: "Timbero - Tagasukat ng Ginto",
    content:
      "Ang mga timbero ay sila ang mga responsable sa pagtitimbang at pagtatasa ng halaga ng nakuhang ginto. Sila ay may mahalagang papel sa pagtiyak ng tamang halaga ng ginto.",
    url: "/pagkakakilanlan?group=timbero",
  },
  {
    keywords: ["birador", "expert", "extractor"],
    title: "Birador - Eksperto sa Pagkuha ng Ginto",
    content:
      "Ang mga birador ay sila ang mga eksperto sa paggamit ng mga kagamitan para sa pagkuha ng ginto mula sa lupa o bato. Sila ay may espesyal na kasanayan sa paggamit ng mga kagamitan tulad ng barena at pala.",
    url: "/pagkakakilanlan?group=birador",
  },
]

// Comprehensive term details
export const termData: Record<string, TermDetail> = {
  abon: {
    title: "Abon",
    definition: "Ito ay lalagyan ng ginto.",
    longDefinition:
      "Ang Abon ay isang lalagyan na ginagamit para sa ginto sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang mahalagang kagamitan para sa pag-iimbak at pagdadala ng nakuhang ginto.",
    category: "Kagamitan",
    relatedTerms: ["Kalalawan", "Kahon", "Lasduk"],
    examples: [
      "Ilagay mo ang ginto sa abon para hindi ito mawala.",
      "Punong-puno na ang abon ng ginto mula sa aming pagmimina kahapon.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  alay: {
    title: "Alay",
    definition: "Ito ay maaring puting manok o baboy at ito ay ginagawa tuwing Martes o Biyernes ng gabi.",
    longDefinition:
      "Ang Alay ay isang mahalagang ritwal sa pagmimina ng ginto sa Jose Panganiban. Ito ay isang pag-aalay ng puting manok o baboy sa mga espiritu ng bundok o lupa, na isinasagawa tuwing Martes o Biyernes ng gabi. Ang ritwal na ito ay ginagawa upang humingi ng pahintulot at proteksyon mula sa mga espiritu bago magsimula ng operasyon ng pagmimina.",
    category: "Ritwal",
    relatedTerms: ["Paghahandog", "Bantay ng Ginto", "Espiritu"],
    examples: [
      "Bago kami nagsimula ng bagong butas, nag-alay muna kami ng puting manok sa bundok.",
      "Tuwing Biyernes ng gabi, nagsasagawa ng alay ang mga minero para sa kanilang kaligtasan.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  alpombra: {
    title: "Alpombra",
    definition: "Inilalagay sa ilalim ng kahon upang magsilbing pansapin at pansala ng ginto.",
    longDefinition:
      "Ang Alpombra ay isang materyal na inilalagay sa ilalim ng kahon upang magsilbing pansapin at pansala ng ginto sa proseso ng pagmimina sa Jose Panganiban. Ito ay tumutulong sa paghihiwalay ng ginto mula sa iba pang materyales tulad ng buhangin at bato.",
    category: "Kagamitan",
    relatedTerms: ["Kahon", "Salaan", "Barani"],
    examples: [
      "Kailangan palitan ang alpombra dahil hindi na masyadong nakakahuli ng ginto.",
      "Ang magandang alpombra ay nakakatulong sa mas mabisang pagkuha ng ginto.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  apad: {
    title: "Apad",
    definition: "Isang uri ng bato.",
    longDefinition:
      "Ang Apad ay isang uri ng bato na matatagpuan sa mga lugar ng pagmimina sa Jose Panganiban. Ito ay karaniwang matigas at maaaring nakapaligid sa mga deposito ng ginto o bita.",
    category: "Terminolohiya",
    relatedTerms: ["Bita", "Barena", "Putok"],
    examples: [
      "Kailangan nating basagin ang apad para makarating sa bita.",
      "Matigas ang apad sa lugar na ito, kailangan ng mas malakas na dinamita.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  asoge: {
    title: "Asoge",
    definition: "Tumutulong sa pagbuo ng amalgam sa ginto.",
    longDefinition:
      "Ang Asoge, o mercury sa Ingles, ay isang kemikal na tumutulong sa pagbuo ng amalgam sa ginto sa proseso ng pagmimina sa Jose Panganiban. Ito ay ginagamit upang mahiwalay ang ginto mula sa iba pang materyales. Gayunpaman, ito ay isang nakakalasong kemikal at may mga panganib sa kalusugan at kapaligiran kung hindi maayos na gagamitin.",
    category: "Kemikal",
    relatedTerms: ["Amalgam", "Kawali", "Palayok"],
    examples: [
      "Kailangan mag-ingat sa paggamit ng asoge dahil ito ay nakakalason.",
      "Ginagamit ang asoge para mahiwalay ang ginto mula sa iba pang materyales.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  baral: {
    title: "Baral",
    definition: "Tali na may maliliit na kahoy. Ito ang ginagamit para hilahin ang lupa na galing sa ilalim ng butas.",
    longDefinition:
      "Ang Baral ay isang uri ng tali na may maliliit na kahoy na nakakabit dito. Ito ay ginagamit sa pagmimina sa Jose Panganiban para hilahin ang lupa o sakada na galing sa ilalim ng butas patungo sa ibabaw. Ito ay isang mahalagang kagamitan sa proseso ng pagmimina.",
    category: "Kagamitan",
    relatedTerms: ["Butas", "Lasduk", "Garagad"],
    examples: [
      "Hilahin mo ang baral para maiangat ang lupa mula sa ilalim.",
      "Nasira ang baral kaya kailangan nating gumawa ng bago.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  barena: {
    title: "Barena",
    definition:
      "Ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita upang mabasag ang mga batong malapit sa bita.",
    longDefinition:
      "Ang Barena ay isang kagamitan na ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita upang mabasag ang mga batong malapit sa bita sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang mahalagang kagamitan sa underground mining.",
    category: "Kagamitan",
    relatedTerms: ["Apad", "Bita", "Barenador", "Putok"],
    examples: [
      "Kailangan ng matalas na barena para makapagbutas sa matigas na bato.",
      "Ang barenador ay gumagamit ng barena para gumawa ng butas para sa dinamita.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  barenador: {
    title: "Barenador",
    definition: "Mga tao na nagbubutas sa bita ng tunnel para sa pagkabitan o paglagyan ng dinamita.",
    longDefinition:
      "Ang Barenador ay tumutukoy sa mga tao na nagbubutas sa bita ng tunnel para sa pagkabitan o paglagyan ng dinamita sa proseso ng pagmimina sa Jose Panganiban. Sila ay may espesyal na kasanayan sa paggamit ng barena at iba pang kagamitan para sa pagbubutas.",
    category: "Trabaho",
    relatedTerms: ["Barena", "Bita", "Putok", "Bomber"],
    examples: [
      "Ang barenador ay kailangang maging maingat sa pagbubutas para sa dinamita.",
      "Si Juan ay isang mahusay na barenador, mabilis siyang makabutas sa matigas na bato.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  bareta: {
    title: "Bareta/Barita",
    definition: "Mahabang bakal na patulis ang dulo at lapad; ginagamit panghukay upang makagawa ng butas.",
    longDefinition:
      "Ang Bareta o Barita ay isang mahabang bakal na patulis ang dulo at lapad na ginagamit panghukay upang makagawa ng butas sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang mahalagang kagamitan sa paghukay at pagbubutas ng lupa o bato.",
    category: "Kagamitan",
    relatedTerms: ["Barena", "Pala", "Maso"],
    examples: [
      "Gamitin mo ang bareta para makabutas sa matigas na lupa.",
      "Nasira ang dulo ng bareta dahil sa matigas na bato.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  bao: {
    title: "Bao/Bau",
    definition:
      "May dalawang uwi ito, isa ay kahoy at isa ay bakal. Ang bau na ito ay ginagamit ng mga magkakabod sa ilalim ng butas para pangkalay ng lupa para ang kanilang mga kamay ay hindi masugatan.",
    longDefinition:
      "Ang Bao o Bau ay isang kagamitan na may dalawang uri, isa ay gawa sa kahoy at isa ay gawa sa bakal. Ito ay ginagamit ng mga magkakabod sa ilalim ng butas para pangkalay ng lupa upang ang kanilang mga kamay ay hindi masugatan sa proseso ng pagmimina sa Jose Panganiban.",
    category: "Kagamitan",
    relatedTerms: ["Kabod", "Butas", "Mangkakabod"],
    examples: [
      "Gamitin mo ang bao para hindi masugatan ang iyong mga kamay.",
      "Mas gusto ko ang kahoy na bao kaysa sa bakal.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  bita: {
    title: "Bita",
    definition: "Isang linya sa apad na siyang sinususugan para makakita ng ginto.",
    longDefinition:
      "Ang Bita ay tumutukoy sa isang linya o vein sa apad na siyang sinususugan o sinusundan ng mga minero para makakita ng ginto sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang mahalagang indicator ng presensya ng ginto.",
    category: "Terminolohiya",
    relatedTerms: ["Apad", "Ginto", "Barena"],
    examples: [
      "Nakakita kami ng mayamang bita sa bagong butas.",
      "Sinusundan namin ang bita para makakuha ng mas maraming ginto.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  blower: {
    title: "Blower",
    definition: "Ito ay nagbibigay at nagsisilbing hangin ng mga tao sa ilalim upang hindi malason.",
    longDefinition:
      "Ang Blower ay isang kagamitan na nagbibigay at nagsisilbing source ng hangin para sa mga minero sa ilalim ng butas o tunnel upang hindi sila malason o mamatay dahil sa kakulangan ng oxygen sa proseso ng pagmimina sa Jose Panganiban.",
    category: "Kagamitan",
    relatedTerms: ["Butas", "Hangin", "Compressor"],
    examples: [
      "Kailangan nating i-check ang blower para masiguradong may sapat na hangin sa ilalim.",
      "Nasira ang blower kaya hindi muna kami makakapasok sa butas.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  bomber: {
    title: "Bomber",
    definition: "Mga taong nagpapasabog ng dinamita sa ilalim ng tunnel.",
    longDefinition:
      "Ang Bomber ay tumutukoy sa mga taong nagpapasabog o nagpapaputok ng dinamita sa ilalim ng tunnel o butas sa proseso ng pagmimina sa Jose Panganiban. Sila ay may espesyal na kasanayan at kaalaman sa paggamit ng explosives.",
    category: "Trabaho",
    relatedTerms: ["Putok", "Dinamita", "Barenador"],
    examples: [
      "Ang bomber ay kailangang maging maingat sa pagpapaputok ng dinamita.",
      "Si Pedro ay isang bomber na may maraming taon ng karanasan.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  boraks: {
    title: "Boraks",
    definition: "Pulbos na ginagamit para hindi maghiwa-hiwalay ang ginto kapag niluluto.",
    longDefinition:
      "Ang Boraks ay isang pulbos o kemikal na ginagamit sa proseso ng pagmimina sa Jose Panganiban para hindi maghiwa-hiwalay ang ginto kapag ito ay niluluto o tinutunaw. Ito ay tumutulong sa pagpapanatili ng integrity ng ginto sa proseso ng purification.",
    category: "Kemikal",
    relatedTerms: ["Asoge", "Palayok", "Kawali"],
    examples: [
      "Lagyan mo ng boraks ang ginto bago lutuin para hindi ito maghiwa-hiwalay.",
      "Naubusan na tayo ng boraks, kailangan tayong bumili ng bago.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  bosero: {
    title: "Bosero",
    definition: "Taong sumusisid sa ilalim ng butas para maghukay upang mapalalim ang butas.",
    longDefinition:
      "Ang Bosero ay tumutukoy sa taong sumusisid sa ilalim ng butas o tubig para maghukay upang mapalalim ang butas sa proseso ng pagmimina sa Jose Panganiban. Sila ay gumagamit ng compressor para makahinga habang nasa ilalim ng tubig.",
    category: "Trabaho",
    relatedTerms: ["Butas", "Compressor", "Tubig"],
    examples: [
      "Ang bosero ay kailangang maging mahusay sa pagsisid.",
      "Si Juan ay isang bosero na kayang manatili sa ilalim ng tubig nang matagal.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  bulmilan: {
    title: "Bulmilan",
    definition: "Makina na ginagamit na pandurog sa mga bato na mayroong ginto.",
    longDefinition:
      "Ang Bulmilan ay isang makina o kagamitan na ginagamit na pandurog sa mga bato na mayroong ginto sa proseso ng pagmimina sa Jose Panganiban. Ito ay tumutulong sa pagdurog ng malalaking bato para mas madaling makuha ang ginto mula rito.",
    category: "Kagamitan",
    relatedTerms: ["Bato", "Durog", "Crusher"],
    examples: [
      "Ilagay mo ang mga bato sa bulmilan para madurog.",
      "Nasira ang bulmilan kaya hindi muna tayo makakapagdurog ng bato.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  butas: {
    title: "Butas",
    definition: "Malalim na hukay na kinukuhaan ng ginto o sakada sa ilalim ng lupa.",
    longDefinition:
      "Ang Butas ay tumutukoy sa malalim na hukay, tunnel, o shaft na kinukuhaan ng ginto o sakada sa ilalim ng lupa sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang mahalagang bahagi ng underground mining.",
    category: "Terminolohiya",
    relatedTerms: ["Tunnel", "Hukay", "Shaft"],
    examples: ["Malalim na ang butas na aming hinuhukay.", "May tatlong butas na kami sa bundok na ito."],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  compressor: {
    title: "Compressor",
    definition:
      "Makina na ginagamit sa pagsisid ng mga bosero. Ito ang pinagkukuhaan nila ng hangin para nakakahinga sila sa ilalim ng tubig.",
    longDefinition:
      "Ang Compressor ay isang makina na ginagamit sa pagsisid ng mga bosero sa proseso ng pagmimina sa Jose Panganiban. Ito ang pinagkukuhaan nila ng hangin para nakakahinga sila sa ilalim ng tubig habang nagtatrabaho.",
    category: "Kagamitan",
    relatedTerms: ["Bosero", "Hangin", "Tubig"],
    examples: [
      "Kailangan nating i-check ang compressor bago magsisid ang mga bosero.",
      "Nasira ang compressor kaya hindi muna makapagsisid ang mga bosero.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  drum: {
    title: "Drum",
    definition:
      "Dalawang bilok na bakal, dito sinasalang ang mga bato o sakada na galing sa butas para gawing pinong buhangin.",
    longDefinition:
      "Ang Drum ay tumutukoy sa dalawang bilog na bakal o container na ginagamit sa proseso ng pagmimina sa Jose Panganiban. Dito sinasalang o dinadala ang mga bato o sakada na galing sa butas para gawing pinong buhangin, na makakatulong sa pagkuha ng ginto.",
    category: "Kagamitan",
    relatedTerms: ["Bato", "Sakada", "Buhangin"],
    examples: [
      "Ilagay mo ang mga bato sa drum para maging pinong buhangin.",
      "Puno na ang drum, kailangan na nating ilabas ang mga pinong buhangin.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  garagad: {
    title: "Garagad",
    definition: "Isang suporta sa paghila ng lubid mula sa ilalim para mapagaan ang trabaho ng magkakabud.",
    longDefinition:
      "Ang Garagad ay isang suporta o kagamitan na ginagamit sa paghila ng lubid o baral mula sa ilalim ng butas para mapagaan ang trabaho ng magkakabud o minero sa proseso ng pagmimina sa Jose Panganiban.",
    category: "Kagamitan",
    relatedTerms: ["Baral", "Lubid", "Mangkakabod"],
    examples: [
      "Gamitin mo ang garagad para mas madaling mahila ang lubid mula sa ilalim.",
      "Nasira ang garagad kaya mas mahirap ang paghila ng lubid.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  ginto: {
    title: "Ginto",
    definition:
      "Tumutukoy sa isang mahalagang mineral na kinukuha mula sa lupa sa pamamagitan ng iba't ibang pamamaraan ng pagmimina.",
    longDefinition:
      "Ang Ginto ay tumutukoy sa isang mahalagang mineral o precious metal na kinukuha mula sa lupa sa pamamagitan ng iba't ibang pamamaraan ng pagmimina sa Jose Panganiban. Ito ay may mataas na halaga at ginagamit sa paggawa ng alahas, currency, at iba pang produkto.",
    category: "Terminolohiya",
    relatedTerms: ["Mineral", "Metal", "Kayamanan"],
    examples: [
      "Nakakuha kami ng maraming ginto sa bagong butas.",
      "Ang ginto ay may mataas na halaga sa merkado ngayon.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  ispat: {
    title: "Ispat",
    definition: "Nagsisilbing liwanag na ginagamit sa loob ng tunnel o tinatawag sa Ingles na 'flashlight'.",
    longDefinition:
      "Ang Ispat ay isang kagamitan na nagsisilbing liwanag o ilaw na ginagamit sa loob ng tunnel o butas sa proseso ng pagmimina sa Jose Panganiban. Ito ay katumbas ng flashlight sa Ingles at mahalagang kagamitan para sa visibility sa madilim na lugar.",
    category: "Kagamitan",
    relatedTerms: ["Ilaw", "Tunnel", "Butas"],
    examples: [
      "Dalhin mo ang ispat para may liwanag tayo sa loob ng tunnel.",
      "Naubusan na ng baterya ang ispat kaya kailangan nating lumabas ng butas.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  kabod: {
    title: "Kabod",
    definition: "Ang pagmimina o proseso ng paghukay ng lupa at pagkuha ng yamang mineral partikular ang ginto.",
    longDefinition:
      "Ang Kabod ay tumutukoy sa proseso ng pagmimina o paghukay ng lupa at pagkuha ng yamang mineral, partikular ang ginto, sa Jose Panganiban. Ito ay isang komprehensibong termino na sumasaklaw sa lahat ng aspeto ng pagmimina, mula sa paghukay hanggang sa pagproseso ng ginto.",
    category: "Proseso",
    relatedTerms: ["Mangkakabod", "Kabudan", "Butas"],
    examples: [
      "Ang kabod ay nangangailangan ng maraming lakas at tiyaga.",
      "Maraming taon na siyang nagkakabod sa bundok.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  kabudan: {
    title: "Kabudan",
    definition: "Lugar kung saan nagkakabud ang mga minero para makakuha ng ginto.",
    longDefinition:
      "Ang Kabudan ay tumutukoy sa lugar kung saan nagkakabud o nagmimina ang mga minero para makakuha ng ginto sa Jose Panganiban. Ito ay isang espesipikong lugar o site kung saan aktibong nagaganap ang operasyon ng pagmimina.",
    category: "Terminolohiya",
    relatedTerms: ["Kabod", "Mangkakabod", "Minahan"],
    examples: ["Maraming minero ang nagtatrabaho sa kabudan.", "Malayo ang kabudan mula sa bayan."],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  kahon: {
    title: "Kahon",
    definition:
      "Ginagamit pangkuha ng ginto. Ito ay tinawag na kahon dahil sa hugis at itsura nito na parang isang kahon. Ito ay salaan ng mga ginto at dito binubuhos ang pinong buhangin habang sa ilalim nito ay may mga barani na nagsasalo sa ginto.",
    longDefinition:
      "Ang Kahon ay isang kagamitan na ginagamit pangkuha ng ginto sa proseso ng pagmimina sa Jose Panganiban. Ito ay tinawag na kahon dahil sa hugis at itsura nito na parang isang kahon. Ito ay gumagana bilang salaan ng mga ginto at dito binubuhos ang pinong buhangin habang sa ilalim nito ay may mga barani na nagsasalo sa ginto.",
    category: "Kagamitan",
    relatedTerms: ["Alpombra", "Salaan", "Barani"],
    examples: [
      "Ibuhos mo ang pinong buhangin sa kahon para masala ang ginto.",
      "Kailangan nating ayusin ang kahon para mas epektibo ang pagsala ng ginto.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  kalalawan: {
    title: "Kalalawan",
    definition: "Ang tawag sa lagayan ng ginto na nakukuha sa kabudan, dito iniipon para hindi kumalat ito.",
    longDefinition:
      "Ang Kalalawan ay tumutukoy sa lagayan o container ng ginto na nakukuha sa kabudan o lugar ng pagmimina sa Jose Panganiban. Dito iniipon ang nakuhang ginto para hindi ito kumalat o mawala.",
    category: "Kagamitan",
    relatedTerms: ["Abon", "Ginto", "Kabudan"],
    examples: [
      "Ilagay mo ang ginto sa kalalawan para hindi ito mawala.",
      "Puno na ang kalalawan ng ginto mula sa aming pagmimina kahapon.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  kawali: {
    title: "Kawali",
    definition: "Ginagamit na kasangkapan upang durugin ang ginto at asoge upang maghalo ito.",
    longDefinition:
      "Ang Kawali ay isang kasangkapan o kagamitan na ginagamit upang durugin at ihalo ang ginto at asoge sa proseso ng pagmimina sa Jose Panganiban. Ito ay tumutulong sa pagbuo ng amalgam na makakatulong sa paghihiwalay ng ginto mula sa iba pang materyales.",
    category: "Kagamitan",
    relatedTerms: ["Asoge", "Amalgam", "Palayok"],
    examples: [
      "Gamitin mo ang kawali para durugin at ihalo ang ginto at asoge.",
      "Kailangan nating linisin ang kawali pagkatapos gamitin.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  laput: {
    title: "Laput",
    definition:
      "Ito ay tinunaw na putik para ibuhos sa butas. Ito ang nag sisilbing patibay sa mga singit singit sa butas para hindi ito bumagsak.",
    longDefinition:
      "Ang Laput ay tumutukoy sa tinunaw na putik o mud na ibinabuhos sa butas o tunnel sa proseso ng pagmimina sa Jose Panganiban. Ito ang nagsisilbing patibay o reinforcement sa mga singit-singit o gaps sa butas para hindi ito bumagsak o mag-collapse.",
    category: "Terminolohiya",
    relatedTerms: ["Butas", "Putik", "Patibay"],
    examples: [
      "Ibuhos mo ang laput sa mga singit-singit para hindi bumagsak ang butas.",
      "Kailangan nating gumawa ng mas maraming laput para sa bagong butas.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  lasduk: {
    title: "Lasduk",
    definition:
      "Ito ang nilalagyan ng sakada mula sa ilalim ng butas pataas sa patnawan ng sakada. Ito ay sako na may may bilog na bakal sa harapan.",
    longDefinition:
      "Ang Lasduk ay isang container o lalagyan na ginagamit para sa sakada o lupa mula sa ilalim ng butas pataas sa patnawan o exit ng sakada sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang sako na may bilog na bakal sa harapan para madaling maiangat at mailabas ang lupa.",
    category: "Kagamitan",
    relatedTerms: ["Sakada", "Butas", "Baral"],
    examples: [
      "Ilagay mo ang sakada sa lasduk para madaling maiangat.",
      "Nasira ang lasduk kaya kailangan nating gumawa ng bago.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  mangkakabod: {
    title: "Mangkakabod",
    definition: "Taong naghuhukay ng lupa at kumukuha ng yamang mineral.",
    longDefinition:
      "Ang Mangkakabod ay tumutukoy sa taong naghuhukay ng lupa at kumukuha ng yamang mineral, partikular ang ginto, sa proseso ng pagmimina sa Jose Panganiban. Sila ang mga minero o manggagawa sa industriya ng pagmimina.",
    category: "Trabaho",
    relatedTerms: ["Kabod", "Minero", "Kabudan"],
    examples: [
      "Si Juan ay isang mangkakabod na may maraming taon ng karanasan.",
      "Maraming mangkakabod ang nagtatrabaho sa bundok.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  maso: {
    title: "Maso",
    definition: "Isang bakal na ginagamit na pamukpok sa mowel at pangdurog sa mga malalaking bato.",
    longDefinition:
      "Ang Maso ay isang kagamitan na gawa sa bakal na ginagamit na pamukpok sa mowel at pangdurog sa mga malalaking bato sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang mahalagang kagamitan para sa pagbasag at pagdurog ng matigas na materyales.",
    category: "Kagamitan",
    relatedTerms: ["Mowel", "Bato", "Durog"],
    examples: [
      "Gamitin mo ang maso para basagin ang malalaking bato.",
      "Mabigat ang maso pero epektibo ito sa pagdurog ng bato.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  mowel: {
    title: "Mowel",
    definition: "Isang bakal na patulis na ginagamit na pantipak sa mga apad.",
    longDefinition:
      "Ang Mowel ay isang kagamitan na gawa sa bakal na patulis ang dulo na ginagamit na pantipak o pangbasag sa mga apad o matigas na bato sa proseso ng pagmimina sa Jose Panganiban. Ito ay ginagamit kasama ang maso para sa mas epektibong pagbasag ng bato.",
    category: "Kagamitan",
    relatedTerms: ["Maso", "Apad", "Bato"],
    examples: [
      "Ilagay mo ang mowel sa gitna ng bato bago mo pukpukin ng maso.",
      "Nasira ang dulo ng mowel dahil sa matigas na bato.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  mucker: {
    title: "Mucker",
    definition: "Taong naglalabas ng sakada mula sa pinutukan na bita sa ilalim ng tunnel.",
    longDefinition:
      "Ang Mucker ay tumutukoy sa taong naglalabas o nagtatanggal ng sakada o lupa mula sa pinutukan o binasag na bita sa ilalim ng tunnel o butas sa proseso ng pagmimina sa Jose Panganiban. Sila ay responsable sa paglilinis at pagtanggal ng mga debris pagkatapos ng blasting.",
    category: "Trabaho",
    relatedTerms: ["Sakada", "Bita", "Putok"],
    examples: [
      "Ang mucker ay kailangang maging mabilis sa paglalabas ng sakada.",
      "Si Pedro ay isang mahusay na mucker, mabilis siyang makapaglinis ng tunnel.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  pabirik: {
    title: "Pabirik",
    definition:
      "Isang uri ng maliit na kagamitan na ginagamit sa pagkuha ng mga mineral, partikular na sa pagproseso ng ginto.",
    longDefinition:
      "Ang Pabirik ay isang uri ng maliit na kagamitan o tool na ginagamit sa pagkuha ng mga mineral, partikular na sa pagproseso ng ginto, sa proseso ng pagmimina sa Jose Panganiban. Ito ay tumutulong sa mas detalyadong pagproseso at paghihiwalay ng ginto mula sa iba pang materyales.",
    category: "Kagamitan",
    relatedTerms: ["Ginto", "Mineral", "Proseso"],
    examples: [
      "Gamitin mo ang pabirik para sa mas detalyadong pagproseso ng ginto.",
      "Nasira ang pabirik kaya kailangan tayong bumili ng bago.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  pala: {
    title: "Pala",
    definition: "Isang kagamitan na ginagamit upang hukayin o maglipat ng lupa.",
    longDefinition:
      "Ang Pala ay isang kagamitan na ginagamit upang hukayin, maglipat, o mag-scoop ng lupa, buhangin, o iba pang materyales sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang basic pero mahalagang kagamitan sa pagmimina.",
    category: "Kagamitan",
    relatedTerms: ["Hukay", "Lupa", "Buhangin"],
    examples: [
      "Gamitin mo ang pala para hukayin ang lupa.",
      "Nasira ang handle ng pala kaya kailangan nating ayusin ito.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  palayok: {
    title: "Palayok",
    definition: "Isang maliliit na palayok at dito niluluto ang ginto na may kasamang asoge.",
    longDefinition:
      "Ang Palayok ay tumutukoy sa isang maliit na clay pot o container na ginagamit sa pagluluto o pagproseso ng ginto na may kasamang asoge sa proseso ng pagmimina sa Jose Panganiban. Ito ay tumutulong sa pagbuo ng amalgam at paghihiwalay ng ginto mula sa iba pang materyales.",
    category: "Kagamitan",
    relatedTerms: ["Asoge", "Ginto", "Kawali"],
    examples: [
      "Ilagay mo ang ginto at asoge sa palayok para lutuin.",
      "Kailangan nating bumili ng bagong palayok dahil nasira na ang luma.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  pirates: {
    title: "Pirates",
    definition: "Tinatawag na pirating ginto. Mga kulay puti na ani mo ay ginto na nakadikit sa bato.",
    longDefinition:
      "Ang Pirates o pirating ginto ay tumutukoy sa mga kulay puti na materyales na sa unang tingin ay ordinaryong bato lamang pero sa katunayan ay ginto na nakadikit o embedded sa bato sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang uri ng ginto na hindi agad nakikilala.",
    category: "Terminolohiya",
    relatedTerms: ["Ginto", "Bato", "Ore"],
    examples: [
      "Maraming pirates sa bagong butas na aming nahanap.",
      "Hindi mo dapat itapon ang mga bato na may pirates.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  putok: {
    title: "Putok",
    definition: "Pampasabog sa mga bato ito rin ay tinatawag na 'bigas-bigas'. Pangbungkal ng maramihang bato at lupa.",
    longDefinition:
      "Ang Putok ay tumutukoy sa explosive o pampasabog na ginagamit sa pagbasag ng mga matigas na bato sa proseso ng pagmimina sa Jose Panganiban. Ito rin ay tinatawag na 'bigas-bigas' at ginagamit para sa pangbungkal o pagbasag ng maramihang bato at lupa.",
    category: "Kagamitan",
    relatedTerms: ["Dinamita", "Bato", "Bomber"],
    examples: [
      "Gamitin mo ang putok para basagin ang matigas na bato.",
      "Mag-ingat sa paggamit ng putok dahil ito ay delikado.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: true,
  },
  rad: {
    title: "Rad",
    definition: "Mga solid na mahabang bakal, ito ay sinasama sa pagsalang ng mga bato para mabilis ma durog.",
    longDefinition:
      "Ang Rad ay tumutukoy sa mga solid na mahabang bakal o metal rods na ginagamit sa proseso ng pagmimina sa Jose Panganiban. Ito ay sinasama o ginagamit sa pagsalang o pagproseso ng mga bato para mabilis na madurog ang mga ito at makuha ang ginto.",
    category: "Kagamitan",
    relatedTerms: ["Bato", "Durog", "Drum"],
    examples: [
      "Ilagay mo ang rad sa drum para mas mabilis na madurog ang mga bato.",
      "Kailangan nating bumili ng bagong rad dahil nasira na ang luma.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  ragmilan: {
    title: "Ragmilan",
    definition:
      "Lugar kung saan dito nag sasalang ng mga sakada o ng mga bato para ma kuha ang ginto na nakapadikit dito.",
    longDefinition:
      "Ang Ragmilan ay tumutukoy sa lugar o site kung saan nagsasalang o nagpoproseso ng mga sakada o bato para makuha ang ginto na nakadikit dito sa proseso ng pagmimina sa Jose Panganiban. Ito ay isang espesipikong lugar para sa pagproseso ng mga raw materials.",
    category: "Terminolohiya",
    relatedTerms: ["Sakada", "Bato", "Ginto"],
    examples: ["Dalhin mo ang mga bato sa ragmilan para iproseso.", "Maraming tao ang nagtatrabaho sa ragmilan."],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  "tagger-operator": {
    title: "Tagger operator",
    definition: "Sila ang nagpapagana ng tagger hoist upang maitaas lahat ng sakada mula sa ilalim ng tunnel.",
    longDefinition:
      "Ang Tagger operator ay tumutukoy sa mga taong nagpapagana o nag-ooperate ng tagger hoist o lifting equipment upang maitaas o maiangat ang lahat ng sakada o lupa mula sa ilalim ng tunnel o butas sa proseso ng pagmimina sa Jose Panganiban.",
    category: "Trabaho",
    relatedTerms: ["Hoist", "Sakada", "Tunnel"],
    examples: [
      "Ang tagger operator ay kailangang maging maingat sa pag-aangat ng sakada.",
      "Si Juan ay isang mahusay na tagger operator, mabilis siyang makapagtaas ng sakada.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
  "water-pump": {
    title: "Water pump",
    definition: "Ginagamit pang limas kapag malalim ang tubig.",
    longDefinition:
      "Ang Water pump ay isang kagamitan na ginagamit pang-limas o pang-drain ng tubig kapag malalim ang tubig sa butas o tunnel sa proseso ng pagmimina sa Jose Panganiban. Ito ay tumutulong sa pagtanggal ng tubig para mas madaling makapagmina ang mga minero.",
    category: "Kagamitan",
    relatedTerms: ["Tubig", "Butas", "Limas"],
    examples: [
      "Gamitin mo ang water pump para tanggalin ang tubig sa butas.",
      "Nasira ang water pump kaya hindi muna tayo makakapagmina.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    hasAudio: false,
  },
}

