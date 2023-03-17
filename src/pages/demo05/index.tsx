import * as C from "./styled"
import { FixedTop } from "../../hooks/fixedTop"
import {Link} from "react-router-dom"
import {TbArrowBackUp} from "react-icons/tb"

export const Demo05=()=>{
  FixedTop()
     return(
          <>
         <C.Container >
           <C.BackButton>
           <Link to="/"><TbArrowBackUp/>Voltar</Link>
           </C.BackButton>
           
           <C.Title>
           Ciclo celular e tecido epitelial          
           </C.Title>
           <C.Img />
            <C.TextBox>  
            <C.TextBox01>
              <C.TitleH2>
              Estrutura:
              </C.TitleH2> 
              <ul>
                <li>
                substância fundamental do osso (matriz óssea sólida/mineralizada) (também possui colágeno, como parte orgânica)
                </li>
                <li>
                células (osteogênicas, osteoblastos- produz a matriz, osteócitos- mantém a matriz e osteoclastos- remove a matriz)
                </li>
                <li>
                periósteo (membrana que reveste os ossos, onde estão as células osteogênicas. É quem faz reconstituição do osso em caso de fraturas. Também fixa os vasos sanguíneos que nutrem o osso. Onde os músculos se fixam).
                </li>
                <li>
                endósteo (membrana que recobre internamente. Também em função osteogênica)
                </li>
              </ul>
              <C.TitleH2>
              Tipos de substâncias ósseas:
              </C.TitleH2>
              <ul>
                <li>
                compacta (curiosidade: a camada compacta interna dos ossos do crânio não tem propriedade osteogênica no periósteo, se tivesse poderia criar calo ósseo em cicatrização e comprimir o cérebro).
                </li>
                <li>
                 esponjosa
                </li>
              </ul>
              <C.TitleH2>
              Medula ósseas:
              </C.TitleH2>
              <ul>
                <li>
                A medula óssea vermelha (produz as células do sangue) está onde é encontrada a substância esponjosa. Já a medula amarela está no interior de alguns ossos, é amarela pq o tecido hematopoiético foi substituído por tecido gorduroso.
                </li>
              </ul>
              <C.TitleH2>
              Divisão de esqueleto:
              </C.TitleH2>
              <ul>
                <li>
                axial (ossos: cabeça 28, coluna 26, tórax 25 e osso hióide 1) total: 80
                </li>
                <li>
                axial (ossos: cabeça 28, coluna 26, tórax 25 e osso hióide 1) total: 80
                </li>
                <li>
                Total do esqueleto humano: 206 ossos
                </li>
              </ul>
              <C.TitleH2>
                Classificação:
              </C.TitleH2>
               <ul>
                 <li><h4>Morfológico</h4>
                    <ul>
                      <li>
                      longos: tem epífises (extremidades) e diáfise (corpo do osso); há também a região de transição: metáfise, onde a criança tem um disco epifisário (de cartilagem). Possui canal medular. Se articulam pela epífise;
                      </li>
                      <li>
                      curtos: (três dimensões equivalentes). Se articulam pelas faces;
                      </li>
                      <li>
                      Planos: Se articulam pelas margens; 
                      </li>
                      <li>
                      Irregulares
                      </li>
                    </ul>
                 </li>
                 <li><h4>Especial</h4>
                   <ul>
                    <li>
                    Alongados:(também são considerados planos)(parecem longos, mas não tem medula e tem função de proteção, não de locomoção);
                    </li>
                    <li>
                    Supranumerários: (ossos que podem existir além dos 206; podem ser sesamóide - quando surge dentro de um tendão - ou suturais - no crânio); obs: a patela é sesamóide mas não é supranumerária.
                    </li>
                    <li>
                    Pneumáticos: (cavidades com ar). Frontal, maxilares, temporais, etmóide e esfenóide 
                    </li>
                   </ul>
                 </li>
               </ul>
               <C.TitleH2>
                Nutrição dos ossos
               </C.TitleH2>
               <ul>
                <li>
                  forames nutrícios
                </li>
                <li>
                  periósteo
                </li>
                <li>
                  canais perfurantes
                </li>
                <li>
                  canais centrais
                </li>
               </ul>
               <C.TitleH2>
                Vascularização dos Ossos
               </C.TitleH2>
               <ul>
                <li>
                artérias e veias epifisárias
                </li>
                <li>
                artérias e veias metafisárias
                </li>
                <li>
                artérias e veias diafisárias (geralmente de maior calibre)
                </li>
               </ul>
               <C.TitleH2>
                Cabeça
               </C.TitleH2>
               <ul>
                <li>frontal (1) - pneumático</li>
                <li>parietais (2) - planos</li>
                <li>temporais (2) - irregulares</li>
                <li>occipital (1) - plano</li>
                <li>zigomáticos (2)</li>
                <li>maxilas (2)</li>
                <li>nasais (2) - planos</li>
                <li>lacrimais (2)</li>
                <li>conchas nasais inferiores (2)</li>
                <li>etmóide (1) - engloba a concha nasal média e superior (são acidentes ósseos do etmóide)</li>
                <li>esfenóide (1) - parece um morcego; é irregular e pneumático</li>
                <li>vômer (1) - plano; está abaixo do septo nasal </li>
                <li>palatinos (2) - irregulares; no céu da boca em direção à cavidade orbital</li>
                <li>Ossículos da orelha média (6) - martelo, bigorna e estribo </li>
                <li>mandíbula (1)</li>
               </ul>
               <C.TitleH2>
                Pescoço e tronco
               </C.TitleH2>
               <ul>
                <li>vértebras cervicais (7) - possuem forames transversários (laterais das vértebras); nesses forames passa a artéria vertebral, que irriga o encéfalo c1=atlas, c2=áxis </li>
                <li>vértebras torácicas (12) - possuem os processos transversos (onde as costelas se articulam)</li>
                <li>vértebras lombares (5)</li>
                <li>sacro (1) - sinostose de 4 ou 5 vértebras</li>
                <li>cóccix (1) - sinostose de 3 ou 4 vértebras </li>
                <li>esterno (1)</li>
                <li>costelas (24)
                  <ul>
                    <li>verdadeiras - (as 7 primeiras) cada vértebra apresenta uma única cartilagem costal que se articula com o osso esterno</li>
                    <li>falsas - (8° à 10°) tem uma cartilagem comum</li>
                    <li>flutuantes - (as 2 últimas) não se articulam com o esterno</li>
                  </ul>
                </li>
                <li>hióide (1) - osso “corno”, não se articula, está preso por músculo, cartilagem e membranas</li>
               </ul>
               <C.TitleH2>
                Membros inferiores
               </C.TitleH2>
               <ul>
                <li>ossos do quadril (2)</li>
                <li>fêmures (2)</li>
                <li>patelas (2)</li>
                <li>tíbias (2)</li>
                <li>fíbulas (2)</li>
                <li>ossos do tarso (14)</li>
                <li>metatarsos (10)</li>
                <li>falanges (28) - o hálux só tem duas falanges (distal e proximal)</li>
               </ul>
               <C.ImgMapPe/>
               <C.TitleH2>
                Membros superiores
               </C.TitleH2>
                <ul>
                  <li>clavículas (2)</li>
                  <li>escápulas (2)</li>
                  <li>úmeros (2)</li>
                  <li>ulnas (2)</li>
                  <li>rádios (2)</li>
                  <li>ossos do carpo (16)</li>
                  <li>metacarpos (10)</li>
                  <li>falanges (28)</li>
                </ul>
                <C.ImgMapHunt/>
                <C.TitleH2>
                  Sistemas articular
                </C.TitleH2>
                <ul>
                  <li><h4>quanto à duração</h4>
                    <ul>
                      <li>permanente</li>
                      <li>temporária (metáfise). Ex: fontanela</li>
                    </ul>
                  </li>
                  <li><h4>quanto à maneira de fixação dos ossos:</h4>
                    <ul>
                      <li>continuidade: não tem espaço entre os ossos, apenas tecido fibroso ou cartilaginoso</li>
                      <li>contiguidade: apresentam cavidade articular entre os ossos</li>
                    </ul>
                  </li>
                  <li><h4>quanto à natureza do tecido interposto entre os ossos:</h4>
                    <ul>
                      <li><h4>fibrosas</h4>
                        <ul>
                         <li>
                         suturas: pouca quantidade de tec. fibroso; proporcionam união óssea extremamente forte; presentes no crânio; podem ser planas, serrátil, escamosas ou esquindilese (formato de fenda e lâmina, ex: sutura esfenovomeral)

                         </li>
                         <li>
                         sindesmoses: muito tec. fibroso (forma membrana interóssea)
                         </li>
                         <li>
                         gonfoses: quantidade moderada de tecido fibroso
                         </li>
                        </ul>
                      </li>
                      <li><h4>cartilaginosas - o tecido é cartilaginoso ou fibrocartilaginoso (pouco móveis)</h4>
                          <ul>
                            <li>sínfise: tecido fibrocartilaginoso; articulações fortes, que absorvem impacto/choque. Ex: sínfise púbica, disco intervertebral</li>
                            <li>sincondrose: cartilagem hialina (azulada), podem sofrer sinartroses (temporárias, onde ocorre o crescimento dos ossos longos)</li>
                          </ul>
                      </li>
                      <li><h4>sinoviais - líquido sinovial entre os ossos</h4>
                        <ul>
                          <li>cápsula articular</li>
                          <li>cavidade articular</li>
                          <li>membrana sinovial (parte interna da cápsula articular, produz o líquido sinovial)</li>
                          <li>líquido sinovial (lubrifica e nutre as cartilagens articulares)</li>
                          <li>superfície articular (superfície óssea da articulação - não tem periósteo)</li>
                          <li>cartilagem articular (recobre a superfície articular - óssea)</li>
                          <li>ligamentos</li>
                          <li>membrana fibrosa (parte externa da cápsula articular) obs: algumas articulações podem possuir um disco, menisco ou orla (anexo encontrado na articulação do ombro - tecido fibroso que aumenta a superfície articular para possibilitar a articulação com a cabeça do úmero, que é grande)</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <C.TitleH2>
                  Classificação
                </C.TitleH2>
                <ul>
                  <li><h4>quanto ao número de superfícies:</h4>
                    <ul>
                      <li>simples: apenas dois ossos se articulando</li>
                      <li>composta: mais de dois ossos se articulando</li>
                      <li>complexa: independente da quantidade de ossos, se tiver anexos</li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li><h4>quanto à funcionalidade:</h4>
                    <ul>
                      <li>monoaxial: se movimenta em torno de um eixo</li>
                      <li>biaxial: em dois eixos</li>
                      <li>triaxial ou multiaxial: mais de dois eixos</li>
                      <li>não-axial: nenhum eixo, faz apenas movimentos de deslizamentos</li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li><h4>quanto à morfologia:</h4>
                    <ul>
                      <li>plana: faces articulares retas, não-axial, movimento de deslizamento (ex: ossos do carpo)</li>
                      <li>gínglimo(dobradiça): uniaxial (ex: interfalângicas, úmero radial e úmero ulnar)</li>
                      <li>trocoidea (pivô): uniaxial (ex: rádio-ulnar proximal e atlantoaxial)</li>
                      <li>condical (elipsóidea): superfície côncavo-convexa, biaxial (movimento no eixo transversal e sagital) (ex: temporo-mandibular- ATM, metacarpo-falângica)</li>
                      <li>selar: côncavo-convexa, biaxial (ex: carpo-metacarpal do polegar)</li>
                      <li>esferóidea: bola+soquete, triaxial (ex: quadril)</li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li><h4>quanto ao movimento:</h4>
                    <ul>
                      <li>sinartroses (fibrosas) - não permitem movimento</li>
                      <li>anfiartroses (cartilaginosas) - pouca quantidade de movimento</li>
                      <li>diartroses (sinoviais)</li>
                    </ul>
                  </li>
                </ul>
                <C.ImgMapArt/>
                <C.TitleH2>
                  Sistema muscular
                </C.TitleH2>
                <ul>
                  <li><h4>Funções</h4>
                    <ul>
                      <li>produção de movimento</li>
                      <li>produção de calor</li>
                      <li>sustentação e postura</li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li>
                    <ul> <h4>CLASSIFICAÇÃO MORFOLÓGICA</h4>
                      <li>Liso (células com núcleo único) - contração fraca e involuntária</li>
                      <li>Estriado esquelético - contração forte e voluntária
                        <ul>
                          <li>tendão - ponto de fixação com os ossos (aponeurose é tendão com formato de lâmina); podem ser de origem(cabeça) ou inserção(calda)</li>
                          <li>ventre - regiões carnosas</li>
                          <li>membranas de tec conjuntivo(envoltórios musculares):
                            <ul>
                              <li>endomísio: recobre cada célula muscular</li>
                              <li>perimísio: recobre cada feixe muscular</li>
                              <li>epimísio: recobre todo o músculo</li>
                            </ul>
                          </li>
                          <li>fáscia - tec conjuntivo denso superficialmente ao músculo (entre o músculo e a pele)</li>
                        </ul>

                      </li>
                      <li>Estriado cardíaco - contração forte e involuntária</li>
                    </ul>
                  </li>
                </ul>
                <C.TitleH2>
                  Arquiterura muscular
                </C.TitleH2>
                <ul>
                  <li>fibras paralelas - fusiforme</li>
                  <li>fibras oblíquas - penado ou bipenado</li>
                  <li>fibras circulares (esfincterianos)  - ao redor dos olhos ou contornando algum orifício</li>
                </ul>
                <C.TitleH2 className="c">
                REFERÊNCIAS:
                </C.TitleH2>
                <p className="c">Dangelo, J. G., & Fattini, C. A. (2011). Anatomia humana sistêmica e segmentar (3rd ed.). Atheneu.</p>
                <p className="c">Youtube: canal anatomofuncional; aula: osteologia</p>
                <p className="c">Youtube: canal anatomofuncional; aula: artologia</p>
                <p className="c">Youtube: canal anatomofuncional; aula: miologia</p>

             </C.TextBox01> 
           </C.TextBox>     
         </C.Container>
         </>)}