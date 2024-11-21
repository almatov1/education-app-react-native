import { Alert, Modal, Pressable, Text, View } from "react-native";
import CardComponent from "../../shared/ui/CardComponent";
import HoldButtonComponent from "../../shared/ui/HoldButtonComponent";
import { FONT_SIZE } from "../../../core/config/template";
import { useProgress } from "../../account/store/progress";
import { ROUTES } from "../../../core/route/routes";
import { useState } from "react";
import ARScreen from "../screen/ARScreen";

const LessonComponent = ({ navigation, lessonIndex }: { navigation: any, lessonIndex: number }) => {
    // AR
    const [ARShow, setARShow] = useState(false);
    const [ARUri, setARUri] = useState<string | undefined>(undefined);
    const [ARAnimation, setARAnimation] = useState<string | undefined>(undefined);


    // DEFINE
    const { progress, patchLesson } = useProgress();
    const LESSON_MATERIALS = [
        [
            {
                label: "🗺️ Map",
                onClick: () => { navigation.navigate(ROUTES.MAP, { title: "Карта", uri: "file:///android_asset/html/lesson-0/index.html" }) }
            },
            {
                label: "📱 AR",
                onClick: () => {
                    setARUri("file:///android_asset/model/lesson-0/solar.glb");
                    setARAnimation("Default Take");
                    setARShow(true);
                }
            },
            {
                label: "📱 AR",
                onClick: () => {
                    setARUri("file:///android_asset/model/lesson-0/Microscope.glb");
                    setARAnimation(undefined);
                    setARShow(true);
                }
            },
            {
                label: "📄 PDF",
                onClick: () => {
                    navigation.navigate(ROUTES.IMAGE, {
                        title: "Картинка", images: [
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1.jpg')
                        ]
                    })
                }
            },
            {
                label: "🎧 Audio",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, { title: "Аудио", background: require('../../../core/assets/audio/sample.mp3') })
                }
            },
            {
                label: "📹 Video",
                onClick: () => { navigation.navigate(ROUTES.VIDEO, { title: "Видео", background: require('../../../core/assets/video/sample.mp4') }) }
            }
        ],
        [
            {
                label: "📹 Video",
                onClick: () => { }
            }
        ],
        [
            {
                label: "📄 PDF",
                onClick: () => { }
            }
        ],
        [
            {
                label: "🎧 Audio",
                onClick: () => { }
            }
        ],
        [
            {
                label: "🗺️ Map",
                onClick: () => { }
            }
        ],
        [
            {
                label: "📱 AR",
                onClick: () => { }
            }
        ],
        [
            {
                label: "📱 AR",
                onClick: () => { }
            }
        ],
        [
            {
                label: "✏️ Test",
                onClick: () => { navigation.navigate(ROUTES.TEST, { title: "Тест" }) }
            },
        ]
    ];
    const onFinished = async () => {
        patchLesson(lessonIndex, { finished: true });
        Alert.alert('Құттықтаймыз!', 'Тақырып сәтті өтілді ✅');
        navigation(navigation.navigate(ROUTES.HOME));
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: 20
            }}>
                {LESSON_MATERIALS[lessonIndex].map((item, index) => (
                    <Pressable key={index} onPress={item.onClick} style={{ width: '45%' }}>
                        <CardComponent>
                            <View>
                                <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>{item.label}</Text>
                            </View>
                        </CardComponent>
                    </Pressable>
                ))}
            </View>
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
            <Modal
                visible={ARShow}
                animationType="slide"
                onRequestClose={() => setARShow(false)}
            >
                <ARScreen uri={ARUri} animation={ARAnimation} onBack={() => setARShow(false)} />
            </Modal>
        </View >
    );
}

export default LessonComponent;