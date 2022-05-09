//TODOS: refine search, auth, hide download archive when not loggedin, refine regions
import Head from "next/head";
import styles from "styles/Home.module.scss";
import React from "react";

const content = `
      <h1 class="style-module--tallytitle--2ox-Y font-size-medium">
        National Elections
      </h1>
      <h2 class="style-module--tallyscopetitle--2p3uc font-size-small">
        Nation-wide
      </h2>
      <div
        class="style-module--tallyinfo--1mLQL font-style-italic font-size-small"
      >
        <div class="font-style-bold">Processed 05/09/2022 10:52:51 pm</div>
        <div>79,662 (73.9%) of 107,785 Precincts</div>
        <div>67,442,616 Registered Voters</div>
      </div>
      <div class="style-module--tallyholder--1Tu5-">
        <h3 class="font-size-small">PRESIDENT PHILIPPINES</h3>
        <table
          class="font-size-small style-module--tallytable--2pv0b"
          cellpadding="0"
          cellspacing="0"
        >
          <thead>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Votes</td>
              <td>%</td>
            </tr>
          </thead>
          <tbody>
            <tr class="style-module--tallywinner--2dj89">
              <td class="style-module--tablecellalignright--3m2kE">1</td>
              <td>MARCOS, BONGBONG (PFP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                24,070,851
              </td>
              <td class="style-module--tablecellalignright--3m2kE">59.5%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">2</td>
              <td>ROBREDO, LENI (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                11,447,751
              </td>
              <td class="style-module--tablecellalignright--3m2kE">28.3%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">3</td>
              <td>PACQUIAO, MANNY PACMAN(PROMDI)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                2,316,665
              </td>
              <td class="style-module--tablecellalignright--3m2kE">5.7%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">4</td>
              <td>DOMAGOSO, ISKO MORENO (AKSYON)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                1,538,874
              </td>
              <td class="style-module--tablecellalignright--3m2kE">3.8%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">5</td>
              <td>LACSON, PING (PDR)</td>
              <td class="style-module--tablecellalignright--3m2kE">733,999</td>
              <td class="style-module--tablecellalignright--3m2kE">1.8%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">6</td>
              <td>MANGONDATO, FAISAL (KTPNAN)</td>
              <td class="style-module--tablecellalignright--3m2kE">113,933</td>
              <td class="style-module--tablecellalignright--3m2kE">0.3%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">7</td>
              <td>ABELLA, ERNIE (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">78,208</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">8</td>
              <td>DE GUZMAN, LEODY (PLM)</td>
              <td class="style-module--tablecellalignright--3m2kE">67,824</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">9</td>
              <td>GONZALES, NORBERTO (PDSP)</td>
              <td class="style-module--tablecellalignright--3m2kE">63,037</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">10</td>
              <td>MONTEMAYOR, JOSE JR. (DPP)</td>
              <td class="style-module--tablecellalignright--3m2kE">43,839</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="style-module--tablecellalignright--3m2kE">
                Total:
              </td>
              <td class="style-module--tablecellalignright--3m2kE">
                40,474,981
              </td>
              <td>&nbsp;</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="style-module--tallyholder--1Tu5-">
        <h3 class="font-size-small">VICE PRESIDENT PHILIPPINES</h3>
        <table
          class="font-size-small style-module--tallytable--2pv0b"
          cellpadding="0"
          cellspacing="0"
        >
          <thead>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Votes</td>
              <td>%</td>
            </tr>
          </thead>
          <tbody>
            <tr class="style-module--tallywinner--2dj89">
              <td class="style-module--tablecellalignright--3m2kE">1</td>
              <td>DUTERTE, SARA (LAKAS)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                23,881,718
              </td>
              <td class="style-module--tablecellalignright--3m2kE">60.4%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">2</td>
              <td>PANGILINAN, KIKO (LP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                7,211,145
              </td>
              <td class="style-module--tablecellalignright--3m2kE">18.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">3</td>
              <td>SOTTO, VICENTE TITO (NPC)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                6,460,040
              </td>
              <td class="style-module--tablecellalignright--3m2kE">16.3%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">4</td>
              <td>ONG, DOC WILLIE (AKSYON)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                1,542,447
              </td>
              <td class="style-module--tablecellalignright--3m2kE">3.9%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">5</td>
              <td>ATIENZA, LITO (PROMDI)</td>
              <td class="style-module--tablecellalignright--3m2kE">182,312</td>
              <td class="style-module--tablecellalignright--3m2kE">0.5%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">6</td>
              <td>LOPEZ, MANNY SD (WPP)</td>
              <td class="style-module--tablecellalignright--3m2kE">103,653</td>
              <td class="style-module--tablecellalignright--3m2kE">0.3%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">7</td>
              <td>BELLO, WALDEN (PLM)</td>
              <td class="style-module--tablecellalignright--3m2kE">70,186</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">8</td>
              <td>SERAPIO, CARLOS (KTPNAN)</td>
              <td class="style-module--tablecellalignright--3m2kE">60,706</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">9</td>
              <td>DAVID, RIZALITO (DPP)</td>
              <td class="style-module--tablecellalignright--3m2kE">37,471</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="style-module--tablecellalignright--3m2kE">
                Total:
              </td>
              <td class="style-module--tablecellalignright--3m2kE">
                39,549,678
              </td>
              <td>&nbsp;</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="style-module--tallyholder--1Tu5-">
        <h3 class="font-size-small">SENATOR PHILIPPINES</h3>
        <table
          class="font-size-small style-module--tallytable--2pv0b"
          cellpadding="0"
          cellspacing="0"
        >
          <thead>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Votes</td>
              <td>%</td>
            </tr>
          </thead>
          <tbody>
            <tr class="style-module--tallywinner--2dj89">
              <td class="style-module--tablecellalignright--3m2kE">1</td>
              <td>PADILLA, ROBIN (PDPLBN)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                19,925,337
              </td>
              <td class="style-module--tablecellalignright--3m2kE">5.9%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">2</td>
              <td>LEGARDA, LOREN (NPC)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                18,903,943
              </td>
              <td class="style-module--tablecellalignright--3m2kE">5.6%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">3</td>
              <td>TULFO, IDOL RAFFY (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                18,180,113
              </td>
              <td class="style-module--tablecellalignright--3m2kE">5.4%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">4</td>
              <td>GATCHALIAN, WIN (NPC)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                16,156,054
              </td>
              <td class="style-module--tablecellalignright--3m2kE">4.8%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">5</td>
              <td>ESCUDERO, CHIZ (NPC)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                16,020,468
              </td>
              <td class="style-module--tablecellalignright--3m2kE">4.8%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">6</td>
              <td>VILLAR, MARK (NP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                15,027,841
              </td>
              <td class="style-module--tablecellalignright--3m2kE">4.5%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">7</td>
              <td>CAYETANO, ALAN PETER (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                14,968,667
              </td>
              <td class="style-module--tablecellalignright--3m2kE">4.4%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">8</td>
              <td>VILLANUEVA,JOEL TESDAMAN (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                14,599,100
              </td>
              <td class="style-module--tablecellalignright--3m2kE">4.3%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">9</td>
              <td>ZUBIRI, MIGZ (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                14,456,632
              </td>
              <td class="style-module--tablecellalignright--3m2kE">4.3%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">10</td>
              <td>EJERCITO, JV ESTRADA (NPC)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                12,297,712
              </td>
              <td class="style-module--tablecellalignright--3m2kE">3.6%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">11</td>
              <td>HONTIVEROS, RISA (AKBAYAN)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                12,252,906
              </td>
              <td class="style-module--tablecellalignright--3m2kE">3.6%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">12</td>
              <td>ESTRADA, JINGGOY (PMP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                11,505,403
              </td>
              <td class="style-module--tablecellalignright--3m2kE">3.4%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">13</td>
              <td>BINAY, JOJO (UNA)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                10,227,723
              </td>
              <td class="style-module--tablecellalignright--3m2kE">3.0%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">14</td>
              <td>BAUTISTA, HERBERT BISTEK (NPC)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                10,207,684
              </td>
              <td class="style-module--tablecellalignright--3m2kE">3.0%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">15</td>
              <td>TEODORO, GIBO (PRP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                9,935,627
              </td>
              <td class="style-module--tablecellalignright--3m2kE">2.9%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">16</td>
              <td>ELEAZAR, GEN. GUILLERMO (PDR)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                9,086,111
              </td>
              <td class="style-module--tablecellalignright--3m2kE">2.7%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">17</td>
              <td>ROQUE, HARRY SPOX (PRP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                8,657,754
              </td>
              <td class="style-module--tablecellalignright--3m2kE">2.6%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">18</td>
              <td>HONASAN, GRINGO (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                8,318,849
              </td>
              <td class="style-module--tablecellalignright--3m2kE">2.5%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">19</td>
              <td>DIOKNO, CHEL (KANP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                8,222,123
              </td>
              <td class="style-module--tablecellalignright--3m2kE">2.4%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">20</td>
              <td>GADON, LARRY (KBL)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                7,716,821
              </td>
              <td class="style-module--tablecellalignright--3m2kE">2.3%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">21</td>
              <td>TRILLANES, ANTONIO IV (LP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                6,881,157
              </td>
              <td class="style-module--tablecellalignright--3m2kE">2.0%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">22</td>
              <td>GORDON, WOW DICK (BVNP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                6,585,356
              </td>
              <td class="style-module--tablecellalignright--3m2kE">2.0%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">23</td>
              <td>DE LIMA, LEILA (LP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                5,837,889
              </td>
              <td class="style-module--tablecellalignright--3m2kE">1.7%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">24</td>
              <td>COLMENARES, NERI (MKBYN)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                5,008,352
              </td>
              <td class="style-module--tablecellalignright--3m2kE">1.5%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">25</td>
              <td>LACSON, KUYA ALEX (KP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                4,370,662
              </td>
              <td class="style-module--tablecellalignright--3m2kE">1.3%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">26</td>
              <td>PANELO, SAL PANALO (PDPLBN)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                3,711,596
              </td>
              <td class="style-module--tablecellalignright--3m2kE">1.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">27</td>
              <td>MARCOS, FRANCIS LEO (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                3,605,595
              </td>
              <td class="style-module--tablecellalignright--3m2kE">1.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">28</td>
              <td>BAGUILAT, TEDDY (LP)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                3,500,167
              </td>
              <td class="style-module--tablecellalignright--3m2kE">1.0%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">29</td>
              <td>BALITA, CARL (AKSYON)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                2,940,010
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.9%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">30</td>
              <td>DEL ROSARIO, MONSOUR (PDR)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                2,899,668
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.9%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">31</td>
              <td>ESPIRITU, LUKE (PLM)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                2,896,053
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.9%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">32</td>
              <td>PADILLA, DRA. MINGUITA (PDR)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                2,751,444
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.8%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">33</td>
              <td>MARCOLETA, RODANTE (PDPLBN)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                2,689,174
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.8%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">34</td>
              <td>PIÑOL, MANNY (NPC)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                2,624,263
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.8%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">35</td>
              <td>PIMENTEL, ASTRA (PDPLBN)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                2,241,599
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.7%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">36</td>
              <td>MATULA, SONNY (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                2,240,720
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.7%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">37</td>
              <td>BELGICA, GRECO (PDDS)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                1,814,553
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.5%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">38</td>
              <td>SISON, JOPET (AKSYON)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                1,797,330
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.5%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">39</td>
              <td>ZUBIAGA, CARMEN (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                1,462,590
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.4%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">40</td>
              <td>GUTOC, SAMIRA (AKSYON)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                1,416,851
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.4%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">41</td>
              <td>LABOG, ELMER (MKBYN)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                1,311,122
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.4%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">42</td>
              <td>BELLO, SILVESTRE JR. (PDPLBN)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                1,288,229
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.4%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">43</td>
              <td>LANGIT, REY (PDPLBN)</td>
              <td class="style-module--tablecellalignright--3m2kE">
                1,053,567
              </td>
              <td class="style-module--tablecellalignright--3m2kE">0.3%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">44</td>
              <td>CHAVEZ, MELCHOR (WPP)</td>
              <td class="style-module--tablecellalignright--3m2kE">725,687</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">45</td>
              <td>CABONEGRO, ROY (PLM)</td>
              <td class="style-module--tablecellalignright--3m2kE">715,395</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">46</td>
              <td>AFUANG, ABNER (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">687,624</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">47</td>
              <td>ALBANI, IBRAHIM (WPP)</td>
              <td class="style-module--tablecellalignright--3m2kE">552,962</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">48</td>
              <td>BARBO, LUTZ (PDPLBN)</td>
              <td class="style-module--tablecellalignright--3m2kE">541,927</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">49</td>
              <td>D'ANGELO, DAVID (PLM)</td>
              <td class="style-module--tablecellalignright--3m2kE">534,788</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">50</td>
              <td>CASTRICIONES, BRO JOHN(PDPLBN)</td>
              <td class="style-module--tablecellalignright--3m2kE">530,847</td>
              <td class="style-module--tablecellalignright--3m2kE">0.2%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">51</td>
              <td>BAILEN, AGNES (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">500,122</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">52</td>
              <td>OLARTE, ATTY/DR. LEO (BIGKIS)</td>
              <td class="style-module--tablecellalignright--3m2kE">439,799</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">53</td>
              <td>LIM, ARIEL (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">418,275</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">54</td>
              <td>DIAZ, DING (PPP)</td>
              <td class="style-module--tablecellalignright--3m2kE">406,404</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">55</td>
              <td>KIRAM, NUR-MAHAL (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">403,312</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">56</td>
              <td>ARRANZA, MANG JESS (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">380,878</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">57</td>
              <td>RICABLANCA, WILLIE JR. (PM)</td>
              <td class="style-module--tablecellalignright--3m2kE">361,455</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">58</td>
              <td>JAVELLANA, RJ (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">347,144</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">59</td>
              <td>SAHIDULLA, LADY ANNE (PDDS)</td>
              <td class="style-module--tablecellalignright--3m2kE">343,850</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">60</td>
              <td>EREÑO, BRO. ERNIE (PM)</td>
              <td class="style-module--tablecellalignright--3m2kE">327,149</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">61</td>
              <td>MINDALANO-ADAM,MARIETA(KTPNAN)</td>
              <td class="style-module--tablecellalignright--3m2kE">302,022</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">62</td>
              <td>FALCONE, BAL FALCON (DPP)</td>
              <td class="style-module--tablecellalignright--3m2kE">293,094</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">63</td>
              <td>MALLILLIN, EMILY (PPM)</td>
              <td class="style-module--tablecellalignright--3m2kE">285,730</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
            <tr class="">
              <td class="style-module--tablecellalignright--3m2kE">64</td>
              <td>VALEROS, REY (IND)</td>
              <td class="style-module--tablecellalignright--3m2kE">262,417</td>
              <td class="style-module--tablecellalignright--3m2kE">0.1%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="style-module--tablecellalignright--3m2kE">
                Total:
              </td>
              <td class="style-module--tablecellalignright--3m2kE">
                336,955,696
              </td>
              <td>&nbsp;</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="style-module--footnotemsg--1nuJ0">
        Courtesy of MBC via KBP
      </div>
   `;

