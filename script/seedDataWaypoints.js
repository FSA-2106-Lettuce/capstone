// Seed file to hold all waypoints & set up waypoints objects for model instances

const routeOnePath = [
  [40.759253, -73.774953],
  [40.76006, -73.775218],
  [40.76147, -73.769917],
  [40.76897, -73.77377],
  [40.769715, -73.770168],
  [40.769894, -73.7702],
  [40.770144, -73.7693],
  [40.77027, -73.7686],
  [40.770356, -73.768239],
  [40.770602, -73.768027],
  [40.770823, -73.767928],
  [40.770983, -73.76762],
  [40.771018, -73.766655],
  [40.771454, -73.766332],
  [40.771796, -73.766354],
  [40.772013, -73.766907],
  [40.771954, -73.767954],
  [40.77152, -73.769428],
  [40.77087, -73.770246],
  [40.770289, -73.77063],
  [40.770283, -73.770803],
  [40.769648, -73.770643],
  [40.767974, -73.77836],
  [40.760309, -73.774321],
  [40.760077, -73.775225],
  [40.759253, -73.774953],
];

const routeTwoPath = [
  [49.26086978, -123.1435138],
  [49.26105353, -123.1635865],
  [49.26149321, -123.1669933],
  [49.26232262, -123.1685656],
  [49.26248993, -123.1839006],
  [49.27221866, -123.1835082],
  [49.27254387, -123.1825783],
  [49.27201854, -123.177977],
  [49.27156186, -123.1715494],
  [49.27298432, -123.1659657],
  [49.27385386, -123.1642179],
  [49.27385386, -123.1609613],
  [49.27326085, -123.1596534],
  [49.26575179, -123.1600688],
  [49.26553691, -123.1433138],
  [49.26122888, -123.1434779],
];

const routeThreePath = [
  [49.28535653, -123.1281469],
  [49.29325728, -123.1402706],
  [49.29305788, -123.1424427],
  [49.29308353, -123.1445856],
  [49.29287232, -123.1465409],
  [49.29355503, -123.1479299],
  [49.29500412, -123.1485915],
  [49.29630657, -123.1510742],
  [49.29729015, -123.1496467],
  [49.29765534, -123.1473982],
  [49.2978745, -123.1452097],
  [49.29852666, -123.145131],
  [49.29989938, -123.1443517],
  [49.30197614, -123.1448979],
  [49.30293353, -123.14587],
  [49.30380763, -123.146145],
  [49.30357656, -123.1471938],
  [49.3030118, -123.1477377],
  [49.30167259, -123.1481007],
  [49.30061919, -123.1501032],
  [49.30007161, -123.1527255],
  [49.30058803, -123.1549097],
  [49.30064838, -123.1567775],
  [49.29952483, -123.1576054],
  [49.29816941, -123.1570298],
  [49.29801946, -123.153522],
  [49.2967165, -123.1511483],
  [49.29618451, -123.1491127],
  [49.29611891, -123.1468669],
  [49.29509087, -123.1451693],
  [49.29373555, -123.1426116],
  [49.29251086, -123.1413303],
  [49.28466671, -123.1290667],
  [49.2853623, -123.1280515],
];

const routeFourPath = [
  [49.28517411, -123.1210279],
  [49.28554709, -123.1206861],
  [49.28623348, -123.1193725],
  [49.2852179, -123.1178387],
  [49.28626877, -123.1162912],
  [49.28192758, -123.1095983],
  [49.28091279, -123.1042965],
  [49.2808242, -123.0996459],
  [49.27949231, -123.09979],
  [49.27939492, -123.1015423],
  [49.27920141, -123.1043624],
  [49.27971774, -123.1077012],
  [49.28107741, -123.1076247],
  [49.28155304, -123.110195],
  [49.28662603, -123.1178738],
  [49.28476544, -123.1205994],
  [49.28519113, -123.1209255],
];

const routeFivePath = [
  [49.27926713, -123.1230162],
  [49.27712616, -123.126299],
  [49.27528959, -123.1233816],
  [49.27296272, -123.1197626],
  [49.26921431, -123.1177067],
  [49.26853463, -123.1168481],
  [49.26756337, -123.115882],
  [49.26684047, -123.1177865],
  [49.26667412, -123.1193413],
  [49.26655274, -123.120335],
  [49.26621784, -123.1205982],
  [49.2662886, -123.127596],
  [49.26757875, -123.125109],
  [49.26796698, -123.1227137],
  [49.26844056, -123.1217238],
  [49.2679035, -123.1211286],
  [49.26766003, -123.119136],
  [49.26917583, -123.1187329],
  [49.26944056, -123.1177979],
  [49.27003436, -123.1181245],
  [49.2731507, -123.1199989],
  [49.27500063, -123.1229541],
  [49.27644804, -123.1251016],
  [49.27862528, -123.1220025],
  [49.27925728, -123.123033],
];

