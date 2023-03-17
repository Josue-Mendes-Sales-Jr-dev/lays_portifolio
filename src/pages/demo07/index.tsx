import * as C from "./styled"
import {Link} from "react-router-dom"
import {TbArrowBackUp} from "react-icons/tb"
import Table3 from "../../components/table/table3"
import Table2 from "../../components/table/table2"
import { FixedTop } from "../../hooks/fixedTop"

export const Demo07=()=>{
      FixedTop()
    return(
         <>
        <C.Container >
        <C.BackButton>
           <Link to="/"><TbArrowBackUp/>Voltar</Link>
           </C.BackButton>
          <C.Title>
          SISTEMA NERVOSO
          </C.Title>
          <C.Img />
          <C.TextBox>
              <C.TextBox01>
                <ul>
                  <li><h4>Neurônios:</h4>
                    <ul>
                      <li>
                      percebem as modificações no ambiente e comunicam a outros neurônios e comandam as respostas corporais a essas sensações.
                      </li>
                    </ul>
                  </li><h4>Glia(cola):</h4>
                  <li>
                    <ul>
                      <li>
                      contribuem para a função encefálica principalmente por isolar, sustentar e nutrir os neurônios vizinhos.
                      </li>
                    </ul>
                  </li>
                </ul>
                <C.TitleH2>
                  Neurônios
                </C.TitleH2>
                <ul>
                  <li>Axônio - possuem um revestimento gorduroso chamado de bainha de mielina, que favorece a transmissão da corrente elétrica, aumentando a velocidade de condução. Nódulos de ranvier são pequenos espaços entre as bainhas de mielina;</li>
                  <li>Dendrito - tem muitos receptores, geralmente estão recebendo informação;</li>
                  <li>Corpo celular - onde estão as organelas e o núcleo, região de produção de substâncias</li>
                </ul>
                <ul>
                  <li>
                  Fluxo anterógrado: algo produzido que vai do corpo celular em direção ao terminal axonal.
                  </li>
                  <li>
                  Fluxo retrógrado: do axônio ao corpo celular.
                  </li>
                </ul>
                <ul>
                  <li><h4>Sinapse: comunicação de um neurônio com o outro (comunicação neural)</h4>
                    <ul>
                      <li>
                      sinapse elétrica: tem proteínas conexinas que comunicam o citoplasma de um neurônio ao outro.
                      </li>
                      <li>
                      sinapse química(a maioria): existe uma fenda entre o neurônio pré-sináptico e pós-sináptico, por onde passam os neurotransmissores que são liberados com uma corrente elétrica, se ligando nos receptores gerando corrente elétrica no neurônio pós-sináptico. Geralmente a sinapse é axodendrítica. 
                      </li>
                    </ul>
                  </li><h4>Morfologia dos neurônios:</h4>
                  <li>
                    <ul>
                      <li>
                      multipolar(o padrão mais visto):  o corpo celular tem vários dendritos e um axônio
                      </li>
                      <li>
                      bipolar: um prolongamento forma os dendritos e um forma os axônios
                      </li>
                      <li>
                      pseudounipolar: tem um neurito saindo do corpo celular, mas o filamento se bifurca formando os dendritos e o axônio.
                      </li>
                    </ul>
                  </li><h4>Células da glia:

ficam em contato com os neurônios, responsáveis por mantê-los vivos e funcionando.</h4>
                  <li>
                    <ul>
                      <li>
                      Astrócitos(formato de estrela): as mais numerosas células da glia,  nutrem os neurônios transportando os nutrientes dos vasos sanguíneos aos neurônios. Removem substâncias tóxicas presentes na fenda sináptica.
                      </li>
                      <li>
                      astrócitos protoplasmático (encontrados na substância cinzenta): além de comunicar os vasos sanguíneos com o neurônio, também serve pra formar a glia limitante, que impede que várias moléculas (que podem ser nocivas) alcancem os neurônios.
                      </li>
                      <li>
                      astrócito fibroso (encontrado na substância branca): tem o corpo menos desenvolvido e filamentos mais finos e alongados.
                      </li>
                      <li>
                      Oligodendrócito (poucos ramos): forma a bainha de mielina no SNC.
                      </li>
                      <li>
                      Micróglias: macrófagos especializados que alcançam o sistema nervoso. Parecidas com os mastócitos fibrosos, porém mais achatadas.
                      </li>
                      <li>
                      Células ependimárias: formam as cavidades do sistema nervoso. Tem cílios e produzem pequena quantidade de LCR que é liberado nessas cavidades.
                      </li>
                      <li>
                      Células de schwann (SNP): cada uma forma uma bainha de mielina.
                      </li>
                      <li>
                      Células satélites: recobre os gânglios (conjunto de corpos de neurônio no SNP).
                      </li>
                    </ul>
                  </li>
                </ul>
                <C.TitleH2>
                Regeneração neural:
                </C.TitleH2>
                <p>
                Um nervo pode ser rompido e se regenerar. Assim que é rompido, o corpo celular começa a crescer (cromatólise). O coto distal se degenera (ação dos macrófagos) e as células de schwann se proliferam e começam a liberar fatores de crescimento axônico. Dessa forma, o axônio pode alcançar as células de schwann e restabelecer a conexão nervosa ou não encontra e forma um nódulo, comprometendo a inervação e sofrendo atrofia da fibra muscular.
                </p>
                <C.TitleH2>
                Sistema nervoso central (SNC)
                </C.TitleH2>
                <ul>
                  <li><h4>composto pelo Encéfalo e medula espinal O Encéfalo é composto por:</h4>
                    <ul>
                      <li>tronco encefálico (ponte, bulbo e mesencéfalo)</li>
                      <li>cérebro (telencéfalo e diencéfalo)</li>
                      <li>cerebelo</li>
                    </ul>
                  </li>
                </ul>
                <C.TitleH2>
                Sistema nervoso periférico (SNP) - formado por gânglios, nervos e terminações nervosas.
                </C.TitleH2>
                <ul>
                  <li>Substância cinzenta: formada pelos corpos celulares de vários neurônios. Forma núcleos e gânglios.</li>
                  <li>Substância branca: formada pelos axônios mielinizados. Forma tratos, fascículos, lemniscos e nervos (nervos no SNP).</li>
                </ul>
                <C.TitleH2>
                Divisão funcional:
                </C.TitleH2>
                <Table2/>
                <C.TitleH2>
                Sistema nervoso autônomo (motor visceral)
                </C.TitleH2>
                <Table3/>
                <ul>
                  <li>Simpático - de atividade, fuga, defesa.</li>
                  <li>Parassimpático - relaxa, repouso.</li>
                </ul>
                <C.TitleH2>
                  Nervos
                </C.TitleH2>
                <ul>
                  <li>Nervos espinais: são sempre mistos, emite raiz motora e recebe raiz sensitiva (com gânglio), que se unem formando o nervo espinal.</li>
                  <li>Nervos cranianos: podem ser sensitivos (olfatório, óptico e vestibulococlear), mistos (trigêmio, facial, glossofaríngeo, vago) ou motores (todos os outros).</li>
                </ul>
                <C.TitleH2 className="C">
                  Referência
                </C.TitleH2>
                <p className="C">Junqueira, L. C., & Carneiro, J. (2004). Histologia Básica (10o). Guanabara Koogan;</p>
                <p className="C">Machado, A. B. M. (2006).  Neuroanatomia Funcional (2nd ed., p. 363). Atheneu.</p>
              </C.TextBox01>
          </C.TextBox>
          
        </C.Container>
        </>
    )
}