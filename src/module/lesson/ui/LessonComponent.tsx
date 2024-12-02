import { Alert, Linking, Pressable, Text, View } from "react-native";
import CardComponent from "../../shared/ui/CardComponent";
import HoldButtonComponent from "../../shared/ui/HoldButtonComponent";
import { FONT_SIZE } from "../../../core/config/template";
import { useProgress } from "../../account/store/progress";
import { ROUTES } from "../../../core/route/routes";
import { ScrollView } from "react-native-gesture-handler";
import { CommonActions } from '@react-navigation/native';

const LessonComponent = ({ navigation, lessonIndex }: { navigation: any, lessonIndex: number }) => {
    // DEFINE
    const { progress, patchLesson } = useProgress();
    const LESSON_MATERIALS = [
        [
            {
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.INFO, {
                        title: "📄 Анықтама",
                        header: "🔭 Микроәлем және макроәлем",
                        text: "Микроәлем — атомдар мен молекулалардың, электрондардың, протондардың, нейтрондардың және басқа элементар бөлшектердің әлемі. Ол кванттық механика арқылы зерттеледі.\n\nМакроәлем — күнделікті өмірде байқалатын және сезілетін физикалық әлем. Ол ғаламшарлар, жұлдыздар, тау-кендер сияқты ірі объектілерді қамтиды."
                    })
                }
            },
            {
                label: "📹 Микро және макроәлемнің ерекшеліктері неде?",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, {
                        title: "📹 Видеожазба",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/video/lesson1.mp4",
                        header: "Микро және макроәлемнің ерекшеліктері неде?",
                        text: "Микроәлем мен макроәлем — табиғаттың екі ажырамас бөлігі. Олардың зерттелуі адамзаттың техникалық прогресі мен табиғатты терең түсінуіне жол ашады."
                    })
                }
            },
            {
                label: "📱 Макроәлем AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-1/solar.glb")
            },
            {
                label: "📱 Микроәлем AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-1/atom.glb")
            },
            {
                label: "📱 Телескоптың AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-1/telescope.glb")
            },
            {
                label: "📱 Микроскоптың AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-1/microscope.glb")
            }
        ],
        [
            {
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.INFO, {
                        title: "📄 Анықтама",
                        header: "🌍 Жер шары туралы жалпы мәліметтер",
                        text: "Жер шары — Күн жүйесіндегі Күннен санағанда үшінші ғаламшар және өмір бар жалғыз белгілі мекен. Оның диаметрі шамамен 12,742 км, ал ауданы 510 млн км² құрайды. Жердің беті 71%-ға жуық судан тұрады, ал қалғаны құрлық.\n\nЖер атмосферасы азот (78%) және оттегіден (21%) құралған, бұл тіршілік үшін қолайлы жағдай жасайды. Ғаламшардың ядросы темір мен никельден, ал сыртқы қабаттары мантия мен қыртыстан тұрады. Жер өз осінен 24 сағатта айналады және Күнді толық 365,25 күнде айналып шығады."
                    })
                }
            },
            {
                label: "📹 Жер шары ғаламшарының қандай қасиеттері бар?",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, {
                        title: "📹 Видеожазба",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/video/lesson2.mp4",
                        header: "Жер шары ғаламшарының қандай қасиеттері бар?",
                        text: "Күн жүйесіндегі Күннен санағанда үшінші ғаламшар және өмір бар жалғыз белгілі мекен. Оның диаметрі шамамен 12,742 км, ал ауданы 510 млн км² құрайды. Жердің беті 71%-ға жуық судан тұрады, ал қалғаны құрлық."
                    })
                }
            },
            {
                label: "📹 Табиғи құбылыстар",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, {
                        title: "📹 Видеожазба",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/video/lesson2-2.mp4",
                        header: "Табиғи құбылыстар",
                        text: "Жер бетінде немесе атмосферада табиғат заңдарына сәйкес орын алатын оқиғалар мен процестер. Олар адамның араласуынсыз табиғи түрде жүреді және әртүрлі масштабта көрінеді."
                    })
                }
            },
            {
                label: "📱 Жер шарының AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-2/earth.glb")
            },
            {
                label: "🗺️ Жер шарының географиялық картасы",
                onClick: () => {
                    navigation.navigate(ROUTES.MAP, {
                        title: "🗺️ Жер шарының географиялық картасы",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/html/lesson-2/world.html"
                    })
                }
            }
        ],
        [
            {
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.INFO, {
                        title: "📄 Анықтама",
                        header: "🏔️ Жер шары және оның компоненттері",
                        text: "Литосфера - Жердің қатты қабаты, оның құрамына тау жыныстары, минералдар және топырақ жатады. Литосферада таулар, жазықтар, шөлдер мен ормандар орналасқан.\n\nГидросфера - Мұхиттар, теңіздер, өзендер, көлдер, мұздықтар мен жер асты сулары кіреді. Су ресурстары жер бетіндегі тіршіліктің негізі болып табылады.\n\nАтмосфера - Жерді қоршап тұрған газдар қабаты. Ол оттегі, азот, көмірқышқыл газы және басқа газдардан тұрады. Атмосфера климат пен ауа райын қалыптастырады.\n\nБиосфера - Тірі организмдер мекендейтін аймақ. Биосфера литосфера, гидросфера және атмосфераның өзара байланысқан бөліктерін қамтиды.\n\nМагнитосфера - Жердің магнит өрісі, ол ғаламшарды күн желі мен ғарыштық радиациядан қорғайды."
                    })
                }
            },
            {
                label: "📹 Жер қабықтары өзара қалай әрекеттеседі?",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, {
                        title: "📹 Видеожазба",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/video/lesson3.mp4",
                        header: "Жер қабықтары өзара қалай әрекеттеседі?",
                        text: "Жер шарының компоненттері бір-бірімен тығыз байланысты. Бұл өзара байланыс экожүйелердің жұмыс істеуі мен тұрақтылығын қамтамасыз етеді."
                    })
                }
            },
            {
                label: "📱 Жер шары қабаттарының анимацияланған AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-3/mantle.glb")
            },
            {
                label: "📱 Жер шары қабаттарының AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-3/mantle2.glb")
            },
            {
                label: "📱 Жер шарының атмосфера қабатының AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-3/atmosphere.glb")
            }
        ],
        [
            {
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.INFO, {
                        title: "📄 Анықтама",
                        header: "🦠 Жер бетіндегі тіршілік жердің пайда болуы",
                        text: "Жердің пайда болуы Күн жүйесінің 4,5 миллиард жыл бұрын газ бен шаң бұлтынан қалыптасуынан басталды. Гравитацияның әсерімен шаң-тозаң бірігіп, протопланета Жерді құрды. Алғашқы кезеңдерде Жердің беті қызған балқыма күйде болды. Уақыт өте келе ол суып, қатты жер қыртысы пайда болды.\n\nЖердегі тіршілік шамамен 3,8 миллиард жыл бұрын басталған деп есептеледі. Алғашқы тіршілік мұхиттарда пайда болды, оларды қарапайым біржасушалы организмдер (бактериялар) құрады. Мұндай тіршіліктің пайда болуы үшін су, көміртек, азот, сутегі сияқты элементтер және энергия көздері (күн сәулесі, жанартаулық белсенділік) негізгі рөл атқарды."
                    })
                }
            },
            {
                label: "📹 Жер бетіндегі тіршілік жердің пайда болуы туралы болжамдардың ұқсастығы мен айырмашылығы неде?",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, {
                        title: "📹 Видеожазба",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/video/lesson4.mp4",
                        header: "Жер бетіндегі тіршілік жердің пайда болуы туралы болжамдардың ұқсастығы мен айырмашылығы неде?",
                        text: "Тіршіліктің эволюциясы миллиардтаған жылдар бойы жалғасып, күрделі көпжасушалы организмдер, өсімдіктер, жануарлар және адамзаттың пайда болуына алып келді. Жердегі тіршілік пен табиғи жүйелердің тұрақтылығы ғаламшардың ерекше жағдайларына (су ресурстары, атмосфералық құрам, магнит өрісі) байланысты."
                    })
                }
            },
            {
                label: "📱 Бактерия (алғашқы тірі организм) AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-4/bacteria.glb")
            },
        ],
        [
            {
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.INFO, {
                        title: "📄 Анықтама",
                        header: "🗺️ Жер бетін бейнелеу тәсілдері",
                        text: "Жер бетін бейнелеу тәсілдері — географиялық объектілер мен жер бедерін масштабта көрсетудің әртүрлі әдістері. Олар жерді зерттеу, картографиялау және бағдарлау үшін қолданылады.\n\nНегізгі тәсілдері: жоспар, карта, глобус, аэрофотосурет пен спутниктік түсірілімдер, сандық карталар (геоақпараттық жүйелер - GIS).\n\nБұл тәсілдер Жердің ерекшеліктерін зерттеу мен табиғат пен қоғам арасындағы байланысты түсінуге көмектеседі."
                    })
                }
            },
            {
                label: "📹 Жер бетін бейнелеу тәсілдері",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, {
                        title: "📹 Видеожазба",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/video/lesson5.mp4",
                        header: "Жер бетін бейнелеу тәсілдері",
                        text: "Жер бетін бейнелеу тәсілдері — географиялық объектілер мен жер бедерін масштабта көрсетудің әртүрлі әдістері."
                    })
                }
            },
            {
                label: "🗺️ Жер шарының политикалық картасы",
                onClick: () => {
                    navigation.navigate(ROUTES.MAP, {
                        title: "🗺️ Жер шарының политикалық картасы",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/html/lesson-5/countries.html"
                    })
                }
            },
            {
                label: "🗺️ Қазақстан картасы",
                onClick: () => {
                    navigation.navigate(ROUTES.MAP, {
                        title: "🗺️ Қазақстан картасы",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/html/lesson-5/kazakhstan.html"
                    })
                }
            }
        ],
        [
            {
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.INFO, {
                        title: "📄 Анықтама",
                        header: "🌊 Материктер мен мұхиттар",
                        text: "Материктер мен мұхиттар — Жер шарының негізгі географиялық бөліктері. Олар литосфера мен гидросфераның маңызды құрамдас бөлігі болып табылады және табиғаттың әртүрлілігі мен тіршіліктің таралуына ықпал етеді.\n\nЖер бетінде 6 материк бар, олардың әрқайсысы ерекше географиялық, климаттық және биологиялық сипаттарға ие: Еуразия, Африка, Солтүстік Америка, Оңтүстік Америка, Антарктида, Австралия.\n\nЖер бетінің 71%-ын мұхиттар алып жатыр. Олар 4 негізгі мұхитқа бөлінеді: Тынық мұхиты, Атлант мұхиты, Үнді мұхиты, Солтүстік мұзды мұхит."
                    })
                }
            },
            {
                label: "📹 Материктер мен мұхиттар",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, {
                        title: "📹 Видеожазба",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/video/lesson5.mp4",
                        header: "Материктер мен мұхиттар",
                        text: "Материктер мен мұхиттар өзара тығыз байланыста. Олар климатты, табиғат аймақтарын, өсімдіктер мен жануарлардың таралуын анықтайды, сондай-ақ адамзат тіршілігі үшін маңызды ресурстардың көзі болып табылады."
                    })
                }
            },
            {
                label: "🗺️ Құрлықтар картасы",
                onClick: () => {
                    navigation.navigate(ROUTES.MAP, {
                        title: "🗺️ Құрлықтар картасы",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/html/lesson-6/continents.html"
                    })
                }
            },
            {
                label: "🗺️ Мұхиттар картасы",
                onClick: () => {
                    navigation.navigate(ROUTES.MAP, {
                        title: "🗺️ Мұхиттар картасы",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/html/lesson-6/oceans.html"
                    })
                }
            }
        ],
        [
            {
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.INFO, {
                        title: "📄 Анықтама",
                        header: "🗾 Халықтар географиясы",
                        text: "Халықтар географиясы — географияның адамдардың орналасуы, саны, демографиялық ерекшеліктері және мәдениетімен айналысатын саласы. Бұл ғылым халықтың таралуын, тығыздығын, ұлттық құрамын және олардың қоршаған ортамен байланысын зерттейді.\n\nЖер бетінде халық біркелкі таралмаған. Тығыз орналасқан аймақтар: Азия (Қытай, Үндістан), Еуропа, Солтүстік Америка. Сирек қоныстанған аймақтар: шөлдер, таулар, полярлық аймақтар.\n\nХалықтың орналасуы экономикаға байланысты. Қалаларда өнеркәсіп пен қызмет көрсету салалары басым болса, ауылдық жерлерде ауыл шаруашылығы негізгі рөл атқарады.\n\nӘлемде 6,000-нан астам тіл бар. Ең кең таралған тілдер: ағылшын, қытай, испан.\n\nДіндер: әлем халқының көпшілігі негізгі діндерді (христиандық, ислам, индуизм, буддизм) ұстанады.\n\nӘлемде 7,000-нан астам этностар мен халықтар бар. Ірі халықтар: қытайлар, үнділер, арабтар, орыстар, америкалықтар."
                    })
                }
            },
            {
                label: "📹 Халықтар географиясы",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, {
                        title: "📹 Видеожазба",
                        link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/video/lesson5.mp4",
                        header: "Халықтар географиясы",
                        text: "Бұл ғылым халықтың табиғи ресурстарды пайдалануын, қоршаған ортаға әсерін, мәдениет пен экономика арасындағы байланысты түсінуге көмектеседі. Халықтар географиясы урбанизация, миграция және демографиялық өзгерістер мәселелерін зерттеп, болашақ жоспарлауға үлес қосады."
                    })
                }
            },
            {
                label: "📱 Ежелгі қаланың AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-7/ancient.glb")
            },
            {
                label: "📱 Қазіргі Шанхай қаласының AR моделі",
                onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-7/city.glb")
            },
        ],
        [
            {
                label: "✏️ Бөлім бойынша қорытынды тест",
                onClick: () => { navigation.navigate(ROUTES.TEST, { title: "Бөлім бойынша қорытынды тест" }) }
            },
        ]
    ];
    const onFinished = async () => {
        patchLesson(lessonIndex, { finished: true });
        Alert.alert('Құттықтаймыз!', 'Тақырып сәтті өтілді ✅');
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: ROUTES.HOME }],
            })
        );
    }
    const onAR = (link: string) => {
        Linking.openURL(`https://arvr.google.com/scene-viewer/1.0?file=${link}&mode=ar_preferred`).catch((err) => {
            Alert.alert('Қате', 'AR модельдің сілтемесі ашылмады.');
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'stretch'
            }}>
                {LESSON_MATERIALS[lessonIndex].map((item, index) => (
                    <Pressable key={index} onPress={item.onClick} style={{ width: '46%', marginBottom: 20 }}>
                        <CardComponent isFlex>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>{item.label}</Text>
                            </View>
                        </CardComponent>
                    </Pressable>
                ))}
            </ScrollView>
            {
                (lessonIndex !== 7 && !progress.lessons[lessonIndex].finished) && < CardComponent >
                    <View style={{ gap: 20 }}>
                        <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>Барлық материалдармен танысып болғасын төмендегі батырманы басып, ұстап тұрыңыз.</Text>
                        <HoldButtonComponent
                            placeholder="Материалдармен таныстым"
                            onLongPress={onFinished}
                        />
                    </View>
                </CardComponent>
            }
        </View >
    );
}

export default LessonComponent;