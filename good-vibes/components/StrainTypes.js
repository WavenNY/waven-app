import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Constants, Svg, LinearGradient } from "expo";

import StrainType from "../components/StrainType";

const stimg = (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="263"
    height="129"
    viewBox="0 0 263 129"
  >
    <Svg.G fill="none" fillRule="evenodd">
      <Svg.Path
        fill="#7680BB"
        d="M171.263956,129 L120.410786,129 L120.410786,108.781065 C120.410786,104.362787 123.992508,100.781065 128.410786,100.781065 L163.263956,100.781065 C167.682234,100.781065 171.263956,104.362787 171.263956,108.781065 L171.263956,129 Z"
      />
      <Svg.Path
        fill="#FFC359"
        d="M148.427928,129 L113.92819,129 L113.92819,126.753538 L119.507098,97.0063145 L68.5029466,109.564556 L66.4152267,103.712949 C103.801817,86.1676625 123.254651,77.0661389 124.77373,76.4083782 C127.052348,75.4217373 128.681989,75.412886 130.777016,75.911341 L155.602021,81.8167896 C157.046698,82.1605114 158.260687,82.9597662 159.13329,84.0241625 L161.429596,85.4097117 L155.889036,76.3704188 L160.304334,73.0318096 L184.948862,99.9166806 C186.820447,102.51362 186.496196,106.155354 184.078121,108.376188 C182.479594,109.844611 180.33656,110.351576 178.362921,109.926919 L156.263467,102.176937 L148.427928,129 Z"
      />
      <Svg.Path
        fill="#7680BB"
        d="M71.050343,129 L64.9728295,129 L50.489033,114.516203 C50.4610609,114.488231 50.4340212,114.45968 50.407914,114.430588 L24.2455514,114.430588 C24.2194441,114.45968 24.1924045,114.488231 24.1644324,114.516203 L9.68063584,129 L3.60312232,129 L18.1725346,114.430588 L2.23088266,114.430588 C1.04417433,114.430588 0.0821571519,113.468571 0.0821571519,112.281862 C0.0821571519,111.095154 1.04417433,110.133137 2.23088266,110.133137 L73.1388245,110.133137 C74.3255329,110.133137 75.28755,111.095154 75.28755,112.281862 C75.28755,113.468571 74.3255329,114.430588 73.1388245,114.430588 L56.4809308,114.430588 L71.050343,129 Z"
      />
      <Svg.Path
        fill="#A25C18"
        d="M141.750822,74.4883916 L138.098843,72.8642412 C135.849872,71.8595189 134.899316,69.1804173 136.012649,66.9856677 L141.977949,55.2294686 C144.268207,50.7162748 149.703417,48.7926107 154.328542,50.8589265 C159.116443,52.9982267 161.261483,58.6085583 159.11929,63.389994 C157.160909,68.2941967 155.667367,71.8944541 154.638664,74.1907661 C154.601018,74.2748011 154.562298,74.3611893 154.522503,74.4499307 L154.53546,74.4557765 L150.119011,84.4099527 C148.804614,87.3730257 145.35706,88.7003432 142.418667,87.3749064 C139.480739,86.0489994 138.164477,82.5729603 139.478874,79.6098873 L141.750822,74.4883916 Z"
      />
      <Svg.Path
        fill="#000"
        d="M166.546301,57.045212 C166.546301,57.045212 166.163828,58.7699223 167.761047,58.8981296 C167.377858,59.6007629 167.696585,60.6242724 168.144236,60.688018 C167.761047,61.2631602 167.697301,62.1584625 168.527426,62.4771901 C168.144236,62.989303 168.016029,63.4999834 168.527426,63.6274745 C168.144236,63.9462021 167.888538,64.7140133 168.527426,65.1616645 C168.527426,65.1616645 168.079775,65.8642977 168.720095,66.3112326 C168.464396,66.6951382 168.399935,67.3347422 168.78384,67.6534698 C168.78384,67.6534698 168.27316,68.3561031 168.655633,68.5480559 C168.591887,69.1876598 168.720095,69.5071037 168.975793,69.6990565 C169.039539,70.1459914 169.99787,70.4654353 170.253569,69.6990565 C171.211184,69.6990565 171.403137,68.6118014 171.083693,68.101121 C171.850788,67.9729137 171.91525,66.8870911 171.659551,66.7588838 C172.553421,66.4394399 173.641392,64.9052499 173.065534,64.0106638 C173.513185,63.6919362 174.662753,61.7093788 173.768167,60.9430001 C174.4708,60.8147928 174.599008,59.6007629 174.215102,59.2820352 C175.111121,58.3874492 175.749292,56.2788332 174.662753,55.5740512 C175.365387,54.998909 175.17415,53.9138027 174.343309,53.5929263 C174.599008,52.570133 175.046659,49.7581675 172.681628,49.2474871 C172.681628,47.5220605 171.787759,47.4575987 171.211184,47.2663622 C171.595089,45.7966339 170.317314,44.6456333 169.358266,44.9657934 C169.869663,43.62284 167.697301,42.4732718 167.185905,43.0476978 C166.865745,41.5135077 164.883903,40.6826672 163.606128,41.2578094 C163.478637,39.7243356 162.263891,39.5968446 161.881418,40.1712705 C161.050577,39.2122227 159.580133,38.8297496 158.366819,39.5961283 C158.302357,38.0619383 155.74609,38.2538911 155.426646,39.5323828 C153.893172,38.5088732 151.399935,38.6370805 150.761047,40.2350161 C149.611479,39.2759682 148.332271,40.2987616 148.332271,41.3845842 C147.308761,40.4262526 145.64708,41.5127915 146.095448,42.4718393 C143.986115,42.5355848 143.475435,43.877822 143.665955,45.6032486 C141.941245,45.1555975 141.493594,46.6897875 141.748576,47.2011842 C139.831197,47.5836573 138.297723,49.9486879 139.12928,51.6748307 C137.722581,52.1855111 137.595089,53.4640028 138.361468,54.166636 C136.508551,54.4223344 136.444089,57.4907144 137.914533,58.3860167 C136.636042,59.40881 137.659551,60.3026799 138.233261,60.4301709 C137.211184,61.5804553 136.699071,63.5622965 138.42593,64.7756101 C138.361468,65.9903563 138.170232,67.6520373 140.726499,68.6103689 C140.279564,69.1217656 140.854706,70.4002573 141.621801,69.9526061 C141.685547,70.9753995 142.579416,72.1256839 143.730417,71.9344473 C143.602926,72.700826 144.816956,72.7652878 145.008909,72.5095895 C145.008909,73.4041755 146.861826,73.6591576 146.989317,73.4041755 C146.926288,74.2987616 148.524224,75.0013948 149.09865,74.5537437 C149.738254,75.0021111 150.504632,74.6182054 150.440887,73.914856 C150.888538,73.7229032 152.294521,73.5961283 151.975077,72.4444115 C152.934125,71.7417782 152.805917,70.4002573 151.975077,69.8243988 C152.678426,69.1217656 152.486474,68.5459072 151.719379,68.163434 C152.422728,67.2043862 152.550935,65.862149 151.528142,65.3507523 C152.103284,64.5199118 152.934125,63.3689112 152.486474,62.9219762 C153.444805,62.4743251 155.234693,60.5569457 154.2119,59.2154247 C155.106486,58.3201224 155.618599,57.4255364 155.299155,57.1068088 C156.640676,56.9141397 157.662753,56.3389975 157.790961,55.508157 C158.878216,55.9558081 160.602926,56.275252 160.923086,55.4451277 C161.498945,56.2759682 162.457276,56.2115065 162.712974,55.6993936 C163.351862,56.5302341 164.310194,56.6584414 164.630354,55.8920626 C164.82159,57.2364485 165.716176,57.7485615 166.546301,57.045212 Z"
        transform="scale(-1 1) rotate(-26 0 732.596)"
      />
      <Svg.Path
        fill="#D8D8D8"
        d="M36.0975888,104.771555 C36.0975888,105.331003 36.5521012,105.784526 37.1127706,105.784526 C37.67344,105.784526 38.1279524,105.331003 38.1279524,104.771555 L41.5118915,104.771555 L41.5118915,110.174065 L27.299347,110.174065 L27.299347,104.771555 L36.0975888,104.771555 Z"
      />
      <Svg.Path
        fill="#A25C18"
        d="M58.8248055 102.816571L58.8297993 102.818314C59.1699841 102.886442 59.4933875 103.000836 59.7931423 103.154636 62.8226705 103.939309 64.8503743 104.510722 65.8762537 104.868877 65.8866483 104.872506 65.8866483 106.640902 65.8762537 110.174065L58.4315875 110.174065 58.4324004 110.158853C58.3206838 110.168921 58.2075416 110.174065 58.0931936 110.174065 56.0375351 110.174065 54.3708605 108.51102 54.3708605 106.459839 54.3708605 104.408658 56.0375351 102.745614 58.0931936 102.745614 58.260133 102.745614 58.5040037 102.769266 58.8248055 102.816571zM160.534887 68.9802229L160.547643 68.9799272 160.370468 73.3464568 156.132788 76.5615928 154.559872 69.1187247C154.528259 68.8149563 154.526766 68.5013642 154.558813 68.1833654 154.763962 66.148138 156.265382 64.7034236 157.912962 64.9568985 159.527476 65.2053432 160.682842 66.9929231 160.534887 68.9802229z"
      />
      <Svg.Path
        fill="#FEDDA1"
        d="M159.42915 73.3288449L156.37531 75.421154C155.930914 75.7256279 155.807563 76.3274045 156.096335 76.782161L157.821331 79.49868 162.983714 75.9669581 160.735844 73.4828281C160.400135 73.1118346 159.841903 73.0460515 159.42915 73.3288449zM64.3501613 108.72994L63.7197535 106.943645C63.3753036 105.967627 63.8324162 104.890052 64.7735825 104.459398L66.461699 103.68696 68.5257415 109.560077 66.71458 110.006281C65.7154553 110.252429 64.6926091 109.700284 64.3501613 108.72994z"
      />
      <Svg.Path
        fill="#FFF"
        d="M159.132459 84.0233402L160.270521 83.4942262 167.624042 94.2715286C167.756951 94.4663197 167.706785 94.7319731 167.511994 94.8648821 167.501993 94.8717063 167.491706 94.8781019 167.48116 94.8840517L167.48116 94.8840517C167.250798 95.0140288 166.959512 94.9495828 166.805479 94.7345594L159.132459 84.0233402zM110.282207 98.3855862L122.735443 95.4227379C122.981554 95.3641837 123.229079 95.5140934 123.291205 95.759327L123.291205 95.759327C123.351904 95.9989291 123.206875 96.2423714 122.967273 96.3030707 122.964524 96.3037672 122.961768 96.3044374 122.959006 96.3050815L110.528552 99.2038515C110.295114 99.258289 110.059549 99.1219821 109.990417 98.8924662L109.990417 98.8924662C109.926403 98.6799419 110.046795 98.4557637 110.259319 98.3917501 110.266886 98.3894709 110.274519 98.3874154 110.282207 98.3855862z"
      />
      <Svg.Path
        fill="#B2C785"
        d="M0,0.333843318 L0,2.36741161 L14.6143005,2.70125493 C15.137812,2.70125493 15.5661203,1.85123051 15.5661203,1.35065985 C15.5661203,0.850024421 15.137812,-1.36424205e-12 14.6143005,-1.36424205e-12 L0,0.333843318 Z"
        transform="scale(-1 1) rotate(-11 508.615 324.488)"
      />
      <Svg.Path
        fill="#DDE5C2"
        d="M16.1878144,0.443874391 C15.9203555,0.443874391 15.7014778,0.641338321 15.7014778,0.882618592 L15.7014778,1.81863634 C15.7014778,2.05998114 15.9203555,2.25744507 16.1878144,2.25744507 L21.1157805,2.36359806 L21.1157805,0.337656866 L16.1878144,0.443874391 Z"
        transform="scale(-1 1) rotate(-11 519.24 434.838)"
      />
      <Svg.Path
        stroke="#FF5A5F"
        strokeLinecap="round"
        d="M1.00240231,2.36736987 C1.00240231,2.36736987 -0.384231797,1.45043117 0.905409866,0.347657656"
        transform="rotate(11 -500.832 243.658)"
      />
      <Svg.Path
        fill="#A25C18"
        d="M55.7244361,107.135153 C55.7244361,108.813392 57.088079,110.174065 58.7699814,110.174065 C60.4522645,110.174065 61.8155267,108.813392 61.8155267,107.135153 C61.8155267,105.456914 60.4522645,104.096241 58.7699814,104.096241 C57.088079,104.096241 55.7244361,105.456914 55.7244361,107.135153"
      />
      <Svg.G fill="#FFACAF">
        <Svg.Path
          d="M13.4408089,9.84165157 L14.1734316,9.84165157 C14.9874363,9.84165157 15.7144976,10.0249926 16.3497957,10.3388414 C16.6445502,9.83034337 16.8184369,9.23953655 16.8184369,8.60479461 C16.8184369,6.71947756 15.3296482,5.19175901 13.4936423,5.19175901 C13.1898041,5.19175901 12.8985717,5.23736254 12.6192037,5.31744681 C13.3521972,6.04617653 13.7772741,7.05001053 13.7772741,8.17916158 C13.7778302,8.72065726 13.6599284,9.2925553 13.4408089,9.84165157 Z"
          opacity="0.501"
          transform="translate(20.718 80.065)"
        />
        <Svg.Path
          d="M3.97714767,6.49275753 C3.97714767,8.47317464 5.54157152,10.0800506 7.47137982,10.0800506 C7.73443438,10.0800506 7.99025911,10.0470529 8.23662945,9.9914388 C7.6404466,11.3973625 8.36973246,13.4230124 10.1679208,13.4230124 L11.4911649,13.4230124 L13.3479334,13.4230124 C15.0454603,13.4230124 15.9265726,14.3493575 15.9265726,15.781976 L15.9265726,20.3918264 L17.6702561,18.6168074 L18.538024,15.2106341 C18.5383948,12.8665009 16.9076048,10.5283 14.1734316,10.5283 L12.2934906,10.5283 C12.8275711,9.7719486 13.090811,8.89880767 13.090811,8.17916158 C13.090811,6.6507015 12.1368443,5.3541521 10.6172825,4.9376027 C10.0527997,3.73541184 8.85802402,2.90398146 7.47119444,2.90398146 C5.54157152,2.90398146 3.97714767,4.50993048 3.97714767,6.49275753 Z"
          transform="translate(20.718 80.065)"
        />
        <Svg.Path
          d="M0.783787655,6.7595197 C0.349441753,7.27969665 0.0858310512,7.95355382 0.0858310512,8.69340636 C0.0858310512,10.3360607 1.38275121,11.6683885 2.98313882,11.6683885 C3.16888983,11.6683885 3.35037708,11.6476259 3.52704445,11.6137013 C3.50275964,11.7816558 3.48792922,11.9494249 3.48792922,12.117194 C3.48867074,12.8637202 3.71724458,13.6133979 4.19274489,14.2095808 C4.65860544,14.8003876 5.40624394,15.2132294 6.28605856,15.2132294 L6.30607963,15.2132294 C6.31219718,15.2132294 9.48664841,15.2132294 9.48664841,15.2147124 C10.2205688,15.2156394 10.6764188,15.410474 10.9492985,15.6698209 C11.2208806,15.9317632 11.3791953,16.2988161 11.3838298,16.8727533 L14.416395,21.7404587 L15.2406657,20.8773396 L15.2406657,15.781976 C15.2406657,14.6722899 14.6040699,14.1096608 13.3481188,14.1096608 L10.1679208,14.1096608 C9.2193301,14.1096608 8.40884769,13.6747588 7.88700232,12.8861513 C7.48120497,12.2729134 7.2989762,11.5085907 7.35514641,10.7644744 C5.10259111,10.7012597 3.29049926,8.80963977 3.29049926,6.49312829 C3.29049926,4.13527702 5.16580577,2.21770381 7.47119444,2.21770381 C7.56277228,2.21770381 7.65397936,2.22104066 7.74537181,2.22734359 C7.05038129,0.901874868 5.68839267,0 4.1195197,0 C1.84453339,0 0,1.89440067 0,4.22963556 C0,5.15764904 0.295125342,6.01392037 0.789163682,6.71095007 C0.784529176,6.72244365 0.783046134,6.73857173 0.783787655,6.7595197 Z"
          opacity="0.501"
          transform="translate(20.718 80.065)"
        />
      </Svg.G>
      <Svg.Path
        fill="#FFACAF"
        d="M200.494739,40.7326733 C200.494739,44.4510049 197.473916,47.4653465 193.74715,47.4653465 C190.020823,47.4653465 187,44.4510049 187,40.7326733 C187,37.0143416 190.020823,34 193.74715,34 C197.473916,34 200.494739,37.0143416 200.494739,40.7326733"
        opacity="0.665"
      />
      <Svg.Path
        fill="#FFACAF"
        d="M183.239134,47.6138614 C183.239134,49.057449 182.066344,50.2277228 180.619482,50.2277228 C179.17279,50.2277228 178,49.057449 178,47.6138614 C178,46.1702738 179.17279,45 180.619482,45 C182.066344,45 183.239134,46.1702738 183.239134,47.6138614"
        opacity="0.221"
      />
      <Svg.Path
        fill="#FFACAF"
        d="M263.121161,22.2599173 C263.121161,14.0939454 256.548577,7.4741017 248.440577,7.4741017 C245.206563,7.4741017 242.218462,8.52978617 239.792544,10.3144113 C236.162461,4.14137997 229.4863,-7.10542736e-15 221.846677,-7.10542736e-15 C210.333336,-7.10542736e-15 201,9.40044701 201,20.9965734 C201,32.202313 209.715782,41.3557338 220.691694,41.959685 C222.493219,50.8313056 230.286579,57.5049505 239.627081,57.5049505 C250.301708,57.5049505 258.954953,48.7894846 258.954953,38.0384307 C258.954953,36.3577994 258.743564,34.7273607 258.345868,33.1717187 C261.280225,30.4682086 263.121161,26.581072 263.121161,22.2599173"
      />
      <Svg.Path
        fill="#ECC39A"
        d="M141.751035,69.6004452 C141.645292,69.6004452 141.539059,69.5965438 141.432337,69.5887411 C140.127191,69.4941329 139.061927,68.8286242 138.842118,67.9709731 L139.807025,67.8617347 C139.95438,68.4345859 140.666188,68.8790169 141.538569,68.9424142 C142.405076,69.0064616 143.250532,68.674195 143.58098,68.135806 L144.48763,68.380942 C144.033815,69.1209018 142.937709,69.6004452 141.751035,69.6004452"
        transform="rotate(23 141.665 68.731)"
      />
    </Svg.G>
  </Svg>
);

class StrainTypes extends Component {
  render() {
    return (
      <View
        style={[
          this.props.style,
          {
            flex: 1,
            borderColor: "#33000000",
            backgroundColor: "#f3f6f3",
            paddingBottom: 10
          }
        ]}
      >
        <Text
          style={{
            flex: 1,
            fontFamily: "cc-std-book",
            fontSize: 16,
            paddingLeft: 20,
            paddingTop: 50,
            color: "#212121",
            alignItems: "flex-start",
            height: 135,
            backgroundColor: "#f3f6f3"
          }}
        >
          {this.props.titletext}
        </Text>
        <View style={{ position: "absolute", top: 0, right: 0 }}>{stimg}</View>
        <LinearGradient colors={["#fff", "#f3f6f3"]}>
          <ScrollView
            style={{ marginTop: -41 }}
            horizontal={"true"}
            showsHorizontalScrollIndicator={false}
          >
            <StrainType
              style={{ marginLeft: 25, marginRight: 30 }}
              title="Hybrid"
            />
            <StrainType style={{ marginRight: 30 }} title="Sativa" />
            <StrainType style={{ marginRight: 30 }} title="Indica" />
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}
export default StrainTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