const routeSixPath = [
  [49.27899545, -123.1332087],
  [49.27769949, -123.1312699],
  [49.27687075, -123.1327473],
  [49.27260784, -123.1451923],
  [49.27250219, -123.1503313],
  [49.27759868, -123.1500106],
  [49.27758899, -123.1515711],
  [49.27665519, -123.1520656],
  [49.27324513, -123.1551996],
  [49.26730945, -123.1551872],
  [49.26716797, -123.1455727],
  [49.27178137, -123.1455341],
  [49.27301074, -123.1445816],
  [49.27720716, -123.1325947],
  [49.27826737, -123.1344236],
  [49.27901129, -123.1333431],
];

const routeSevenPath = [
  [51.50205916, -0.140057453],
  [51.50157655, -0.141236514],
  [51.50064111, -0.143556898],
  [51.50116873, -0.144106708],
  [51.50114188, -0.144276358],
  [51.50116393, -0.144491983],
  [51.50122123, -0.144709179],
  [51.5013138, -0.14491332],
  [51.50157476, -0.145343165],
  [51.50169648, -0.145439242],
  [51.50177664, -0.145572473],
  [51.50184236, -0.145784304],
  [51.50187743, -0.14598019],
  [51.50188252, -0.146149714],
  [51.50184153, -0.146355301],
  [51.50188665, -0.14645207],
  [51.50207343, -0.146597098],
  [51.50207929, -0.146921268],
  [51.50191221, -0.147512653],
  [51.50182441, -0.147555463],
  [51.50170397, -0.147687353],
  [51.50159278, -0.147881436],
  [51.501515, -0.14806414],
  [51.50150007, -0.148246258],
  [51.50152546, -0.148441955],
  [51.50160965, -0.148604249],
  [51.50173294, -0.148762143],
  [51.5018591, -0.148850321],
  [51.50197398, -0.14891943],
  [51.50205478, -0.148947362],
  [51.50212831, -0.149321447],
  [51.50216532, -0.149594047],
  [51.50217757, -0.149684697],
  [51.50207628, -0.14972734],
  [51.50199051, -0.149857993],
  [51.50191465, -0.150064251],
  [51.50187701, -0.150263426],
  [51.50183656, -0.150446654],
  [51.50179868, -0.150531312],
  [51.5016837, -0.150545645],
  [51.50162077, -0.150492315],
  [51.50113411, -0.149575649],
  [51.50056901, -0.14883515],
  [51.50044094, -0.14865079],
  [51.50032947, -0.148442017],
  [51.50022868, -0.148319285],
  [51.49990903, -0.148018626],
  [51.49980258, -0.147837871],
  [51.49970289, -0.147511354],
  [51.49952021, -0.147586854],
  [51.49941678, -0.147556176],
  [51.49929213, -0.147456976],
  [51.4990737, -0.147222555],
  [51.49886256, -0.146920953],
  [51.4987676, -0.146654849],
  [51.49873664, -0.146439204],
  [51.4987778, -0.145847881],
  [51.49889183, -0.145582301],
  [51.49907314, -0.145196398],
  [51.49924647, -0.144854521],
  [51.49932951, -0.144708382],
  [51.49928043, -0.144406068],
  [51.49921754, -0.14403234],
  [51.49922315, -0.143879706],
  [51.49930785, -0.143737213],
  [51.49944627, -0.143644803],
  [51.49953766, -0.143552707],
  [51.49956126, -0.143423856],
  [51.49961901, -0.143237107],
  [51.49976155, -0.143076761],
  [51.49998544, -0.142919496],
  [51.50039054, -0.143310658],
  [51.50063633, -0.143549962],
  [51.5020533, -0.140045111],
];

