/*
 *  Copyright 2023 Alexey Andreev.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.teavm.classlib.impl.text;

public final class DoubleSynthesizer {
    private DoubleSynthesizer() {
    }

    public static double synthesizeDouble(long mantissa, int exp, boolean negative) {
        var indexInTable = DoubleAnalyzer.MAX_ABS_DEC_EXP + exp;
        if (mantissa == 0 || indexInTable > mantissa10Table.length || indexInTable < 0) {
            return Double.longBitsToDouble(negative ? (1L << 63) : 0);
        }

        var binMantissa = DoubleAnalyzer.mulAndShiftRight(mantissa, mantissa10Table[indexInTable], 0);
        int binExp = exp10Table[indexInTable];

        var binMantissaShift = (64 - Long.numberOfLeadingZeros(binMantissa)) - 58;
        if (binMantissaShift >= 0) {
            binMantissa >>>= binMantissaShift;
        } else {
            binMantissa <<= -binMantissaShift;
        }
        binExp += binMantissaShift;

        if (binExp >= 2047) {
            return negative ? Double.NEGATIVE_INFINITY : Double.POSITIVE_INFINITY;
        }

        var mantissaLowerBits = 5;
        var mantissaLowerPos = 1 << mantissaLowerBits;
        var error = (int) (binMantissa & (mantissaLowerPos - 1));
        var correction = mantissaLowerPos >> 1;
        if (Math.abs(error - (mantissaLowerPos >>> 1)) <= 1) {
            var binMantissaWithoutError = binMantissa & -mantissaLowerPos;
            var low = calcDecMantissa(binMantissaWithoutError, mantissaLowerPos, indexInTable, binExp);
            var hi = calcDecMantissa(binMantissaWithoutError + mantissaLowerPos, mantissaLowerPos,
                    indexInTable, binExp);
            low = mantissa - low;
            hi = hi - mantissa;
            var cmp = Long.compareUnsigned(low, hi);
            if (cmp < 0) {
                correction = -error;
            } else if (cmp > 0) {
                correction = mantissaLowerPos - error;
            }
        }

        binMantissa += correction;
        if ((binMantissa & (-1L << 58L)) != 0) {
            binMantissa >>>= 1;
            binExp++;
        }
        if (binExp <= 0) {
            binMantissa >>= Math.min(-binExp + 1, 64);
            binExp = 0;
        }

        binMantissa = (binMantissa >>> mantissaLowerBits) & (-1L << 12 >>> 12);
        var iee754 = binMantissa | ((long) binExp << 52);
        if (negative) {
            iee754 ^= 1L << 63;
        }
        return Double.longBitsToDouble(iee754);
    }

    private static long calcDecMantissa(long mantissa, int lowerBit, int indexInTable, int binExp) {
        var half = lowerBit >>> 1;
        var shift = 7 - (DoubleAnalyzer.exp10Table[indexInTable] - binExp);
        var decMantissa = DoubleAnalyzer.mulAndShiftRight(mantissa,
                DoubleAnalyzer.mantissa10Table[indexInTable], shift);
        var decMantissaHi = DoubleAnalyzer.mulAndShiftRight(mantissa + half,
                DoubleAnalyzer.mantissa10Table[indexInTable], shift);
        var decMantissaLow = DoubleAnalyzer.mulAndShiftRight(mantissa - half,
                DoubleAnalyzer.mantissa10Table[indexInTable], shift);

        var lowerPos = DoubleAnalyzer.findLowerDistance(decMantissa, decMantissaLow);
        var upperPos = DoubleAnalyzer.findUpperDistance(decMantissa, decMantissaHi);
        var posCmp = Long.compareUnsigned(lowerPos, upperPos);
        if (posCmp > 0) {
            decMantissa = Long.divideUnsigned(decMantissa, lowerPos) * lowerPos;
        } else if (posCmp < 0) {
            decMantissa = Long.divideUnsigned(decMantissa, upperPos) * upperPos + upperPos;
        } else {
            decMantissa = Long.divideUnsigned(decMantissa + (upperPos / 2), upperPos) * upperPos;
        }
        return decMantissa;
    }

    // Numbers in the table below are generated by DoubleSynthesizerGenerator

    private static final long[] mantissa10Table = {
            -391859759250406776L,
            -7162441377172586091L,
            -4341365703038344710L,
            -815021110370542983L,
            -7426917221622671220L,
            -4671960508600951122L,
            -1228264617323800998L,
            -7685194413468457480L,
            -4994806998408183946L,
            -1631822729582842028L,
            -7937418233630358124L,
            -5310086773610559750L,
            -2025922448585811784L,
            -8183730558007214221L,
            -5617977179081629872L,
            -2410785455424649436L,
            -8424269937281487754L,
            -5918651403174471788L,
            -2786628235540701831L,
            -8659171674854020500L,
            -6212278575140137722L,
            -3153662200497784248L,
            -8888567902952197011L,
            -6499023860262858360L,
            -3512093806901185046L,
            -9112587656954322510L,
            -6779048552765515233L,
            -3862124672529506137L,
            -215969822234494767L,
            -7052510166537641086L,
            -4203951689744663453L,
            -643253593753441412L,
            -7319562523736982739L,
            -4537767136243840519L,
            -1060522901877412745L,
            -7580355841314464822L,
            -4863758783215693123L,
            -1468012460592228500L,
            -7835036815511224669L,
            -5182110000961642932L,
            -1865951482774665761L,
            -8083748704375247956L,
            -5492999862041672041L,
            -2254563809124702148L,
            -8326631408344020698L,
            -5796603242002637969L,
            -2634068034075909557L,
            -8563821548938525329L,
            -6093090917745768758L,
            -3004677628754823043L,
            -8795452545612846258L,
            -6382629663588669918L,
            -3366601061058449494L,
            -9021654690802612790L,
            -6665382345075878083L,
            -3720041912917459700L,
            -38366372719436721L,
            -6941508010590729807L,
            -4065198994811024354L,
            -469812725086392539L,
            -7211161980820077193L,
            -4402266457597708587L,
            -891147053569747830L,
            -7474495936122174249L,
            -4731433901725329908L,
            -1302606358729274481L,
            -7731658001846878407L,
            -5052886483881210104L,
            -1704422086424124726L,
            -7982792831656159810L,
            -5366805021142811858L,
            -2096820258001126919L,
            -8228041688891786180L,
            -5673366092687344821L,
            -2480021597431793123L,
            -8467542526035952558L,
            -5972742139117552793L,
            -2854241655469553087L,
            -8701430062309552536L,
            -6265101559459552766L,
            -3219690930897053053L,
            -8929835859451740014L,
            -6550608805887287114L,
            -3576574988931720988L,
            -9152888395723407474L,
            -6829424476226871438L,
            -3925094576856201393L,
            -294682202642863838L,
            -7101705404292871755L,
            -4265445736938701789L,
            -720121152745989333L,
            -7367604748107325189L,
            -4597819916706768582L,
            -1135588877456072824L,
            -7627272076051127371L,
            -4922404076636521309L,
            -1541319077368263733L,
            -7880853450996246689L,
            -5239380795317920457L,
            -1937539975720012667L,
            -8128491512466089773L,
            -5548928372155224312L,
            -2324474446766642487L,
            -8370325556870233410L,
            -5851220927660403859L,
            -2702340141148116919L,
            -8606491615858654931L,
            -6146428501395930759L,
            -3071349608317525545L,
            -8837122532839535322L,
            -6434717147622031248L,
            -3431710416100151156L,
            -9062348037703676329L,
            -6716249028702207507L,
            -3783625267450371479L,
            -117845565885576445L,
            -6991182506319567134L,
            -4127292114472071014L,
            -547429124662700863L,
            -7259672230555269896L,
            -4462904269766699465L,
            -966944318780986428L,
            -7521869226879198373L,
            -4790650515171610063L,
            -1376627125537124674L,
            -7777920981101784777L,
            -5110715207949843068L,
            -1776707991509915931L,
            -8027971522334779313L,
            -5423278384491086237L,
            -2167411962186469892L,
            -8272161504007625539L,
            -5728515861582144019L,
            -2548958808550292120L,
            -8510628282985014431L,
            -6026599335303880135L,
            -2921563150702462265L,
            -8743505996830120771L,
            -6317696477610263060L,
            -3285434578585440921L,
            -8970925639256982432L,
            -6601971030643840136L,
            -3640777769877412266L,
            -9193015133814464522L,
            -6879582898840692748L,
            -3987792605123478032L,
            -373054737976959636L,
            -7150688238876681628L,
            -4326674280168464131L,
            -796656831783192260L,
            -7415439547505577019L,
            -4657613415954583369L,
            -1210330751515841307L,
            -7673985747338482673L,
            -4980796165745715437L,
            -1614309188754756393L,
            -7926472270612804602L,
            -5296404319838617848L,
            -2008819381370884406L,
            -8173041140997884610L,
            -5604615407819967858L,
            -2394083241347571919L,
            -8413831053483314305L,
            -5905602798426754977L,
            -2770317479606055818L,
            -8648977452394866742L,
            -6199535797066195524L,
            -3137733727905356501L,
            -8878612607581929669L,
            -6486579741050024182L,
            -3496538657885142324L,
            -9102865688819295808L,
            -6766896092596731856L,
            -3846934097318526916L,
            -196981603220770741L,
            -7040642529654063569L,
            -4189117143640191558L,
            -624710411122851543L,
            -7307973034592864070L,
            -4523280274813692184L,
            -1042414325089727326L,
            -7569037980822161435L,
            -4849611457600313890L,
            -1450328303573004458L,
            -7823984217374209642L,
            -5168294253290374149L,
            -1848681798185579782L,
            -8072955151507069220L,
            -5479507920956448621L,
            -2237698882768172872L,
            -8316090829371189901L,
            -5783427518286599472L,
            -2617598379430861436L,
            -8553528014785370254L,
            -6080224000054324913L,
            -2988593981640518237L,
            -8785400266166405754L,
            -6370064314280619289L,
            -3350894374423386207L,
            -9011838011655698235L,
            -6653111496142234890L,
            -3704703351750405709L,
            -19193171260619232L,
            -6929524759678968876L,
            -4050219931171323191L,
            -451088895536766085L,
            -7199459587351560659L,
            -4387638465762062920L,
            -872862063775190746L,
            -7463067817500576072L,
            -4717148753448332186L,
            -1284749923383027329L,
            -7720497729755473936L,
            -5038936143766954516L,
            -1686984161281305242L,
            -7971894128441897632L,
            -5353181642124984136L,
            -2079791034228842266L,
            -8217398424034108272L,
            -5660062011615247436L,
            -2463391496091671391L,
            -8457148712698376476L,
            -5959749872445582690L,
            -2838001322129590459L,
            -8691279853972075893L,
            -6252413799037706962L,
            -3203831230369745799L,
            -8919923546622172980L,
            -6538218414850328321L,
            -3561087000135522498L,
            -9143208402725783417L,
            -6817324484979841367L,
            -3909969587797413805L,
            -275775966319379352L,
            -7089889006590693951L,
            -4250675239810979535L,
            -701658031336336515L,
            -7356065297226292178L,
            -4583395603105477318L,
            -1117558485454458744L,
            -7616003081050118571L,
            -4908317832885260309L,
            -1523711272679187483L,
            -7869848573065574033L,
            -5225624697904579637L,
            -1920344853953336642L,
            -8117744561361917257L,
            -5535494683275008668L,
            -2307682335666372931L,
            -8359830487432564938L,
            -5838102090863318268L,
            -2685941595151759931L,
            -8596242524610931813L,
            -6133617137336276862L,
            -3055335403242958174L,
            -8827113654667930715L,
            -6422206049907525489L,
            -3416071543957018958L,
            -9052573742614218704L,
            -6704031159840385477L,
            -3768352931373093942L,
            -98755145788979523L,
            -6979250993759194058L,
            -4112377723771604668L,
            -528786136287117932L,
            -7248020362820530563L,
            -4448339435098275300L,
            -948738275445456221L,
            -7510490449794491994L,
            -4776427043815727089L,
            -1358847786342270957L,
            -7766808894105001204L,
            -5096825099203863601L,
            -1759345355577441597L,
            -8017119874876982854L,
            -5409713825168840664L,
            -2150456263033662926L,
            -8261564192037121185L,
            -5715269221619013577L,
            -2532400508596379067L,
            -8500279345513818773L,
            -6013663163464885562L,
            -2905392935903719049L,
            -8733399612580906261L,
            -6305063497298744923L,
            -3269643353196043249L,
            -8961056123388608887L,
            -6589634135808373205L,
            -3625356651333078602L,
            -9183376934724255982L,
            -6867535149977932074L,
            -3972732919045027188L,
            -354230130378896081L,
            -7138922859127891907L,
            -4311967555482476979L,
            -778273425925708320L,
            -7403949918844649556L,
            -4643251380128424041L,
            -1192378206733142147L,
            -7662765406849295698L,
            -4966770740134231719L,
            -1596777406740401744L,
            -7915514906853832946L,
            -5282707615139903279L,
            -1991698500497491194L,
            -8162340590452013853L,
            -5591239719637629412L,
            -2377363631119648861L,
            -8403381297090862394L,
            -5892540602936190088L,
            -2753989735242849706L,
            -8638772612167862923L,
            -6186779746782440749L,
            -3121788665050663032L,
            -8868646943297746251L,
            -6474122660694794910L,
            -3480967307441105734L,
            -9093133594791772939L,
            -6754730975062328270L,
            -3831727700400522434L,
            -177973607073265138L,
            -7028762532061872568L,
            -4174267146649952805L,
            -606147914885053103L,
            -7296371474444240045L,
            -4508778324627912153L,
            -1024286887357502287L,
            -7557708332239520785L,
            -4835449396872013077L,
            -1432625727662628443L,
            -7812920107430224633L,
            -5154464115860392887L,
            -1831394126398103205L,
            -8062150356639896359L,
            -5466001927372482545L,
            -2220816390788215277L,
            -8305539271883716404L,
            -5770238071427257601L,
            -2601111570856684097L,
            -8543223759426509417L,
            -6067343680855748867L,
            -2972493582642298180L,
            -8775337516792518218L,
            -6357485877563259869L,
            -3335171328526686932L,
            -9002011107970261189L,
            -6640827866535438582L,
            -3689348814741910323L,
            -9223372036854775808L,
            -6917529027641081856L,
            -4035225266123964416L,
            -432345564227567616L,
            -7187745005283311616L,
            -4372995238176751616L,
            -854558029293551616L,
            -7451627795949551616L,
            -4702848726509551616L,
            -1266874889709551616L,
            -7709325833709551616L,
            -5024971273709551616L,
            -1669528073709551616L,
            -7960984073709551616L,
            -5339544073709551616L,
            -2062744073709551616L,
            -8206744073709551616L,
            -5646744073709551616L,
            -2446744073709551616L,
            -8446744073709551616L,
            -5946744073709551616L,
            -2821744073709551616L,
            -8681119073709551616L,
            -6239712823709551616L,
            -3187955011209551616L,
            -8910000909647051616L,
            -6525815118631426616L,
            -3545582879861895366L,
            -9133518327554766460L,
            -6805211891016070171L,
            -3894828845342699809L,
            -256850038250986858L,
            -7078060301547948642L,
            -4235889358507547899L,
            -683175679707046969L,
            -7344513827457986212L,
            -4568956265895094861L,
            -1099509313941480672L,
            -7604722348854507276L,
            -4894216917640746191L,
            -1506085128623544835L,
            -7858832233030797378L,
            -5211854272861108818L,
            -1903131822648998119L,
            -8106986416796705680L,
            -5522047002568494196L,
            -2290872734783229841L,
            -8349324486880600507L,
            -5824969590173362729L,
            -2669525969289315508L,
            -8585982758446904048L,
            -6120792429631242156L,
            -3039304518611664792L,
            -8817094351773372351L,
            -6409681921289327534L,
            -3400416383184271514L,
            -9042789267131251552L,
            -6691800565486676536L,
            -3753064688430957766L,
            -79644842111309304L,
            -6967307053960650171L,
            -4097447799023424810L,
            -510123730351893108L,
            -7236356359111015049L,
            -4433759430461380907L,
            -930513269649338229L,
            -7499099821171918249L,
            -4762188758037509908L,
            -1341049929119499481L,
            -7755685233340769031L,
            -5082920523248573385L,
            -1741964635633328828L,
            -8006256924911912373L,
            -5396135137712502563L,
            -2133482903713240299L,
            -8250955842461857043L,
            -5702008784649933400L,
            -2515824962385028846L,
            -8489919629131724885L,
            -6000713517987268202L,
            -2889205879056697348L,
            -8723282702051517699L,
            -6292417359137009219L,
            -3253835680493873620L,
            -8951176327949752869L,
            -6577284391509803182L,
            -3609919470959866073L,
            -9173728696990998152L,
            -6855474852811359786L,
            -3957657547586811828L,
            -335385916056126881L,
            -7127145225176161157L,
            -4297245513042813542L,
            -759870872876129023L,
            -7392448323188662496L,
            -4628874385558440215L,
            -1174406963520662365L,
            -7651533379841495834L,
            -4952730706374481889L,
            -1579227364540714457L,
            -7904546130479028392L,
            -5268996644671397586L,
            -1974559787411859078L,
            -8151628894773493780L,
            -5577850100039479321L,
            -2360626606621961247L,
            -8392920656779807635L,
            -5879464802547371640L,
            -2737644984756826646L,
            -8628557143114098510L,
            -6174010410465235233L,
            -3105826994654156138L,
            -8858670899299929442L,
            -6461652605697523898L,
            -3465379738694516969L,
            -9083391364325154962L,
            -6742553186979055798L,
            -3816505465296431844L,
            -158945813193151901L,
            -7016870160886801794L,
            -4159401682681114338L,
            -587566084924005019L,
            -7284757830718584993L,
            -4494261269970843337L,
            -1006140569036166267L,
            -7546366883288685773L,
            -4821272585683469312L,
            -1414904713676948736L,
            -7801844473689174816L,
            -5140619573684080616L,
            -1814088448677712866L,
            -8051334308064652397L,
            -5452481866653427593L,
            -2203916314889396587L,
            -8294976724446954723L,
            -5757034887131305500L,
            -2584607590486743971L,
            -8532908771695296838L,
            -6054449946191733143L,
            -2956376414312278525L,
            -8765264286586255934L,
            -6344894339805432013L,
            -3319431906329402113L,
            -8992173969096958177L,
            -6628531442943809817L,
            -3673978285252374367L,
            -9213765455923815835L,
            -6905520801477381890L,
            -4020214983419339459L,
            -413582710846786419L,
            -7176018221920323368L,
            -4358336758973016306L,
            -836234930288882479L,
            -7440175859071633405L,
            -4688533805412153852L,
            -1248981238337804411L,
            -7698142301602209613L,
            -5010991858575374112L,
            -1652053804791829737L,
            -7950062655635975441L,
            -5325892301117581398L,
            -2045679357969588843L,
            -8196078626372074883L,
            -5633412264537705700L,
            -2430079312244744221L,
            -8436328597794046994L,
            -5933724728815170838L,
            -2805469892591575644L,
            -8670947710510816633L,
            -6226998619711132888L,
            -3172062256211528206L,
            -8900067937773286985L,
            -6513398903789220827L,
            -3530062611309138129L,
            -9123818159709293187L,
            -6793086681209228580L,
            -3879672333084147821L,
            -237904397927796872L,
            -7066219276345954901L,
            -4221088077005055722L,
            -664674077828931748L,
            -7332950326284164199L,
            -4554501889427817344L,
            -1081441343357383777L,
            -7593429867239446716L,
            -4880101315621920491L,
            -1488440626100012710L,
            -7847804418953589800L,
            -5198069505264599346L,
            -1885900863153361278L,
            -8096217067111932655L,
            -5508585315462527915L,
            -2274045625900771989L,
            -8338807543829064349L,
            -5811823411358942533L,
            -2653093245771290262L,
            -8575712306248138270L,
            -6107954364382784933L,
            -3023256937051093262L,
            -8807064613298015145L,
            -6397144748195131027L,
            -3384744916816525880L,
            -9032994600651410531L,
            -6679557232386875260L,
            -3737760522056206171L,
            -60514634142869810L,
            -6955350673980375487L,
            -4082502324048081455L,
            -491441886632713914L,
            -7224680206786528052L,
            -4419164240055772162L,
            -912269281642327298L,
            -7487697328667536417L,
            -4747935642407032618L,
            -1323233534581402868L,
            -7744549986754458648L,
            -5069001465015685407L,
            -1724565812842218854L,
            -7995382660667468640L,
            -5382542307406947896L,
            -2116491865831296966L,
            -8240336443785642460L,
            -5688734536304665171L,
            -2499232151953443559L,
            -8479549122611984080L,
            -5987750384837592197L,
            -2873001962619602342L,
            -8713155254278333320L,
            -6279758049420528746L,
            -3238011543348273028L,
            -8941286242233752498L,
            -6564921784364802719L,
            -3594466212028615495L,
            -9164070410158966540L,
            -6843401994271320271L,
            -3942566474411762435L,
            -316522074587315140L,
            -7115355324258153818L,
            -4282508136895304369L,
            -741449152691742557L,
            -7380934748073420954L,
            -4614482416664388289L,
            -1156417002403097457L,
            -7640289654143017767L,
            -4938676049251384304L,
            -1561659043136842476L,
            -7893565929601608404L,
            -5255271393574622601L,
            -1957403223540890347L,
            -8140906042354138323L,
            -5564446534515285000L,
            -2343872149716718345L,
            -8382449121214030822L,
            -5866375383090150623L,
            -2721283210435300375L,
            -8618331034163144591L,
            -6161227774276542834L,
            -3089848699418290639L,
            -8848684464777513505L,
            -6449169562544503977L,
            -3449775934753242068L,
            -9073638986861858148L,
            -6730362715149934781L,
            -3801267375510030573L,
            -139898200960150312L,
            -7004965403241175801L,
            -4144520735624081847L,
            -568964901102714405L,
            -7273132090830278359L,
            -4479729095110460045L,
            -987975350460687152L,
            -7535013621679011326L,
            -4807081008671376254L,
            -1397165242411832413L,
            -7790757304148477114L,
            -5126760611758208489L,
            -1796764746270372707L,
            -8040506994060064798L,
            -5438947724147693093L,
            -2186998636757228463L,
            -8284403175614349645L,
            -5743817951090549152L,
            -2568086420435798537L,
            -8522583040413455941L,
            -6041542782089432023L,
            -2940242459184402124L,
            -8755180564631333184L,
            -6332289687361778576L,
            -3303676090774835316L,
            -8982326584375353928L,
            -6616222212041804506L,
            -3658591746624867729L,
            -9204148869281624187L,
            -6893500068174642329L,
            -4005189066790915007L,
            -394800315061255855L,
            -7164279224554366766L,
            -4343663012265570553L,
            -817892746904575287L,
            -7428711994456441410L,
            -4674203974643163859L,
            -1231068949876566920L,
            -7686947121313936181L,
            -4996997883215032322L,
            -1634561335591402499L,
            -7939129862385708418L,
            -5312226309554747618L,
            -2028596868516046619L,
            -8185402070463610993L,
            -5620066569652125837L,
            -2413397193637769392L,
            -8425902273664687726L,
    };

    private static short[] exp10Table = {
            -76,
            -72,
            -69,
            -66,
            -62,
            -59,
            -56,
            -52,
            -49,
            -46,
            -42,
            -39,
            -36,
            -32,
            -29,
            -26,
            -22,
            -19,
            -16,
            -12,
            -9,
            -6,
            -2,
            1,
            4,
            8,
            11,
            14,
            17,
            21,
            24,
            27,
            31,
            34,
            37,
            41,
            44,
            47,
            51,
            54,
            57,
            61,
            64,
            67,
            71,
            74,
            77,
            81,
            84,
            87,
            91,
            94,
            97,
            101,
            104,
            107,
            110,
            114,
            117,
            120,
            124,
            127,
            130,
            134,
            137,
            140,
            144,
            147,
            150,
            154,
            157,
            160,
            164,
            167,
            170,
            174,
            177,
            180,
            184,
            187,
            190,
            194,
            197,
            200,
            204,
            207,
            210,
            213,
            217,
            220,
            223,
            227,
            230,
            233,
            237,
            240,
            243,
            247,
            250,
            253,
            257,
            260,
            263,
            267,
            270,
            273,
            277,
            280,
            283,
            287,
            290,
            293,
            297,
            300,
            303,
            306,
            310,
            313,
            316,
            320,
            323,
            326,
            330,
            333,
            336,
            340,
            343,
            346,
            350,
            353,
            356,
            360,
            363,
            366,
            370,
            373,
            376,
            380,
            383,
            386,
            390,
            393,
            396,
            400,
            403,
            406,
            409,
            413,
            416,
            419,
            423,
            426,
            429,
            433,
            436,
            439,
            443,
            446,
            449,
            453,
            456,
            459,
            463,
            466,
            469,
            473,
            476,
            479,
            483,
            486,
            489,
            493,
            496,
            499,
            502,
            506,
            509,
            512,
            516,
            519,
            522,
            526,
            529,
            532,
            536,
            539,
            542,
            546,
            549,
            552,
            556,
            559,
            562,
            566,
            569,
            572,
            576,
            579,
            582,
            586,
            589,
            592,
            595,
            599,
            602,
            605,
            609,
            612,
            615,
            619,
            622,
            625,
            629,
            632,
            635,
            639,
            642,
            645,
            649,
            652,
            655,
            659,
            662,
            665,
            669,
            672,
            675,
            679,
            682,
            685,
            689,
            692,
            695,
            698,
            702,
            705,
            708,
            712,
            715,
            718,
            722,
            725,
            728,
            732,
            735,
            738,
            742,
            745,
            748,
            752,
            755,
            758,
            762,
            765,
            768,
            772,
            775,
            778,
            782,
            785,
            788,
            791,
            795,
            798,
            801,
            805,
            808,
            811,
            815,
            818,
            821,
            825,
            828,
            831,
            835,
            838,
            841,
            845,
            848,
            851,
            855,
            858,
            861,
            865,
            868,
            871,
            875,
            878,
            881,
            885,
            888,
            891,
            894,
            898,
            901,
            904,
            908,
            911,
            914,
            918,
            921,
            924,
            928,
            931,
            934,
            938,
            941,
            944,
            948,
            951,
            954,
            958,
            961,
            964,
            968,
            971,
            974,
            978,
            981,
            984,
            987,
            991,
            994,
            997,
            1001,
            1004,
            1007,
            1011,
            1014,
            1017,
            1021,
            1024,
            1027,
            1031,
            1034,
            1037,
            1041,
            1044,
            1047,
            1051,
            1054,
            1057,
            1061,
            1064,
            1067,
            1071,
            1074,
            1077,
            1081,
            1084,
            1087,
            1090,
            1094,
            1097,
            1100,
            1104,
            1107,
            1110,
            1114,
            1117,
            1120,
            1124,
            1127,
            1130,
            1134,
            1137,
            1140,
            1144,
            1147,
            1150,
            1154,
            1157,
            1160,
            1164,
            1167,
            1170,
            1174,
            1177,
            1180,
            1183,
            1187,
            1190,
            1193,
            1197,
            1200,
            1203,
            1207,
            1210,
            1213,
            1217,
            1220,
            1223,
            1227,
            1230,
            1233,
            1237,
            1240,
            1243,
            1247,
            1250,
            1253,
            1257,
            1260,
            1263,
            1267,
            1270,
            1273,
            1276,
            1280,
            1283,
            1286,
            1290,
            1293,
            1296,
            1300,
            1303,
            1306,
            1310,
            1313,
            1316,
            1320,
            1323,
            1326,
            1330,
            1333,
            1336,
            1340,
            1343,
            1346,
            1350,
            1353,
            1356,
            1360,
            1363,
            1366,
            1370,
            1373,
            1376,
            1379,
            1383,
            1386,
            1389,
            1393,
            1396,
            1399,
            1403,
            1406,
            1409,
            1413,
            1416,
            1419,
            1423,
            1426,
            1429,
            1433,
            1436,
            1439,
            1443,
            1446,
            1449,
            1453,
            1456,
            1459,
            1463,
            1466,
            1469,
            1472,
            1476,
            1479,
            1482,
            1486,
            1489,
            1492,
            1496,
            1499,
            1502,
            1506,
            1509,
            1512,
            1516,
            1519,
            1522,
            1526,
            1529,
            1532,
            1536,
            1539,
            1542,
            1546,
            1549,
            1552,
            1556,
            1559,
            1562,
            1566,
            1569,
            1572,
            1575,
            1579,
            1582,
            1585,
            1589,
            1592,
            1595,
            1599,
            1602,
            1605,
            1609,
            1612,
            1615,
            1619,
            1622,
            1625,
            1629,
            1632,
            1635,
            1639,
            1642,
            1645,
            1649,
            1652,
            1655,
            1659,
            1662,
            1665,
            1668,
            1672,
            1675,
            1678,
            1682,
            1685,
            1688,
            1692,
            1695,
            1698,
            1702,
            1705,
            1708,
            1712,
            1715,
            1718,
            1722,
            1725,
            1728,
            1732,
            1735,
            1738,
            1742,
            1745,
            1748,
            1752,
            1755,
            1758,
            1761,
            1765,
            1768,
            1771,
            1775,
            1778,
            1781,
            1785,
            1788,
            1791,
            1795,
            1798,
            1801,
            1805,
            1808,
            1811,
            1815,
            1818,
            1821,
            1825,
            1828,
            1831,
            1835,
            1838,
            1841,
            1845,
            1848,
            1851,
            1855,
            1858,
            1861,
            1864,
            1868,
            1871,
            1874,
            1878,
            1881,
            1884,
            1888,
            1891,
            1894,
            1898,
            1901,
            1904,
            1908,
            1911,
            1914,
            1918,
            1921,
            1924,
            1928,
            1931,
            1934,
            1938,
            1941,
            1944,
            1948,
            1951,
            1954,
            1957,
            1961,
            1964,
            1967,
            1971,
            1974,
            1977,
            1981,
            1984,
            1987,
            1991,
            1994,
            1997,
            2001,
            2004,
            2007,
            2011,
            2014,
            2017,
            2021,
            2024,
            2027,
            2031,
            2034,
            2037,
            2041,
            2044,
            2047,
            2051,
            2054,
            2057,
            2060,
            2064,
            2067,
            2070,
            2074,
            2077,
            2080,
            2084,
            2087,
            2090,
            2094,
            2097,
            2100,
            2104,
            2107,
            2110,
            2114,
    };
}
