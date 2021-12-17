import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import test from '@mapbox/mapbox-sdk/lib/classes/mapi-client'
import {MapiRequest, MapiRequestOptions} from '@mapbox/mapbox-sdk/lib/classes/mapi-request'
import stat, { PathOverlay } from '@mapbox/mapbox-sdk/services/static'
// import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
// import test from '@mapbox/mapbox-sdk/services/styles'

@Injectable({
  providedIn: 'root'
})
export class StaticmapService {

  // api_url: string = 'https://PatoGM117:LegitDuck117!@opensky-network.org/api/tracks/all?icao24='

  // client = new test({ accessToken: "pk.eyJ1IjoicGF0b2dtIiwiYSI6ImNreDg1dXJvZzMyZXEzMXEzZ2ZmZmd0MHQifQ.GkBRwqLwWeTNpy1vNkxElg" })

  constructor
  (
    private http: HttpClient
  ) { }

  async getData()//: Observable<>
  {
    // console.log(this.client)
    // this.client.origin = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+555555(-77,38),path(kuwkF~bvv@sIsDgw@%7B%5EsI%7BE_IgE%7BEgEgEkC_IwGgEgEoFoFkC_DkMsNg%5Ece@kgBw_CkoCcqDolAc%7CAgzAsmB%7BfAstAknA%7B_BsyAwpBwuB%7BvCooB%7BlCwpBomCcpB_kCkdAstAksAwfB%7BiBocC%7BvCs%7DD%7BlCopD%7BbCgeDwkBsfCovAwkBkvB_uCg%7CJsdN%7BdBw_C_~AwuBkrD_%60FkaEguFgfFwdH_%7BEswG%7BvHsjKodJkeMsxIswLsmGsxI%7BcJ%7BgMoeQ_mV_vsBsjwCkm]kmg@g%5E%7Bh@g%5Egh@gcEkbGsb@%7Bh@_]o_@k/_]c%7CAcrAo%60pBklaB_DwBkHwGcj@ce@sIwGoZkW_D_DkMoKkMcLgTcQs~i@o%60e@ogZciWwigBgg%7DAs%7BtDcoqCox%7C@gwc@gJgEwwAct@cLcGc%7BhGkheF%7Bh@gr@oleBku%7DBkHgJoP%7BTkH%7BJk%7DFw%7DHktCc%7BDozl@o%60y@sNkRwG%7BJ_DgE%7B%5E_g@sv@gfA_D%7BEcLgOoUw[wQcVwG%7BJc[_b@cGgJod@%7Bm@g~kC%7B_vDcGsIoPcVc[od@cGsIgqMciR_IcLoF_IkHoKccAsyAsSoZo_@cj@gaZkac@s_SkzYwG%7BJkHoK%7B%7C@wrA_DgEgy_Dwt%7CE_IwLwBsDwVw%60@_IwLobAg_BsIkMc%7CKcfQcG%7BJkk@%7B%7C@wGcLkR%7BYcQsXcQsXwGoKkHwLkdPskWkHwL_Sc[_NsScQgYg%7C@ovAcG%7BJchKgpP%7BYce@cGoKs%7DIouNcG%7BJcQ_XwGoKw%60@kp@sS_]wGoKcGgJgOwVoPkWcG%7BJkk@w~@wGoK%7BjNseUwGoKkHwLc%60@on@kRoZ_gr@gviAcGoK_IwL_kRoo[kHwLgYce@%7BOsXcGoKwoEcsHkHkMw[%7Bh@sqTga_@kHkM%7B%5Eon@_S_]sg@s%7B@kHwLkbBcsCoF%7BJ%7BY_g@gba@gmr@olAocCgkA%7BlCchAorC_eAwxCgc@ovAcQon@%7BOsq@sNsq@_Nsv@gJ_l@cLs%7B@giGsak@wBwQwBkR%7B%7C@_dI%7B%60Igqu@%7B@_IoFgh@wBcQoA_N%7BvHwpt@cBoPcBcQ%7BEsb@oA%7BOki_@ciwDcBcQgE_b@soAsuMcGsq@wBsSsv@cxHoPsoAwda@c_eCkC%7BOs]czBwBgO%7BJon@kCoPwQchAwLwt@cGo_@wG_b@cB_N%7ByD_mVkyCcnRwiCgpP_kCstPkjCsyPocCs%7BOocCccPsaCcyOo~BkpOczBssN_X%7BuAgqCw_MkrD%7BfP%7B%7BCkcNowCg%7BMsuCgvMovAkvGgTsoAgw@ovFciComRw%7CUwdgBcxCccUc_CotQw_CkqQgvCs%7BTcxCgpUkyCsyUcjEcl]s%7CG%7B_j@snIkwq@ktCojV%7BnBgpPsfC%7BcT%7BlCwcUgnG%7B_j@%7B@gOg@%7BJg@kHSwGSsI?sISsIRgJ?_IR_IRoKRkC~C_]nAsNnAwGz@_InAcGnAsDvBcLvBkHnA_D~CoKbB{EvB{EjCcGjC{E~CwG~C{ErDcGrD{E~CsD~H{JzT_XnwCo|CnPoPbQ{OrDkCfEkCrDwBzE_DzEwBfEcBzEcBzE{@fEoAnF{@fEg@nFSjCSrD?nF?zE?~Hf@vBf@zEf@~HnA~Cz@nFbBzEvBrDnAnFjCbBnAzE~CrDjCzEfEfErDrD~CnFbGrDzE~CrD~CzE~CzE~CnF~CzE~CbG~CbGjCvG~CbGbBnF~C~HjC~HfE~MnFvQzEvQjHj\~Mvo@fYb|A~f@b}CrrBvgNzw@fpFz|@fdGrfC~xPfaAbuGjR~aE{uAcjE),path(_seK_seK%3F~hbE~hbE%3F_ibE%3F%3F~hbE)/[-9,38,8,50]/300x200?access_token=pk.eyJ1IjoicGF0b2dtIiwiYSI6ImNreDg1dXJvZzMyZXEzMXEzZ2ZmZmd0MHQifQ.GkBRwqLwWeTNpy1vNkxElg"
    // console.log(this.client)
    // let temp = await this.client.createRequest({
    //   path: '',
    //   origin: '',
    //   method: '',
    //   query: undefined,
    //   params: undefined,
    //   headers: undefined,
    //   file: '',
    //   encoding: '',
    //   sendFileAs: 'data'
    // }).send();

    // console.log(temp);

    let mything = stat({ accessToken: "pk.eyJ1IjoicGF0b2dtIiwiYSI6ImNreDg1dXJvZzMyZXEzMXEzZ2ZmZmd0MHQifQ.GkBRwqLwWeTNpy1vNkxElg" });
    console.log(mything);

    // mything.getStaticImage({
    //   ownerId: 'mapbox',
    //   styleId: 'light-v10',
    //   width: 200,
    //   height: 300,
    //   position: {
    //     coordinates: [12, 13],
    //     zoom: 4
    //   }
    // })
    //   .send()
    //   .then(response => {
    //     const image = response.body;
    //     console.log(response, image)
    //   });

      // let path: PathOverlay = new  //{path: {coordinates: []}}
    
      const request = mything.getStaticImage({
        ownerId: 'mapbox',
        styleId: 'light-v10',
        width: 200,
        height: 300,
        position: "auto",
        overlays: [
          {path: 
            {
              coordinates: [
                [1,2],
                [2,2],
                [3,3]
              ]
            }
          }
        ]
      });
      const staticImageUrl = request.url();
      console.log(staticImageUrl);
  }
}