const routeEightPath = [
  [51.51327638, -0.099095847],
  [51.51328299, -0.098420286],
  [51.51089315, -0.086649433],
  [51.51074021, -0.085277106],
  [51.51062987, -0.083196424],
  [51.50967703, -0.080644889],
  [51.5103225, -0.080329855],
  [51.51080933, -0.080219717],
  [51.5114993, -0.080016833],
  [51.51204124, -0.080389974],
  [51.51174514, -0.081507554],
  [51.51156912, -0.082929293],
  [51.51191625, -0.085123423],
  [51.51212837, -0.085949209],
  [51.51288927, -0.087921303],
  [51.51286188, -0.088512981],
  [51.51459802, -0.089749312],
  [51.51485669, -0.089741936],
  [51.51513124, -0.092201103],
  [51.51525439, -0.092994953],
  [51.51562374, -0.093942694],
  [51.5160066, -0.095850583],
  [51.51631498, -0.096602943],
  [51.51635023, -0.096952468],
  [51.51533424, -0.097231166],
  [51.51514414, -0.097735673],
  [51.51584755, -0.100553585],
  [51.51533914, -0.10079666],
  [51.51451177, -0.100663137],
  [51.51381843, -0.100763468],
  [51.51344987, -0.099919913],
  [51.51328412, -0.099023972],
];

const routeNinePath = [
  [51.52503751, -0.14711139],
  [51.5366257, -0.152302408],
  [51.53651846, -0.152812949],
  [51.53507801, -0.158869461],
  [51.53502726, -0.158799598],
  [51.53195659, -0.159973484],
  [51.53237273, -0.163658755],
  [51.5323517, -0.163756236],
  [51.53229963, -0.163686834],
  [51.53191005, -0.162390741],
  [51.52979608, -0.157517963],
  [51.52955924, -0.15715729],
  [51.52856724, -0.155386173],
  [51.52813694, -0.155824944],
  [51.52770465, -0.155941285],
  [51.52742966, -0.155905159],
  [51.52693731, -0.15566464],
  [51.52668645, -0.155330873],
  [51.5263617, -0.154738566],
  [51.52623924, -0.154313205],
  [51.5261967, -0.15406355],
  [51.52764574, -0.153679303],
  [51.52830048, -0.149865914],
  [51.52480964, -0.148436464],
  [51.52503711, -0.147118242],
];

const routeTenPath = [
  [51.51124471, -0.098407399],
  [51.51119831, -0.095672049],
  [51.5108211, -0.09302102],
  [51.51033001, -0.090106633],
  [51.50969657, -0.087177576],
  [51.50903188, -0.082001332],
  [51.50924818, -0.080708759],
  [51.50956287, -0.079955813],
  [51.50959335, -0.079064732],
  [51.50946056, -0.077719353],
  [51.50955895, -0.076113192],
  [51.50937334, -0.076053282],
  [51.50942214, -0.075543097],
  [51.50904607, -0.07406258],
  [51.50707153, -0.074433563],
  [51.50299472, -0.077175996],
  [51.50292862, -0.07723182],
  [51.50288827, -0.077350591],
  [51.50290609, -0.077483088],
  [51.50328715, -0.079015049],
  [51.50321895, -0.07907301],
  [51.50349097, -0.079917382],
  [51.50368337, -0.080757332],
  [51.50528, -0.084764007],
  [51.50569716, -0.08576158],
  [51.50619525, -0.088380463],
  [51.50482417, -0.090128258],
  [51.50470583, -0.092277881],
  [51.5049269, -0.095652519],
  [51.50514903, -0.097191604],
  [51.50663437, -0.097912406],
  [51.50673714, -0.098080421],
  [51.50696243, -0.097906371],
  [51.50713431, -0.097599928],
  [51.50736151, -0.097868401],
  [51.50777371, -0.097812451],
  [51.50785845, -0.097918462],
  [51.50798379, -0.097923281],
  [51.50808491, -0.098070363],
  [51.50814191, -0.098178887],
  [51.50820088, -0.098271822],
  [51.50843971, -0.098273791],
  [51.50846303, -0.098567619],
  [51.5086063, -0.098587966],
  [51.51123742, -0.098406435],
];

const routeElevenPath = [
  [51.51526607, -0.07175169],
  [51.51620642, -0.069432626],
  [51.51744034, -0.066640824],
  [51.51854321, -0.062630251],
  [51.51995699, -0.05628163],
  [51.52106719, -0.049984641],
  [51.5206573, -0.049670152],
  [51.5184943, -0.045617502],
  [51.51829725, -0.044654254],
  [51.51781803, -0.043318933],
  [51.51771276, -0.042668665],
  [51.51676168, -0.042586606],
  [51.51602451, -0.041635092],
  [51.51569641, -0.041434681],
  [51.51476222, -0.041376804],
  [51.51296858, -0.041762833],
  [51.5132358, -0.043631494],
  [51.5131692, -0.045740465],
  [51.51342802, -0.048127966],
  [51.51417512, -0.052749161],
  [51.51465024, -0.058773905],
  [51.51508268, -0.070107495],
  [51.51555896, -0.070635094],
  [51.51526305, -0.071746996],
];

