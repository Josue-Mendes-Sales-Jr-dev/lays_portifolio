import * as C from "./styled"
import {TbArrowBackUp} from "react-icons/tb"
import { Link } from "react-router-dom"
import { FixedTop } from "../../hooks/fixedTop"


export const Demo02=()=>{
     FixedTop()
     return(
          <>
       
         <C.Container >
           <C.BackButton>
           <Link to="/"><TbArrowBackUp/>Voltar</Link>
           </C.BackButton>
           
           <C.Title>
           Introdução à célula
           </C.Title>
           <C.Img />
           <C.TextBox>

               <C.TextBox01>
               <C.TitleH2>
               Células: Eucariontes x Procariontes
               </C.TitleH2>
               <p> A eucarionte se diferencia pela presença de compartimentos delimitados por membrana (organelas). O núcleo é o que mais se destaca na observação desse tipo de célula ao microscópio.
                  Células procariontes são células que apresentam membrana plasmática, parede celular, citoplasma, material genético denominado nucleóide, não possui carioteca.
                  </p>
               <C.TitleH2>
               Membrana plasmática
               </C.TitleH2>
                 <p>
                 É constituída por uma bicamada lipídica, formada principalmente por lipídeos e proteínas. 

               Lipídeos de membrana:

                -fosfolipídeos(fosfoglicerídeo): Ex: cabeça polar (colina+fosfato+glicerol); cauda apolar (hidrocarbono).

                 A cabeça pode ser colina, serina etc, o nome depende da cabeça. No exemplo acima: fosfatidilcolina.

                -glicolipídeos: encontrado apenas na monocamada externa. Funções: participa da adesão intercelular, reconhecimento celular e auxilia na proteção.

                -colesterol: constitui 20% dos lipídeos da membrana celular animal. Participa do transporte intracelular, sinalização celular, atua minimizando os efeitos da temperatura na fluidez, além de ser componente estrutural da membrana.
                 </p>
                 <h4 className="m-3 mx-3">Proteínas de membrana:</h4>
                   <ul>
                       <li>Desempenham a maioria das funções específicas da célula</li>
                       <li>Determinam as características e propriedades funcionais da membrana de cada tipo de célula</li>
                       <li>São de quantidades e tipos variados</li>
                       <li>podem ser classificadas como integrais ou periféricas</li>
                   </ul>
                <h4 className="m-3 mx-3">Tipos de proteína de membrana:</h4>
                     <ul>
                        <li>enzimas, âncoras(servem como elementos estruturais), transportadoras e receptoras(detectam e internalizam sinais físicos e químicos recebidos do meio extracelular).</li>
                     </ul>
                <h4 className="m-3 mx-3">A fluidez da membrana pode ser influenciada por:</h4>
                     <ul>
                        <li>Grau de insaturação das caudas dos fosfolipídeos: quanto mais insaturadas (lig. dupla entre C), menos compactação / solidificação.</li>
                        <li>Tamanho das caudas dos fosfolipídeos: quanto menor, menos interação, menos compactação.</li>
                        <li>Temperatura: quanto menor a temperatura, mais tendência a compactação. Algumas células, em baixas temperaturas, alteram a composição, inserindo fosfolipídeos insaturados ou de cadeia curta.</li>
                        <li>Quantidade de colesterol: quanto mais colesterol entre os fosfolipídeos, menos compactação.</li>
                     </ul>
                <h4 className="m-3 mx-3">Glicocálix ou glicocálice ( formado por glicoproteínas e glicolipídeos)</h4>
                     <ul>
                        <li>Revestimento celular externo – barreira mecânica</li>
                        <li>Proteção mecânica e química</li>
                        <li>Promove a adesão e reconhecimento entre as células</li>
                        <li>Aumenta a seletividade da membrana</li>
                        <li>Sítios de receptores de moléculas alvo</li>
                     </ul>
                 <h4 className="m-3 mx-3">Transporte através da membrana:</h4>
                     <ul>
                        <li><h4>Permeável</h4>
                           <ul>
                              <li> Gases e moléculas solúveis em lipídeos</li>
                              <li>Pequenas moléculas apolares</li>
                              <li>Pequenas moléculas polares sem carga</li>
                           </ul>
                        </li>
                        <li><h4>Impermeável</h4>
                           <ul>
                              <li> Moléculas grandes polares</li>
                              <li> Moléculas carregadas (íons)</li>                          
                           </ul>
                        </li>
                        <li><h4>Proteínas transportadoras</h4>
                           <ul>
                               <li>Transportadora (funciona como uma comporta que abre e fecha)</li>
                               <li>Proteína canal (forma um poro aquoso na camada)
                                  <ul>
                                    <li>Gradiente eletroquímico: composto pelo gradiente de concentração e gradiente elétrico. Gradiente elétrico é a diferença nas cargas elétricas entre duas regiões.</li>
                                  </ul>
                               </li>
                           </ul>
                        </li>
                        <li><h4>Transporte passivo: a favor do gradiente eletroquímico</h4>
                           <ul>
                              <li>Difusão simples</li>
                              <li> Osmose</li>        
                              <li>Difusão facilitada (através de canais e transportadoras)</li>                  
                           </ul>
                        </li>
                        <li><h4> Transporte ativo: contra o gradiente eletroquímico</h4>
                           <ul>
                            <li>Transcelular – entra e sai pelo outro lado(o soluto atravessa a célula), contra e a favor do gradiente. Contra: transporte ativo. Ex: glicose sai do lúmen intestinal e entra na célula do epitélio intestinal sendo co-transportada com o sódio, contra o gradiente eletroquímico. Transporte passivo: após isso, a glicose sai pelo outro lado por meio de proteína transportadora, 
                                a favor do gradiente.</li>
                              <li><h4>Transporte em massa:</h4>
                                  <ul>
                                      <li>Exocitose: Processo em que substâncias são liberadas para fora da célula. A substância a ser secretada é armazenada em vesículas secretoras. Essas vesículas se movem em direção à membrana celular guiadas por proteínas motoras ligadas ao citoesqueleto. Quando a vesícula secretora chega à membrana celular, se funde a ela, liberando o conteúdo para fora da 
                                        célula.</li>
                                      <li> Endocitose: o material a ser ingerido é progressivamente capturado por uma pequena porção da membrana plasmática, que sofre uma inversão para o citosol celular e se destaca, formando uma vesícula. Essa vesícula é fundida a lisossomos, onde o material do interior será digerido e os metabólitos formados serão transferidos para o citosol,  podendo ser usados 
                                        pela célula.
                                        <ul>
                                            <li>Fagocitose: envolve a ingestão de partículas grandes, como microorganismos e fragmentos celulares, por meio de grandes vesículas chamadas de 
                                                fagossomos.</li>
                                            <li>Pinocitose: envolve a ingestão de líquido e pequenas moléculas por pequenas vesículas. </li>
                                            <li>Endocitose mediada por receptor: as macromoléculas se ligam a receptores complementares na superfície celular e entram na célula como complexo de receptores-macromoléculas em vesículas. Esse processo aumenta a eficiência da internalização de macromoléculas, sem endocitose de muito líquido
                                                 extracelular.</li>
                                        </ul>
                                        </li>
                                  </ul>
                              </li>
                            </ul>
                        </li>
                        
                     </ul>
               <C.TitleH2>
               Membrana mucosa e serosa
               </C.TitleH2>
               <ul>
                  <li>Mucosa: membrana de todo epitélio em que há saída para a luz, ou para fora do corpo.</li>
                  <li> Serosa: membrana de todo epitélio interno aos órgã</li>
               </ul>
               <C.TitleH2>
               Princípios de formação do corpo
               </C.TitleH2>
                 <ul>
                    <li>Princípio da antimeria: o corpo pode ser dividido em duas metades, lado esquerdo e direito, quando cortado no plano sagital.</li>
                    <li>Princípio da paquimeria: separa o corpo em ventral e dorsal, quando cortado no plano de secção frontal.</li>
                    <li>Princípio da metameria: separa o corpo em cranial e caudal, quando cortado no plano transversal. Só há metâmero perfeito na fase de embrião.</li>
                    <li>Princípio da estratigrafia: o corpo é formado por camadas, como a “cebola”.</li>
                    <li>Princípio da segmentação: o órgão é formado por vários segmentos funcionalmente independentes.</li>
                 </ul>
                 <C.TitleH2>
               Sinalização celular
               </C.TitleH2>
               <p>complexo sistema de comunicação que governa e coordena as atividades e funções 
                celulares.</p>
                  <ul>
                      <li> <h4>Sinalização parácrina:</h4>
                         <ul>
                            <li>comunicação de células em curta distância, através da liberação de mensageiros químicos. Permite a coordenação local de atividades relacionadas, principalmente, ao desenvolvimento de um indivíduo.</li>
                         </ul>
                      </li>
                      <li><h4>Sinalização autócrina:</h4>
                         <ul>
                            <li>as moléculas sinalizadoras desencadeiam respostas na própria célula que a liberou, ou seja, a célula sinalizadora é também a célula alvo.</li>
                         </ul>
                      </li>
                      <li><h4>Sinalização endócrina:</h4>
                         <ul>
                            <li> a molécula sinalizadora é liberada no meio extracelular, atingindo a corrente sanguínea. As células-alvo encontram-se em tecidos ou órgão e sistemas distantes da célula sinalizadora(célula endócrina). Nesse caso, a molécula sinalizadora é conhecida como hormônio.</li>
                         </ul>
                      </li>
                      <li><h4>Sinalização por contato direto:</h4>
                         <ul>
                            <li>Tem contato membrana-membrana para a transmissão de sinal. Ocorre através de junções comunicantes (GAP em células animais).</li>
                         </ul>
                      </li>
                  </ul>
                  <C.TitleH2>
                  Funções dos elementos citoplasmáticos
                  </C.TitleH2>
                   <ul>
                     <li><h4>Carioteca:</h4>
                        <ul>
                            <li>encerra o DNA e define o compartimento nuclear. O envelope nuclear possui um complexo de poros que o perfuram. Protege o DNA contra os movimentos do
                                 citoesqueleto.</li>
                        </ul>
                     </li>
                     <li><h4>Ribossomos:</h4>
                        <ul>
                            <li>organelas responsáveis pela síntese de proteínas. Formadas por duas subunidades, uma maior e uma menor, constituídas por moléculas de RNA e proteínas.

Retículo endoplasmático rugoso: além da secreção das proteínas, o rer participa de processos como produção de fosfolipídios, síntese de proteínas de membrana, glicosilação inicial de glicoproteínas e montagem de moléculas proteicas formadas por várias cadeias 
                          polipeptídicas.</li>
                        </ul>
                     </li>
                     <li><h4>Retículo endoplasmático liso:</h4>
                        <ul>
                            <li>participa da produção de lipídios, especialmente os fosfolipídios, que compõem a membrana plasmática. Auxiliam no processo de solubilização de algumas drogas e atuam também no armazenamento de íons cálcio nas células 
                                musculares.</li>
                        </ul>
                     </li>
                     <li><h4>Complexo de golgi:</h4>
                        <ul>
                            <li>processamento, endereçamento e transporte de substâncias. Enzimas, hormônios, muco e outras substâncias são armazenadas e secretadas pelo complexo de golgi.</li>
                        </ul>
                     </li>
                     <li><h4>Lisossomos:</h4>
                        <ul>
                            <li>
                            participam do processo de digestão intracelular, promovendo a degradação de várias partículas extracelulares e moléculas ingeridas pelas células.
                            </li>
                        </ul>
                     </li>
                     <li><h4>Mitocôndrias:</h4>
                        <ul>
                            <li>
                            funcionam como um sítio do processo de respiração celular. Esse processo metabólico extrai energia armazenada na glicose e também em outros combustíveis orgânicos, havendo decomposição desses combustíveis, na presença de oxigênio, em gás carbônico e
                             água.
                            </li>
                        </ul>
                     </li>
                     <li><h4>Lisossomos:</h4>
                        <ul>
                            <li>
                            participam do processo de digestão intracelular, promovendo a degradação de várias partículas extracelulares e moléculas ingeridas pelas células.
                            </li>
                        </ul>
                     </li>
                     <li><h4>Peroxissomos:</h4>
                        <ul>
                            <li>
                            relacionada ao armazenamento de enzimas que catalisam o peróxido de hidrogênio, uma substância tóxica que necessita ser degradada, e álcool; Metabolizam lipídeos para ser  usado como fonte de energia; Sintetizam ácidos biliares, que ajudam a emulsificar as gorduras no intestino. Protege a célula contra radicais livres e agentes oxidantes; formam os centríolos.                            </li>
                        </ul>
                     </li>
                     <li><h4>Proteossomos:</h4>
                        <ul>
                            <li>
                            degradam proteínas celulares danificadas ou desnecessárias. A adição da proteína ubiquitina sinaliza ao proteossomo que a proteína deve ser degradada.
                            </li>
                        </ul>
                     </li>
                     <li><h4>Citoesqueleto:</h4>
                        <ul>
                            <li>
                            garante forma e sustentação mecânica da célula; promove movimento de organelas e vesículas citoplasmáticas; importante na contração celular.
                                <ul>
                                    <li>Microfilamentos de actina: São filamentos finos compostos principalmente de proteínas de actina. Eles são responsáveis pela contração muscular, pelo movimento celular, pela formação de pseudópodes durante a migração celular e pela manutenção da forma da célula.</li>
                                    <li>Filamentos intermediários: São filamentos mais espessos que os microfilamentos e mais finos que os microtúbulos. Eles são compostos por várias proteínas diferentes, como queratina, desmina, vimentina e laminina, e têm uma função de suporte estrutural e resistência mecânica.</li>
                                    <li>Microtúbulos: São filamentos ocos compostos de tubulina, que são responsáveis pelo transporte intracelular de organelas e proteínas, pela formação do fuso mitótico durante a divisão celular e pela manutenção da forma da célula.</li>
                                </ul>
                            </li>
                        </ul>
                     </li>
                   </ul>
                   <C.TitleH2>
                   REFERÊNCIA:
                   </C.TitleH2>
                   <p className="text-center">Junqueira, L. C., & Carneiro, J. (2004). Histologia Básica (10o). Guanabara Koogan.</p>
                   <p className="text-center"> Introdução à bioquímica - Valter T. Motta</p>
               </C.TextBox01>
            
               
               </C.TextBox>
              
               
         </C.Container>
         </>)
}