export function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MBC DESISYON 2022</title>
        <meta
          name="description"
          content="DZRH News Desisyon 2022 election coverage. Online portal for updated results from the Parish Pastoral Council for Responsible Voting (PPCRV) quick count for the 2022 Philippine General Elections."
        />
        <meta
          name="keywords"
          content="Philippines, 2022 May election results, 2022 President results, 2022 Vice president results, 2022 Senate results, 2022 Philippines LGU election results"
        />

        <meta
          property="og:title"
          content="MBC Desisyon 2022 Partial Unofficial Results"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://desisyon2022.dzrh.com.ph" />
        <meta
          property="og:image"
          content="https://desisyon2022.dzrh.com.ph/DesisyonBanner.jpeg"
        />

        <meta
          name="twitter:title"
          content="MBC Desisyon 2022 Partial Unofficial Results"
        />
        <meta
          name="twitter:description"
          content="DZRH News Desisyon 2022 election coverage. Online portal for updated results from the Parish Pastoral Council for Responsible Voting (PPCRV) quick count for the 2022 Philippine General Elections."
        />
        <meta
          name="twitter:image"
          content="https://desisyon2022.dzrh.com.ph/DesisyonBanner.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <div className={styles.headerContainer}>
        <div className={styles.logoWrapper}>
          <img src="/MBCDESISYON LOGO.png" className={styles.logoImg}></img>
        </div>
        <div className={styles.title} style={{ paddingBottom: "12px" }}>
          Partial Unofficial Results
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

export default Home;