const routeTwelvePath = [
  [40.70509113, -74.00898009],
  [40.70485176, -74.0088891],
  [40.70454604, -74.00945503],
  [40.70372651, -74.01065404],
  [40.70353202, -74.01160224],
  [40.7034077, -74.01174214],
  [40.70312451, -74.01302306],
  [40.70316947, -74.01461633],
  [40.70398581, -74.01446221],
  [40.70401625, -74.01472945],
  [40.70364958, -74.01529665],
  [40.70355655, -74.01581044],
  [40.70357795, -74.01596043],
  [40.70317501, -74.01637454],
  [40.70304274, -74.01669783],
  [40.70310098, -74.01704995],
  [40.70330933, -74.01724934],
  [40.70349271, -74.01728526],
  [40.70353096, -74.0175633],
  [40.70373662, -74.01762399],
  [40.70427388, -74.01747138],
  [40.70444747, -74.01716583],
  [40.70478509, -74.01722725],
  [40.70512634, -74.01781384],
  [40.70528984, -74.01795124],
  [40.70531892, -74.01823132],
  [40.70549976, -74.01853177],
  [40.70561883, -74.01867407],
  [40.70571424, -74.01904045],
  [40.70579227, -74.01921016],
  [40.70607731, -74.01930226],
  [40.70660397, -74.01915063],
  [40.70668869, -74.01883851],
  [40.70668449, -74.01862194],
  [40.70679593, -74.01845359],
  [40.70778262, -74.01778515],
  [40.70816559, -74.01872671],
  [40.70887612, -74.01853139],
  [40.70773236, -74.01610919],
  [40.70744307, -74.01547426],
  [40.70845493, -74.01509718],
  [40.70745563, -74.01202176],
  [40.70684102, -74.01257333],
  [40.7055358, -74.00909427],
  [40.70508993, -74.00897152],
];

const routeThirteenPath = [
  [40.71252591, -74.00491803],
  [40.70035134, -73.98956492],
  [40.70000991, -73.98901046],
  [40.69963643, -73.98868086],
  [40.69934107, -73.9885883],
  [40.69808087, -73.98864314],
  [40.6963403, -73.98874094],
  [40.69626842, -73.98700898],
  [40.69867142, -73.98686349],
  [40.69872326, -73.98673244],
  [40.69949786, -73.98674395],
  [40.69967417, -73.98660047],
  [40.71477164, -73.99502554],
  [40.71563054, -73.99595335],
  [40.71567138, -73.9960765],
  [40.71564598, -73.99619802],
  [40.71542083, -73.99639487],
  [40.71388371, -73.99746719],
  [40.71341257, -73.99837342],
  [40.71332004, -73.99855583],
  [40.71300135, -74.00048924],
  [40.71289528, -74.00076184],
  [40.71319881, -74.0007619],
  [40.71432624, -74.00246892],
  [40.71417669, -74.00259869],
  [40.71386824, -74.00306263],
  [40.71365547, -74.00339632],
  [40.71310339, -74.00397243],
  [40.7132078, -74.0041602],
  [40.71312223, -74.00428895],
  [40.71254679, -74.00490642],
];

const routeFourteenPath = [
  [40.7049851, -74.01699359],
  [40.71826624, -74.01287415],
  [40.72916458, -74.01089299],
  [40.72840272, -74.00280789],
  [40.72217504, -74.00553816],
  [40.72062364, -74.00538318],
  [40.72027974, -74.00562915],
  [40.72073, -74.00994399],
  [40.7129614, -74.0118481],
  [40.71275328, -74.01154891],
  [40.7120443, -74.01200778],
  [40.70487737, -74.01486659],
  [40.70506056, -74.0156915],
  [40.70502892, -74.01630799],
  [40.70490333, -74.01672155],
  [40.70499484, -74.0169817],
];

const routeFifteenPath = [
  [40.72910415, -74.01045734],
  [40.72838853, -74.00282121],
  [40.72545721, -73.99683117],
  [40.71990265, -73.97863372],
  [40.71634974, -73.98054291],
  [40.72046802, -73.9938097],
  [40.72092629, -73.99365602],
  [40.72230837, -73.99712049],
  [40.72299942, -73.99881911],
  [40.72552662, -74.00402041],
  [40.72619005, -74.0107419],
  [40.72911073, -74.0104951],
];

