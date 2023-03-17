import * as C from "./styled"
import { FixedTop } from "../../hooks/fixedTop"
import {Link} from "react-router-dom"
import {TbArrowBackUp} from "react-icons/tb"
import Table1 from "../../components/table"


export const Demo06=()=>{
    return(
        <> 
        <C.Container>
           <C.BackButton>
           <Link to="/"><TbArrowBackUp/>Voltar</Link>
           </C.BackButton>
           <C.TextBox>
            
            <C.Title>
            APARELHO CIRCULATÓRIO
            </C.Title>
            <C.TextBox01>
             <p>
             O sistema cardiovascular leva nutrientes, gases, água e sais minerais; recolhe excretas celulares, secreções endócrinas, hormônios; direciona aos órgãos excretores. Moléculas grandes, liberadas pela célula para voltar à corrente sanguínea, que não conseguem ser reabsorvidas pelos vasos sanguíneos são absorvidas pelos vasos linfáticos, que ficam entre os capilares sanguíneos. Os vasos linfáticos passam por diversos linfonodos, que filtram e purificam - caso haja algum microorganismo - a linfa. Os vasos formam troncos linfáticos, que conduzem a linfa de volta à circulação sanguínea.
             </p>
             <C.TitleH2>
                Coração
             </C.TitleH2>
             <p>
             Na porção média do mediastino inferior. O pericárdio apresenta dois folhetos (fibroso e seroso/ visceral e parietal).

paredes que separam os átrio e ventrículos: septos interatrial e interventricular.

Aurículas: projeções dos átrios

Valvas: formadas por válvulas.

Valva atrioventricular direita: 3 válvulas

Valva atrioventricular esquerda: 2 válvulas

Valva da artéria tronco pulmonar: 3 válvulas

Valva da artéria aorta: 3 válvulas

Importância das valvas/válvulas: a sístole e diástole controla o fluxo sanguíneo nas cavidades. As válvulas abrem e fecham conforme essa dinâmica de sístole e diástole atrial e ventricular. As cordas tendíneas - fixas no músculo do ventrículo e nas válvulas - se tensionam na sístole ventricular, possibilitando a abertura da valva da artéria (que fica no sentido contrário) e o completo fechamento da valva atrioventricular, impedindo o retorno do sangue.
             </p>
             <C.TitleH2>
             Circulação pulmonar e sistêmica (pequena e grande)
             </C.TitleH2>
             <ul>
                <li><h4>Pulmonar:</h4>
                    <ul>
                        <li>
                        inicia no ventrículo direito, sai pela artéria tronco pulmonar e retorna por quatro veias pulmonares, terminando no átrio esquerdo.
                        </li>
                    </ul>
                </li>
                <li> <h4>Sistêmica:</h4>
                    <ul>
                        <li>
                        inicia no ventrículo esquerdo, sai pela artéria aorta e termina no átrio direito.
                        </li>
                    </ul>
                </li>
             </ul>
             <C.TitleH2>
                Artérias
             </C.TitleH2>
             <ul>
                <li>
                são vasos eferentes ao coração. Estão saindo do coração. Iniciam de maior calibre e vão se ramificando. As artérias tem ramos. Apresentam camada de tecido muscular liso espessa e pulsam. 
                </li>
             </ul>
             <C.TitleH2>
                Veias
             </C.TitleH2>
             <ul>
                <li>
                possuem camada de tecido muscular liso menos espessa e não pulsam. Para evitar refluxo, apresentam válvulas. Começam de pequeno calibre e vão se juntando até formar veias de maior calibre. Veias tem tributárias (veias A e B que desaguam em uma veia maior C).
                 obs: no cadáver, as veias estão colabadas (sem luz), enquanto as artérias não colabam devido à musculatura. 
                </li>
             </ul>
             <C.TitleH2>
             Capilares: 
             </C.TitleH2>
             <ul>
                <li>
                vasos de menor calibre, entre as artérias e veias, por onde os nutrientes vão passar para as células.
                </li>
             </ul>
             <C.TitleH2>
             SISTEMA LINFÁTICO
             </C.TitleH2>
             <p>Os capilares linfáticos estão no meio intersticial entre as células, reabsorvendo as macromoléculas e levando pelo sistema linfático. Linfonodos regionais: ex: linfonodos mastóideos, cervicais, axilares</p>
            <p>
            Cisterna do quilo: recebe grande quantidade de elementos de gordura absorvidos pelo intestino. Caem em troncos linfáticos (intestinais), que desembocam a linfa no interior da cisterna do quilo. Por fim a linfa é levada pelo ducto torácico, desembocando no ângulo venoso (entre a veia jugular e subclávia).
            </p>
            <p>
            Ducto torácico x Ducto linfático direito: torácico drena o sangue da maior parte do corpo e o linfático direito, que desemboca no ângulo venoso direito - drena apenas a metade direita da cabeça, a metade direita do tórax e membro superior direito.
            </p>
            <ul>
                <li>Órgãos linfáticos: linfonodos, timo e baço.</li>
                <li>Timo: superiormente ao coração, com importante papel imunológico nas crianças.</li>
                <li>baço: no antímero esquerdo do abdômen, retém células mortas, reciclando o tecido sanguíneo.</li>
                <li>Os vasos linfáticos podem ser:
                    <ul>
                        <li>capilares: pequenos vasos microscópico, presentes nos tecidos, auxiliando a drenagem da linfa (fluido de composição semelhante ao plasma, rico em linfócitos); o líquido que não consegue ser drenado pelos capilares cai nos capilares linfáticos para depois retornar para a circulação sanguínea. Os linfonodos estão intercalados entre os vasos linfáticos. Os capilares tem fluxo unidirecional até chegar nos linfonodos e passar para os coletores.</li>
                        <li>coletores:</li>
                        <li>troncos</li>
                    </ul>
                </li>
            </ul>
            <C.Title>
                Linfonodos
            </C.Title>
            <p>
            formato de feijão. Tamanho variável de acordo com a região. Apresentam uma região convexa - por onde entram os capilares linfáticos aferentes; e região côncava (hílo) - de onde partem os capilares eferentes, também é onde penetram as artérias e saem as veias que irrigam e drenam os linfonodos. Podem ser superficiais ou profundos, de acordo com as fáscias e recebem nome de acordo com a região (ex: submandibulares, zignais, lombares etc). Servem como filtros que auxiliam na filtração da linfa com microorganismos; quando há infecção o linfonodo dilata formando as ínguas.
            </p>
            <C.TitleH2>
                Baço
            </C.TitleH2>
            <p>
            localiza-se no hipocôndrio esquerdo (com extremidade superior atingindo a região epigástrica). O aumento patológico é denominado esplenomegalia (ex: na malária, onde pode alcançar até nove kg). Apresenta uma face diafragmática (convexa) e uma face visceral (irregular).
            </p>
            <ul>
                <li>
                Impressão gástrica: se relaciona com o estômago  
                </li>
                <li>
                impressão renal: se relaciona com o rim esquerdo
                </li>
                <li>
                impressão cólica: se relaciona com a flexora cólica esquerda
                </li>
            </ul>
            <C.ImgMapB1/>
            <C.ImgMapB2/>
            <C.ImgMapB3/>
            <ul>
                <li>margem anterior: separa a face diafragmática da face gástrica</li>
                <li>margem posterior: separa a face diafragmática da face renal</li>
                <li>margem  inferior: separa a face diafragmática da face cólica</li>
                <li>margem intermédia: separa a face da impressão gástrica da impressão renal</li>
            </ul>
            <p>
            O baço tem uma cápsula fibromuscular de revestimento e uma polpa esplênica (formada por capilares sinusóides, que dão coloração vermelha). O órgão é irrigado pela artéria esplênica(ramo direto da artéria do tronco celíaco) que se ramifica em 6 artérias que penetram pelo hílo. Já as veias que drenam o baço desembocam na veia esplênica (tributária da veia porta hepática).
          obs: porta hepática lembra o sistema porta estudado em farmacologia.
          O baço tem inervação pelo plexo celíaco e fibras nervosas que inervam principalmente a camada muscular da cápsula e a região muscular lisa - que forma a região das trabéculas do baço
            </p>
            <ul>
                <li><h4>Tonsilas</h4>
                    <ul>
                        <li>palatinas: lateralmente na região oral</li>
                        <li>linguais</li>
                        <li>faríngeas: na região superior (adenóide)</li>
                    </ul>
                </li>
            </ul>
            <p>
                As tonsilas formam o malts: tecidos linfáticos associados à mucosa. As 3 tonsilas compõem o anel linfático da garganta (protege a região oral e nasal).
             No intestino (região musosa) há as placas de payer: responsável por fazer a proteção contra microrganismos.
             Órgãos linfáticos primários: timo e medula óssea
            </p>
            <ul>
                <li> <h4>Timo</h4>
                    <ul>
                        <li>
                        ocorre a maturação dos linfócitos T. Na criança seu tamanho relativo é maior que no adulto. Formado por lobo esquerdo e direito, separado por tec conjuntivo frouxo. No mediastino superior, anteriormente aos vasos da base do coração, podendo chegar na região do pescoço. Recebe irrigação da artéria tireoidea superior e inferior. Possui córtex e medula. É inervado pelo nervo vago e por fibras amielínicas que se destacam do sistema nervoso simpático. 
                        Medula óssea: responsável pela produção e maturação dos linfócitos B.
                        Em geral, os órgãos linfáticos primários são responsáveis pela produção dos linfócitos e os secundários pela resposta imune.
                        </li>
                    </ul>
                </li>
            </ul>
            <C.TitleH2 className="C">
                Referência
            </C.TitleH2>
            <p className="C">
            Dangelo, J. G., & Fattini, C. A. (2011). Anatomia humana sistêmica e segmentar (3rd ed.). Atheneu.
            </p>
            <p className="C">
            Youtube: canal anatomofuncional; aula: cardiovascular
            </p>
            </C.TextBox01>
           </C.TextBox>
        </C.Container>
        
        </>
    )
}