const routeSixteenPath = [
  [40.72869889, -74.0397813],
  [40.72224932, -74.04088964],
  [40.72237654, -74.04253685],
  [40.72885323, -74.04151069],
  [40.72870565, -74.03979668],
];

const routeSeventeenPath = [
  [40.71263283, -74.0337097],
  [40.7135098, -74.04149079],
  [40.71644232, -74.04087958],
  [40.71624586, -74.03922109],
  [40.71406781, -74.03966026],
  [40.71385815, -74.03798103],
  [40.71606803, -74.03754605],
  [40.71567406, -74.03418198],
  [40.71282095, -74.034692],
  [40.71265536, -74.03372699],
];

const routeEighteenPath = [
  [40.73222846, -73.99857641],
  [40.73105696, -73.99960772],
  [40.72956701, -73.99656923],
  [40.73074663, -73.99557807],
  [40.73224798, -73.99857448],
];

const routeNineteenPath = [
  [40.70685531, -73.96832189],
  [40.71078565, -73.96856228],
  [40.71622212, -73.9660897],
  [40.72410652, -73.95775591],
  [40.72728459, -73.95729532],
  [40.72997315, -73.95765709],
  [40.73623541, -73.95862872],
  [40.73799251, -73.95549892],
  [40.73018197, -73.95427004],
  [40.72217409, -73.94987667],
  [40.71954975, -73.94693018],
  [40.7020287, -73.94403698],
  [40.70065391, -73.94178579],
  [40.69942858, -73.95337871],
  [40.69901379, -73.9570499],
  [40.6945837, -73.95614533],
  [40.69314516, -73.96878256],
  [40.69385556, -73.98720866],
  [40.69621368, -73.98709442],
  [40.6959886, -73.98318635],
  [40.69842894, -73.98305065],
  [40.69761031, -73.96585601],
  [40.69803546, -73.96282562],
  [40.70050789, -73.96229697],
  [40.70428255, -73.96724506],
  [40.7068491, -73.9683151],
];

const routeTwentyPath = [
  [40.72492385, -73.97501616],
  [40.72001091, -73.97871595],
  [40.72082791, -73.98128316],
  [40.72846235, -73.97567315],
  [40.72945142, -73.97801028],
  [40.72160192, -73.98379044],
  [40.72225644, -73.98628271],
  [40.73045983, -73.9803847],
  [40.7313815, -73.98259107],
  [40.72297036, -73.98865144],
  [40.71936778, -73.99028603],
  [40.71532347, -73.97654172],
  [40.71758116, -73.97551234],
  [40.71876538, -73.97522396],
  [40.72206992, -73.97478132],
  [40.72426925, -73.97345107],
  [40.72446492, -73.97398638],
  [40.72463468, -73.97396735],
  [40.72476762, -73.97416504],
  [40.72479885, -73.97439648],
  [40.72471994, -73.97459214],
  [40.72491585, -73.97500823],
];

const routeTwentyOnePath = [
  [40.70421661, -73.98104],
  [40.70451432, -73.98851787],
  [40.70390204, -73.98858313],
  [40.70393662, -73.99069302],
  [40.70394902, -73.99152063],
  [40.70394724, -73.99253033],
  [40.70330426, -73.99257997],
  [40.70342672, -73.99402388],
  [40.7030662, -73.99444011],
  [40.70288917, -73.9941925],
  [40.70248936, -73.99324973],
  [40.70266497, -73.9922975],
  [40.70229263, -73.98115961],
  [40.70419519, -73.98105077],
];

const allRoutesPaths = [
  routeOnePath,
  routeTwoPath,
  routeThreePath,
  routeFourPath,
  routeFivePath,
  routeSixPath,
  routeSevenPath,
  routeEightPath,
  routeNinePath,
  routeTenPath,
  routeElevenPath,
  routeTwelvePath,
  routeThirteenPath,
  routeFourteenPath,
  routeFifteenPath,
  routeSixteenPath,
  routeSeventeenPath,
  routeEighteenPath,
  routeNineteenPath,
  routeTwentyPath,
  routeTwentyOnePath,
];

const allRoutesWaypoints = allRoutesPaths.map((path, idx) =>
  path.map((coord, coordIdx) => ({
    pathIndex: coordIdx + 1,
    latitude: coord[0],
    longitude: coord[1],
    routeId: idx + 1,
  }))
);

module.exports = allRoutesWaypoints;
